"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  hue: number;
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const particles: Particle[] = [];
    const maxParticles = 120;

    const spawn = (x?: number, y?: number): Particle => {
      const maxLife = 220 + Math.random() * 360;
      return {
        x: x ?? Math.random() * width,
        y: y ?? height + Math.random() * 60,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.25 - Math.random() * 0.6,
        size: 0.6 + Math.random() * 2.2,
        opacity: 0,
        life: 0,
        maxLife,
        hue: Math.random() < 0.5 ? 42 : 38,
      };
    };

    for (let i = 0; i < maxParticles; i++) particles.push(spawn());

    const onMove = (e: MouseEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onLeave = () => {
      pointerRef.current.active = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const pointer = pointerRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += 1;
        if (p.life < 60) p.opacity = p.life / 60;
        else if (p.life > p.maxLife - 60) p.opacity = Math.max(0, (p.maxLife - p.life) / 60);
        else p.opacity = 1;

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < 18000) {
            const dist = Math.sqrt(dist2) || 1;
            const force = (1 - dist / 135) * 0.6;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= 0.98;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;

        if (p.life >= p.maxLife || p.y < -30 || p.x < -30 || p.x > width + 30) {
          particles[i] = spawn();
          continue;
        }

        ctx.save();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grad.addColorStop(0, `hsla(${p.hue}, 85%, 78%, ${0.9 * p.opacity})`);
        grad.addColorStop(0.4, `hsla(${p.hue}, 75%, 55%, ${0.4 * p.opacity})`);
        grad.addColorStop(1, `hsla(${p.hue}, 60%, 45%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 95%, 90%, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

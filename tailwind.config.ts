import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: "#FBF6EC",
          100: "#F5EAD1",
          200: "#EAD4A3",
          300: "#DFBE74",
          400: "#D4A84A",
          500: "#C99B3B",
          600: "#A77E2E",
          700: "#856324",
          800: "#63491A",
          900: "#423010",
        },
        ivory: {
          DEFAULT: "#FBF7F0",
          soft: "#F5EFE3",
          warm: "#F0E6D2",
        },
        burgundy: {
          DEFAULT: "#5C0A1C",
          deep: "#3F0712",
          wine: "#7A1730",
          light: "#8B1E3F",
        },
        emerald: {
          royal: "#0D5B3A",
          deep: "#08432B",
          glow: "#1A8859",
        },
        rose: {
          gold: "#C89B7B",
          light: "#E8C4A8",
          blush: "#F4D8C3",
        },
        matte: {
          DEFAULT: "#0A0807",
          soft: "#141110",
          warm: "#1C1916",
        },
        gold: {
          foil: "#D4AF37",
          antique: "#C5A028",
          shimmer: "#E8C872",
          dark: "#8B6F1B",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        script: ["var(--font-greatvibes)", "Great Vibes", "cursive"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        devanagari: ["var(--font-tiro)", "serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E8C872 0%, #D4AF37 30%, #F5E7B3 50%, #D4AF37 70%, #8B6F1B 100%)",
        "silk-burgundy":
          "radial-gradient(ellipse at top, #7A1730 0%, #5C0A1C 35%, #3F0712 70%, #1A0409 100%)",
        "ivory-silk":
          "radial-gradient(ellipse at top left, #FBF7F0 0%, #F5EFE3 40%, #F0E6D2 100%)",
        "royal-dusk":
          "linear-gradient(180deg, #1A0409 0%, #3F0712 25%, #5C0A1C 50%, #8B6F1B 80%, #D4AF37 100%)",
        "marble-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(212,175,55,0.06) 50%, rgba(255,255,255,0.04) 100%)",
        "mandala-pattern":
          "radial-gradient(circle at center, transparent 30%, rgba(212,175,55,0.08) 31%, transparent 32%)",
      },
      boxShadow: {
        "gold-glow": "0 0 40px rgba(212,175,55,0.35), 0 0 80px rgba(212,175,55,0.15)",
        "gold-inner": "inset 0 0 30px rgba(212,175,55,0.25)",
        "burgundy-deep": "0 30px 60px -20px rgba(92,10,28,0.6)",
        "luxury": "0 10px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.2)",
        "marble": "0 20px 60px -10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      animation: {
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delay": "float 8s ease-in-out 2s infinite",
        "rotate-slow": "rotate 30s linear infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "text-shimmer": "textShimmer 4s linear infinite",
        "petal-fall": "petalFall 12s linear infinite",
        "glow-ring": "glowRing 4s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.6", transform: "translateX(-20%)" },
          "50%": { opacity: "1", transform: "translateX(20%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(212,175,55,0.7)" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.8" },
          "100%": { transform: "translateY(110vh) translateX(100px) rotate(720deg)", opacity: "0" },
        },
        glowRing: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(212,175,55,0.4), inset 0 0 30px rgba(212,175,55,0.2)" },
          "50%": { boxShadow: "0 0 60px rgba(212,175,55,0.7), inset 0 0 50px rgba(212,175,55,0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

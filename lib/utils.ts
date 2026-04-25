import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WEDDING_DATE = new Date("2026-05-05T20:00:00+05:30");

export const EVENTS = [
  {
    id: "sangeet",
    name: "Sangeet Night",
    tagline: "Night of Music, Lights & Love",
    date: "Monday · 4 May 2026",
    time: "6:00 PM onwards",
    location: "Purvi Khera, Bypass Road, Gaulapar, Uttarakhand – 263139",
    venue: "R.K. Banquet & Guest House",
    dressCode: "Indo-Western Glam · Jewel Tones",
    accent: "emerald",
    highlights: [
      "Live Dhol Welcome",
      "Family Performances",
      "DJ Night",
      "LED Dance Floor",
      "Premium Selfie Booth",
    ],
  },
  {
    id: "GadarPur",
    name: "Haldi & Chooda Ceremony",
    tagline: "Day of Yellow, Blessings & Joy",
    date: "Tuesday · 5 May 2026",
    time: "11:00 AM onwards",
    location: "Gadarpur-Gularbhoj Road, Awas Vikas Colony, Gadarpur, Uttarakhand – 263152",
    venue: "Shehnai Vatika",
    dressCode: "Festive Ethnic · Bright & Vibrant",
    accent: "haldi",
    highlights: [
      "Haldi Rituals",
      "Chooda Ceremony",
      "Family Blessings",
      "Floral Décor",
      "Festive Feast",
      "Fun & Laughter",
    ],
  },
  {
    id: "barat",
    name: "Welcome of Barat",
    tagline: "The Royal Procession",
    date: "Tuesday · 5 May 2026",
    time: "8:00 PM onwards",
    location: "Gadarpur-Gularbhoj Road, Awas Vikas Colony, Gadarpur, Uttarakhand – 263152",
    venue: "Shehnai Vatika",
    dressCode: "Regal Ethnic · Sherwani · Lehenga · Saree",
    accent: "burgundy",
    highlights: [
      "Grand Entry",
      "Traditional Music",
      "Joyful Procession",
      "Family Celebration",
      "Welcome Gate",
      "Festive Feast",
    ],
  },
] as const;

import { TravelPackage } from "@/types/travel";
import { somaliaPackages } from "./somaliaPackages";
import tropicalImg from "@/assets/tropical-paradise.jpg";
import mountainImg from "@/assets/mountain-adventure.jpg";
import cityImg from "@/assets/european-city.jpg";
import maldivesImg from "@/assets/maldives.jpg";
import safariImg from "@/assets/safari.jpg";
import japanImg from "@/assets/japan.jpg";
import brazilImg from "@/assets/brazil.jpg";
import icelandImg from "@/assets/iceland.jpg";
import egyptImg from "@/assets/egypt.jpg";

export const travelPackages: TravelPackage[] = [
  ...somaliaPackages,

  {
    id: "1",
    title: "Tropical Paradise Escape",
    description:
      "Experience the ultimate tropical getaway with pristine beaches, crystal clear waters, and luxurious accommodations. This package includes snorkeling, sunset cruises, and authentic island cuisine that will make your vacation unforgettable.",
    shortDescription: "Ultimate tropical getaway with pristine beaches and luxury",
    destination: "Maldives",
    location: "Indian Ocean",
    duration: "7 days, 6 nights",
    price: 2499,
    originalPrice: 3299,
    rating: 4.8,
    reviewCount: 324,
    image: tropicalImg,
    category: "beach",
    features: ["Private beach access", "All-inclusive meals", "Water sports", "Spa services"],
    itinerary: [
      { day: 1, title: "Arrival & Welcome", description: "Arrive at your tropical paradise and settle in", activities: ["Airport transfer", "Check-in", "Welcome cocktail", "Beach orientation"] },
      { day: 2, title: "Island Exploration", description: "Discover the beauty of your island home", activities: ["Island tour", "Snorkeling trip", "Local village visit", "Sunset dinner"] },
      { day: 3, title: "Water Adventures", description: "Full day of exciting water activities", activities: ["Scuba diving", "Jet skiing", "Fishing expedition", "Beach BBQ"] },
      { day: 4, title: "Relaxation Day", description: "Unwind and rejuvenate at the spa", activities: ["Spa treatments", "Yoga session", "Beach relaxation", "Cultural show"] },
      { day: 5, title: "Adventure Day", description: "Explore nearby islands and coral reefs", activities: ["Island hopping", "Dolphin watching", "Coral garden visit", "Romantic dinner"] },
      { day: 6, title: "Leisure & Shopping", description: "Final day of relaxation and shopping", activities: ["Free time", "Souvenir shopping", "Final spa session", "Farewell party"] },
      { day: 7, title: "Departure", description: "Check out and departure", activities: ["Breakfast", "Check out", "Airport transfer"] },
    ],
    included: ["Accommodation", "All meals", "Water activities", "Transfers", "Spa access"],
    excluded: ["International flights", "Alcoholic beverages", "Personal expenses", "Travel insurance"],
    availability: "available",
    maxCapacity: 50,
    currentBookings: 32,
    featured: true,
    highlights: ["Private Beaches", "Coral Reef Diving", "5-Star Luxury"],
  },

  {
    id: "2",
    title: "Mountain Adventure Trek",
    description: "Embark on an exhilarating journey through the Swiss Alps with guided hiking, mountain climbing, and breathtaking alpine scenery.",
    shortDescription: "Adventure trekking in the Swiss Alps",
    destination: "Swiss Alps",
    location: "Switzerland",
    duration: "5 days, 4 nights",
    price: 1899,
    originalPrice: 2399,
    rating: 4.7,
    reviewCount: 198,
    image: mountainImg,
    category: "mountain",
    features: ["Expert guides", "Mountain equipment", "Alpine huts", "Scenic routes"],
    itinerary: [
      { day: 1, title: "Arrival & Briefing", description: "Meet your guide and equipment check", activities: ["Airport pickup", "Equipment briefing", "Local orientation", "Welcome dinner"] },
      { day: 2, title: "First Trek", description: "Begin your alpine adventure", activities: ["Mountain hike", "Photography", "Alpine lunch", "Hut accommodation"] },
      { day: 3, title: "Peak Challenge", description: "Summit a beautiful Alpine peak", activities: ["Early morning start", "Summit climb", "Panoramic views", "Descent"] },
      { day: 4, title: "Glacier Walk", description: "Explore ancient glaciers", activities: ["Glacier hiking", "Ice formations", "Mountain lunch", "Cable car"] },
      { day: 5, title: "Departure", description: "Final breakfast and departure", activities: ["Equipment return", "Souvenir shopping", "Airport transfer"] },
    ],
    included: ["Accommodation", "All meals", "Equipment", "Guide services", "Transfers"],
    excluded: ["International flights", "Travel insurance", "Personal gear", "Tips"],
    availability: "limited",
    maxCapacity: 12,
    currentBookings: 9,
    featured: true,
    highlights: ["Alpine Summits", "Glacier Hiking", "Expert Guides"],
  },

  {
    id: "3",
    title: "European Cultural Journey",
    description: "Discover the rich history and culture of Central Europe with guided tours of magnificent castles, museums, and historic city centers.",
    shortDescription: "Cultural tour through Central Europe",
    destination: "Prague, Vienna, Budapest",
    location: "Central Europe",
    duration: "8 days, 7 nights",
    price: 2299,
    originalPrice: 2799,
    rating: 4.6,
    reviewCount: 267,
    image: cityImg,
    category: "cultural",
    features: ["Historic sites", "Museum tours", "Local cuisine", "Expert guides"],
    itinerary: [
      { day: 1, title: "Prague Arrival", description: "Discover the Golden City", activities: ["Hotel check-in", "Prague Castle tour", "Old Town walk", "Czech dinner"] },
      { day: 2, title: "Prague Exploration", description: "Charles Bridge and Old Town Square", activities: ["Charles Bridge", "Astronomical Clock", "Local lunch", "River cruise"] },
      { day: 3, title: "Travel to Vienna", description: "Imperial city arrival", activities: ["Train journey", "Schönbrunn Palace", "Palace gardens", "Austrian dinner"] },
      { day: 4, title: "Vienna Culture", description: "Art and music of Vienna", activities: ["Art museums", "St. Stephen's Cathedral", "Coffee culture", "Concert"] },
      { day: 5, title: "Travel to Budapest", description: "Pearl of the Danube", activities: ["Morning train", "Parliament tour", "Danube cruise", "Hungarian dinner"] },
      { day: 6, title: "Budapest Baths", description: "Thermal bath experience", activities: ["Széchenyi Baths", "Fisherman's Bastion", "Central Market", "Ruin bars"] },
      { day: 7, title: "Final Exploration", description: "Free time and shopping", activities: ["Free exploration", "Shopping", "Final lunch", "Farewell dinner"] },
      { day: 8, title: "Departure", description: "Journey home", activities: ["Final breakfast", "Check-out", "Airport transfer"] },
    ],
    included: ["Hotels", "All breakfasts", "City tours", "Train tickets", "Museum entries"],
    excluded: ["International flights", "Most meals", "Travel insurance", "Personal expenses"],
    availability: "available",
    maxCapacity: 25,
    currentBookings: 18,
    featured: false,
    highlights: ["UNESCO Sites", "Imperial Palaces", "Cultural Heritage"],
  },
];

// Helper functions
export const getFeaturedPackages = () => {
  return travelPackages.filter((pkg) => pkg.featured);
};

export const getPackagesByCategory = (category: string) => {
  return travelPackages.filter((pkg) => pkg.category === category);
};

export const getPackageById = (id: string) => {
  return travelPackages.find((pkg) => pkg.id === id);
};

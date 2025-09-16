import { TravelPackage } from '@/types/travel';
import mogadishuCoastImg from '@/assets/mogadishu-coast.jpg';
import berberaBeachesImg from '@/assets/berbera-beaches.jpg';
import kismayoParkImg from '@/assets/kismayo-park.jpg';
import hamarWeyne from '@/assets/hamar-weyne.jpg';

export const somaliaPackages: TravelPackage[] = [
  {
    id: "somalia-1",
    title: "Mogadishu Coastal Paradise",
    description: "Experience the stunning coastline of Somalia's capital city. This comprehensive tour takes you through pristine beaches, historical landmarks, and vibrant local markets. Discover the rich Somali culture while enjoying luxury accommodations and world-class hospitality.",
    shortDescription: "Explore Mogadishu's beautiful coastline and rich cultural heritage",
    destination: "Mogadishu",
    location: "Banaadir, Somalia",
    duration: "5 days, 4 nights",
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviewCount: 127,
    image: mogadishuCoastImg,
    category: "beach",
    features: ["Luxury beachfront resort", "Cultural city tours", "Traditional cuisine", "Professional guide"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Beach Welcome",
        description: "Arrive in Mogadishu and settle into your beachfront accommodation",
        activities: ["Airport pickup", "Hotel check-in", "Welcome dinner", "Beach sunset walk"]
      },
      {
        day: 2,
        title: "Historical Mogadishu",
        description: "Explore the rich history and architecture of Somalia's capital",
        activities: ["Hamar Weyne old town", "National Museum", "Traditional lunch", "Local markets"]
      },
      {
        day: 3,
        title: "Coastal Adventure",
        description: "Full day of beach activities and water sports",
        activities: ["Snorkeling", "Dhow boat ride", "Beach volleyball", "Seafood barbecue"]
      },
      {
        day: 4,
        title: "Cultural Immersion",
        description: "Deep dive into Somali culture and traditions",
        activities: ["Traditional dance show", "Henna painting", "Cooking class", "Poetry evening"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Final morning at leisure before departure",
        activities: ["Beach walk", "Souvenir shopping", "Airport transfer"]
      }
    ],
    included: ["Accommodation", "All meals", "Transportation", "Guide services", "Activities"],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Tips"],
    availability: "available",
    maxCapacity: 20,
    currentBookings: 8,
    featured: true,
    highlights: ["UNESCO Heritage Sites", "Traditional Dhow Cruises", "Authentic Somali Cuisine"]
  },
  {
    id: "somalia-2",
    title: "Berbera Red Sea Adventure",
    description: "Discover the ancient port city of Berbera with its stunning Red Sea coastline. This adventure combines pristine beaches, historical exploration, and underwater wonders perfect for diving enthusiasts.",
    shortDescription: "Red Sea diving and ancient port city exploration",
    destination: "Berbera",
    location: "Sahil, Somaliland",
    duration: "6 days, 5 nights",
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewCount: 89,
    image: berberaBeachesImg,
    category: "adventure",
    features: ["Diving certification", "Historic sites", "Desert excursions", "Red Sea beaches"],
    itinerary: [
      {
        day: 1,
        title: "Berbera Arrival",
        description: "Welcome to the pearl of the Red Sea",
        activities: ["Airport transfer", "Hotel check-in", "City orientation", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Red Sea Diving",
        description: "Explore the underwater paradise of the Red Sea",
        activities: ["Diving briefing", "First dive", "Marine life tour", "Beach relaxation"]
      },
      {
        day: 3,
        title: "Historical Berbera",
        description: "Journey through centuries of maritime history",
        activities: ["Old port tour", "Ottoman architecture", "Traditional lunch", "Museum visit"]
      },
      {
        day: 4,
        title: "Desert & Mountains",
        description: "Adventure into the surrounding landscapes",
        activities: ["Desert safari", "Mountain hiking", "Nomadic culture", "Stargazing"]
      },
      {
        day: 5,
        title: "Advanced Diving",
        description: "Explore deeper reefs and shipwrecks",
        activities: ["Deep dive", "Wreck exploration", "Underwater photography", "Certification"]
      },
      {
        day: 6,
        title: "Farewell",
        description: "Last moments by the Red Sea",
        activities: ["Beach morning", "Souvenir shopping", "Farewell lunch", "Departure"]
      }
    ],
    included: ["Luxury resort", "All meals", "Diving equipment", "Certification", "Transfers"],
    excluded: ["Flights", "Insurance", "Personal diving gear", "Alcoholic beverages"],
    availability: "limited",
    maxCapacity: 15,
    currentBookings: 12,
    featured: true,
    highlights: ["PADI Diving Certification", "Red Sea Coral Reefs", "Ancient Trade Routes"]
  },
  {
    id: "somalia-3", 
    title: "Kismayo National Park Safari",
    description: "Embark on an unforgettable wildlife safari in Somalia's premier national park. Experience diverse ecosystems, rare wildlife, and the stunning Jubba River while staying in luxury eco-lodges.",
    shortDescription: "Wildlife safari in Somalia's pristine national park",
    destination: "Kismayo",
    location: "Lower Juba, Somalia", 
    duration: "7 days, 6 nights",
    price: 1599,
    originalPrice: 2099,
    rating: 4.7,
    reviewCount: 156,
    image: kismayoParkImg,
    category: "adventure",
    features: ["Wildlife safari", "Eco-lodge accommodation", "River activities", "Bird watching"],
    itinerary: [
      {
        day: 1,
        title: "Park Entry & Orientation",
        description: "Enter the wild heart of Somalia",
        activities: ["Park entrance", "Lodge check-in", "Safety briefing", "Evening wildlife drive"]
      },
      {
        day: 2,
        title: "Big Game Safari",
        description: "Search for Somalia's iconic wildlife",
        activities: ["Dawn game drive", "Wildlife tracking", "Bush lunch", "Photography workshop"]
      },
      {
        day: 3,
        title: "Jubba River Expedition",
        description: "Explore the lifeline of the ecosystem",
        activities: ["River cruise", "Hippo watching", "Fishing excursion", "Riverside camping"]
      },
      {
        day: 4,
        title: "Bird Watching Paradise",
        description: "Discover Somalia's incredible bird diversity",
        activities: ["Bird hide visits", "Migratory species tour", "Photography session", "Nature walk"]
      },
      {
        day: 5,
        title: "Conservation Experience",
        description: "Learn about wildlife conservation efforts",
        activities: ["Research station visit", "Anti-poaching patrol", "Community project", "Cultural exchange"]
      },
      {
        day: 6,
        title: "Wilderness Adventure",
        description: "Off-road exploration and tracking",
        activities: ["4x4 expedition", "Animal tracking", "Bush survival skills", "Night safari"]
      },
      {
        day: 7,
        title: "Farewell Safari",
        description: "Final game drive and departure",
        activities: ["Sunrise safari", "Lodge checkout", "Souvenir shopping", "Airport transfer"]
      }
    ],
    included: ["Eco-lodge accommodation", "All meals", "Safari activities", "Professional guides", "Park fees"],
    excluded: ["International flights", "Travel insurance", "Alcoholic beverages", "Personal items"],
    availability: "available",
    maxCapacity: 12,
    currentBookings: 5,
    featured: false,
    highlights: ["Rare Somali Wildlife", "Jubba River Ecosystem", "Conservation Experience"]
  },
  {
    id: "somalia-4",
    title: "Hamar Weyne Cultural Heritage",
    description: "Immerse yourself in the rich cultural tapestry of Somalia's historic quarter. Experience traditional architecture, ancient mosques, vibrant markets, and authentic Somali hospitality in this cultural deep-dive.",
    shortDescription: "Cultural immersion in Somalia's historic heart",
    destination: "Hamar Weyne", 
    location: "Mogadishu, Somalia",
    duration: "4 days, 3 nights",
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    reviewCount: 203,
    image: hamarWeyne,
    category: "cultural",
    features: ["Historic architecture", "Traditional crafts", "Cultural workshops", "Local homestay"],
    itinerary: [
      {
        day: 1,
        title: "Heritage Quarter Discovery",
        description: "Step into living history",
        activities: ["Walking tour", "Ancient mosques", "Traditional lunch", "Craft workshops"]
      },
      {
        day: 2,
        title: "Artisan Immersion",
        description: "Learn traditional Somali crafts",
        activities: ["Weaving workshop", "Jewelry making", "Pottery class", "Cultural performance"]
      },
      {
        day: 3,
        title: "Culinary Journey",
        description: "Master the flavors of Somalia",
        activities: ["Market tour", "Cooking class", "Spice blending", "Traditional feast"]
      },
      {
        day: 4,
        title: "Cultural Celebration",
        description: "Join in local traditions",
        activities: ["Morning prayers", "Community gathering", "Farewell ceremony", "Departure"]
      }
    ],
    included: ["Traditional accommodation", "All meals", "Cultural activities", "Local guide", "Workshops"],
    excluded: ["Transportation to Mogadishu", "Personal purchases", "Tips", "Modern amenities"],
    availability: "available",
    maxCapacity: 25,
    currentBookings: 18,
    featured: true,
    highlights: ["13th Century Architecture", "Master Craftsmen", "Living Heritage"]
  }
];

// Export individual packages for easy access
export const mogadishuPackage = somaliaPackages[0];
export const berberaPackage = somaliaPackages[1]; 
export const kismayoPackage = somaliaPackages[2];
export const hamarPackage = somaliaPackages[3];
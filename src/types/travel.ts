export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  destination: string;
  location: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: 'beach' | 'mountain' | 'city' | 'adventure' | 'cultural' | 'luxury';
  features: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  availability: 'available' | 'limited' | 'soldout';
  maxCapacity: number;
  currentBookings: number;
  featured?: boolean;
  highlights?: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Review {
  id: string;
  packageId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

export interface Booking {
  id: string;
  packageId: string;
  customerName: string;
  email: string;
  phone: string;
  travelers: number;
  departureDate: string;
  specialRequests?: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface FilterOptions {
  destination?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  duration?: string;
  rating?: number;
  searchQuery?: string;
}
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  type: CarType;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  imageUrl: string;
  available: boolean;
  featured?: boolean;
  description: string;
  mileage: string;
  features: string[];
}

export type CarType = 'SUV' | 'Sedan' | 'Hatchback' | 'Luxury' | 'Sports' | 'Electric';

export interface Booking {
  id: string;
  carId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: string[]; // booking IDs
}

export interface FilterOptions {
  type: CarType | '';
  minPrice: number;
  maxPrice: number;
  seats: number | '';
  transmission: 'Automatic' | 'Manual' | '';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid' | '';
}
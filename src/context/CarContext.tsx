import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Car, FilterOptions, CarType } from '../types';
import { carsData } from '../data/carData';

interface CarContextType {
  cars: Car[];
  filteredCars: Car[];
  featuredCars: Car[];
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  getCar: (id: string) => Car | undefined;
}

const initialFilters: FilterOptions = {
  type: '',
  minPrice: 0,
  maxPrice: 500,
  seats: '',
  transmission: '',
  fuelType: '',
};

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cars] = useState<Car[]>(carsData);
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [searchTerm, setSearchTerm] = useState('');

  const featuredCars = cars.filter(car => car.featured && car.available);

  const filteredCars = cars.filter(car => {
    // Filter by availability
    if (!car.available) return false;

    // Filter by search term
    if (searchTerm && !`${car.make} ${car.model}`.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Filter by car type
    if (filters.type && car.type !== filters.type) {
      return false;
    }

    // Filter by price range
    if (car.price < filters.minPrice || car.price > filters.maxPrice) {
      return false;
    }

    // Filter by seats
    if (filters.seats && car.seats !== filters.seats) {
      return false;
    }

    // Filter by transmission
    if (filters.transmission && car.transmission !== filters.transmission) {
      return false;
    }

    // Filter by fuel type
    if (filters.fuelType && car.fuelType !== filters.fuelType) {
      return false;
    }

    return true;
  });

  const getCar = (id: string) => {
    return cars.find(car => car.id === id);
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        filteredCars,
        featuredCars,
        filters,
        setFilters,
        searchTerm,
        setSearchTerm,
        getCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCars = (): CarContextType => {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error('useCars must be used within a CarProvider');
  }
  return context;
};
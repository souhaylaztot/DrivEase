import React from 'react';
import { CarType, FilterOptions } from '../../types';
import Select from '../ui/Select';
import { useCars } from '../../context/CarContext';
import Button from '../ui/Button';

const CarFilters: React.FC = () => {
  const { filters, setFilters } = useCars();

  const carTypes: { value: CarType | '', label: string }[] = [
    { value: '', label: 'All Types' },
    { value: 'SUV', label: 'SUV' },
    { value: 'Sedan', label: 'Sedan' },
    { value: 'Hatchback', label: 'Hatchback' },
    { value: 'Luxury', label: 'Luxury' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Electric', label: 'Electric' },
  ];

  const transmissionOptions = [
    { value: '', label: 'All Transmissions' },
    { value: 'Automatic', label: 'Automatic' },
    { value: 'Manual', label: 'Manual' },
  ];

  const fuelTypeOptions = [
    { value: '', label: 'All Fuel Types' },
    { value: 'Gasoline', label: 'Gasoline' },
    { value: 'Diesel', label: 'Diesel' },
    { value: 'Electric', label: 'Electric' },
    { value: 'Hybrid', label: 'Hybrid' },
  ];

  const seatsOptions = [
    { value: '', label: 'Any Seats' },
    { value: 2, label: '2 Seats' },
    { value: 4, label: '4 Seats' },
    { value: 5, label: '5 Seats' },
    { value: 7, label: '7 Seats' },
  ];

  const handleTypeChange = (value: string) => {
    setFilters({ ...filters, type: value as CarType | '' });
  };

  const handleTransmissionChange = (value: string) => {
    setFilters({ ...filters, transmission: value as 'Automatic' | 'Manual' | '' });
  };

  const handleFuelTypeChange = (value: string) => {
    setFilters({ ...filters, fuelType: value as 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid' | '' });
  };

  const handleSeatsChange = (value: string) => {
    setFilters({ ...filters, seats: value ? Number(value) : '' });
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setFilters({ ...filters, minPrice: value });
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setFilters({ ...filters, maxPrice: value });
  };

  const resetFilters = () => {
    setFilters({
      type: '',
      minPrice: 0,
      maxPrice: 500,
      seats: '',
      transmission: '',
      fuelType: '',
    });
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filter Cars</h3>
      
      <div className="space-y-4">
        <Select
          label="Car Type"
          options={carTypes}
          value={filters.type}
          onChange={handleTypeChange}
          fullWidth
        />
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range ($ per day)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={handleMinPriceChange}
                min={0}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={handleMaxPriceChange}
                min={filters.minPrice}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        
        <Select
          label="Seats"
          options={seatsOptions}
          value={filters.seats}
          onChange={handleSeatsChange}
          fullWidth
        />
        
        <Select
          label="Transmission"
          options={transmissionOptions}
          value={filters.transmission}
          onChange={handleTransmissionChange}
          fullWidth
        />
        
        <Select
          label="Fuel Type"
          options={fuelTypeOptions}
          value={filters.fuelType}
          onChange={handleFuelTypeChange}
          fullWidth
        />
        
        <Button 
          variant="outline" 
          onClick={resetFilters}
          fullWidth
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default CarFilters;
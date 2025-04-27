import React from 'react';
import { useCars } from '../context/CarContext';
import CarCard from '../components/ui/CarCard';
import CarFilters from '../components/filters/CarFilters';
import SearchBar from '../components/SearchBar';

const CarsPage: React.FC = () => {
  const { filteredCars, searchTerm } = useCars();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Cars</h1>
        
        <div className="mb-6">
          <SearchBar simplified />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="md:w-1/4">
            <CarFilters />
          </div>
          
          {/* Car Listings */}
          <div className="md:w-3/4">
            {searchTerm && (
              <p className="mb-4 text-gray-600">
                Showing results for: <span className="font-semibold">"{searchTerm}"</span>
              </p>
            )}
            
            {filteredCars.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-3">No cars found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search criteria to find more cars.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
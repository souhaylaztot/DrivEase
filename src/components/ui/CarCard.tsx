import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../../types';
import Button from './Button';
import { Fuel, Users, Calendar, Heart } from 'lucide-react';

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, featured = false }) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        ${featured ? 'border-2 border-orange-400' : ''}
      `}
    >
      <div className="relative">
        <img 
          src={car.imageUrl} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            Featured
          </div>
        )}
        <button className="absolute top-2 left-2 p-1.5 bg-white/80 hover:bg-white rounded-full transition-colors">
          <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{car.make} {car.model}</h3>
            <p className="text-sm text-gray-500">{car.year}</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-blue-900">${car.price}</span>
            <p className="text-xs text-gray-500">per day</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-1.5" />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Fuel size={16} className="mr-1.5" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 col-span-2">
            <Calendar size={16} className="mr-1.5" />
            <span>{car.available ? 'Available Now' : 'Unavailable'}</span>
          </div>
        </div>
        
        <Link to={`/car/${car.id}`}>
          <Button 
            variant={car.available ? "primary" : "outline"} 
            fullWidth
            disabled={!car.available}
          >
            {car.available ? 'View Details' : 'Currently Unavailable'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
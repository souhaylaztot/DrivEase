import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCars } from '../context/CarContext';
import Button from '../components/ui/Button';
import DateRangePicker from '../components/ui/DateRangePicker';
import { Check, X, Fuel, Calendar, Users, Gauge, Sparkles } from 'lucide-react';

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getCar } = useCars();
  const car = getCar(id || '');
  
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  
  if (!car) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Car not found</h2>
        <p className="mb-6">The car you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/cars')}>
          Browse All Cars
        </Button>
      </div>
    );
  }
  
  const calculateTotalDays = () => {
    if (!startDate || !endDate) return 0;
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  
  const totalDays = calculateTotalDays();
  const totalPrice = totalDays * car.price;

  const handleBookNow = () => {
    if (!startDate || !endDate) {
      alert('Please select pick-up and return dates');
      return;
    }
    
    // In a real app, this would submit to API and redirect to confirmation page
    alert(`Booking confirmed for ${car.make} ${car.model} from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Car Images */}
          <div className="relative h-64 md:h-96 bg-gray-200">
            <img 
              src={car.imageUrl} 
              alt={`${car.make} ${car.model}`} 
              className="w-full h-full object-cover"
            />
            {car.featured && (
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-bold">
                Featured
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="md:flex justify-between">
              {/* Car Details */}
              <div className="md:w-7/12 pr-6">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">{car.make} {car.model}</h1>
                  <p className="text-gray-600 text-lg">{car.year}</p>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {car.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Users size={20} className="text-blue-900 mr-2" />
                    <span className="text-gray-700">{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel size={20} className="text-blue-900 mr-2" />
                    <span className="text-gray-700">{car.fuelType}</span>
                  </div>
                  <div className="flex items-center">
                    <Gauge size={20} className="text-blue-900 mr-2" />
                    <span className="text-gray-700">{car.transmission}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-blue-900 mr-2" />
                    <span className="text-gray-700">{car.mileage} miles</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Sparkles size={16} className="text-blue-900 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Booking Form */}
              <div className="md:w-5/12 mt-6 md:mt-0">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Book This Car</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-900">${car.price}</span>
                      <p className="text-sm text-gray-500">per day</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <DateRangePicker 
                      startDate={startDate}
                      endDate={endDate}
                      onStartDateChange={setStartDate}
                      onEndDateChange={setEndDate}
                    />
                  </div>
                  
                  {totalDays > 0 && (
                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Daily rate:</span>
                        <span className="font-medium">${car.price} x {totalDays} days</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span>${totalPrice}</span>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    onClick={handleBookNow} 
                    fullWidth
                    disabled={!car.available || !startDate || !endDate}
                  >
                    {car.available ? 'Book Now' : 'Currently Unavailable'}
                  </Button>
                  
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Check size={16} className="text-green-500 mr-2" />
                      <span>Free cancellation up to 24 hours before pickup</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      <span>No hidden fees or charges</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
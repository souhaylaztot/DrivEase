import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star, Check } from 'lucide-react';
import { useCars } from '../context/CarContext';
import Button from '../components/ui/Button';
import CarCard from '../components/ui/CarCard';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  const { featuredCars } = useCars();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        ></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Find Your Perfect Ride for Any Journey
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Discover our wide selection of vehicles at affordable rates. 
              From economic models to luxury cars, we have the perfect match for your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cars">
                <Button size="lg">Browse All Cars</Button>
              </Link>
              <Link to="/offers">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                  View Special Offers
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-10">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Cars</h2>
            <Link to="/cars" className="text-blue-900 hover:text-blue-700 flex items-center group">
              <span>View all cars</span>
              <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DrivEase</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on quality service, transparent pricing, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Reliable</h3>
              <p className="text-gray-600">
                All our vehicles are regularly maintained and thoroughly inspected for your safety.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer support team is available around the clock to assist you with any needs.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Check size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">
                We believe in transparency. All costs are clearly displayed with no surprises.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-900 mb-4">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                We offer competitive rates and special deals to ensure you get the best value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Renting a car with DrivEase is quick and simple. Follow these easy steps to get on the road.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Choose Your Car</h3>
              <p className="text-gray-600">
                Browse our fleet and select the perfect vehicle that meets your needs and budget.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Make a Reservation</h3>
              <p className="text-gray-600">
                Select your pickup and return dates and complete the booking process online.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Enjoy Your Ride</h3>
              <p className="text-gray-600">
                Pick up your car at the designated location and enjoy your journey with confidence.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/cars">
              <Button size="lg">Find Your Car Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
                <p className="text-blue-100 mb-6">
                  Join thousands of satisfied customers who choose DrivEase for their travel needs. 
                  Our extensive fleet and exceptional service ensure a smooth journey every time.
                </p>
                <Link to="/register">
                  <Button variant="secondary" size="lg">
                    Create an Account
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 bg-blue-900 p-8 md:p-12">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white">
                  <p className="italic mb-4">
                    "DrivEase made our family vacation so much easier! The booking process was simple, 
                    the car was clean and well-maintained, and the staff was incredibly helpful."
                  </p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                        JS
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Jennifer S.</p>
                      <div className="flex text-orange-300">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
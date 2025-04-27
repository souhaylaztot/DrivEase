import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import CarDetailPage from './pages/CarDetailPage';
import { CarProvider } from './context/CarContext';

function App() {
  return (
    <CarProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cars" element={<CarsPage />} />
              <Route path="/car/:id" element={<CarDetailPage />} />
              {/* Additional routes would be added here */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CarProvider>
  );
}

export default App;
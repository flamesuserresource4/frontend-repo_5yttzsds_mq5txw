import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import TechSpecs from './components/TechSpecs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Highlights />
      <TechSpecs />
      <Footer />
    </div>
  );
}

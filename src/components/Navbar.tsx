
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="py-5 border-b border-gray-100 bg-white/80 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold flex items-center">
            <span className="text-primary mr-1">Snap</span>
            <span className="text-secondary">Bot</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">How It Works</a>
          <a href="#faq" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">FAQ</a>
          <Button className="btn btn-primary text-black font-medium">Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-100 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 hover:text-primary font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">How It Works</a>
            <a href="#faq" className="text-gray-600 hover:text-primary font-medium transition-colors">FAQ</a>
            <Button className="btn btn-primary text-black font-medium w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

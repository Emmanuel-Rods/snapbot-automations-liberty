
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from './theme-provider';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="py-5 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-secondary/90 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold flex items-center">
            <span className="text-primary mr-1">Snap</span>
            <span className="text-secondary dark:text-white">Bot</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium text-sm transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium text-sm transition-colors">How It Works</a>
          <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium text-sm transition-colors">FAQ</a>
          <Button className="btn btn-primary text-black font-medium">Get Started</Button>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-secondary absolute w-full border-b border-gray-100 dark:border-gray-800 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors">How It Works</a>
            <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors">FAQ</a>
            <Button className="btn btn-primary text-black font-medium w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

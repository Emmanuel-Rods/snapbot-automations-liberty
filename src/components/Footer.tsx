
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-secondary dark:bg-secondary-600 text-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Exclusive Snapchat Automation</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8">Join our invite-only platform designed for innovative influencers and forward-thinking businesses.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-secondary hover:bg-primary/90 font-medium group relative overflow-hidden">
                  <span className="z-10 relative flex items-center">
                    Request Beta Access
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Join Waitlist
                </Button>
              </div>
            </div>
            <div className="md:text-right">
              <div className="mb-6">
                <p className="text-gray-300 text-sm mb-2">Subscribe to our newsletter</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-primary text-secondary hover:bg-primary/90 whitespace-nowrap mt-2 sm:mt-0">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-600 dark:bg-black text-gray-300 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="text-2xl font-bold flex items-center">
                <span className="text-primary mr-1">Snap</span>
                <span className="text-white">Bot</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-end text-sm">
              <a href="#" className="hover:text-primary">Terms</a>
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Documentation</a>
              <a href="#" className="hover:text-primary">GitHub</a>
              <a href="#" className="hover:text-primary">Contact</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} SnapBot. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

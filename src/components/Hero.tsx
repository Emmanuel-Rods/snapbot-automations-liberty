
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="section pt-28 sm:pt-32 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Automate <span className="gradient-text">Snapchat</span> with Browser-Level Control
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
              Invite-only automation platform for influencers and businesses. Powerful library that transforms Snapchat workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn btn-primary text-black font-medium text-lg group">
                <span className="flex items-center">
                  Request Invite
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button variant="outline" className="btn btn-outline">
                View Docs
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 code-block">
              <pre className="text-sm overflow-x-auto">
                <code className="language-javascript">{`
import { SnapBot } from 'snapbot';

// Initialize with your credentials
const bot = new SnapBot({
  username: 'yourUsername',
  password: 'yourPassword'
});

// Log in to Snapchat
await bot.login();

// Send a snap to friends
await bot.sendSnap({
  to: ['friend1', 'friend2'],
  image: './image.jpg',
  caption: 'Sent via SnapBot!'
});
                `}</code>
              </pre>
            </div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl animate-float"></div>
            <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-secondary rounded-full opacity-10 blur-2xl animate-float"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

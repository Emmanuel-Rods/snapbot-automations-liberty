
import React from 'react';
import { Bot, Calendar, Users, Zap, MessageCircle, BarChart, Gift, Smile } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="mb-4 text-primary inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "No API Reliance",
      description: "Build powerful bots without reverse engineering Snapchat's internal APIs."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Streak Automation",
      description: "Automatically maintain Snapstreaks even when you're busy or on vacation."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Smart Responses",
      description: "Create AI-enhanced conversations with context-aware automated replies."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Scheduled Content",
      description: "Automatically distribute your content at optimal times for engagement."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Birthday Features",
      description: "Send automated birthday wishes and personalized promotions to your audience."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Network Growth",
      description: "Automate friend requests and welcome messages to grow your network."
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Loyalty Programs",
      description: "Build streak-based loyalty rewards for your most engaged followers."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Monitor engagement metrics and streak patterns through detailed analytics."
    },
  ];

  return (
    <div id="features" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Snapchat Automation</h2>
          <p className="text-lg text-gray-600">
            SnapBot abstracts the hard parts so you can focus on what matters: the logic and creativity behind your automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

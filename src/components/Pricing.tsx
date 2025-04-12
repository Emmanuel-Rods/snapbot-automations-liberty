
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  buttonText
}) => {
  return (
    <div className={`rounded-xl ${popular ? 'border-2 border-primary shadow-xl' : 'border border-gray-200'} bg-white px-6 py-8 relative`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-secondary text-xs font-bold py-1 px-4 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4 mb-5">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-600">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button 
        className={`w-full mb-6 ${popular ? 'bg-primary text-secondary hover:bg-primary/90' : 'bg-secondary text-white hover:bg-secondary/90'}`}
      >
        {buttonText}
      </Button>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing: React.FC = () => {
  const tiers = [
    {
      title: "Developer",
      price: "$49",
      description: "Perfect for individual developers and small projects.",
      features: [
        "Single Snapchat account",
        "Core automation features",
        "Streak maintenance",
        "Basic marketing tools",
        "Email support"
      ],
      buttonText: "Get Started"
    },
    {
      title: "Business",
      price: "$149",
      description: "Ideal for businesses and content creators.",
      features: [
        "Up to 5 Snapchat accounts",
        "All Developer features",
        "Advanced marketing tools",
        "Birthday automation features",
        "AI response generation",
        "Priority support"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large-scale operations and advanced use cases.",
      features: [
        "Unlimited Snapchat accounts",
        "All Business features",
        "Custom integration support",
        "Dedicated account manager",
        "Custom feature development",
        "SLA and 24/7 support"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div id="pricing" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs. All plans come with a 14-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

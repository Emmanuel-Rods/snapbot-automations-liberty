
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCases: React.FC = () => {
  const useCaseCategories = [
    {
      id: "engagement",
      title: "Engagement",
      cases: [
        "Automated Streaks Maintenance during vacations or busy periods",
        "Mass personalized responses for content creators to maintain fan connections",
        "Automated welcome messages and community updates",
        "AI-Enhanced conversations with intelligent, context-aware responses"
      ]
    },
    {
      id: "marketing",
      title: "Marketing",
      cases: [
        "Send personalized promotional content based on purchase history",
        "Automated daily content delivery at optimal times",
        "Auto-share content from other platforms to Snapchat",
        "Send personalized event reminders to participants",
        "Create virtual tours with feature highlights for real estate"
      ]
    },
    {
      id: "support",
      title: "Customer Support",
      cases: [
        "Automated FAQ responses with human escalation paths",
        "24/7 automated customer service",
        "Quick issue resolution through automated systems",
        "Collect customer feedback through automated surveys"
      ]
    },
    {
      id: "birthday",
      title: "Birthday Features",
      cases: [
        "Send birthday wishes beyond Snapchat's 5-day window",
        "Schedule advance birthday promotions with personalized offers",
        "Sync with external calendar systems",
        "Track and deliver tiered birthday rewards based on loyalty"
      ]
    },
    {
      id: "loyalty",
      title: "Streak-Based Loyalty",
      cases: [
        "Escalating benefits for 25/50/100 day streaks",
        "Special recognition for milestone achievements",
        "Prevent streak breaks with timely interventions",
        "Monitor customer loyalty through streak analytics"
      ]
    }
  ];

  return (
    <div className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Endless Possibilities</h2>
          <p className="text-lg text-gray-600">
            Discover what you can build with SnapBot's powerful automation capabilities.
          </p>
        </div>

        <Tabs defaultValue="engagement" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8">
            {useCaseCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>{category.title}</TabsTrigger>
            ))}
          </TabsList>
          
          {useCaseCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-2xl font-semibold mb-6">{category.title} Use Cases</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.cases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default UseCases;

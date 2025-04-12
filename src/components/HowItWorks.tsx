
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Install the Library",
      description: "Install SnapBot via npm or yarn and set up your development environment."
    },
    {
      number: "02",
      title: "Initialize & Authenticate",
      description: "Create an instance and authenticate with your Snapchat credentials securely."
    },
    {
      number: "03",
      title: "Build Your Automation Logic",
      description: "Use SnapBot's simple API to create custom automation workflows for your needs."
    },
    {
      number: "04",
      title: "Deploy & Scale",
      description: "Deploy your automation solution and scale it to handle multiple accounts and tasks."
    }
  ];

  return (
    <div id="how-it-works" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SnapBot Works</h2>
          <p className="text-lg text-gray-600">
            SnapBot provides a simple, developer-friendly way to automate Snapchat interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="feature-card h-full">
                <div className="text-primary font-bold text-5xl opacity-20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 overflow-x-auto">
          <pre className="code-block text-sm">
            <code className="language-javascript">{`
import { SnapBot } from 'snapbot';

// Initialize and authenticate
const bot = new SnapBot();
await bot.login({ username: 'your_username', password: 'your_password' });

// Maintain streaks automatically
await bot.setupStreakMaintenance({
  contacts: ['friend1', 'friend2', 'friend3'],
  schedule: '0 10 * * *', // Every day at 10 AM
  message: 'Keeping our streak alive! 🔥',
  image: './streak-image.jpg'
});

// Listen for new snaps and respond with AI
bot.on('newSnap', async (snap) => {
  if (snap.from === 'important_contact') {
    const response = await generateAIResponse(snap.content);
    await bot.sendSnap({
      to: snap.from,
      message: response
    });
  }
});

// Birthday automation
await bot.scheduleBirthdayMessages({
  contacts: getBirthdayContacts(), // Your function to get contacts with birthdays
  message: 'Happy Birthday! 🎉',
  image: './birthday-image.jpg'
});

// Start the bot
bot.start();
            `}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;


import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-6">
        {/* Stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFFC00" stroke="#FFFC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">"{quote}"</p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-gray-600 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "SnapBot has revolutionized how we engage with our Snapchat audience. The automation capabilities have saved us countless hours while increasing our engagement rates.",
      author: "Sarah Johnson",
      role: "Digital Marketing Director",
      company: "TechVibe"
    },
    {
      quote: "As a developer, I appreciate how well-documented and easy to use SnapBot is. It's allowed us to build custom Snapchat solutions for our clients without the headaches.",
      author: "Michael Chen",
      role: "Lead Developer",
      company: "CodeCraft Studios"
    },
    {
      quote: "The streak maintenance feature alone has been a game-changer for our influencer marketing campaigns. SnapBot pays for itself in time saved and increased engagement.",
      author: "Alex Rodriguez",
      role: "Influencer Manager",
      company: "Social Boost Agency"
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Developers & Marketers</h2>
          <p className="text-lg text-gray-600">
            See what our customers are saying about their experience with SnapBot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

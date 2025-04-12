
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What exactly is SnapBot?",
      answer: "SnapBot is a JavaScript library built on top of Puppeteer that enables developers to automate Snapchat interactions through a browser environment, without reverse engineering Snapchat's internal APIs."
    },
    {
      question: "Is using SnapBot against Snapchat's terms of service?",
      answer: "Automated browser interactions may violate Snapchat's terms of service. We recommend using SnapBot responsibly and reviewing Snapchat's terms before implementing any automation. SnapBot is intended for legitimate business uses like customer engagement and marketing."
    },
    {
      question: "Do I need technical knowledge to use SnapBot?",
      answer: "Yes, SnapBot is a developer tool that requires JavaScript knowledge and understanding of browser automation concepts. It's designed for developers who want to integrate Snapchat automation into their applications."
    },
    {
      question: "Can SnapBot handle multiple Snapchat accounts?",
      answer: "Yes, depending on your plan, SnapBot can manage multiple Snapchat accounts simultaneously, making it perfect for businesses that manage various brand accounts or marketing agencies handling client accounts."
    },
    {
      question: "How secure are my Snapchat credentials with SnapBot?",
      answer: "SnapBot never stores your credentials on our servers. All authentication happens locally within your application, and we recommend using environment variables to securely manage credentials."
    },
    {
      question: "What kind of support is provided?",
      answer: "We offer different levels of support based on your plan. This includes email support, priority support with faster response times, and dedicated account management for enterprise customers."
    },
    {
      question: "Can I integrate SnapBot with other tools and systems?",
      answer: "Absolutely! SnapBot is designed to be integrated with other systems. You can connect it to your CRM, marketing automation tools, AI services, or any other system through custom integration code."
    }
  ];

  return (
    <div id="faq" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Have questions about SnapBot? Find answers to commonly asked questions below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

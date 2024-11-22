import { useState } from "react";
import FAQItem from "./FAQItem";

const faqData = [
  {
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers flexible subscription plans starting from $9.99 per month.",
  },
  {
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe includes a wide range of movies, TV shows, and exclusive content across various genres.",
  },
  {
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe on any device with an internet connection, including smart TVs, smartphones, tablets, and computers.",
  },
  {
    question: "How do I sign up for StreamVibe?",
    answer:
      "Visit our website, click on 'Sign Up', and follow the steps to create your account and choose a subscription plan.",
  },
  {
    question: "What is the StreamVibe free trial?",
    answer:
      "StreamVibe offers a 7-day free trial for new users to explore our content before subscribing.",
  },
  {
    question: "How do I contact StreamVibe customer support?",
    answer:
      "You can contact our support team via the 'Help Center' on our website or by emailing support@streamvibe.com.",
  },
  {
    question: "What are the StreamVibe payment methods?",
    answer:
      "We accept credit cards, debit cards, and PayPal as payment methods for subscriptions.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-4 text-white max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div className="">
          <h1 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-grey-60">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button className="py-2 px-4 bg-primary-45 text-white rounded-lg transition-all duration-200 hover:bg-primary-50">
          Ask a Question
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-4">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

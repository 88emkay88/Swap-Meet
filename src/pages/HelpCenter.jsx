import {
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Book,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HelpCenter = () => {
  const helpCategories = [
    {
      icon: <Book className="w-8 h-8 text-blue-500" />,
      title: "Getting Started",
      description: "Learn the basics of buying and selling",
      topics: [
        "Creating an account",
        "Setting up your profile",
        "Making your first purchase",
        "Listing your first item",
      ],
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: "Buying",
      description: "Everything about purchasing items",
      topics: [
        "How to search for items",
        "Making offers",
        "Payment methods",
        "Buyer protection",
      ],
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: "Selling",
      description: "Start selling and grow your business",
      topics: [
        "Creating listings",
        "Pricing strategies",
        "Managing orders",
        "Seller fees",
      ],
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: "Account & Safety",
      description: "Keep your account secure",
      topics: [
        "Account settings",
        "Privacy controls",
        "Reporting issues",
        "Safety guidelines",
      ],
    },
  ];

  const popularQuestions = [
    {
      question: "How do I create an account?",
      answer:
        "Click 'Sign Up' in the top navigation and follow the registration process.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "How does buyer protection work?",
      answer:
        "Our escrow service holds payment until you confirm receipt of your item.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary by seller location and chosen shipping method.",
    },
    {
      question: "Can I return an item?",
      answer:
        "Yes, we have a 30-day return policy for most items. See our Returns page for details.",
    },
    {
      question: "How do I contact a seller?",
      answer:
        "Use the 'Contact Seller' button on any listing to send a message.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500/10 to-blue-50 py-20">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Find answers to your questions and get help with your marketplace
            experience.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="search"
                placeholder="Search for help articles..."
                className="pl-12 py-4 text-lg rounded-full w-full border border-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <div
                key={index}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6 cursor-pointer"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-gray-500 mt-4 mb-4 text-center">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="text-sm text-gray-500 hover:text-blue-500 cursor-pointer"
                    >
                      • {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {popularQuestions.map((faq, index) => (
              <div
                key={index}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HelpCenter;

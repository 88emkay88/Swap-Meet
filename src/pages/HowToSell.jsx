import {
  Camera,
  FileText,
  DollarSign,
  Package,
  Star,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HowToSell = () => {
  const sellingSteps = [
    {
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      title: "Take Great Photos",
      description: "High-quality photos are crucial for sales success.",
      tips: [
        "Use natural lighting when possible",
        "Take photos from multiple angles",
        "Show any flaws or defects honestly",
        "Use a clean, uncluttered background",
      ],
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Write Compelling Descriptions",
      description: "Detailed descriptions help buyers make informed decisions.",
      tips: [
        "Include brand, model, and condition",
        "Mention all included accessories",
        "Be honest about any wear or damage",
        "Use relevant keywords for searchability",
      ],
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: "Price Competitively",
      description: "Research similar items to set the right price.",
      tips: [
        "Check completed listings for similar items",
        "Consider the condition of your item",
        "Factor in shipping costs",
        "Use auction format for rare items",
      ],
    },
    {
      icon: <Package className="w-8 h-8 text-blue-500" />,
      title: "Ship Safely",
      description: "Proper packaging ensures items arrive safely.",
      tips: [
        "Use appropriate packaging materials",
        "Add tracking to all shipments",
        "Ship within your stated handling time",
        "Communicate with buyers about shipping",
      ],
    },
  ];

  const bestPractices = [
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      title: "Maintain High Ratings",
      description:
        "Provide excellent customer service to build positive feedback",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      title: "Communicate Promptly",
      description: "Respond to buyer questions quickly and professionally",
    },
    {
      icon: <Package className="w-6 h-6 text-blue-500" />,
      title: "Ship Fast",
      description: "Quick shipping leads to better buyer experiences",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500/10 to-blue-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Guide to Selling
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn everything you need to know to become a successful seller on
            MarketPlace. From listing your first item to building a thriving
            business.
          </p>
        </div>
      </section>

      {/* Selling Steps */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Step-by-Step Selling Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sellingSteps.map((step, index) => (
              <div
                key={index}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  {step.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Best Practices for Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <div
                key={index}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6 text-center"
              >
                <div className="flex justify-center mb-4">{practice.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{practice.title}</h3>
                <p className="text-gray-600">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Selling Fees</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Listing Fees</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Basic Listing</span>
                      <span className="font-semibold text-green-600">FREE</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Featured Listing</span>
                      <span>R2.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Premium Listing</span>
                      <span>R4.99</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Final Value Fees
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Most Categories</span>
                      <span>10%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Electronics</span>
                      <span>8%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Books & Media</span>
                      <span>6%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Selling?</h2>
          <p className="text-xl mb-8 opacity-90">
            Put your new knowledge to work and list your first item today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sign-up"
              className="bg-white text-blue-500 hover:bg-gray-100 rounded-full px-8 py-3 text-lg text-center"
            >
              Create Account
            </Link>
            <Link
              to="/seller-center"
              className="border border-white text-white hover:bg-white/20 rounded-full px-8 py-3 text-lg text-center"
            >
              Visit Seller Center
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToSell;

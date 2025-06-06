import { Link } from "react-router-dom";
import { DollarSign, Users, Shield, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StartSelling = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Earn Extra Income",
      description:
        "Turn your unused items into cash. Many sellers earn $500+ monthly.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Millions of Buyers",
      description:
        "Reach millions of active buyers looking for great deals every day.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Payments",
      description:
        "Get paid safely with our secure escrow system and buyer protection.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Easy to Use",
      description:
        "List items in minutes with our simple selling tools and mobile app.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Take Photos",
      description: "Snap clear photos of your item from multiple angles",
    },
    {
      number: "2",
      title: "Write Description",
      description: "Add a detailed description and set your price",
    },
    {
      number: "3",
      title: "Choose Format",
      description: "Sell with Buy It Now or create an auction",
    },
    {
      number: "4",
      title: "Get Paid",
      description: "Ship your item and receive payment securely",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400/10 to-blue-50 py-20">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Start Selling Today
          </h1>
          <p className="text-xl  mb-8 max-w-2xl mx-auto">
            Join millions of sellers earning extra income on MarketPlace. It's
            free to start and easy to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-xs font-semibold text-sky-100 bg-blue-600 hover:bg-sky-600 cursor-pointer px-4 py-2 rounded-full">
              <Link to="/sign-up">Create Seller Account</Link>
            </button>
            <button className="text-xs font-semibold border hover:bg-sky-200 cursor-pointer px-4 py-2 rounded-full">
              <Link to="/how-to-sell">Learn How to Sell</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="p-20 ">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Sell on MarketPlace?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center border p-6 rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div>
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h1 className="text-xl">{benefit.title}</h1>
                </div>
                <div>
                  <p className="">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="p-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Start Selling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
                <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="p-6">
                <p className="mb-4 italic">
                  "I started selling my crafts on MarketPlace and now it's my
                  full-time business. I've made over $50,000 in the past year!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Sarah"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm ">Craft Seller</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="p-6">
                <p className="mb-4 italic">
                  "Selling electronics and gadgets has been incredibly
                  profitable. The platform makes it so easy to reach buyers."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="Mike"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Mike L.</p>
                    <p className="text-sm ">Electronics Seller</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="p-6">
                <p className="mb-4 italic">
                  "I love the flexibility of selling on my own schedule. Great
                  way to declutter and make money at the same time."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/3.jpg"
                    alt="Emma"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Emma K.</p>
                    <p className="text-sm ">Fashion Seller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Selling Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful sellers already earning on MarketPlace
          </p>
          <button className="text-xs font-semibold text-sky-100 bg-sky-400 hover:bg-sky-600 cursor-pointer px-4 py-2 rounded-full">
            <Link to="/sign-up">Get Started Now</Link>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartSelling;

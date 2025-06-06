import { Link } from "react-router-dom";
import { Shield, Lock, CreditCard, CheckCircle, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Escrow = () => {
  const howItWorks = [
    {
      step: "1",
      title: "Buyer Places Order",
      description:
        "Payment is securely held in escrow until delivery confirmation",
    },
    {
      step: "2",
      title: "Seller Ships Item",
      description: "Seller ships the item with tracking information provided",
    },
    {
      step: "3",
      title: "Buyer Receives Item",
      description:
        "Buyer inspects the item and confirms it matches the description",
    },
    {
      step: "4",
      title: "Payment Released",
      description:
        "Seller receives payment after buyer approval or automatic release",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Fraud Protection",
      description:
        "Advanced fraud detection protects against unauthorized transactions",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: "Secure Payments",
      description:
        "Bank-level encryption keeps your financial information safe",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Quality Guarantee",
      description: "Items must match descriptions or buyers get full refunds",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Dispute Resolution",
      description:
        "Professional mediation team resolves any transaction disputes",
    },
  ];

  const protectedTransactions = [
    "All purchases over R100",
    "Electronics and high-value items",
    "Collectibles and art",
    "Jewelry and watches",
    "Vehicles and automotive parts",
    "Business equipment",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500/10 to-blue-50 py-20">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Secure Escrow Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Shop and sell with complete confidence. Our escrow service protects
            both buyers and sellers throughout every transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 text-lg transition-colors"
            >
              Start Shopping
            </Link>
            <Link
              to="/how-it-works"
              className="border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full px-8 py-3 text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Escrow Protection Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="p-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Escrow Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protected Transactions */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What's Protected
          </h2>
          <div className="max-w-2xl mx-auto border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
            <h3 className="text-xl font-semibold text-center mb-4">
              Escrow Protection Covers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {protectedTransactions.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="p-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              [
                "256-bit SSL Encryption",
                <Lock className="w-6 h-6 text-blue-500" />,
              ],
              [
                "PCI DSS Compliant",
                <CreditCard className="w-6 h-6 text-blue-500" />,
              ],
              ["24/7 Monitoring", <Shield className="w-6 h-6 text-blue-500" />],
            ].map(([title, icon], idx) => (
              <div
                key={idx}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  {icon}
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {title === "256-bit SSL Encryption"
                    ? "All data transmission is protected with the same level of encryption used by banks and financial institutions."
                    : title === "PCI DSS Compliant"
                    ? "Our payment processing meets the highest security standards for handling credit card information."
                    : "We constantly monitor transactions to detect and prevent fraudulent activity before it impacts you."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Escrow Service Fees
          </h2>
          <div className="max-w-4xl mx-auto border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Standard Transactions
                </h3>
                <p className="text-3xl font-bold text-blue-500 mb-2">3%</p>
                <p className="text-muted-foreground text-sm">
                  For transactions up to R5,000
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Items</h3>
                <p className="text-3xl font-bold text-blue-500 mb-2">2.5%</p>
                <p className="text-muted-foreground text-sm">
                  For transactions R5,001 to R25,000
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">High-Value Items</h3>
                <p className="text-3xl font-bold text-blue-500 mb-2">2%</p>
                <p className="text-muted-foreground text-sm">
                  For transactions over R25,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="p-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question:
                  "What happens if I receive an item that doesn't match the description?",
                answer:
                  "You have 3 days to inspect the item and report any issues. If the item doesn't match the description, you can file a claim and receive a full refund.",
              },
              {
                question:
                  "When will the seller receive payment for my purchase?",
                answer:
                  "The seller will receive payment after you confirm receipt and acceptance of the item, or automatically after the 3-day inspection period if no issues are reported.",
              },
              {
                question: "How are disputes handled?",
                answer:
                  "Our mediation team reviews all evidence from both parties and makes a fair decision based on marketplace policies, transaction details, and supporting documentation.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-20 bg-blue-500 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Buy and Sell with Confidence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users who trust our secure escrow service for safe
            transactions
          </p>
          <Link
            to="/sign-up"
            className="bg-white text-blue-500 hover:bg-gray-100 rounded-full px-8 py-3 text-lg transition-colors inline-block"
          >
            Create Account
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Escrow;

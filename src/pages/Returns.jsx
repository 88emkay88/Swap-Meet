import { Link } from "react-router-dom";
import { Shield, Clock, CheckCircle, AlertCircle, Package } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Returns = () => {
  const returnReasons = [
    "Item not as described",
    "Item damaged in shipping",
    "Wrong item received",
    "Item doesn't fit/work",
    "Changed mind",
    "Quality issues",
  ];

  const returnProcess = [
    {
      step: "1",
      title: "Request Return",
      description:
        "Contact the seller or start a return request in your account",
    },
    {
      step: "2",
      title: "Get Approval",
      description:
        "Wait for seller approval or automatic approval based on policy",
    },
    {
      step: "3",
      title: "Ship Item Back",
      description: "Package and ship the item back using provided return label",
    },
    {
      step: "4",
      title: "Receive Refund",
      description:
        "Get your refund once the seller receives and approves the return",
    },
  ];

  const policies = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "30-Day Return Window",
      description: "Most items can be returned within 30 days of delivery",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Buyer Protection",
      description: "Our protection policy covers qualifying purchases",
    },
    {
      icon: <Package className="w-6 h-6 text-blue-500" />,
      title: "Return Shipping",
      description: "Return shipping costs depend on the reason for return",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500/10 to-blue-50 p-20">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Returns & Refunds
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Shop with confidence knowing you're protected by our comprehensive
            return policy and buyer protection program.
          </p>
          <Link
            to="/contact-us"
            className="bg-blue-500 hover:bg-blue-500/90 rounded-full px-8 py-3 text-lg text-white inline-block"
          >
            Start a Return
          </Link>
        </div>
      </section>

      {/* Policy */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Return Policy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full text-center p-6"
              >
                <div className="flex justify-center mb-4">{policy.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
                <p className="text-muted-foreground">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="p-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Return an Item
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {returnProcess.map((step, index) => (
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

      {/* Reasons */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Valid Return Reasons
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {returnReasons.map((reason, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="p-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Return Conditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Eligible for Return
              </h3>
              <ul className="space-y-2">
                <li>• Item in original condition</li>
                <li>• All original packaging and accessories</li>
                <li>• Returned within 30 days</li>
                <li>• No signs of use or wear</li>
                <li>• Original tags still attached (clothing)</li>
              </ul>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Not Eligible for Return
              </h3>
              <ul className="space-y-2">
                <li>• Custom or personalized items</li>
                <li>• Perishable goods</li>
                <li>• Digital downloads</li>
                <li>• Items damaged by buyer</li>
                <li>• Items returned after 30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Info */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Refund Information
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
              <h3 className="text-xl font-semibold mb-4">Refund Timeline</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-black">Credit/Debit Cards</p>
                  <p>3–5 business days</p>
                </div>
                <div>
                  <p className="font-semibold text-black">PayPal</p>
                  <p>1–2 business days</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Bank Transfer</p>
                  <p>5–7 business days</p>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
              <h3 className="text-xl font-semibold mb-4">What Gets Refunded</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Item purchase price</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Original shipping (if item defective)</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span>Return shipping costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span>Payment processing fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="p-20 bg-blue-500 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help with a Return?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our customer service team is here to assist you with any return
            questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-blue-500 hover:bg-gray-100 rounded-full px-8 py-3 text-lg"
            >
              Contact Support
            </Link>
            <Link
              to="/dashboard"
              className="border border-white text-white hover:bg-white/20 rounded-full px-8 py-3 text-lg"
            >
              My Account
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Returns;

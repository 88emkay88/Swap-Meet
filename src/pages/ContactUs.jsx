import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: "Phone Support",
      description: "Speak with our customer service team",
      details: "+27 81 234 5678",
      hours: "Mon-Fri: 8AM-8PM",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      details: "support@swapmeet.com",
      hours: "24/7 Response",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      details: "Available on website",
      hours: "Mon-Fri: 9AM-6PM",
    },
  ];

  const departments = [
    "General Support",
    "Billing & Payments",
    "Technical Support",
    "Seller Support",
    "Buyer Protection",
    "Account Issues",
    "Partnership Inquiries",
    "Press & Media",
  ];

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click 'Sign Up' and follow the simple registration process.",
    },
    {
      question: "What are the selling fees?",
      answer:
        "Basic listings are free. We charge a final value fee when your item sells.",
    },
    {
      question: "How does buyer protection work?",
      answer:
        "Our escrow service protects both buyers and sellers throughout the transaction.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary by seller location and method chosen.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500/10 to-blue-50 py-20">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're here to help! Reach out to our support team with any questions
            or concerns.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full text-center p-6"
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {method.description}
                </p>
                <p className="font-semibold">{method.details}</p>
                <p className="text-sm text-muted-foreground">{method.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Send us a Message
            </h2>
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        placeholder="John"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        placeholder="Doe"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="department">Department</label>
                    <select className="w-full border rounded px-3 py-2">
                      <option value="">Select a department</option>
                      {departments.map((dept) => (
                        <option
                          key={dept}
                          value={dept.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      className="w-full border rounded px-3 py-2 min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-20">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="p-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Visit Our Office
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Petoria Road
                      <br />
                      Kempton Park, 1619
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM GMT+2
                      <br />
                      Saturday: 9:00 AM - 4:00 PM GMT+2
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;

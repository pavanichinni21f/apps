"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Plane, CheckCircle, FileText, Globe, ArrowRight, ChevronDown, ChevronUp, MapPin, Calendar, Clock, Users, Heart, CheckSquare } from 'lucide-react';

export default function TravelTourismVisaPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    destination: '',
    travelDate: '',
    duration: '',
    purpose: '',
    groupSize: '',
    message: ''
  });

  const visaTypes = [
    {
      icon: <Plane className="w-12 h-12 text-orange-500" />,
      title: "Tourist Visas",
      description: "Perfect for leisure travel, sightseeing, and exploring new cultures. Quick processing for popular destinations.",
      features: ["Multiple entry options", "Flexible duration", "Quick approval", "Family-friendly"]
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Family Visit Visas",
      description: "Visit family members and relatives abroad with special provisions for family reunions and celebrations.",
      features: ["Extended stay options", "Multiple entry", "Family documentation support", "Expedited processing"]
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Transit Visas",
      description: "For travelers passing through a country to reach their final destination. Short-term convenient solutions.",
      features: ["Quick processing", "Airport transit", "Short validity", "Minimal documentation"]
    }
  ];

  const destinations = [
    {
      country: "United States",
      image: "🗽",
      highlights: ["NYC", "Los Angeles", "Grand Canyon"],
      processing: "5-15 days",
      validity: "10 years",
      popular: true
    },
    {
      country: "United Kingdom", 
      image: "🏰",
      highlights: ["London", "Edinburgh", "Bath"],
      processing: "3-10 days",
      validity: "2-10 years",
      popular: true
    },
    {
      country: "Schengen Area",
      image: "🏛️", 
      highlights: ["Paris", "Rome", "Amsterdam"],
      processing: "5-15 days",
      validity: "5 years",
      popular: true
    },
    {
      country: "Canada",
      image: "🍁",
      highlights: ["Toronto", "Vancouver", "Quebec"],
      processing: "2-8 weeks",
      validity: "10 years",
      popular: false
    },
    {
      country: "Australia",
      image: "🦘",
      highlights: ["Sydney", "Melbourne", "Perth"],
      processing: "1-4 weeks", 
      validity: "1-3 years",
      popular: false
    },
    {
      country: "Japan",
      image: "🗾",
      highlights: ["Tokyo", "Kyoto", "Osaka"],
      processing: "5-10 days",
      validity: "3-5 years",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Application",
      description: "Complete visa application form and gather required documents based on destination."
    },
    {
      step: "02",
      title: "Documentation",
      description: "Submit passport, photos, itinerary, and supporting documents for verification."
    },
    {
      step: "03",
      title: "Processing",
      description: "Embassy/consulate reviews application and may schedule interview if required."
    },
    {
      step: "04",
      title: "Approval & Travel",
      description: "Receive visa approval and travel with confidence to your destination."
    }
  ];

  const documents = [
    "Valid Passport (minimum 6 months validity)",
    "Completed Visa Application Form",
    "Recent Passport-size Photographs",
    "Flight Itinerary/Booking Confirmation", 
    "Hotel Reservations/Accommodation Proof",
    "Travel Insurance Certificate",
    "Bank Statements (3-6 months)",
    "Employment Letter/Leave Approval",
    "Income Tax Returns (if applicable)",
    "Travel Itinerary/Tour Plan"
  ];

  const faqs = [
    {
      question: "How early should I apply for a tourist visa?",
      answer: "We recommend applying 2-8 weeks before your travel date, depending on the destination. Popular destinations during peak seasons may require earlier applications."
    },
    {
      question: "What documents do I need for a tourist visa?",
      answer: "Basic requirements include valid passport, application form, photos, flight bookings, hotel reservations, bank statements, and travel insurance. Requirements vary by destination."
    },
    {
      question: "Can I extend my tourist visa while abroad?",
      answer: "Extension policies vary by country. Some countries allow extensions for genuine reasons, while others require you to leave and reapply. We provide guidance for each destination."
    },
    {
      question: "Do I need travel insurance for visa application?",
      answer: "Many countries require travel insurance as mandatory for visa applications. The coverage amount varies by destination (typically €30,000-€100,000 for Schengen countries)."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "We analyze rejection reasons and help you reapply with a stronger application. Common reasons include insufficient funds, incomplete documentation, or unclear travel purpose."
    },
    {
      question: "Can I apply for multiple country visas at once?",
      answer: "Yes, you can apply for multiple destinations simultaneously. We coordinate applications to ensure no conflicts and optimize processing times for multi-country trips."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} showTopHeader={true} />

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('/images/visa-travel-tourism-bg.svg')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-full">
                <Globe className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel & Tourism Visas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Explore the world with hassle-free visa solutions
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-80">
              From dream vacations to family visits, we make international travel accessible with our comprehensive 
              visa services for tourists, families, and transit passengers.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Travel Visa Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right visa type for your travel needs and enjoy seamless international experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visaTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{type.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Why Choose Our Travel Visa Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500 p-2 rounded-lg mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Approval Process</h3>
                    <p className="text-gray-600">Fast-track processing for urgent travel needs with most applications approved within standard timeframes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Multiple Destinations</h3>
                    <p className="text-gray-600">Access to 150+ countries with specialized knowledge of visa requirements for each destination.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Family-Friendly Support</h3>
                    <p className="text-gray-600">Special assistance for families, groups, and elderly travelers with simplified documentation processes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-orange-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl mb-4">✈️</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Travel With Confidence</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">98%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">150+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">5-15</div>
                      <div className="text-sm text-gray-600">Days Process</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Simple Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your travel visa in just 4 easy steps with our streamlined process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Slider */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Popular Destinations</h2>
            <p className="text-lg text-gray-600">
              Discover visa requirements for the world's most sought-after travel destinations
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinations.slice(0, 3).map((dest, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{dest.image}</div>
                      <h3 className="text-xl font-bold text-blue-900">{dest.country}</h3>
                      {dest.popular && (
                        <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full mt-2">
                          Popular Choice
                        </span>
                      )}
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Processing Time:</span>
                        <span className="font-medium text-blue-900">{dest.processing}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Visa Validity:</span>
                        <span className="font-medium text-blue-900">{dest.validity}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Popular Attractions:</p>
                      <div className="flex flex-wrap gap-1">
                        {dest.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View All Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Required Documents</h2>
              <p className="text-lg text-gray-600 mb-8">
                Standard documentation requirements for tourist visas. Specific requirements may vary by destination country.
              </p>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-blue-900">Document Assistance</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our team helps prepare and review all documents to ensure they meet embassy standards 
                  and maximize your visa approval chances.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Document Checklist</h3>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about travel and tourist visas
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-blue-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for Tourist Visa</h2>
            <p className="text-lg opacity-90">
              Ready to explore the world? Start your visa application today and embark on your dream journey.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Visa Type *</label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select Visa Type</option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="family-visit">Family Visit Visa</option>
                  <option value="transit">Transit Visa</option>
                  <option value="business-tourist">Business Tourist Visa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country *</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select Destination</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="schengen">Schengen Area</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="japan">Japan</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Intended Travel Date</label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration of Stay</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select Duration</option>
                  <option value="1-7-days">1-7 days</option>
                  <option value="1-2-weeks">1-2 weeks</option>
                  <option value="2-4-weeks">2-4 weeks</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="longer">Longer than 6 months</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Visit</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select Purpose</option>
                  <option value="tourism">Tourism/Leisure</option>
                  <option value="family-visit">Visit Family/Friends</option>
                  <option value="business-meeting">Business Meeting</option>
                  <option value="medical">Medical Treatment</option>
                  <option value="transit">Transit</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <span>Apply for Tourist Visa</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center mr-3">
                  <CheckSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">SigninSoft</div>
                  <div className="text-xs text-orange-400 -mt-1">Get into your Future</div>
                </div>
              </div>
              <p className="text-gray-300">
                Leading consulting, business solution and systems integration firm.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Visa Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/visa/study-abroad" className="hover:text-orange-400 transition-colors">Study Abroad Visas</a></li>
                <li><a href="/visa/work-business" className="hover:text-orange-400 transition-colors">Work & Business Visas</a></li>
                <li><a href="/visa/travel-tourism" className="hover:text-orange-400 transition-colors">Travel & Tourism</a></li>
                <li><a href="/visa/extension-renewal" className="hover:text-orange-400 transition-colors">Extension & Renewal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Travel Insurance</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Itinerary Planning</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Support</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">24/7 Helpline</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Email: info@signinsoft.net</p>
                <p>Phone: +1(302) 703-1113</p>
                <p>Address: 1553 Route 27, Room 1000-2, Suite 1000, Somerset, NJ 08873</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 SigninSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
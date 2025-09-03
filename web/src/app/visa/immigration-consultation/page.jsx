"use client";

import { useState } from 'react';
import { Scale, CheckCircle, FileText, ArrowRight, ChevronDown, ChevronUp, Users, Award, Globe, Shield, Clock, Phone, Mail, MessageCircle, Calendar, User, Building, MapPin, Briefcase } from 'lucide-react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import Footer from '../../../components/HomePage/Footer';

export default function ImmigrationConsultationPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: '',
    currentStatus: '',
    message: ''
  });

  const [consultationFormData, setConsultationFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredTime: '',
    consultationType: 'general',
    currentLocation: '',
    targetCountry: '',
    message: ''
  });

  const benefits = [
    {
      icon: <Scale className="w-8 h-8 text-green-500" />,
      title: "Expert Legal Guidance",
      description: "Certified immigration lawyers with 15+ years of experience in complex cases."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "High Success Rate",
      description: "95% success rate in visa approvals and immigration case resolutions."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Global Coverage",
      description: "Immigration services for USA, Canada, UK, Australia, and 50+ countries."
    }
  ];

  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Family Immigration",
      description: "Reunite with your loved ones through family-based immigration programs.",
      features: ["Spouse visas", "Parent sponsorship", "Child immigration", "Fiancé visas"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Employment-Based Immigration",
      description: "Professional immigration services for skilled workers and investors.",
      features: ["Work permits", "Skilled worker visas", "Investor visas", "Entrepreneur programs"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Refugee & Asylum",
      description: "Compassionate legal support for those seeking protection and safety.",
      features: ["Asylum applications", "Refugee status", "Protection visas", "Appeal processes"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Business Immigration",
      description: "Corporate immigration solutions for businesses and their employees.",
      features: ["Corporate transfers", "Business visas", "Investment immigration", "Startup visas"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Citizenship & Naturalization",
      description: "Complete guidance through the citizenship and naturalization process.",
      features: ["Citizenship applications", "Naturalization tests", "Dual citizenship", "Passport services"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Deportation Defense",
      description: "Strong legal representation for deportation and removal proceedings.",
      features: ["Court representation", "Appeal processes", "Bond hearings", "Relief applications"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive case evaluation and strategy development with our immigration experts."
    },
    {
      step: "02", 
      title: "Documentation Review",
      description: "Thorough review and preparation of all required documents and evidence."
    },
    {
      step: "03",
      title: "Application Filing", 
      description: "Professional preparation and submission of your immigration application."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring and support throughout the entire process until resolution."
    }
  ];

  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      specialties: ["Green Cards", "H1B Visas", "Family Immigration", "Asylum Cases"]
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      specialties: ["Express Entry", "Provincial Nominee", "Family Class", "Refugee Protection"]
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      specialties: ["Skilled Worker", "Family Visas", "Student Visas", "Settlement"]
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      specialties: ["Skilled Migration", "Partner Visas", "Business Visas", "Humanitarian"]
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      specialties: ["Skilled Migrant", "Work Visas", "Family Category", "Investor Visas"]
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      specialties: ["EU Blue Card", "Family Reunion", "Job Seeker", "Investment"]
    }
  ];

  const faqs = [
    {
      question: "How long does the immigration consultation process take?",
      answer: "Initial consultations typically last 60-90 minutes. The overall immigration process timeline varies greatly depending on the case type, ranging from 6 months to several years."
    },
    {
      question: "What documents should I bring to my consultation?",
      answer: "Bring all relevant documents including passports, visas, employment records, educational certificates, marriage certificates, and any previous immigration correspondence."
    },
    {
      question: "Do you handle immigration cases for all countries?",
      answer: "We specialize in major immigration destinations including USA, Canada, UK, Australia, and EU countries. We also provide consultation for other countries through our global network."
    },
    {
      question: "What are your consultation fees?",
      answer: "Initial consultation fees vary by case complexity. We offer free 15-minute preliminary assessments and detailed fee structures are provided upfront with no hidden costs."
    },
    {
      question: "Can you help with urgent immigration matters?",
      answer: "Yes, we handle urgent cases including deportation defense, emergency travel documents, and expedited applications. Contact us immediately for time-sensitive matters."
    },
    {
      question: "Do you provide services in languages other than English?",
      answer: "Yes, our team speaks multiple languages including Spanish, Mandarin, Arabic, French, and more. We also work with certified interpreters when needed."
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      country: "Mexico → USA",
      text: "The team helped me navigate the complex family immigration process. After 2 years of waiting, I finally got my green card. Their expertise made all the difference.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt → Canada",
      text: "Professional, knowledgeable, and compassionate. They guided me through the Express Entry process and I received my permanent residence in 8 months.",
      rating: 5
    },
    {
      name: "Li Wei",
      country: "China → Australia",
      text: "Excellent service for my skilled migration visa. They handled everything professionally and kept me informed throughout the entire process.",
      rating: 5
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationFormChange = (e) => {
    setConsultationFormData({
      ...consultationFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation form submitted:', consultationFormData);
    setShowConsultationModal(false);
    // Handle consultation form submission
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar showTopHeader={true} />
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 pointer-events-none"></div>
        <div className="relative z-10">
        {/* Hero Section */}
      <section className="relative py-20 bg-green-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('/images/immigration-consultation-bg.svg')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-500 p-4 rounded-full">
                <Scale className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Immigration Consultation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Expert legal guidance for your immigration journey
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-80">
              Navigate complex immigration laws with confidence. Our certified immigration lawyers provide 
              comprehensive consultation services for individuals, families, and businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowConsultationModal(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +1 (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Why Choose Our Immigration Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted expertise and proven results in complex immigration matters
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Immigration Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive immigration solutions for every situation and need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-green-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Consultation Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring the best possible outcome for your immigration case
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Countries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized immigration services for major destinations worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-semibold text-green-900">{country.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {country.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from clients who achieved their immigration goals with our help
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-green-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our immigration consultation services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-green-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-500" />
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

      {/* Contact Form */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Immigration Journey Today</h2>
            <p className="text-lg opacity-90">
              Get personalized guidance from our immigration experts. Fill out the form below for a preliminary assessment.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Visa Type Needed</label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Visa Type</option>
                  <option value="family">Family Immigration</option>
                  <option value="employment">Employment-Based</option>
                  <option value="business">Business Immigration</option>
                  <option value="asylum">Refugee/Asylum</option>
                  <option value="citizenship">Citizenship</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Immigration Status</label>
                <input
                  type="text"
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Tourist, Student, Work Permit"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your situation</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Please describe your immigration goals and any specific concerns..."
              ></textarea>
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center mx-auto"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Submit for Review
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-green-900">Book Consultation</h3>
              <button 
                onClick={() => setShowConsultationModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={consultationFormData.fullName}
                  onChange={handleConsultationFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={consultationFormData.email}
                  onChange={handleConsultationFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={consultationFormData.phone}
                  onChange={handleConsultationFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <input
                  type="datetime-local"
                  name="preferredTime"
                  value={consultationFormData.preferredTime}
                  onChange={handleConsultationFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Location</label>
                <input
                  type="text"
                  name="currentLocation"
                  value={consultationFormData.currentLocation}
                  onChange={handleConsultationFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Country/City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Country</label>
                <input
                  type="text"
                  name="targetCountry"
                  value={consultationFormData.targetCountry}
                  onChange={handleConsultationFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Where do you want to immigrate?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                <select
                  name="consultationType"
                  value={consultationFormData.consultationType}
                  onChange={handleConsultationFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="general">General Immigration</option>
                  <option value="family">Family Immigration</option>
                  <option value="employment">Employment-Based</option>
                  <option value="business">Business Immigration</option>
                  <option value="asylum">Asylum/Refugee</option>
                  <option value="citizenship">Citizenship</option>
                  <option value="deportation">Deportation Defense</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brief Description</label>
                <textarea
                  name="message"
                  value={consultationFormData.message}
                  onChange={handleConsultationFormChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Briefly describe your situation..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book Consultation
              </button>
            </form>
          </div>
        </div>
      )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
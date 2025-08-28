"use client";

import { useState } from 'react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';
import { useDarkMode } from '../../hooks/useDarkMode';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Calendar,
  Headphones,
  Building,
  User
} from 'lucide-react';

export default function ContactPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    urgency: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Get detailed responses to your queries",
      contact: "contact@signinsoft.com",
      availability: "24/7 Response within 2 hours",
      action: "Send Email"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Instant support for quick questions",
      contact: "Available on website",
      availability: "Mon-Fri, 8AM-8PM EST",
      action: "Start Chat"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Meeting",
      description: "Book a consultation with our team",
      contact: "Online booking available",
      availability: "Flexible scheduling",
      action: "Book Now"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 500\nNew York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@signinsoft.com",
      hours: "Mon-Fri: 9AM-6PM\nSat: 10AM-2PM"
    },
    {
      city: "San Francisco",
      address: "456 Tech Street, Floor 12\nSan Francisco, CA 94105",
      phone: "+1 (555) 987-6543",
      email: "sf@signinsoft.com",
      hours: "Mon-Fri: 8AM-5PM\nSat: 9AM-1PM"
    },
    {
      city: "London",
      address: "789 Innovation Road\nLondon, UK EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "london@signinsoft.com",
      hours: "Mon-Fri: 9AM-5PM\nSat: Closed"
    }
  ];

  const services = [
    "Software Development",
    "UX/UI Design",
    "Data Analytics",
    "Business Consulting",
    "Employment Consulting",
    "Visa Services",
    "Study Abroad",
    "General Inquiry"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        urgency: 'medium'
      });
    }, 2000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <NavigationBar showTopHeader={true} />
      
      {/* Hero Section */}
      <section className={`relative py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-green-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-full">
                <Headphones className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to transform your business? We're here to help. Reach out to our team of experts 
              and let's discuss how we can drive your success forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multiple Ways to <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Choose the communication method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className={`p-6 rounded-xl border text-center transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-blue-100'
              }`}>
                <div className="text-blue-500 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className={`text-sm mb-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {method.description}
                </p>
                <div className="font-semibold text-blue-500 mb-2">{method.contact}</div>
                <div className={`text-xs mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {method.availability}
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`p-8 rounded-xl ${
              darkMode ? 'bg-gray-700' : 'bg-white shadow-sm'
            }`}>
              <h3 className="text-2xl font-bold mb-6">
                Send us a <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Message</span>
              </h3>
              
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-blue-500 hover:text-blue-600 font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Urgency Level
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                      >
                        <option value="low">Low - General inquiry</option>
                        <option value="medium">Medium - Within a week</option>
                        <option value="high">High - Within 24 hours</option>
                        <option value="urgent">Urgent - ASAP</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                        darkMode 
                          ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Our <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Offices</span>
                </h3>
                <p className={`mb-8 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Visit us at any of our global locations or connect with us remotely.
                </p>
              </div>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className={`p-6 rounded-xl border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-200 shadow-sm'
                  }`}>
                    <div className="flex items-start">
                      <div className="text-blue-500 mr-4 mt-1">
                        <Building className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{office.city}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                              {office.address}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                              {office.phone}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                              {office.email}
                            </span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                              {office.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer: "We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can often accommodate faster start times."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes, we serve clients globally. Our team is experienced in working across different time zones and can accommodate various communication preferences."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while larger enterprise solutions can take 3-6 months or more."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Absolutely! We offer various support packages including maintenance, updates, and technical support to ensure your solution continues to perform optimally."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Yes, we excel at collaborative partnerships. We can integrate with your existing team or work independently based on your preferences."
              }
            ].map((faq, index) => (
              <div key={index} className={`p-6 rounded-xl border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Project?</span>
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss your needs and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Free Consultation
            </button>
            <button className={`border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
              darkMode ? 'hover:text-white' : ''
            }`}>
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
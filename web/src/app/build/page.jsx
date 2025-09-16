"use client";

import { useState } from 'react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';
import { useDarkMode } from '../../hooks/useDarkMode';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  FileText, 
  Users, 
  Award,
  Phone,
  Mail,
  Star,
  RefreshCw,
  Search,
  Calendar
} from 'lucide-react';

export default function BuildPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeService, setActiveService] = useState('extension');

  const services = [
    {
      id: 'extension',
      title: 'Extension & Renewal Services',
      description: 'Seamless visa extensions and renewals to keep your status current',
      icon: <RefreshCw className="w-12 h-12" />,
      features: [
        'Visa Extension Processing',
        'Status Renewal Applications',
        'Document Preparation',
        'Timeline Management',
        'Status Tracking',
        'Expert Consultation'
      ],
      benefits: [
        'Avoid status gaps and complications',
        'Expert guidance through complex processes',
        'Timely submission to prevent delays',
        'Comprehensive document review'
      ]
    },
    {
      id: 'verification',
      title: 'Visa & Document Verification',
      description: 'Professional verification services for all your immigration documents',
      icon: <Shield className="w-12 h-12" />,
      features: [
        'Document Authentication',
        'Visa Status Verification',
        'Compliance Checking',
        'Legal Review',
        'Certification Services',
        'Digital Verification'
      ],
      benefits: [
        'Ensure document authenticity',
        'Prevent application rejections',
        'Meet compliance requirements',
        'Peace of mind with expert review'
      ]
    },
    {
      id: 'consultation',
      title: 'Immigration Consultation',
      description: 'Expert advice and strategic planning for your immigration journey',
      icon: <Users className="w-12 h-12" />,
      features: [
        'One-on-One Consultation',
        'Strategic Planning',
        'Case Assessment',
        'Timeline Development',
        'Risk Analysis',
        'Ongoing Support'
      ],
      benefits: [
        'Personalized immigration strategy',
        'Clear understanding of options',
        'Reduced risk of complications',
        'Expert guidance at every step'
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Corp",
      content: "The extension service was incredibly smooth. They handled everything professionally and kept me updated throughout the process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Research Scientist",
      company: "BioTech Inc",
      content: "Document verification saved me from potential issues. Their attention to detail is exceptional.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Global Solutions",
      content: "The consultation helped me understand my options clearly. Highly recommend their expertise.",
      rating: 5
    }
  ];

  const stats = [
    { number: "2,500+", label: "Successful Extensions" },
    { number: "98%", label: "Approval Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <NavigationBar showTopHeader={true} />
      
      {/* Hero Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-600 to-blue-800'
      } text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Immigration Success</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive immigration services to extend, verify, and optimize your visa status with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm md:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive immigration solutions tailored to your specific needs
            </p>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeService === service.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          {services.map((service) => (
            activeService === service.id && (
              <div key={service.id} className={`rounded-2xl overflow-hidden shadow-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className="text-blue-600 mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold">
                        {service.title}
                      </h3>
                    </div>
                    <p className={`text-lg mb-8 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                    
                    <h4 className="text-xl font-semibold mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`p-8 lg:p-12 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <h4 className="text-xl font-semibold mb-6">Service Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className={`p-4 rounded-lg ${
                          darkMode ? 'bg-gray-600' : 'bg-white'
                        } shadow-sm`}>
                          <div className="flex items-center">
                            <FileText className="w-5 h-5 text-blue-600 mr-3" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center">
                        Get Started with {service.title}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Simple, transparent steps to achieve your immigration goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial assessment of your case and requirements' },
              { step: '02', title: 'Documentation', description: 'Gather and prepare all necessary documents' },
              { step: '03', title: 'Processing', description: 'Submit applications and manage the process' },
              { step: '04', title: 'Success', description: 'Achieve your immigration goals with our support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className={`hidden md:block absolute top-8 left-full w-full h-0.5 ${
                      darkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Client <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Hear from our satisfied clients who achieved their immigration goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-6 italic ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-blue-600'
      } text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Immigration Success?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started today with our expert immigration services and take the next step in your journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +1(302) 703-1113
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Mail className="mr-2 w-5 h-5" />
              Email Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
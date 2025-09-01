"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import Footer from '../../../components/HomePage/Footer';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  Award,
  Phone,
  Mail,
  Star,
  Layers,
  Cloud,
  X,
  User,
  Building,
  Calendar,
  FileText,
  Download
} from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Modal states
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  
  // Form data states
  const [projectFormData, setProjectFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [callFormData, setCallFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    projectDetails: ''
  });
  
  const [messageFormData, setMessageFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Build responsive, scalable web applications using modern frameworks and technologies."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Create native and cross-platform mobile apps for iOS and Android platforms."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Develop robust APIs, microservices, and database solutions for your applications."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Deploy and manage applications on cloud platforms with scalability and security."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "Implement comprehensive security measures to protect your applications and data."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimize application performance for speed, efficiency, and user experience."
    }
  ];

  // Modal handlers
  const handleStartProject = () => setShowProjectModal(true);
  const handleViewPortfolio = () => setShowPortfolioModal(true);
  const handleScheduleCall = () => setShowCallModal(true);
  const handleSendMessage = () => setShowMessageModal(true);
  const closeModal = () => {
    setShowProjectModal(false);
    setShowPortfolioModal(false);
    setShowCallModal(false);
    setShowMessageModal(false);
  };

  // Form input handlers
  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCallInputChange = (e) => {
    const { name, value } = e.target;
    setCallFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMessageInputChange = (e) => {
    const { name, value } = e.target;
    setMessageFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form submission handlers
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    console.log('Project form submitted:', projectFormData);
    // Reset form
    setProjectFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    });
    closeModal();
    alert('Thank you! We\'ll contact you soon to discuss your project.');
  };

  const handleCallSubmit = (e) => {
    e.preventDefault();
    console.log('Call form submitted:', callFormData);
    // Reset form
    setCallFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      projectDetails: ''
    });
    closeModal();
    alert('Thank you! We\'ll schedule a call at your preferred time.');
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log('Message form submitted:', messageFormData);
    // Reset form
    setMessageFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
    closeModal();
    alert('Thank you! We\'ll get back to you soon.');
  };

  const handlePortfolioDownload = () => {
    console.log('Portfolio download initiated');
    closeModal();
    alert('Portfolio download started!');
  };

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "React Native",
    "Flutter",
    "AWS & Azure",
    "MongoDB & PostgreSQL",
    "Docker & Kubernetes",
    "GraphQL & REST APIs",
    "TypeScript",
    "Vue.js & Angular",
    "Microservices Architecture"
  ];

  const caseStudies = [
    {
      company: "E-Commerce Platform",
      industry: "Retail Technology",
      challenge: "Needed a scalable e-commerce platform with real-time inventory management",
      solution: "Built a full-stack solution with React, Node.js, and cloud infrastructure",
      result: "300% increase in transaction capacity and 50% faster page load times",
      duration: "4 months"
    },
    {
      company: "FinTech Startup",
      industry: "Financial Services",
      challenge: "Required secure mobile banking application with biometric authentication",
      solution: "Developed React Native app with advanced security features and real-time data",
      result: "100K+ downloads in first month and 99.9% uptime",
      duration: "6 months"
    },
    {
      company: "Healthcare Management",
      industry: "Healthcare",
      challenge: "Needed HIPAA-compliant patient management system",
      solution: "Created secure web platform with role-based access and data encryption",
      result: "40% improvement in patient data management efficiency",
      duration: "5 months"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      position: "CTO",
      company: "E-Commerce Platform",
      text: "SigninSoft delivered an exceptional e-commerce solution that exceeded our performance expectations. Their technical expertise is outstanding.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      position: "Product Manager",
      company: "FinTech Startup",
      text: "The mobile app they developed is incredibly secure and user-friendly. Our customers love the seamless experience.",
      rating: 5
    },
    {
      name: "Dr. James Miller",
      position: "Director",
      company: "Healthcare Management",
      text: "Professional, reliable, and delivered exactly what we needed. The system has transformed our patient management process.",
      rating: 5
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <NavigationBar showTopHeader={true} />
      
      {/* Hero Section */}
      <section className={`relative py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-orange-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-full">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software <span className="text-orange-500">Development</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Transform your ideas into powerful, scalable software solutions. We build custom applications 
              that drive business growth and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartProject}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={handleViewPortfolio}
                className={`border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors ${
                  darkMode ? 'hover:text-white' : ''
                }`}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development <span className="text-orange-500">Services</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From concept to deployment, we provide end-to-end software development services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-orange-500' 
                  : 'bg-white border-gray-200 hover:border-orange-500 hover:shadow-orange-100'
              }`}>
                <div className="text-orange-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We <span className="text-orange-500">Master</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We work with cutting-edge technologies to build modern, efficient solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-white hover:bg-orange-50 border border-gray-200'
              }`}>
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success <span className="text-orange-500">Stories</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Real projects, real results. See how we've helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className={`p-6 rounded-xl border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-sm'
              }`}>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    darkMode ? 'bg-orange-900 text-orange-300' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {study.industry}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-500 mb-1">Challenge:</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-500 mb-1">Solution:</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-500 mb-1">Result:</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{study.result}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Duration: {study.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-orange-500">Testimonials</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Don't just take our word for it. Here's what our clients say about our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white shadow-sm'
              }`}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-4 italic ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your <span className="text-orange-500">Next Project?</span>
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss your software development needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleScheduleCall}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Call
            </button>
            <button 
              onClick={handleSendMessage}
              className={`border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                darkMode ? 'hover:text-white' : ''
              }`}
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Start Project Modal */}
      {showProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Start Your Project</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleProjectSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={projectFormData.name}
                      onChange={handleProjectInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={projectFormData.email}
                      onChange={handleProjectInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={projectFormData.company}
                      onChange={handleProjectInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={projectFormData.phone}
                      onChange={handleProjectInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Type</label>
                  <select
                    name="projectType"
                    value={projectFormData.projectType}
                    onChange={handleProjectInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  >
                    <option value="">Select project type</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="desktop">Desktop Software</option>
                    <option value="api">API Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Budget Range</label>
                  <select
                    name="budget"
                    value={projectFormData.budget}
                    onChange={handleProjectInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Timeline</label>
                  <select
                    name="timeline"
                    value={projectFormData.timeline}
                    onChange={handleProjectInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  >
                    <option value="">Select timeline</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="12months+">12+ months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Description</label>
                  <textarea
                    name="description"
                    value={projectFormData.description}
                    onChange={handleProjectInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className={`flex-1 px-4 py-2 border rounded-lg font-medium transition-colors ${
                    darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  Start Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Portfolio Modal */}
      {showPortfolioModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Portfolio Access</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <FileText className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Download Our Portfolio</h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Get access to our complete portfolio showcasing our latest projects and case studies.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className={`flex-1 px-4 py-2 border rounded-lg font-medium transition-colors ${
                    darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handlePortfolioDownload}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Schedule a Call</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleCallSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={callFormData.name}
                      onChange={handleCallInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={callFormData.email}
                      onChange={handleCallInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={callFormData.phone}
                      onChange={handleCallInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={callFormData.preferredDate}
                      onChange={handleCallInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={callFormData.preferredTime}
                    onChange={handleCallInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  >
                    <option value="">Select preferred time</option>
                    <option value="9am-12pm">9:00 AM - 12:00 PM</option>
                    <option value="12pm-3pm">12:00 PM - 3:00 PM</option>
                    <option value="3pm-6pm">3:00 PM - 6:00 PM</option>
                    <option value="6pm-9pm">6:00 PM - 9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Details</label>
                  <textarea
                    name="projectDetails"
                    value={callFormData.projectDetails}
                    onChange={handleCallInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="Brief description of what you'd like to discuss..."
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className={`flex-1 px-4 py-2 border rounded-lg font-medium transition-colors ${
                    darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  Schedule Call
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Send Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Send Message</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleMessageSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={messageFormData.name}
                      onChange={handleMessageInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={messageFormData.email}
                      onChange={handleMessageInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={messageFormData.company}
                      onChange={handleMessageInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={messageFormData.subject}
                    onChange={handleMessageInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={messageFormData.message}
                    onChange={handleMessageInputChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className={`flex-1 px-4 py-2 border rounded-lg font-medium transition-colors ${
                    darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Search, 
  Target, 
  Award, 
  TrendingUp, 
  UserCheck,
  Phone,
  Mail,
  Star,
  Briefcase,
  X,
  Download,
  User
} from 'lucide-react';

export default function EmploymentConsultingPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [showModal, setShowModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    hiringNeeds: ''
  });
  const [searchFormData, setSearchFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    salary: '',
    resume: null
  });
  const [consultationFormData, setConsultationFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    hiringNeeds: '',
    timeline: '',
    budget: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(true);
  };

  // Modal handlers
  const handleStartSearch = () => {
    setShowSearchModal(true);
  };

  const handleScheduleConsultation = () => {
    setShowConsultationModal(true);
  };

  const closeAllModals = () => {
    setShowModal(false);
    setShowSearchModal(false);
    setShowConsultationModal(false);
  };

  // Search form handlers
  const handleSearchFormChange = (e) => {
    const { name, value, files } = e.target;
    setSearchFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    console.log('Search form submitted:', searchFormData);
    // Reset form
    setSearchFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      location: '',
      salary: '',
      resume: null
    });
    closeAllModals();
    alert('Your job search request has been submitted successfully!');
  };

  // Consultation form handlers
  const handleConsultationFormChange = (e) => {
    const { name, value } = e.target;
    setConsultationFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsultationFormSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation form submitted:', consultationFormData);
    // Reset form
    setConsultationFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      hiringNeeds: '',
      timeline: '',
      budget: ''
    });
    closeAllModals();
    alert('Your consultation request has been submitted successfully!');
  };
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Talent Acquisition",
      description: "Find and attract top talent with our comprehensive recruitment strategies and candidate sourcing."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "HR Strategy",
      description: "Develop effective HR policies and procedures that align with your business objectives."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Workforce Planning",
      description: "Strategic workforce planning to ensure you have the right people in the right roles."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Employee Development",
      description: "Create comprehensive training and development programs to enhance employee skills."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Management",
      description: "Implement performance management systems that drive results and employee engagement."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Retention Strategies",
      description: "Develop strategies to retain top talent and reduce employee turnover costs."
    }
  ];

  const services = [
    "Executive Search & Recruitment",
    "HR Policy Development",
    "Employee Onboarding Programs",
    "Performance Management Systems",
    "Compensation & Benefits Design",
    "Training & Development",
    "Employee Engagement Surveys",
    "Succession Planning",
    "Diversity & Inclusion Programs",
    "HR Technology Implementation",
    "Compliance & Legal Support",
    "Change Management"
  ];

  const caseStudies = [
    {
      company: "TechStart Solutions",
      industry: "Technology",
      challenge: "High employee turnover and difficulty attracting skilled developers",
      solution: "Comprehensive talent acquisition strategy and employee retention program",
      result: "50% reduction in turnover and 75% faster hiring process",
      duration: "4 months"
    },
    {
      company: "Healthcare Partners",
      industry: "Healthcare",
      challenge: "Need for specialized healthcare professionals and compliance issues",
      solution: "Targeted recruitment campaigns and HR compliance framework",
      result: "90% success rate in filling critical positions and full compliance",
      duration: "6 months"
    },
    {
      company: "Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Skills gap and aging workforce requiring succession planning",
      solution: "Skills development programs and comprehensive succession planning",
      result: "80% internal promotion rate and seamless leadership transitions",
      duration: "12 months"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      position: "HR Director",
      company: "TechStart Solutions",
      text: "SigninSoft revolutionized our hiring process. We went from struggling to find talent to having a pipeline of qualified candidates.",
      rating: 5
    },
    {
      name: "David Thompson",
      position: "CEO",
      company: "Healthcare Partners",
      text: "Their expertise in healthcare recruitment is unmatched. They understand the unique challenges of our industry.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      position: "Operations Manager",
      company: "Manufacturing Corp",
      text: "The succession planning program they developed ensured smooth transitions and maintained our operational excellence.",
      rating: 5
    }
  ];

  const process = [
    {
      step: "01",
      title: "Needs Assessment",
      description: "Analyze your current workforce, identify gaps, and understand your hiring needs."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create customized recruitment and HR strategies aligned with your business goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute recruitment campaigns, implement HR systems, and launch development programs."
    },
    {
      step: "04",
      title: "Candidate Management",
      description: "Screen, interview, and manage candidates throughout the hiring process."
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Provide continuous support, monitoring, and optimization of HR processes."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} showTopHeader={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Employment Consulting Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert recruitment, HR strategy, and talent management solutions to build your dream team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Hiring Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Employment Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive employment consulting services to attract, develop, and retain top talent
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete HR Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                From recruitment to retention, we provide end-to-end employment consulting services 
                that help you build and maintain a high-performing workforce.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">HR Solutions Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recruitment Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures you find the right talent for your organization
            </p>
          </div>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from companies we've helped build great teams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.company}</h3>
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">{study.industry}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Solution</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Result</h4>
                    <p className="text-sm text-green-600 font-medium">{study.result}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-xs text-gray-500">Duration: {study.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">Hear from HR leaders who've transformed their hiring</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized recruitment expertise across key industries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Technology", icon: "💻" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Finance", icon: "💰" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Retail", icon: "🛍️" },
              { name: "Education", icon: "🎓" },
              { name: "Legal", icon: "⚖️" },
              { name: "Consulting", icon: "📊" }
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our employment experts help you find and retain the best talent for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartSearch}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Search
            </button>
            <button 
              onClick={handleScheduleConsultation}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Find Your Next Great Hire</h3>
              <p className="text-gray-600 mb-6">
                Contact our employment consulting specialists to discuss your hiring needs and how we can help you build a winning team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-green-600 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-green-600 mr-3" />
                  <span>employment@SigninSoft.com</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hiring Needs</label>
                  <textarea 
                    rows="4" 
                    name="hiringNeeds"
                    value={formData.hiringNeeds}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                    placeholder="Tell us about the positions you need to fill..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">SigninSoft</div>
              <p className="text-gray-400">Transforming businesses through expert consulting and innovative solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/business-consulting" className="hover:text-white">Business Consulting</a></li>
                <li><a href="/services/employment-consulting" className="hover:text-white">Employment Consulting</a></li>
                <li><a href="/services/visa-consulting" className="hover:text-white">Visa Consulting</a></li>
                <li><a href="/services/design-and-development" className="hover:text-white">Design & Development</a></li>
                <li><a href="/services/staffing-services" className="hover:text-white">Staffing Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/career" className="hover:text-white">Career</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SigninSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thank You for Your Interest!
              </h3>
              
              <p className="text-gray-600 mb-6">
                We've received your employment consulting inquiry. Our recruitment specialists will review your hiring needs and contact you within 24 hours to discuss how we can help you build your dream team.
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Continue Browsing
                </button>
                
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download Employment Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Start Your Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Start Your Job Search</h3>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSearchFormSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={searchFormData.fullName}
                  onChange={handleSearchFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={searchFormData.email}
                  onChange={handleSearchFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={searchFormData.phone}
                  onChange={handleSearchFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Desired Position</label>
                <input
                  type="text"
                  name="position"
                  value={searchFormData.position}
                  onChange={handleSearchFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., Software Engineer, Marketing Manager"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <select
                  name="experience"
                  value={searchFormData.experience}
                  onChange={handleSearchFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Experience</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior Level (6-10 years)</option>
                  <option value="executive">Executive (10+ years)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                <input
                  type="text"
                  name="location"
                  value={searchFormData.location}
                  onChange={handleSearchFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="City, State or Remote"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Salary Range</label>
                <select
                  name="salary"
                  value={searchFormData.salary}
                  onChange={handleSearchFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Range</option>
                  <option value="30k-50k">$30,000 - $50,000</option>
                  <option value="50k-75k">$50,000 - $75,000</option>
                  <option value="75k-100k">$75,000 - $100,000</option>
                  <option value="100k-150k">$100,000 - $150,000</option>
                  <option value="150k+">$150,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resume Upload</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleSearchFormChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  Start Job Search
                </button>
                <button
                  type="button"
                  onClick={closeAllModals}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Schedule Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Schedule Consultation</h3>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleConsultationFormSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={consultationFormData.fullName}
                  onChange={handleConsultationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={consultationFormData.email}
                  onChange={handleConsultationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={consultationFormData.company}
                  onChange={handleConsultationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  name="industry"
                  value={consultationFormData.industry}
                  onChange={handleConsultationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hiring Needs</label>
                <textarea
                  name="hiringNeeds"
                  value={consultationFormData.hiringNeeds}
                  onChange={handleConsultationFormChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Describe the positions you need to fill..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={consultationFormData.timeline}
                  onChange={handleConsultationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Timeline</option>
                  <option value="immediate">Immediate (1-2 weeks)</option>
                  <option value="short">Short-term (1-3 months)</option>
                  <option value="medium">Medium-term (3-6 months)</option>
                  <option value="long">Long-term (6+ months)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={consultationFormData.budget}
                  onChange={handleConsultationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Budget</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-30k">$15,000 - $30,000</option>
                  <option value="30k-50k">$30,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </button>
                <button
                  type="button"
                  onClick={closeAllModals}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
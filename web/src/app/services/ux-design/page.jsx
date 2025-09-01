"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import Footer from '../../../components/HomePage/Footer';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { 
  ArrowRight, 
  CheckCircle, 
  Palette, 
  Users, 
  Eye, 
  Smartphone, 
  Monitor, 
  Zap,
  Award,
  Phone,
  Mail,
  Star,
  Figma,
  Layers,
  X,
  User,
  Building,
  Calendar,
  FileText,
  Download
} from 'lucide-react';

export default function UXDesignPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Modal states
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  
  // Form data states
  const [projectFormData, setProjectFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: ''
  });
  
  const [consultationFormData, setConsultationFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    projectDetails: ''
  });
  
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    features: [],
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "User Research",
      description: "Deep dive into user behavior, needs, and pain points to inform design decisions."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create intuitive, beautiful interfaces that enhance user experience and engagement."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Design",
      description: "Design responsive mobile experiences that work seamlessly across all devices."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Craft modern, responsive web designs that convert visitors into customers."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Design Systems",
      description: "Build scalable design systems that ensure consistency across all touchpoints."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Prototyping",
      description: "Create interactive prototypes to test and validate design concepts before development."
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your users, business goals, and market landscape",
      activities: ["User interviews", "Competitive analysis", "Stakeholder workshops", "Requirements gathering"]
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Defining design strategy and creating project roadmap",
      activities: ["User personas", "Journey mapping", "Information architecture", "Design strategy"]
    },
    {
      step: "03",
      title: "Design & Prototype",
      description: "Creating visual designs and interactive prototypes",
      activities: ["Wireframing", "Visual design", "Interactive prototypes", "Design systems"]
    },
    {
      step: "04",
      title: "Test & Iterate",
      description: "Validating designs through testing and continuous improvement",
      activities: ["Usability testing", "A/B testing", "Design iterations", "Performance optimization"]
    }
  ];

  const caseStudies = [
    {
      company: "E-Learning Platform",
      industry: "Education Technology",
      challenge: "Complex learning management system with poor user engagement",
      solution: "Redesigned user interface with gamification elements and intuitive navigation",
      result: "85% increase in user engagement and 60% reduction in support tickets",
      duration: "3 months"
    },
    {
      company: "Healthcare App",
      industry: "Healthcare",
      challenge: "Medical professionals needed efficient patient data access on mobile",
      solution: "Created streamlined mobile interface with quick access patterns and data visualization",
      result: "40% faster patient data retrieval and 95% user satisfaction rate",
      duration: "4 months"
    },
    {
      company: "Financial Dashboard",
      industry: "FinTech",
      challenge: "Complex financial data needed to be accessible to non-technical users",
      solution: "Designed intuitive dashboard with clear data visualization and guided workflows",
      result: "70% improvement in user task completion and 50% reduction in training time",
      duration: "5 months"
    }
  ];

  const testimonials = [
    {
      name: "Rachel Thompson",
      position: "Product Manager",
      company: "E-Learning Platform",
      text: "The UX redesign completely transformed our platform. User engagement skyrocketed and our support team is much happier with fewer confused users.",
      rating: 5
    },
    {
      name: "Dr. Mark Stevens",
      position: "Chief Medical Officer",
      company: "Healthcare App",
      text: "SigninSoft understood our complex workflow needs and created an interface that actually makes our jobs easier. Exceptional work.",
      rating: 5
    },
    {
      name: "Jennifer Liu",
      position: "CEO",
      company: "Financial Dashboard",
      text: "They took our complex financial data and made it accessible to everyone. The design is both beautiful and functional.",
      rating: 5
    }
  ];

  const tools = [
    "Figma",
    "Adobe Creative Suite",
    "Sketch",
    "InVision",
    "Principle",
    "Framer",
    "Miro",
    "Hotjar",
    "Maze",
    "UserTesting",
    "Optimal Workshop",
    "Zeplin"
  ];
  
  // Modal handlers
  const handleStartProject = () => setShowProjectModal(true);
  const handleViewPortfolio = () => setShowPortfolioModal(true);
  const handleScheduleConsultation = () => setShowConsultationModal(true);
  const handleGetQuote = () => setShowQuoteModal(true);
  const closeModal = () => {
    setShowProjectModal(false);
    setShowPortfolioModal(false);
    setShowConsultationModal(false);
    setShowQuoteModal(false);
  };
  
  // Form input handlers
  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleConsultationInputChange = (e) => {
    const { name, value } = e.target;
    setConsultationFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleQuoteInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setQuoteFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, value]
          : prev.features.filter(f => f !== value)
      }));
    } else {
      setQuoteFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  // Form submission handlers
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    console.log('Project form submitted:', projectFormData);
    alert('Thank you! We\'ll contact you soon to discuss your design project.');
    closeModal();
    setProjectFormData({
      name: '', email: '', company: '', projectType: '', timeline: '', budget: '', description: ''
    });
  };
  
  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation form submitted:', consultationFormData);
    alert('Thank you! We\'ll contact you to schedule your consultation.');
    closeModal();
    setConsultationFormData({
      name: '', email: '', company: '', phone: '', preferredDate: '', preferredTime: '', projectDetails: ''
    });
  };
  
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Quote form submitted:', quoteFormData);
    alert('Thank you! We\'ll prepare a detailed quote and send it to you soon.');
    closeModal();
    setQuoteFormData({
      name: '', email: '', company: '', projectType: '', features: [], timeline: '', budget: '', additionalInfo: ''
    });
  };
  
  const handlePortfolioDownload = () => {
    alert('Portfolio download started! Check your downloads folder.');
    closeModal();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <NavigationBar showTopHeader={true} />
      
      {/* Hero Section */}
      <section className={`relative py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-50 to-pink-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full">
                <Palette className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              UX/UI <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Design</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Create exceptional user experiences that delight your customers and drive business growth. 
              We design interfaces that are both beautiful and functional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartProject}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                Start Your Design Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={handleViewPortfolio}
                className={`border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors ${
                  darkMode ? 'hover:text-white' : ''
                }`}
              >
                View Our Portfolio
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
              Our Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From research to final design, we provide comprehensive UX/UI design services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500' 
                  : 'bg-white border-gray-200 hover:border-purple-500 hover:shadow-purple-100'
              }`}>
                <div className="text-purple-500 mb-4">
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

      {/* Design Process Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A proven methodology that ensures successful design outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <div key={index} className={`relative p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white shadow-sm'
              }`}>
                <div className="text-4xl font-bold text-purple-500 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {process.description}
                </p>
                <ul className="space-y-2">
                  {process.activities.map((activity, actIndex) => (
                    <li key={actIndex} className={`text-sm flex items-center ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
                {index < designProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-purple-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We use industry-leading tools to create exceptional designs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-50 hover:bg-purple-50 border border-gray-200'
              }`}>
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Real projects, measurable results. See how great design drives business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className={`p-6 rounded-xl border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-200 shadow-sm'
              }`}>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'
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
                  
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
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
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Don't just take our word for it. Here's what our clients say about our design work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50 shadow-sm'
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
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">User Experience?</span>
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss your design needs and create experiences that your users will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleScheduleConsultation}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Consultation
            </button>
            <button 
              onClick={handleGetQuote}
              className={`border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                darkMode ? 'hover:text-white' : ''
              }`}
            >
              <Mail className="mr-2 w-5 h-5" />
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Start Your Design Project Modal */}
      {showProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Start Your Design Project</h3>
                <button onClick={closeModal} className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleProjectSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={projectFormData.name}
                        onChange={handleProjectInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={projectFormData.email}
                        onChange={handleProjectInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company/Organization</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={projectFormData.company}
                      onChange={handleProjectInputChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={projectFormData.projectType}
                      onChange={handleProjectInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="web-design">Web Design</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="dashboard">Dashboard/Admin Panel</option>
                      <option value="e-commerce">E-commerce Platform</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={projectFormData.timeline}
                      onChange={handleProjectInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={projectFormData.budget}
                    onChange={handleProjectInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Description *</label>
                  <textarea
                    name="description"
                    value={projectFormData.description}
                    onChange={handleProjectInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                    required
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    Submit Project Request
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className={`px-6 py-3 rounded-lg border font-semibold transition-colors ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Our Portfolio Modal */}
      {showPortfolioModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Our Design Portfolio</h3>
                <button onClick={closeModal} className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className="text-lg font-semibold mb-2">Featured Projects</h4>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Explore our collection of successful design projects across various industries.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>E-Learning Platform Redesign</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Healthcare Mobile App</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Financial Dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>E-commerce Platform</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>SaaS Application Interface</span>
                    </li>
                  </ul>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className="text-lg font-semibold mb-2">What's Included</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Detailed case studies with before/after comparisons</span>
                    </li>
                    <li className="flex items-center">
                      <Eye className="w-5 h-5 text-purple-500 mr-2" />
                      <span>User experience design process documentation</span>
                    </li>
                    <li className="flex items-center">
                      <Palette className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Visual design samples and style guides</span>
                    </li>
                    <li className="flex items-center">
                      <Smartphone className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Mobile and responsive design examples</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={handlePortfolioDownload}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Portfolio
                  </button>
                  <button
                    onClick={closeModal}
                    className={`px-6 py-3 rounded-lg border font-semibold transition-colors ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule a Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Schedule a Consultation</h3>
                <button onClick={closeModal} className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={consultationFormData.name}
                        onChange={handleConsultationInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={consultationFormData.email}
                        onChange={handleConsultationInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company/Organization</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={consultationFormData.company}
                        onChange={handleConsultationInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={consultationFormData.phone}
                        onChange={handleConsultationInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={consultationFormData.preferredDate}
                        onChange={handleConsultationInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time</label>
                    <select
                      name="preferredTime"
                      value={consultationFormData.preferredTime}
                      onChange={handleConsultationInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    >
                      <option value="">Select time</option>
                      <option value="9am-11am">9:00 AM - 11:00 AM</option>
                      <option value="11am-1pm">11:00 AM - 1:00 PM</option>
                      <option value="1pm-3pm">1:00 PM - 3:00 PM</option>
                      <option value="3pm-5pm">3:00 PM - 5:00 PM</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <textarea
                    name="projectDetails"
                    value={consultationFormData.projectDetails}
                    onChange={handleConsultationInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    placeholder="Tell us about your project and what you'd like to discuss during the consultation..."
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    Schedule Consultation
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className={`px-6 py-3 rounded-lg border font-semibold transition-colors ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Get a Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Get a Quote</h3>
                <button onClick={closeModal} className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={quoteFormData.name}
                        onChange={handleQuoteInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={quoteFormData.email}
                        onChange={handleQuoteInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company/Organization</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={quoteFormData.company}
                      onChange={handleQuoteInputChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={quoteFormData.projectType}
                    onChange={handleQuoteInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="web-design">Web Design</option>
                    <option value="mobile-app">Mobile App Design</option>
                    <option value="dashboard">Dashboard/Admin Panel</option>
                    <option value="e-commerce">E-commerce Platform</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Required Features (Select all that apply)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'User Research',
                      'Wireframing',
                      'Visual Design',
                      'Prototyping',
                      'User Testing',
                      'Design System',
                      'Mobile Design',
                      'Responsive Design'
                    ].map((feature) => (
                      <label key={feature} className="flex items-center">
                        <input
                          type="checkbox"
                          value={feature}
                          checked={quoteFormData.features.includes(feature)}
                          onChange={handleQuoteInputChange}
                          className="mr-2 w-4 h-4 text-purple-500 rounded focus:ring-purple-500"
                        />
                        <span className="text-sm">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={quoteFormData.timeline}
                      onChange={handleQuoteInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={quoteFormData.budget}
                      onChange={handleQuoteInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={quoteFormData.additionalInfo}
                    onChange={handleQuoteInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    placeholder="Any additional details about your project requirements..."
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    Request Quote
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className={`px-6 py-3 rounded-lg border font-semibold transition-colors ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
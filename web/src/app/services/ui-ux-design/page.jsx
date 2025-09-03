"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import Footer from '../../../components/HomePage/Footer';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { 
  Palette, 
  Smartphone, 
  Monitor, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Globe, 
  Eye, 
  Heart, 
  Search, 
  Award,
  Phone,
  Mail,
  Star,
  Clock,
  Target,
  Brain,
  FileText,
  Wifi,
  Shield,
  X,
  Upload,
  Calendar,
  MessageCircle,
  Download,
  Laptop,
  Code,
  BarChart3,
  Cog,
  Network,
  HardDrive,
  Figma,
  Layers,
  MousePointer,
  Tablet,
  Brush,
  Layout,
  PenTool,
  Image,
  Play
} from 'lucide-react';

export default function UIUXDesignPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Modal states
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  
  // Form states
  const [getStartedFormData, setGetStartedFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'web-design',
    budget: '5000-10000',
    timeline: '2-4-weeks',
    message: ''
  });
  
  const [consultationFormData, setConsultationFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredTime: '',
    designType: 'ui-ux',
    message: ''
  });

  // Modal handlers
  const handleGetStarted = () => setShowGetStartedModal(true);
  const handleConsultation = () => setShowConsultationModal(true);
  const handlePortfolio = () => setShowPortfolioModal(true);
  const handleQuote = () => setShowQuoteModal(true);
  const closeAllModals = () => {
    setShowGetStartedModal(false);
    setShowConsultationModal(false);
    setShowPortfolioModal(false);
    setShowQuoteModal(false);
  };

  // Form handlers
  const handleGetStartedFormChange = (e) => {
    setGetStartedFormData({ ...getStartedFormData, [e.target.name]: e.target.value });
  };
  
  const handleConsultationFormChange = (e) => {
    setConsultationFormData({ ...consultationFormData, [e.target.name]: e.target.value });
  };
  
  const handleGetStartedFormSubmit = (e) => {
    e.preventDefault();
    console.log('Get Started Form:', getStartedFormData);
    closeAllModals();
  };
  
  const handleConsultationFormSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation Form:', consultationFormData);
    closeAllModals();
  };

  const designServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user interfaces with exceptional user experience design.",
      features: ["User research & personas", "Wireframing & prototyping", "Visual design systems", "Usability testing"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Design",
      description: "Design beautiful and functional mobile applications for iOS and Android platforms.",
      features: ["Native app design", "Cross-platform UI", "App store optimization", "Mobile-first approach"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Modern, responsive web designs that convert visitors into customers.",
      features: ["Responsive design", "Landing pages", "E-commerce design", "CMS integration"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Design Systems",
      description: "Comprehensive design systems and style guides for consistent brand experience.",
      features: ["Component libraries", "Style guides", "Brand guidelines", "Design tokens"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Create compelling brand identities that resonate with your target audience.",
      features: ["Logo design", "Brand strategy", "Visual identity", "Brand guidelines"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Research",
      description: "In-depth user research to understand your audience and optimize user experience.",
      features: ["User interviews", "Usability testing", "Analytics review", "Persona development"]
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your business goals, target audience, and market landscape",
      activities: ["Stakeholder interviews", "User research", "Competitive analysis", "Requirements gathering"]
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop design strategy and create detailed project roadmap",
      activities: ["Design strategy", "Information architecture", "User journey mapping", "Project planning"]
    },
    {
      step: "03",
      title: "Design & Prototype",
      description: "Create wireframes, mockups, and interactive prototypes",
      activities: ["Wireframing", "Visual design", "Prototyping", "Design system creation"]
    },
    {
      step: "04",
      title: "Test & Iterate",
      description: "User testing, feedback collection, and design refinement",
      activities: ["Usability testing", "A/B testing", "Feedback integration", "Final delivery"]
    }
  ];

  const designTools = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Figma",
      description: "Collaborative design and prototyping platform"
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Adobe Creative Suite",
      description: "Professional design tools for visual creation"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Sketch",
      description: "Vector-based design tool for digital interfaces"
    },
    {
      icon: <MousePointer className="w-6 h-6" />,
      title: "InVision",
      description: "Digital product design and prototyping platform"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Principle",
      description: "Timeline-based animation and interaction design"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Hotjar",
      description: "User behavior analytics and heatmap tools"
    }
  ];

  const portfolioProjects = [
    {
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Complete redesign of an e-commerce platform resulting in 40% increase in conversions",
      image: "/api/placeholder/400/300",
      tags: ["UI/UX", "E-commerce", "Responsive"]
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Design",
      description: "Patient management app with intuitive interface and seamless user experience",
      image: "/api/placeholder/400/300",
      tags: ["Mobile", "Healthcare", "iOS/Android"]
    },
    {
      title: "SaaS Dashboard",
      category: "Dashboard Design",
      description: "Complex data visualization dashboard with clean and modern interface",
      image: "/api/placeholder/400/300",
      tags: ["Dashboard", "SaaS", "Data Viz"]
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete brand identity including logo, guidelines, and marketing materials",
      image: "/api/placeholder/400/300",
      tags: ["Branding", "Identity", "Guidelines"]
    }
  ];

  const industries = [
    {
      name: "E-commerce & Retail",
      icon: <Globe className="w-8 h-8" />,
      description: "Online stores and retail platforms with focus on conversion optimization",
      requirements: ["Product catalogs", "Shopping carts", "Payment flows", "Mobile commerce"]
    },
    {
      name: "Healthcare & Medical",
      icon: <Heart className="w-8 h-8" />,
      description: "HIPAA-compliant designs for healthcare providers and medical platforms",
      requirements: ["Patient portals", "Telemedicine", "Medical records", "Appointment booking"]
    },
    {
      name: "Financial Services",
      icon: <Shield className="w-8 h-8" />,
      description: "Secure and trustworthy designs for banking and financial applications",
      requirements: ["Banking interfaces", "Investment platforms", "Security features", "Compliance"]
    },
    {
      name: "SaaS & Technology",
      icon: <Monitor className="w-8 h-8" />,
      description: "Complex software interfaces and dashboard designs for tech companies",
      requirements: ["Admin dashboards", "User onboarding", "Data visualization", "API interfaces"]
    }
  ];

  const designPrinciples = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centered Design",
      description: "Every design decision is based on user needs and behavior patterns"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Hierarchy",
      description: "Clear information architecture that guides users through content"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Focused",
      description: "Optimized designs that load fast and perform well across devices"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversion Optimized",
      description: "Designs that drive business results and achieve your goals"
    }
  ];

  const metrics = [
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-8 h-8" />
    },
    {
      number: "45%",
      label: "Average Conversion Increase",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      number: "200+",
      label: "Projects Completed",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      number: "72h",
      label: "Average Response Time",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "TechStart Solutions",
      text: "The UI/UX redesign transformed our user engagement. We saw a 60% increase in user retention within the first month.",
      rating: 5
    },
    {
      name: "David Kim",
      position: "Product Manager",
      company: "HealthTech Inc",
      text: "Outstanding design work that perfectly balanced aesthetics with functionality. The team understood our complex requirements.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      position: "CEO",
      company: "E-commerce Plus",
      text: "Professional, creative, and results-driven. Our conversion rates improved by 40% after the redesign. Highly recommended!",
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
              UI/UX Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Create exceptional digital experiences that delight users and drive business results. 
              Our expert designers craft intuitive interfaces that convert visitors into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={handlePortfolio}
                className={`border-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                <Eye className="mr-2 w-5 h-5" />
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive design services to create exceptional digital experiences across all platforms and touchpoints.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500' 
                  : 'bg-white border-gray-200 hover:border-purple-300'
              }`}>
                <div className="text-purple-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A proven methodology that ensures exceptional results through user-centered design and iterative improvement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
                <ul className="space-y-1 text-sm">
                  {step.activities.map((activity, idx) => (
                    <li key={idx} className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      • {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore some of our recent design projects that showcase our expertise across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className={`h-48 flex items-center justify-center ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <div className="text-center">
                    <Image className={`w-16 h-16 mx-auto mb-2 ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`} />
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Project Preview</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      darkMode 
                        ? 'bg-purple-900 text-purple-300' 
                        : 'bg-purple-100 text-purple-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handlePortfolio}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We use industry-leading design tools and technologies to create exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTools.map((tool, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
                darkMode 
                  ? 'bg-gray-900 border-gray-700 hover:border-purple-500' 
                  : 'bg-white border-gray-200 hover:border-purple-300'
              }`}>
                <div className="flex items-center mb-3">
                  <div className="text-purple-500 mr-3">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                </div>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Design <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our core design principles that guide every project and ensure exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-500 mb-4 flex justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Specialized design solutions tailored to industry-specific requirements and user expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${
                darkMode 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center mb-4">
                  <div className="text-purple-500 mr-4">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{industry.name}</h3>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {industry.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {industry.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Results</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-500 mb-4 flex justify-center">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{metric.number}</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Testimonials</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${
                darkMode 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-6 italic ${
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl p-12 text-center ${
            darkMode 
              ? 'bg-gradient-to-r from-purple-900 to-pink-900' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Amazing User Experiences?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's transform your ideas into beautiful, functional designs that users love and businesses succeed with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Palette className="mr-2 w-5 h-5" />
                Start Your Design Project
              </button>
              <button 
                onClick={handleQuote}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {showGetStartedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-8 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Start Your Project</h3>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleGetStartedFormSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={getStartedFormData.fullName}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={getStartedFormData.email}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={getStartedFormData.phone}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Company</label>
                <input
                  type="text"
                  name="company"
                  value={getStartedFormData.company}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Project Type</label>
                <select
                  name="projectType"
                  value={getStartedFormData.projectType}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="web-design">Web Design</option>
                  <option value="mobile-app">Mobile App Design</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="branding">Brand Identity</option>
                  <option value="design-system">Design System</option>
                  <option value="user-research">User Research</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Budget Range</label>
                <select
                  name="budget"
                  value={getStartedFormData.budget}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="under-5000">Under $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000-50000">$25,000 - $50,000</option>
                  <option value="over-50000">Over $50,000</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Timeline</label>
                <select
                  name="timeline"
                  value={getStartedFormData.timeline}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="asap">ASAP</option>
                  <option value="2-4-weeks">2-4 weeks</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Project Details</label>
                <textarea
                  name="message"
                  value={getStartedFormData.message}
                  onChange={handleGetStartedFormChange}
                  rows={3}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Tell us about your design project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Submit Project Request
              </button>
            </form>
          </div>
        </div>
      )}

      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-8 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Design Consultation</h3>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleConsultationFormSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={consultationFormData.fullName}
                  onChange={handleConsultationFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={consultationFormData.email}
                  onChange={handleConsultationFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={consultationFormData.phone}
                  onChange={handleConsultationFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Preferred Time</label>
                <input
                  type="datetime-local"
                  name="preferredTime"
                  value={consultationFormData.preferredTime}
                  onChange={handleConsultationFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Design Type</label>
                <select
                  name="designType"
                  value={consultationFormData.designType}
                  onChange={handleConsultationFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="web-design">Web Design</option>
                  <option value="mobile-design">Mobile App Design</option>
                  <option value="branding">Brand Identity</option>
                  <option value="user-research">User Research</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea
                  name="message"
                  value={consultationFormData.message}
                  onChange={handleConsultationFormChange}
                  rows={3}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="What would you like to discuss?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
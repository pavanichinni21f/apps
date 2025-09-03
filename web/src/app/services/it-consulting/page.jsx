"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import Footer from '../../../components/HomePage/Footer';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { 
  Monitor, 
  Settings, 
  Cloud, 
  Database, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Globe, 
  Server, 
  Smartphone, 
  Search, 
  Award,
  Phone,
  Mail,
  Star,
  Users,
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
  HardDrive
} from 'lucide-react';

export default function ITConsultingPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Modal states
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [showExpertModal, setShowExpertModal] = useState(false);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [showStrategyModal, setShowStrategyModal] = useState(false);
  
  // Form states
  const [getStartedFormData, setGetStartedFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'infrastructure-assessment',
    urgency: 'standard',
    message: ''
  });
  
  const [expertFormData, setExpertFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredTime: '',
    consultationType: 'general',
    message: ''
  });

  // Modal handlers
  const handleGetStarted = () => setShowGetStartedModal(true);
  const handleExpertConsultation = () => setShowExpertModal(true);
  const handleITAssessment = () => setShowAssessmentModal(true);
  const handleStrategyConsulting = () => setShowStrategyModal(true);
  const closeAllModals = () => {
    setShowGetStartedModal(false);
    setShowExpertModal(false);
    setShowAssessmentModal(false);
    setShowStrategyModal(false);
  };

  // Form handlers
  const handleGetStartedFormChange = (e) => {
    setGetStartedFormData({ ...getStartedFormData, [e.target.name]: e.target.value });
  };
  
  const handleExpertFormChange = (e) => {
    setExpertFormData({ ...expertFormData, [e.target.name]: e.target.value });
  };
  
  const handleGetStartedFormSubmit = (e) => {
    e.preventDefault();
    console.log('Get Started Form:', getStartedFormData);
    closeAllModals();
  };
  
  const handleExpertFormSubmit = (e) => {
    e.preventDefault();
    console.log('Expert Form:', expertFormData);
    closeAllModals();
  };

  const itServices = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Infrastructure Assessment & Design",
      description: "Comprehensive evaluation and design of your IT infrastructure for optimal performance.",
      features: ["Network architecture", "Server optimization", "Cloud readiness assessment", "Scalability planning"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration & Strategy",
      description: "Seamless migration to cloud platforms with strategic planning and implementation.",
      features: ["Cloud strategy", "Migration planning", "Multi-cloud solutions", "Cost optimization"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Transform your business processes with modern technology solutions and automation.",
      features: ["Process automation", "Legacy modernization", "Workflow optimization", "Change management"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management & Analytics",
      description: "Optimize data storage, processing, and analytics for better business insights.",
      features: ["Data architecture", "Business intelligence", "Data warehousing", "Analytics platforms"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IT Security Consulting",
      description: "Comprehensive security assessments and implementation of robust security frameworks.",
      features: ["Security audits", "Compliance frameworks", "Risk assessment", "Security policies"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "IT Operations & Support",
      description: "Optimize IT operations with best practices, monitoring, and support strategies.",
      features: ["ITIL implementation", "Service management", "Monitoring solutions", "Help desk optimization"]
    }
  ];

  const consultingProcess = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current IT environment and business requirements",
      activities: ["Infrastructure audit", "Business process review", "Technology assessment", "Gap analysis"]
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop customized IT strategy aligned with your business objectives and goals",
      activities: ["Strategic roadmap", "Technology selection", "Budget planning", "Risk mitigation"]
    },
    {
      step: "03",
      title: "Implementation & Deployment",
      description: "Execute the IT strategy with careful project management and minimal disruption",
      activities: ["Project management", "System deployment", "Data migration", "User training"]
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring and optimization to ensure peak performance and ROI",
      activities: ["Performance monitoring", "Continuous improvement", "Ongoing support", "Regular reviews"]
    }
  ];

  const technologyAreas = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Infrastructure",
      description: "Design and optimize network architecture for performance and reliability"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Server & Storage",
      description: "Server consolidation, virtualization, and storage optimization solutions"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Platforms",
      description: "AWS, Azure, Google Cloud migration and multi-cloud strategies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Database optimization, migration, and performance tuning"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Solutions",
      description: "Mobile device management and enterprise mobility strategies"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Data analytics, reporting, and business intelligence implementations"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      icon: <Cog className="w-8 h-8" />,
      description: "Industrial IT solutions and automation systems",
      requirements: ["ERP integration", "IoT connectivity", "Production optimization", "Supply chain management"]
    },
    {
      name: "Healthcare",
      icon: <Shield className="w-8 h-8" />,
      description: "HIPAA-compliant IT infrastructure for healthcare providers",
      requirements: ["EMR systems", "Telemedicine platforms", "Data security", "Compliance management"]
    },
    {
      name: "Financial Services",
      icon: <Target className="w-8 h-8" />,
      description: "Secure and compliant IT solutions for financial institutions",
      requirements: ["Core banking systems", "Risk management", "Regulatory compliance", "Fraud prevention"]
    },
    {
      name: "Retail & E-commerce",
      icon: <Globe className="w-8 h-8" />,
      description: "Scalable IT infrastructure for retail and online businesses",
      requirements: ["E-commerce platforms", "POS systems", "Inventory management", "Customer analytics"]
    }
  ];

  const certifications = [
    "AWS Certified", "Microsoft Certified", "Google Cloud Certified", "ITIL Certified", "PMP", "CISSP", "VMware Certified", "Cisco Certified"
  ];

  const metrics = [
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: <Star className="w-8 h-8" />
    },
    {
      number: "40%",
      label: "Average Cost Reduction",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      number: "300+",
      label: "IT Projects Delivered",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      position: "CTO",
      company: "TechStart Inc",
      text: "SigninSoft's IT consulting transformed our infrastructure. We achieved 50% cost savings while improving performance significantly.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      position: "IT Director",
      company: "Global Manufacturing",
      text: "The cloud migration was seamless. Their expertise in industrial IT solutions made all the difference for our operations.",
      rating: 5
    },
    {
      name: "Robert Davis",
      position: "Operations Manager",
      company: "Healthcare Network",
      text: "Their HIPAA-compliant solutions and ongoing support have been invaluable. Highly recommend their IT consulting services.",
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
        darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                <Monitor className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Consulting <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Transform your business with strategic IT consulting. We help organizations optimize their technology infrastructure, 
              reduce costs, and drive digital transformation initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={handleExpertConsultation}
                className={`border-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                <Phone className="mr-2 w-5 h-5" />
                Speak with Expert
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
              Our IT Consulting <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive IT consulting services to modernize your technology infrastructure and accelerate business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}>
                <div className="text-blue-500 mb-4">
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

      {/* Process Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Consulting <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A proven methodology that ensures successful IT transformation and measurable business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* Technology Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Deep expertise across all major technology platforms and emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyAreas.map((area, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}>
                <div className="flex items-center mb-3">
                  <div className="text-blue-500 mr-3">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                </div>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Specialized IT consulting solutions tailored to industry-specific requirements and regulations.
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
                  <div className="text-blue-500 mr-4">
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

      {/* Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Results</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-500 mb-4 flex justify-center">
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
              Client <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Success Stories</span>
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
              ? 'bg-gradient-to-r from-blue-900 to-purple-900' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our IT consulting experts help you optimize your technology investments and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleITAssessment}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Search className="mr-2 w-5 h-5" />
                Free IT Assessment
              </button>
              <button 
                onClick={handleStrategyConsulting}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Strategy Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className={`text-lg font-semibold ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our Team's Certifications
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`px-4 py-2 rounded-full border ${
                darkMode 
                  ? 'border-gray-700 text-gray-300' 
                  : 'border-gray-300 text-gray-600'
              }`}>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {showGetStartedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-8 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Get Started</h3>
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
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Service Type</label>
                <select
                  name="serviceType"
                  value={getStartedFormData.serviceType}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="infrastructure-assessment">Infrastructure Assessment</option>
                  <option value="cloud-migration">Cloud Migration</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="data-management">Data Management</option>
                  <option value="security-consulting">Security Consulting</option>
                  <option value="it-operations">IT Operations</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea
                  name="message"
                  value={getStartedFormData.message}
                  onChange={handleGetStartedFormChange}
                  rows={3}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Tell us about your IT consulting needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {showExpertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-8 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Expert Consultation</h3>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleExpertFormSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={expertFormData.fullName}
                  onChange={handleExpertFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                  value={expertFormData.email}
                  onChange={handleExpertFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                  value={expertFormData.phone}
                  onChange={handleExpertFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                  value={expertFormData.preferredTime}
                  onChange={handleExpertFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Consultation Type</label>
                <select
                  name="consultationType"
                  value={expertFormData.consultationType}
                  onChange={handleExpertFormChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="general">General IT Consulting</option>
                  <option value="infrastructure">Infrastructure Planning</option>
                  <option value="cloud">Cloud Strategy</option>
                  <option value="security">Security Assessment</option>
                  <option value="transformation">Digital Transformation</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea
                  name="message"
                  value={expertFormData.message}
                  onChange={handleExpertFormChange}
                  rows={3}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="What would you like to discuss?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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
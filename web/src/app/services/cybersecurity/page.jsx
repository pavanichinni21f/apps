"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import Footer from '../../../components/HomePage/Footer';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Globe, 
  Database, 
  Fingerprint, 
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
  Settings,
  Wifi,
  Server,
  X,
  Upload,
  Calendar,
  MessageCircle,
  Download
} from 'lucide-react';

export default function CybersecurityPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Modal states
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [showExpertModal, setShowExpertModal] = useState(false);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  
  // Form states
  const [getStartedFormData, setGetStartedFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'security-audit',
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
  const handleSecurityAssessment = () => setShowAssessmentModal(true);
  const handleEmergencyResponse = () => setShowEmergencyModal(true);
  const closeAllModals = () => {
    setShowGetStartedModal(false);
    setShowExpertModal(false);
    setShowAssessmentModal(false);
    setShowEmergencyModal(false);
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

  const securityServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Audits & Assessments",
      description: "Comprehensive security evaluations to identify vulnerabilities and compliance gaps.",
      features: ["Vulnerability scanning", "Penetration testing", "Compliance audits", "Risk assessments"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Identity & Access Management",
      description: "Secure user authentication and authorization systems for your organization.",
      features: ["Multi-factor authentication", "Single sign-on (SSO)", "Role-based access", "Identity governance"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Security Monitoring & SOC",
      description: "24/7 security operations center with real-time threat detection and response.",
      features: ["SIEM implementation", "Threat hunting", "Incident response", "Security analytics"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Network Security",
      description: "Protect your network infrastructure from cyber threats and unauthorized access.",
      features: ["Firewall management", "Network segmentation", "VPN solutions", "Intrusion detection"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Protection & Privacy",
      description: "Safeguard sensitive data with encryption and privacy compliance solutions.",
      features: ["Data encryption", "DLP solutions", "GDPR compliance", "Data classification"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure and applications across all major platforms.",
      features: ["Cloud security posture", "Container security", "DevSecOps", "Multi-cloud protection"]
    }
  ];

  const securityProcess = [
    {
      step: "01",
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture and infrastructure",
      activities: ["Risk assessment", "Vulnerability scanning", "Compliance review", "Gap analysis"]
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create customized security strategy aligned with your business objectives",
      activities: ["Security roadmap", "Policy development", "Technology selection", "Budget planning"]
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy security solutions with minimal disruption to business operations",
      activities: ["Solution deployment", "Configuration", "Integration", "Testing & validation"]
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Continuous monitoring and support to maintain optimal security posture",
      activities: ["24/7 monitoring", "Incident response", "Regular updates", "Performance optimization"]
    }
  ];

  const threatTypes = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Malware & Ransomware",
      description: "Protection against malicious software and ransomware attacks"
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Identity Theft",
      description: "Secure identity management and fraud prevention systems"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Phishing & Social Engineering",
      description: "Employee training and email security to prevent social attacks"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Breaches",
      description: "Advanced data protection and breach prevention strategies"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Network Intrusions",
      description: "Network monitoring and intrusion detection systems"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Insider Threats",
      description: "User behavior analytics and access control management"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      icon: <Target className="w-8 h-8" />,
      description: "Banking, insurance, and fintech security solutions",
      requirements: ["PCI DSS compliance", "Fraud prevention", "Transaction security", "Regulatory compliance"]
    },
    {
      name: "Healthcare",
      icon: <Shield className="w-8 h-8" />,
      description: "HIPAA-compliant security for healthcare organizations",
      requirements: ["HIPAA compliance", "Patient data protection", "Medical device security", "Telehealth security"]
    },
    {
      name: "Government",
      icon: <Lock className="w-8 h-8" />,
      description: "High-security solutions for government agencies",
      requirements: ["FISMA compliance", "Classified data protection", "Zero trust architecture", "Incident response"]
    },
    {
      name: "Manufacturing",
      icon: <Settings className="w-8 h-8" />,
      description: "Industrial control system and IoT security",
      requirements: ["OT security", "IoT protection", "Supply chain security", "Industrial compliance"]
    }
  ];

  const certifications = [
    "CISSP", "CISM", "CISA", "CEH", "GSEC", "CISSP", "CompTIA Security+", "CCSP"
  ];

  const metrics = [
    {
      number: "99.9%",
      label: "Threat Detection Rate",
      icon: <Eye className="w-8 h-8" />
    },
    {
      number: "<5min",
      label: "Average Response Time",
      icon: <Zap className="w-8 h-8" />
    },
    {
      number: "500+",
      label: "Security Projects",
      icon: <Shield className="w-8 h-8" />
    },
    {
      number: "24/7",
      label: "Security Monitoring",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      position: "CISO",
      company: "Financial Corp",
      text: "SigninSoft's cybersecurity team transformed our security posture. Their proactive approach prevented multiple potential breaches.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      position: "IT Director",
      company: "Healthcare System",
      text: "The HIPAA compliance solution was seamlessly implemented. We now have complete confidence in our patient data protection.",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "Security Manager",
      company: "Manufacturing Inc",
      text: "Their industrial security expertise helped us secure our OT environment without disrupting production operations.",
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
        darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-red-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-blue-500 p-4 rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybersecurity <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Protect your business with enterprise-grade cybersecurity solutions. 
              From threat detection to compliance, we secure what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                <Shield className="w-5 h-5 mr-2" />
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={handleExpertConsultation}
                className={`border-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                  darkMode 
                    ? 'border-red-500 text-red-400 hover:bg-red-500 hover:text-white' 
                    : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                }`}
              >
                Contact Security Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  darkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'
                }`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-red-500 mb-2">{metric.number}</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              End-to-end cybersecurity services to protect your digital assets and ensure business continuity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 hover:border-red-500' 
                  : 'bg-white border-gray-200 hover:border-red-300 hover:shadow-red-100'
              }`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  darkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className={`mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Threat Protection
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Defend against evolving cyber threats with our multi-layered security approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatTypes.map((threat, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-red-500' 
                  : 'bg-gray-50 border-gray-200 hover:border-red-300'
              }`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  darkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'
                }`}>
                  {threat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{threat.title}</h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Security Implementation Process
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A systematic approach to implementing and maintaining robust cybersecurity.
            </p>
          </div>
          
          <div className="space-y-8">
            {securityProcess.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center p-8 rounded-2xl border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                    darkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'
                  }`}>
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className={`text-lg mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{step.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {step.activities.map((activity, idx) => (
                      <div key={idx} className={`p-3 rounded-lg text-sm ${
                        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-700'
                      }`}>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Security
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Tailored cybersecurity solutions for your industry's unique requirements and compliance needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-red-500' 
                  : 'bg-gray-50 border-gray-200 hover:border-red-300'
              }`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    darkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'
                  }`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </div>
                <p className={`mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{industry.description}</p>
                <div className="space-y-2">
                  {industry.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{req}</span>
                    </div>
                  ))}
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
              Client Success Stories
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              See how we've helped organizations strengthen their security posture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-6 italic ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>"${testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Shield className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className={`text-xl mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get started with a comprehensive security assessment and protect what matters most.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleSecurityAssessment}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Start Security Assessment
            </button>
            <button 
              onClick={handleEmergencyResponse}
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors duration-300 flex items-center justify-center ${
                darkMode 
                  ? 'border-red-600 text-red-400 hover:bg-red-600 hover:text-white' 
                  : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Emergency Response
            </button>
          </div>
        </div>
      </section>

      {/* Get Started Modal */}
      {showGetStartedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get Security Assessment
              </h3>
              <button 
                onClick={closeAllModals}
                className={`p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleGetStartedFormSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={getStartedFormData.fullName}
                  onChange={handleGetStartedFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={getStartedFormData.email}
                  onChange={handleGetStartedFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={getStartedFormData.phone}
                  onChange={handleGetStartedFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={getStartedFormData.company}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={getStartedFormData.serviceType}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="security-audit">Security Audit</option>
                  <option value="penetration-testing">Penetration Testing</option>
                  <option value="compliance-assessment">Compliance Assessment</option>
                  <option value="incident-response">Incident Response</option>
                  <option value="security-training">Security Training</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Urgency Level
                </label>
                <select
                  name="urgency"
                  value={getStartedFormData.urgency}
                  onChange={handleGetStartedFormChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="standard">Standard (1-2 weeks)</option>
                  <option value="priority">Priority (3-5 days)</option>
                  <option value="urgent">Urgent (24-48 hours)</option>
                  <option value="emergency">Emergency (Immediate)</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={getStartedFormData.message}
                  onChange={handleGetStartedFormChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Describe your security concerns or requirements..."
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Start Assessment
                </button>
                <button
                  type="button"
                  onClick={closeAllModals}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold border-2 transition-colors duration-300 ${
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
      )}

      {/* Expert Consultation Modal */}
      {showExpertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Security Expert
              </h3>
              <button 
                onClick={closeAllModals}
                className={`p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleExpertFormSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={expertFormData.fullName}
                  onChange={handleExpertFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={expertFormData.email}
                  onChange={handleExpertFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={expertFormData.phone}
                  onChange={handleExpertFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Preferred Time
                </label>
                <input
                  type="datetime-local"
                  name="preferredTime"
                  value={expertFormData.preferredTime}
                  onChange={handleExpertFormChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Consultation Type
                </label>
                <select
                  name="consultationType"
                  value={expertFormData.consultationType}
                  onChange={handleExpertFormChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="general">General Security Consultation</option>
                  <option value="compliance">Compliance & Regulations</option>
                  <option value="incident-response">Incident Response Planning</option>
                  <option value="risk-assessment">Risk Assessment</option>
                  <option value="security-architecture">Security Architecture</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={expertFormData.message}
                  onChange={handleExpertFormChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Describe your security consultation needs..."
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
                <button
                  type="button"
                  onClick={closeAllModals}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold border-2 transition-colors duration-300 ${
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
      )}

      {/* Security Assessment Modal */}
      {showAssessmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-lg w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Start Security Assessment
              </h3>
              <button 
                onClick={closeAllModals}
                className={`p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <Search className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <p className={`text-lg mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Choose your security assessment type:
              </p>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={handleGetStarted}
                className="w-full p-4 rounded-lg border-2 border-red-600 bg-red-50 hover:bg-red-100 transition-colors duration-300 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-red-600 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold text-red-900">Comprehensive Assessment</div>
                    <div className="text-sm text-red-700">Full security audit and vulnerability scan</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-red-600" />
              </button>
              
              <button 
                onClick={handleExpertConsultation}
                className={`w-full p-4 rounded-lg border-2 transition-colors duration-300 flex items-center justify-between ${
                  darkMode 
                    ? 'border-gray-600 hover:bg-gray-700' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-red-600 mr-3" />
                  <div className="text-left">
                    <div className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Expert Consultation First</div>
                    <div className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Discuss your needs with a security expert</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-red-600" />
              </button>
              
              <button 
                onClick={closeAllModals}
                className={`w-full py-3 px-6 rounded-lg font-semibold border-2 transition-colors duration-300 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Response Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold text-red-600`}>
                Emergency Security Response
              </h3>
              <button 
                onClick={closeAllModals}
                className={`p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <p className={`text-lg mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                24/7 Emergency Security Hotline
              </p>
              <div className="text-3xl font-bold text-red-600 mb-4">
                +1 (555) SECURITY
              </div>
              <div className="text-3xl font-bold text-red-600 mb-6">
                +1 (555) 732-8748
              </div>
            </div>
            
            <div className={`border rounded-lg p-4 mb-6 ${
              darkMode ? 'border-red-600 bg-red-900/10' : 'border-red-200 bg-red-50'
            }`}>
              <h4 className={`font-semibold mb-3 text-red-600`}>Call immediately if you experience:</h4>
              <ul className={`space-y-2 text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>• Active security breach or attack</li>
                <li>• Ransomware or malware infection</li>
                <li>• Unauthorized access to systems</li>
                <li>• Data theft or compromise</li>
                <li>• System outages due to security incidents</li>
                <li>• Suspicious network activity</li>
              </ul>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('tel:+15557328748')}
                className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
              <button
                onClick={closeAllModals}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold border-2 transition-colors duration-300 ${
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
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
}
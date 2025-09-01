"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import Footer from '../../../components/HomePage/Footer';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Brain, 
  Target, 
  Zap,
  Award,
  Phone,
  Mail,
  Star,
  PieChart,
  LineChart,
  X,
  User,
  Building,
  Calendar,
  FileText,
  Download
} from 'lucide-react';

export default function DataAnalyticsPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Modal states
  const [showJourneyModal, setShowJourneyModal] = useState(false);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  
  // Form data states
  const [journeyFormData, setJourneyFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    dataGoals: '',
    currentChallenges: ''
  });
  
  const [consultationFormData, setConsultationFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    analyticsNeeds: ''
  });
  
  const [assessmentFormData, setAssessmentFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    dataVolume: '',
    currentTools: '',
    assessmentGoals: ''
  });

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights that drive strategic business decisions."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Implement AI and ML models to predict trends and automate decision-making processes."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and warehouses for efficient data processing and storage."
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Create compelling dashboards and reports that make complex data easy to understand."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using advanced statistical modeling techniques."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Monitor and optimize business performance with real-time analytics and KPI tracking."
    }
  ];

  // Modal handlers
  const handleStartJourney = () => setShowJourneyModal(true);
  const handleViewCaseStudies = () => setShowCaseStudyModal(true);
  const handleScheduleConsultation = () => setShowConsultationModal(true);
  const handleRequestAssessment = () => setShowAssessmentModal(true);

  const closeModal = () => {
    setShowJourneyModal(false);
    setShowCaseStudyModal(false);
    setShowConsultationModal(false);
    setShowAssessmentModal(false);
  };

  // Form handlers
  const handleJourneyInputChange = (e) => {
    const { name, value } = e.target;
    setJourneyFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsultationInputChange = (e) => {
    const { name, value } = e.target;
    setConsultationFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAssessmentInputChange = (e) => {
    const { name, value } = e.target;
    setAssessmentFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleJourneySubmit = (e) => {
    e.preventDefault();
    console.log('Journey form submitted:', journeyFormData);
    // Reset form
    setJourneyFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      dataGoals: '',
      currentChallenges: ''
    });
    closeModal();
    alert('Thank you! We\'ll contact you soon to start your analytics journey.');
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation form submitted:', consultationFormData);
    // Reset form
    setConsultationFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      preferredDate: '',
      analyticsNeeds: ''
    });
    closeModal();
    alert('Thank you! Your consultation has been scheduled.');
  };

  const handleAssessmentSubmit = (e) => {
    e.preventDefault();
    console.log('Assessment form submitted:', assessmentFormData);
    // Reset form
    setAssessmentFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      dataVolume: '',
      currentTools: '',
      assessmentGoals: ''
    });
    closeModal();
    alert('Thank you! We\'ll prepare your data assessment report.');
  };

  const handleCaseStudyDownload = () => {
    // Simulate case study download
    console.log('Downloading case studies...');
    closeModal();
    alert('Case studies downloaded successfully!');
  };

  const analyticsProcess = [
    {
      step: "01",
      title: "Data Discovery",
      description: "Identify and assess available data sources and quality",
      activities: ["Data audit", "Source identification", "Quality assessment", "Gap analysis"]
    },
    {
      step: "02",
      title: "Data Preparation",
      description: "Clean, transform, and structure data for analysis",
      activities: ["Data cleaning", "ETL processes", "Data modeling", "Integration setup"]
    },
    {
      step: "03",
      title: "Analysis & Modeling",
      description: "Apply statistical methods and machine learning algorithms",
      activities: ["Statistical analysis", "ML modeling", "Pattern recognition", "Hypothesis testing"]
    },
    {
      step: "04",
      title: "Insights & Action",
      description: "Deliver actionable insights and recommendations",
      activities: ["Report generation", "Dashboard creation", "Recommendations", "Implementation support"]
    }
  ];

  const technologies = [
    "Python & R",
    "SQL & NoSQL",
    "Tableau & Power BI",
    "Apache Spark",
    "TensorFlow & PyTorch",
    "AWS Analytics",
    "Google Analytics",
    "Snowflake",
    "Databricks",
    "Apache Airflow",
    "Jupyter Notebooks",
    "D3.js & Plotly"
  ];

  const caseStudies = [
    {
      company: "Retail Chain",
      industry: "Retail",
      challenge: "Needed to optimize inventory management and predict customer demand",
      solution: "Implemented ML-powered demand forecasting and inventory optimization system",
      result: "30% reduction in inventory costs and 25% improvement in stock availability",
      duration: "6 months"
    },
    {
      company: "Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Required predictive maintenance to reduce equipment downtime",
      solution: "Built IoT data pipeline with ML models for equipment failure prediction",
      result: "45% reduction in unplanned downtime and $2M annual savings",
      duration: "8 months"
    },
    {
      company: "Financial Services",
      industry: "Finance",
      challenge: "Needed real-time fraud detection and risk assessment capabilities",
      solution: "Developed ML-based fraud detection system with real-time monitoring",
      result: "90% improvement in fraud detection accuracy and 60% faster response time",
      duration: "4 months"
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      position: "VP of Operations",
      company: "Retail Chain",
      text: "The analytics solution transformed how we manage inventory. We now make data-driven decisions that directly impact our bottom line.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      position: "Plant Manager",
      company: "Manufacturing Corp",
      text: "Predictive maintenance has been a game-changer. We can now prevent failures before they happen, saving us millions in downtime costs.",
      rating: 5
    },
    {
      name: "Robert Johnson",
      position: "Risk Director",
      company: "Financial Services",
      text: "SigninSoft's fraud detection system is incredibly accurate and fast. It's given us confidence in our risk management capabilities.",
      rating: 5
    }
  ];

  const metrics = [
    {
      number: "500+",
      label: "Data Projects Completed",
      icon: <Database className="w-8 h-8" />
    },
    {
      number: "95%",
      label: "Client Satisfaction Rate",
      icon: <Star className="w-8 h-8" />
    },
    {
      number: "$50M+",
      label: "Cost Savings Generated",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      number: "24/7",
      label: "Real-time Monitoring",
      icon: <Zap className="w-8 h-8" />
    }
  ];

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
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Analytics</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Unlock the power of your data with advanced analytics and machine learning. 
              Turn information into insights and insights into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartJourney}
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                Start Your Analytics Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={handleViewCaseStudies}
                className={`border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors ${
                  darkMode ? 'hover:text-white' : ''
                }`}
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={`py-16 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-blue-500">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{metric.number}</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Analytics <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive data analytics solutions to drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-blue-100'
              }`}>
                <div className="text-blue-500 mb-4">
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

      {/* Analytics Process Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Analytics <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A systematic approach to extracting maximum value from your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsProcess.map((process, index) => (
              <div key={index} className={`relative p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50 shadow-sm'
              }`}>
                <div className="text-4xl font-bold text-blue-500 mb-4">{process.step}</div>
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
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
                {index < analyticsProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-500" />
                  </div>
                )}
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
              Technologies & <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We leverage cutting-edge analytics tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-white hover:bg-blue-50 border border-gray-200'
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
              Analytics <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Real data, real insights, real business impact. See how analytics drives results.
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
                    darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
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
              Client <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Don't just take our word for it. Here's what our clients say about our analytics solutions.
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
            Ready to Unlock Your <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Data's Potential?</span>
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss your data analytics needs and turn your information into competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleScheduleConsultation}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule Analytics Consultation
            </button>
            <button 
              onClick={handleRequestAssessment}
              className={`border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                darkMode ? 'hover:text-white' : ''
              }`}
            >
              <Mail className="mr-2 w-5 h-5" />
              Request Data Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Start Analytics Journey Modal */}
      {showJourneyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Start Your Analytics Journey</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleJourneySubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={journeyFormData.name}
                      onChange={handleJourneyInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={journeyFormData.email}
                      onChange={handleJourneyInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={journeyFormData.company}
                      onChange={handleJourneyInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={journeyFormData.phone}
                      onChange={handleJourneyInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Data Goals</label>
                  <textarea
                    name="dataGoals"
                    value={journeyFormData.dataGoals}
                    onChange={handleJourneyInputChange}
                    rows={3}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="What do you hope to achieve with data analytics?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Current Challenges</label>
                  <textarea
                    name="currentChallenges"
                    value={journeyFormData.currentChallenges}
                    onChange={handleJourneyInputChange}
                    rows={3}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="What data challenges are you currently facing?"
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
                  className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  Start Journey
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Case Studies Modal */}
      {showCaseStudyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full rounded-lg p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Analytics Case Studies</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Explore our detailed case studies showcasing real-world analytics implementations and their business impact.
              </p>
              
              <div className="grid gap-4">
                {caseStudies.map((study, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{study.company}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {study.industry}
                      </span>
                    </div>
                    <p className={`text-sm mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <strong className="text-green-500">Result:</strong> {study.result}
                    </p>
                    <p className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Duration: {study.duration}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={closeModal}
                  className={`flex-1 px-4 py-2 border rounded-lg font-medium transition-colors ${
                    darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Close
                </button>
                <button
                  onClick={handleCaseStudyDownload}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Schedule Analytics Consultation</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleConsultationSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={consultationFormData.name}
                      onChange={handleConsultationInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={consultationFormData.email}
                      onChange={handleConsultationInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={consultationFormData.company}
                      onChange={handleConsultationInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={consultationFormData.phone}
                      onChange={handleConsultationInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
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
                      value={consultationFormData.preferredDate}
                      onChange={handleConsultationInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Analytics Needs</label>
                  <textarea
                    name="analyticsNeeds"
                    value={consultationFormData.analyticsNeeds}
                    onChange={handleConsultationInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="Tell us about your analytics requirements and goals..."
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
                  className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  Schedule Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Request Assessment Modal */}
      {showAssessmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Request Data Assessment</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAssessmentSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={assessmentFormData.name}
                      onChange={handleAssessmentInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={assessmentFormData.email}
                      onChange={handleAssessmentInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={assessmentFormData.company}
                      onChange={handleAssessmentInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      value={assessmentFormData.phone}
                      onChange={handleAssessmentInputChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Data Volume</label>
                  <select
                    name="dataVolume"
                    value={assessmentFormData.dataVolume}
                    onChange={handleAssessmentInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  >
                    <option value="">Select data volume</option>
                    <option value="small">Small (&lt; 1GB)</option>
                    <option value="medium">Medium (1GB - 100GB)</option>
                    <option value="large">Large (100GB - 1TB)</option>
                    <option value="enterprise">Enterprise (&gt; 1TB)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Current Tools</label>
                  <textarea
                    name="currentTools"
                    value={assessmentFormData.currentTools}
                    onChange={handleAssessmentInputChange}
                    rows={3}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="What analytics tools are you currently using?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Assessment Goals</label>
                  <textarea
                    name="assessmentGoals"
                    value={assessmentFormData.assessmentGoals}
                    onChange={handleAssessmentInputChange}
                    rows={3}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="What do you want to learn from this assessment?"
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
                  className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  Request Assessment
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
"use client";

import { useState } from 'react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';
import { useDarkMode } from '../../hooks/useDarkMode';
import { 
  RefreshCw, 
  CheckCircle, 
  Clock, 
  FileText, 
  Calendar, 
  AlertCircle,
  ArrowRight,
  Shield,
  Users,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Star,
  Building,
  Briefcase,
  X,
  User,
  MapPin
} from 'lucide-react';

export default function ExtensionRenewalPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Lightbox states
  const [showStartExtensionModal, setShowStartExtensionModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showBeginExtensionModal, setShowBeginExtensionModal] = useState(false);
  const [showUrgentCallModal, setShowUrgentCallModal] = useState(false);
  
  // Form states
  const [extensionFormData, setExtensionFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentVisaType: '',
    expirationDate: '',
    extensionType: '',
    urgency: 'normal',
    message: ''
  });
  
  const [consultationFormData, setConsultationFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'extension',
    message: ''
  });

  // Modal handlers
  const handleStartExtension = () => setShowStartExtensionModal(true);
  const handleFreeConsultation = () => setShowConsultationModal(true);
  const handleBeginExtension = () => setShowBeginExtensionModal(true);
  const handleUrgentCall = () => setShowUrgentCallModal(true);

  const closeAllModals = () => {
    setShowStartExtensionModal(false);
    setShowConsultationModal(false);
    setShowBeginExtensionModal(false);
    setShowUrgentCallModal(false);
  };

  // Form handlers
  const handleExtensionFormChange = (e) => {
    setExtensionFormData({ ...extensionFormData, [e.target.name]: e.target.value });
  };

  const handleConsultationFormChange = (e) => {
    setConsultationFormData({ ...consultationFormData, [e.target.name]: e.target.value });
  };

  const handleExtensionFormSubmit = (e) => {
    e.preventDefault();
    console.log('Extension form submitted:', extensionFormData);
    alert('Extension application submitted successfully! We will contact you within 24 hours.');
    closeAllModals();
    setExtensionFormData({
      fullName: '',
      email: '',
      phone: '',
      currentVisaType: '',
      expirationDate: '',
      extensionType: '',
      urgency: 'normal',
      message: ''
    });
  };

  const handleConsultationFormSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation form submitted:', consultationFormData);
    alert('Consultation booked successfully! We will send you a confirmation email shortly.');
    closeAllModals();
    setConsultationFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      consultationType: 'extension',
      message: ''
    });
  };

  const extensionTypes = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Work Visa Extension",
      description: "Extend your work authorization to continue employment in your current position.",
      duration: "3-6 months",
      requirements: ["Valid employment contract", "Employer sponsorship letter", "Tax documents", "Current visa copy"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Visa Extension",
      description: "Extend family reunification visas for spouses, children, and dependents.",
      duration: "2-4 months",
      requirements: ["Relationship proof", "Financial support evidence", "Medical insurance", "Housing documentation"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Business Visa Extension",
      description: "Extend business and investor visas for continued commercial activities.",
      duration: "4-8 months",
      requirements: ["Business registration", "Financial statements", "Investment proof", "Business plan update"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Tourist Visa Extension",
      description: "Extend tourist and visitor visas for longer stays in the destination country.",
      duration: "1-3 months",
      requirements: ["Travel itinerary", "Financial proof", "Return ticket", "Accommodation booking"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We evaluate your current visa status and extension eligibility",
      activities: ["Document review", "Eligibility check", "Timeline assessment", "Requirements analysis"]
    },
    {
      step: "02",
      title: "Document Preparation",
      description: "Gather and prepare all required documents for your extension application",
      activities: ["Document collection", "Form completion", "Translation services", "Certification process"]
    },
    {
      step: "03",
      title: "Application Submission",
      description: "Submit your extension application to the relevant immigration authorities",
      activities: ["Application filing", "Fee payment", "Biometric scheduling", "Interview preparation"]
    },
    {
      step: "04",
      title: "Follow-up & Approval",
      description: "Monitor application progress and handle any additional requirements",
      activities: ["Status tracking", "Response to queries", "Additional documentation", "Approval notification"]
    }
  ];

  const faqs = [
    {
      question: "How early should I apply for a visa extension?",
      answer: "We recommend applying for your visa extension at least 60-90 days before your current visa expires. This allows sufficient time for processing and avoids any gaps in your legal status."
    },
    {
      question: "Can I travel while my extension application is pending?",
      answer: "Travel during a pending extension application can be risky and may result in abandonment of your application. We advise consulting with our experts before making any travel plans."
    },
    {
      question: "What happens if my extension is denied?",
      answer: "If your extension is denied, you may have options to appeal the decision or apply for a different type of visa. Our team will help you understand your options and next steps."
    },
    {
      question: "How much does the extension process cost?",
      answer: "Extension costs vary depending on the visa type, country, and complexity of your case. We provide transparent pricing with no hidden fees and offer payment plans when needed."
    },
    {
      question: "Do I need to provide biometrics for an extension?",
      answer: "Biometric requirements vary by country and visa type. Some extensions require new biometrics, while others may use existing data. We'll inform you of specific requirements for your case."
    },
    {
      question: "Can my family members extend their visas with mine?",
      answer: "In many cases, dependent family members can extend their visas along with the primary applicant. We handle family applications together to ensure consistency and timing."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Processing",
      description: "Expedited handling of your extension application with priority support."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Professional immigration lawyers and consultants managing your case."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "High Success Rate",
      description: "98% approval rate for extension applications handled by our team."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Support",
      description: "Complete assistance with document preparation and verification."
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      country: "Brazil",
      visaType: "Work Visa Extension",
      rating: 5,
      comment: "SignInSoft made my work visa extension process seamless. They handled everything professionally and kept me informed throughout the entire process."
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      visaType: "Family Visa Extension",
      rating: 5,
      comment: "Excellent service for my family's visa extension. The team was knowledgeable, responsive, and helped us avoid any complications."
    },
    {
      name: "Jennifer Liu",
      country: "China",
      visaType: "Business Visa Extension",
      rating: 5,
      comment: "Professional and efficient service. My business visa extension was approved without any issues thanks to their expert guidance."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <RefreshCw className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Visa Extension & <span className="text-blue-600">Renewal</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Seamlessly extend your visa status with expert guidance and comprehensive support 
            throughout the entire renewal process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartExtension}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              Start Extension Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={handleFreeConsultation}
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors duration-300 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Extension Types */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Extension Services
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We handle all types of visa extensions with expertise and precision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {extensionTypes.map((type, index) => (
              <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 flex-shrink-0">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {type.title}
                    </h3>
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {type.description}
                    </p>
                    <div className="flex items-center mb-4">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Processing Time: {type.duration}
                      </span>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {type.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className={`flex items-center text-sm ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Extension Process
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our streamlined 4-step process ensures your extension is handled efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className={`text-center p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.activities.map((activity, actIndex) => (
                    <li key={actIndex} className={`text-sm ${
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

      {/* Benefits */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose Our Extension Services?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`text-center p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-lg`}>
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`border rounded-lg ${
                darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
              }`}>
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Client Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-lg`}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-4 italic ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <div className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {testimonial.country} • {testimonial.visaType}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <AlertCircle className="w-12 h-12 text-yellow-500" />
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Don't Let Your Visa Expire!
          </h2>
          <p className={`text-xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Start your extension process today and avoid any gaps in your legal status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBeginExtension}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              Begin Extension Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={handleUrgentCall}
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors duration-300 flex items-center justify-center ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call for Urgent Cases
            </button>
          </div>
        </div>
      </section>

      {/* Start Extension Process Modal */}
      {showStartExtensionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className={`sticky top-0 flex justify-between items-center p-6 border-b ${
              darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
            }`}>
              <h2 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Start Extension Process
              </h2>
              <button
                onClick={closeAllModals}
                className={`p-2 rounded-full hover:bg-opacity-20 transition-colors ${
                  darkMode ? 'hover:bg-white text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleExtensionFormSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={extensionFormData.fullName}
                    onChange={handleExtensionFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
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
                    value={extensionFormData.email}
                    onChange={handleExtensionFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={extensionFormData.phone}
                    onChange={handleExtensionFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Current Visa Type *
                  </label>
                  <select
                    name="currentVisaType"
                    value={extensionFormData.currentVisaType}
                    onChange={handleExtensionFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  >
                    <option value="">Select current visa type</option>
                    <option value="work">Work Visa</option>
                    <option value="family">Family Visa</option>
                    <option value="business">Business Visa</option>
                    <option value="tourist">Tourist Visa</option>
                    <option value="student">Student Visa</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Current Visa Expiration Date *
                  </label>
                  <input
                    type="date"
                    name="expirationDate"
                    value={extensionFormData.expirationDate}
                    onChange={handleExtensionFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Extension Type *
                  </label>
                  <select
                    name="extensionType"
                    value={extensionFormData.extensionType}
                    onChange={handleExtensionFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  >
                    <option value="">Select extension type</option>
                    <option value="same-category">Same Category Extension</option>
                    <option value="change-status">Change of Status</option>
                    <option value="renewal">Visa Renewal</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Urgency Level
                </label>
                <select
                  name="urgency"
                  value={extensionFormData.urgency}
                  onChange={handleExtensionFormChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                >
                  <option value="normal">Normal Processing (60-90 days)</option>
                  <option value="expedited">Expedited Processing (30-45 days)</option>
                  <option value="urgent">Urgent Processing (15-30 days)</option>
                </select>
              </div>
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={extensionFormData.message}
                  onChange={handleExtensionFormChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  placeholder="Please provide any additional details about your extension request..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Submit Extension Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={closeAllModals}
                  className={`px-6 py-3 rounded-lg font-semibold border-2 transition-colors duration-300 ${
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

      {/* Free Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className={`sticky top-0 flex justify-between items-center p-6 border-b ${
              darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
            }`}>
              <h2 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Free Consultation Request
              </h2>
              <button
                onClick={closeAllModals}
                className={`p-2 rounded-full hover:bg-opacity-20 transition-colors ${
                  darkMode ? 'hover:bg-white text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleConsultationFormSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={consultationFormData.fullName}
                    onChange={handleConsultationFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
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
                    value={consultationFormData.email}
                    onChange={handleConsultationFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={consultationFormData.phone}
                    onChange={handleConsultationFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Preferred Contact Method
                  </label>
                  <select
                    name="contactMethod"
                    value={consultationFormData.contactMethod}
                    onChange={handleConsultationFormChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  >
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="video">Video Call</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Current Situation *
                </label>
                <select
                  name="situation"
                  value={consultationFormData.situation}
                  onChange={handleConsultationFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                >
                  <option value="">Select your current situation</option>
                  <option value="visa-expiring">Visa Expiring Soon</option>
                  <option value="status-change">Need Status Change</option>
                  <option value="renewal-required">Renewal Required</option>
                  <option value="document-issues">Document Issues</option>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
              </div>
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Tell us about your situation *
                </label>
                <textarea
                  name="message"
                  value={consultationFormData.message}
                  onChange={handleConsultationFormChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  placeholder="Please describe your current situation and what you need help with..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Request Free Consultation
                  <User className="ml-2 w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={closeAllModals}
                  className={`px-6 py-3 rounded-lg font-semibold border-2 transition-colors duration-300 ${
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

      {/* Begin Extension Now Modal */}
      {showBeginExtensionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-lg w-full rounded-2xl shadow-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className={`flex justify-between items-center p-6 border-b ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <h2 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Begin Extension Process
              </h2>
              <button
                onClick={closeAllModals}
                className={`p-2 rounded-full hover:bg-opacity-20 transition-colors ${
                  darkMode ? 'hover:bg-white text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className={`mb-6 p-4 rounded-lg ${
                darkMode ? 'bg-blue-900 bg-opacity-30' : 'bg-blue-50'
              }`}>
                <h3 className={`font-semibold mb-2 ${
                  darkMode ? 'text-blue-300' : 'text-blue-800'
                }`}>
                  Ready to Start Your Extension?
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-blue-200' : 'text-blue-700'
                }`}>
                  Choose how you'd like to begin your visa extension process. Our experts are ready to guide you through every step.
                </p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={handleStartExtension}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Complete Extension Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={handleFreeConsultation}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Get Free Consultation First
                  <User className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={handleUrgentCall}
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Call for Urgent Cases
                  <Phone className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
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
        </div>
      )}

      {/* Call for Urgent Cases Modal */}
      {showUrgentCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-lg w-full rounded-2xl shadow-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className={`flex justify-between items-center p-6 border-b ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <h2 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Urgent Extension Support
              </h2>
              <button
                onClick={closeAllModals}
                className={`p-2 rounded-full hover:bg-opacity-20 transition-colors ${
                  darkMode ? 'hover:bg-white text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className={`mb-6 p-4 rounded-lg ${
                darkMode ? 'bg-red-900 bg-opacity-30' : 'bg-red-50'
              }`}>
                <h3 className={`font-semibold mb-2 flex items-center ${
                  darkMode ? 'text-red-300' : 'text-red-800'
                }`}>
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Urgent Extension Cases
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-red-200' : 'text-red-700'
                }`}>
                  For time-sensitive visa extensions or emergency situations, call our urgent support line immediately.
                </p>
              </div>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border-2 border-dashed ${
                  darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'
                }`}>
                  <div className="text-center">
                    <Phone className={`w-8 h-8 mx-auto mb-2 ${
                      darkMode ? 'text-red-400' : 'text-red-600'
                    }`} />
                    <h4 className={`font-bold text-xl mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      +1 (555) 123-URGENT
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      24/7 Urgent Extension Hotline
                    </p>
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <h4 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    When to Call:
                  </h4>
                  <ul className={`text-sm space-y-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• Visa expires within 7 days</li>
                    <li>• Emergency travel required</li>
                    <li>• Document rejection issues</li>
                    <li>• Last-minute status changes</li>
                  </ul>
                </div>
                <a
                  href="tel:+15551234567"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Call Now for Urgent Support
                  <Phone className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={closeAllModals}
                  className={`w-full py-3 px-6 rounded-lg font-semibold border-2 transition-colors duration-300 ${
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
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
}
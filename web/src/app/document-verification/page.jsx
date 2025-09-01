"use client";

import { useState } from 'react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';
import { useDarkMode } from '../../hooks/useDarkMode';
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Search, 
  Lock, 
  Globe,
  ArrowRight,
  Award,
  Clock,
  Users,
  AlertTriangle,
  Eye,
  Fingerprint,
  Database,
  Zap,
  ChevronDown,
  ChevronUp,
  Star,
  Building,
  GraduationCap,
  CreditCard,
  User,
  FileCheck,
  Scan,
  Phone,
  Mail,
  X,
  Upload,
  Calendar,
  MessageCircle,
  Download
} from 'lucide-react';

export default function DocumentVerificationPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Lightbox modal states
  const [showVerifyDocumentsModal, setShowVerifyDocumentsModal] = useState(false);
  const [showSpeakExpertModal, setShowSpeakExpertModal] = useState(false);
  const [showStartVerificationModal, setShowStartVerificationModal] = useState(false);
  const [showSampleReportModal, setShowSampleReportModal] = useState(false);
  
  // Form data states
  const [verifyFormData, setVerifyFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    documentType: '',
    urgency: 'standard',
    additionalInfo: ''
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
  const handleVerifyDocuments = () => setShowVerifyDocumentsModal(true);
  const handleSpeakExpert = () => setShowSpeakExpertModal(true);
  const handleStartVerification = () => setShowStartVerificationModal(true);
  const handleSampleReport = () => setShowSampleReportModal(true);

  const closeAllModals = () => {
    setShowVerifyDocumentsModal(false);
    setShowSpeakExpertModal(false);
    setShowStartVerificationModal(false);
    setShowSampleReportModal(false);
  };

  // Form handlers
  const handleVerifyFormChange = (e) => {
    setVerifyFormData({ ...verifyFormData, [e.target.name]: e.target.value });
  };

  const handleExpertFormChange = (e) => {
    setExpertFormData({ ...expertFormData, [e.target.name]: e.target.value });
  };

  const handleVerifyFormSubmit = (e) => {
    e.preventDefault();
    console.log('Document verification form submitted:', verifyFormData);
    alert('Document verification request submitted successfully!');
    closeAllModals();
    setVerifyFormData({ fullName: '', email: '', phone: '', documentType: '', urgency: 'standard', additionalInfo: '' });
  };

  const handleExpertFormSubmit = (e) => {
    e.preventDefault();
    console.log('Expert consultation form submitted:', expertFormData);
    alert('Expert consultation request submitted successfully!');
    closeAllModals();
    setExpertFormData({ fullName: '', email: '', phone: '', preferredTime: '', consultationType: 'general', message: '' });
  };

  const verificationTypes = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Identity Documents",
      description: "Verify passports, national IDs, driver's licenses, and other government-issued identification.",
      features: ["Biometric verification", "Security feature analysis", "Database cross-checking", "Fraud detection"],
      turnaround: "2-4 hours",
      accuracy: "99.8%"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educational Certificates",
      description: "Authenticate academic degrees, diplomas, transcripts, and professional certifications.",
      features: ["Institution verification", "Grade authentication", "Accreditation check", "Digital seal validation"],
      turnaround: "1-3 days",
      accuracy: "99.5%"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Employment Documents",
      description: "Verify employment letters, salary certificates, experience letters, and professional references.",
      features: ["Employer verification", "Position validation", "Salary confirmation", "Reference checks"],
      turnaround: "3-5 days",
      accuracy: "98.9%"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Financial Documents",
      description: "Authenticate bank statements, tax returns, income certificates, and financial records.",
      features: ["Bank verification", "Transaction analysis", "Income validation", "Asset confirmation"],
      turnaround: "2-4 days",
      accuracy: "99.2%"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Legal Documents",
      description: "Verify contracts, agreements, court documents, and other legal paperwork.",
      features: ["Legal authenticity", "Signature verification", "Notarization check", "Court validation"],
      turnaround: "3-7 days",
      accuracy: "99.1%"
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Medical Records",
      description: "Authenticate medical certificates, test reports, vaccination records, and health documents.",
      features: ["Medical facility verification", "Doctor validation", "Test authenticity", "Health record check"],
      turnaround: "2-5 days",
      accuracy: "98.7%"
    }
  ];

  const verificationProcess = [
    {
      step: "01",
      title: "Document Submission",
      description: "Upload your documents through our secure portal with end-to-end encryption",
      details: ["Secure file upload", "Multiple format support", "Batch processing", "Progress tracking"]
    },
    {
      step: "02",
      title: "Initial Analysis",
      description: "AI-powered preliminary analysis checks document format and basic authenticity",
      details: ["Format validation", "Quality assessment", "Metadata analysis", "Initial fraud detection"]
    },
    {
      step: "03",
      title: "Expert Review",
      description: "Certified verification specialists conduct detailed manual examination",
      details: ["Human expert review", "Security feature check", "Cross-reference validation", "Anomaly detection"]
    },
    {
      step: "04",
      title: "Database Verification",
      description: "Cross-check with official databases and issuing authorities",
      details: ["Authority verification", "Database queries", "Institution contact", "Final validation"]
    },
    {
      step: "05",
      title: "Report Generation",
      description: "Comprehensive verification report with detailed findings and recommendations",
      details: ["Detailed analysis", "Authenticity score", "Risk assessment", "Digital certificate"]
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "All documents are encrypted during transmission and storage using AES-256 encryption."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Infrastructure",
      description: "ISO 27001 certified data centers with multi-layer security protocols."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Access Control",
      description: "Role-based access control with multi-factor authentication for all users."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Protection",
      description: "GDPR compliant data handling with automatic deletion after verification."
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Digital Signatures",
      description: "Blockchain-based digital signatures for tamper-proof verification reports."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant threat detection and response."
    }
  ];

  const industries = [
    {
      name: "Banking & Finance",
      icon: <CreditCard className="w-8 h-8" />,
      description: "KYC compliance, loan applications, and financial due diligence",
      useCases: ["Customer onboarding", "Loan verification", "AML compliance", "Risk assessment"]
    },
    {
      name: "Education",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Academic credential verification for admissions and employment",
      useCases: ["Degree verification", "Transcript validation", "Certification check", "Transfer credits"]
    },
    {
      name: "Healthcare",
      icon: <Shield className="w-8 h-8" />,
      description: "Medical license verification and patient record authentication",
      useCases: ["License verification", "Medical records", "Insurance claims", "Practitioner credentials"]
    },
    {
      name: "Immigration",
      icon: <Globe className="w-8 h-8" />,
      description: "Document authentication for visa and immigration applications",
      useCases: ["Visa applications", "Work permits", "Family reunification", "Citizenship applications"]
    }
  ];

  const faqs = [
    {
      question: "How accurate is your document verification process?",
      answer: "Our verification process combines AI technology with expert human review, achieving an overall accuracy rate of 99%+ across different document types. We use multiple verification layers including security feature analysis, database cross-checking, and issuing authority validation."
    },
    {
      question: "How long does the verification process take?",
      answer: "Verification times vary by document type and complexity. Simple identity documents can be verified within 2-4 hours, while complex documents like educational certificates may take 1-3 days. We provide real-time status updates throughout the process."
    },
    {
      question: "Is my personal information secure during verification?",
      answer: "Yes, we employ bank-level security measures including end-to-end encryption, secure data centers, and GDPR-compliant data handling. All documents are automatically deleted after verification unless you specifically request retention."
    },
    {
      question: "What happens if a document is found to be fraudulent?",
      answer: "If we detect fraudulent documents, we provide a detailed report explaining our findings. We also offer guidance on next steps and can assist with obtaining authentic replacement documents when appropriate."
    },
    {
      question: "Can you verify documents from any country?",
      answer: "We have verification capabilities for documents from over 190 countries and maintain relationships with issuing authorities worldwide. Our global network ensures comprehensive coverage for international document verification."
    },
    {
      question: "Do you provide legally admissible verification reports?",
      answer: "Yes, our verification reports are legally admissible and include digital certificates with blockchain-based signatures. We can also provide notarized reports and expert testimony when required for legal proceedings."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Global Bank Corp",
      role: "Compliance Officer",
      rating: 5,
      comment: "SignInSoft's document verification has streamlined our KYC process significantly. The accuracy and speed of their service has improved our customer onboarding by 60%."
    },
    {
      name: "Dr. Michael Chen",
      company: "International University",
      role: "Admissions Director",
      rating: 5,
      comment: "We've been using their educational document verification for 3 years. Their thorough process has helped us maintain the integrity of our admissions process."
    },
    {
      name: "Emma Rodriguez",
      company: "Immigration Law Firm",
      role: "Senior Partner",
      rating: 5,
      comment: "Exceptional service for immigration document verification. Their detailed reports have been crucial for our clients' successful visa applications."
    }
  ];

  const stats = [
    { number: "2M+", label: "Documents Verified" },
    { number: "99.2%", label: "Accuracy Rate" },
    { number: "190+", label: "Countries Covered" },
    { number: "24/7", label: "Support Available" }
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
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Document <span className="text-blue-600">Verification</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Advanced AI-powered document authentication with expert human review. 
            Ensure authenticity and prevent fraud with our comprehensive verification services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartVerification}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              Start Verification
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={handleSampleReport}
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors duration-300 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View Sample Report
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold text-blue-600 mb-2`}>
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

      {/* Verification Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Document Types We Verify
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive verification services for all types of official documents.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verificationTypes.map((type, index) => (
              <div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}>
                <div className="text-blue-600 mb-4">
                  {type.icon}
                </div>
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
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-600 mr-1" />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {type.turnaround}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {type.accuracy}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Verification Process
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive 5-step process combining AI technology with expert human review.
            </p>
          </div>
          <div className="space-y-8">
            {verificationProcess.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-lg`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className={`text-sm px-3 py-1 rounded-full ${
                        darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Security & Compliance
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Bank-level security measures to protect your sensitive documents and data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className={`text-center p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Industries We Serve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-lg`}>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 flex-shrink-0">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {industry.name}
                    </h3>
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {industry.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className={`text-sm px-3 py-1 rounded-full ${
                          darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              What Our Clients Say
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
                    {testimonial.role} • {testimonial.company}
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
            <AlertTriangle className="w-12 h-12 text-yellow-500" />
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Protect Against Document Fraud
          </h2>
          <p className={`text-xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Don't risk accepting fraudulent documents. Get professional verification today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleVerifyDocuments}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              Verify Documents Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={handleSpeakExpert}
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors duration-300 flex items-center justify-center ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Phone className="mr-2 w-5 h-5" />
              Speak with Expert
            </button>
          </div>
        </div>
      </section>

      {/* Verify Documents Modal */}
      {showVerifyDocumentsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Verify Documents
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
            
            <form onSubmit={handleVerifyFormSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={verifyFormData.fullName}
                  onChange={handleVerifyFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                  value={verifyFormData.email}
                  onChange={handleVerifyFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                  value={verifyFormData.phone}
                  onChange={handleVerifyFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                  Document Type *
                </label>
                <select
                  name="documentType"
                  value={verifyFormData.documentType}
                  onChange={handleVerifyFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="">Select document type</option>
                  <option value="identity">Identity Documents</option>
                  <option value="educational">Educational Certificates</option>
                  <option value="employment">Employment Documents</option>
                  <option value="financial">Financial Documents</option>
                  <option value="legal">Legal Documents</option>
                  <option value="medical">Medical Records</option>
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
                  value={verifyFormData.urgency}
                  onChange={handleVerifyFormChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="standard">Standard (2-5 days)</option>
                  <option value="priority">Priority (1-2 days)</option>
                  <option value="urgent">Urgent (Same day)</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={verifyFormData.additionalInfo}
                  onChange={handleVerifyFormChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Any specific requirements or notes..."
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Start Verification
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

      {/* Speak with Expert Modal */}
      {showSpeakExpertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Speak with Expert
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
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="general">General Consultation</option>
                  <option value="document-review">Document Review</option>
                  <option value="fraud-detection">Fraud Detection</option>
                  <option value="compliance">Compliance Guidance</option>
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
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Describe your consultation needs..."
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
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

      {/* Start Verification Modal */}
      {showStartVerificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-lg w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Start Verification Process
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
              <Upload className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className={`text-lg mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Choose how you'd like to begin your document verification:
              </p>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={handleVerifyDocuments}
                className="w-full p-4 rounded-lg border-2 border-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Upload className="w-6 h-6 text-blue-600 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold text-blue-900">Upload Documents</div>
                    <div className="text-sm text-blue-700">Start with document upload form</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </button>
              
              <button 
                onClick={handleSpeakExpert}
                className={`w-full p-4 rounded-lg border-2 transition-colors duration-300 flex items-center justify-between ${
                  darkMode 
                    ? 'border-gray-600 hover:bg-gray-700' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <div className="text-left">
                    <div className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Consult Expert First</div>
                    <div className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Get guidance before starting</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
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

      {/* Sample Report Modal */}
      {showSampleReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Sample Verification Report
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
            
            <div className={`border rounded-lg p-6 mb-6 ${
              darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Shield className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <h4 className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Document Verification Report</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Report ID: DVR-2024-001234</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-500">AUTHENTIC</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Confidence: 99.8%</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>Document Details</h5>
                  <ul className={`text-sm space-y-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>Type: Passport</li>
                    <li>Country: United States</li>
                    <li>Issue Date: 2020-03-15</li>
                    <li>Expiry Date: 2030-03-14</li>
                  </ul>
                </div>
                <div>
                  <h5 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>Verification Results</h5>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Security features verified
                    </li>
                    <li className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Database cross-check passed
                    </li>
                    <li className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Biometric data validated
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className={`border-t pt-4 ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  This document has been thoroughly verified using our comprehensive authentication process. 
                  All security features, database records, and biometric data have been validated successfully.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleVerifyDocuments}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Upload className="w-5 h-5 mr-2" />
                Verify Your Documents
              </button>
              <button
                onClick={closeAllModals}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold border-2 transition-colors duration-300 flex items-center justify-center ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Sample
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
}
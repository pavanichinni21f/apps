"use client";

import { useState } from 'react';
import { Shield, Eye, Lock, FileText, Users, Globe, Mail, Phone, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <Eye className="w-5 h-5" /> },
    { id: 'information-collection', title: 'Information We Collect', icon: <FileText className="w-5 h-5" /> },
    { id: 'information-use', title: 'How We Use Information', icon: <Users className="w-5 h-5" /> },
    { id: 'information-sharing', title: 'Information Sharing', icon: <Globe className="w-5 h-5" /> },
    { id: 'data-security', title: 'Data Security', icon: <Lock className="w-5 h-5" /> },
    { id: 'cookies', title: 'Cookies & Tracking', icon: <Shield className="w-5 h-5" /> },
    { id: 'rights', title: 'Your Rights', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'contact', title: 'Contact Us', icon: <Mail className="w-5 h-5" /> }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar showTopHeader={true} />
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 pointer-events-none"></div>
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 bg-blue-900 text-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
              backgroundImage: "url('/images/privacy-policy-bg.svg')"
            }}></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-500 p-4 rounded-full">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Privacy Policy
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Your privacy is our priority
                </p>
                <p className="text-lg mb-8 max-w-4xl mx-auto opacity-80">
                  This Privacy Policy explains how SignInSoft collects, uses, and protects your personal information 
                  when you use our services. We are committed to maintaining the highest standards of data protection.
                </p>
                <div className="flex items-center justify-center text-sm opacity-75">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last updated: January 15, 2024
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Menu */}
          <section className="sticky top-0 bg-white shadow-md z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex overflow-x-auto py-4 space-x-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.icon}
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Overview */}
            <section id="overview" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-4">
                    At SignInSoft, we respect your privacy and are committed to protecting your personal data. 
                    This privacy policy will inform you about how we look after your personal data when you visit 
                    our website and tell you about your privacy rights and how the law protects you.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Points:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800">We only collect data necessary to provide our services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800">Your data is encrypted and securely stored</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800">We never sell your personal information to third parties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800">You have full control over your data and privacy settings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Collection */}
            <section id="information-collection" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-600 mb-4">
                      We collect information you provide directly to us, such as when you create an account, 
                      use our services, or contact us for support.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Name and contact information</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Email address and phone number</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Company information</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Payment and billing information</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Service preferences and settings</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Communication history</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-600 mb-4">
                      We automatically collect certain information when you visit our website or use our services.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">IP address and location data</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Browser and device information</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Usage patterns and analytics</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">Cookies and tracking technologies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Use */}
            <section id="information-use" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Provide and maintain our services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Process transactions and payments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Customize user experience</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Send service updates and notifications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Respond to inquiries and support requests</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Send marketing communications (with consent)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Analyze usage patterns and trends</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Improve our services and features</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Develop new products and services</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal & Security</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Comply with legal obligations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Prevent fraud and abuse</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Protect our rights and property</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section id="information-sharing" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-orange-900 mb-2">Important Notice</h3>
                      <p className="text-orange-800">
                        We do not sell, trade, or rent your personal information to third parties. 
                        We only share your information in the limited circumstances described below.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">When We May Share Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                        <p className="text-gray-600 text-sm">Trusted third-party vendors who help us operate our business</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                        <p className="text-gray-600 text-sm">When required by law or to protect our legal rights</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Transfers</h4>
                        <p className="text-gray-600 text-sm">In connection with mergers, acquisitions, or asset sales</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">With Your Consent</h4>
                        <p className="text-gray-600 text-sm">When you explicitly agree to share your information</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-security" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Lock className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Encryption</h3>
                      <p className="text-gray-600 text-sm">All data is encrypted in transit and at rest using industry-standard protocols</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Control</h3>
                      <p className="text-gray-600 text-sm">Strict access controls ensure only authorized personnel can access your data</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
                      <p className="text-gray-600 text-sm">Continuous monitoring and regular security audits to identify and address threats</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Cookies & Tracking Technologies</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    We use cookies and similar tracking technologies to enhance your experience on our website 
                    and to analyze how our services are used.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                      <p className="text-gray-600 mb-3">Required for the website to function properly</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Authentication and security</li>
                        <li>• Session management</li>
                        <li>• Load balancing</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                      <p className="text-gray-600 mb-3">Help us understand how visitors use our website</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Usage statistics</li>
                        <li>• Performance monitoring</li>
                        <li>• Error tracking</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                      <p className="text-gray-600 mb-3">Enable enhanced functionality and personalization</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• User preferences</li>
                        <li>• Language settings</li>
                        <li>• Customization options</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                      <p className="text-gray-600 mb-3">Used to deliver relevant advertisements (with consent)</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Targeted advertising</li>
                        <li>• Campaign tracking</li>
                        <li>• Social media integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Your Privacy Rights</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    You have certain rights regarding your personal information. Here's what you can do:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Access & Portability</h3>
                      <ul className="space-y-2 text-green-800">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Request a copy of your personal data</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Export your data in a portable format</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Correction & Updates</h3>
                      <ul className="space-y-2 text-green-800">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Correct inaccurate information</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Update your personal details</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Deletion & Restriction</h3>
                      <ul className="space-y-2 text-green-800">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Request deletion of your data</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Restrict processing of your data</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Consent & Objection</h3>
                      <ul className="space-y-2 text-green-800">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Withdraw consent at any time</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Object to certain processing activities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">How to Exercise Your Rights</h3>
                    <p className="text-blue-800 mb-3">
                      To exercise any of these rights, please contact us using the information provided in the Contact section below. 
                      We will respond to your request within 30 days.
                    </p>
                    <p className="text-blue-800 text-sm">
                      Note: Some rights may be limited by applicable law or our legitimate business interests.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy or our privacy practices, 
                    please don't hesitate to contact us.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Mail className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">info@signinsoft.net</p>
                      <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Phone className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+1(302) 703-1113</p>
                      <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Mailing Address</h3>
                      <p className="text-gray-600">SignInSoft Privacy Team</p>
                      <p className="text-gray-600">123 Tech Street, Suite 100</p>
                      <p className="text-gray-600">San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
                    <p className="text-gray-600 mb-2">
                      For specific privacy concerns or to exercise your rights under GDPR, you can contact our Data Protection Officer:
                    </p>
                    <p className="text-gray-600">
                      <strong>Email:</strong> info@signinsoft.net<br />
            <strong>Phone:</strong> +1(302) 703-1113
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates Notice */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-center">
                  <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                  <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons.
                  </p>
                  <p className="text-gray-600">
                    We will notify you of any material changes by posting the new Privacy Policy on this page 
                    and updating the "Last updated" date at the top of this policy.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
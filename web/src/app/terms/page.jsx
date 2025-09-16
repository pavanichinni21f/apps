"use client";

import { useState } from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users, Globe, Mail, Phone, Calendar, Clock, Ban, CreditCard, Gavel } from 'lucide-react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <FileText className="w-5 h-5" /> },
    { id: 'acceptance', title: 'Acceptance of Terms', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'services', title: 'Our Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'user-accounts', title: 'User Accounts', icon: <Users className="w-5 h-5" /> },
    { id: 'acceptable-use', title: 'Acceptable Use', icon: <Shield className="w-5 h-5" /> },
    { id: 'payment-terms', title: 'Payment Terms', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: <Scale className="w-5 h-5" /> },
    { id: 'limitation-liability', title: 'Limitation of Liability', icon: <Gavel className="w-5 h-5" /> },
    { id: 'termination', title: 'Termination', icon: <Ban className="w-5 h-5" /> },
    { id: 'contact', title: 'Contact Information', icon: <Mail className="w-5 h-5" /> }
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 pointer-events-none"></div>
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 bg-purple-900 text-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
              backgroundImage: "url('/images/terms-of-service-bg.svg')"
            }}></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-purple-500 p-4 rounded-full">
                    <Scale className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Terms of Service
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Legal terms and conditions for using our services
                </p>
                <p className="text-lg mb-8 max-w-4xl mx-auto opacity-80">
                  These Terms of Service govern your use of SignInSoft's services. By using our services, 
                  you agree to be bound by these terms. Please read them carefully.
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
                        ? 'bg-purple-500 text-white'
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
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-4">
                    Welcome to SignInSoft. These Terms of Service ("Terms") govern your use of our website, 
                    applications, and services (collectively, the "Services") operated by SignInSoft ("we", "us", or "our").
                  </p>
                  <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Key Information:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-purple-800">These terms apply to all users of our services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-purple-800">By using our services, you agree to these terms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-purple-800">We may update these terms from time to time</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-purple-800">Contact us if you have questions about these terms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Acceptance of Terms */}
            <section id="acceptance" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    By accessing or using our Services, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notice</h3>
                        <p className="text-yellow-800 mb-3">
                          If you do not agree to these Terms, you must not access or use our Services.
                        </p>
                        <ul className="space-y-1 text-yellow-800 text-sm">
                          <li>• You must be at least 18 years old to use our Services</li>
                          <li>• You must have the legal capacity to enter into binding agreements</li>
                          <li>• You represent that all information you provide is accurate and complete</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Services */}
            <section id="services" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    SignInSoft provides a range of technology and consulting services including but not limited to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Services</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">IT Consulting</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">Software Development</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">UI/UX Design</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">Data Analytics</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">Cybersecurity</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Visa Services</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">Study Abroad Assistance</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">Work & Business Visas</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">Travel & Tourism</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">Extension & Renewal</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-600">Immigration Consultation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Service Availability</h3>
                    <p className="text-blue-800">
                      We strive to maintain high availability of our Services, but we do not guarantee uninterrupted access. 
                      We may modify, suspend, or discontinue any part of our Services at any time with reasonable notice.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section id="user-accounts" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">User Accounts</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Creation</h3>
                    <p className="text-gray-600 mb-4">
                      To access certain features of our Services, you may need to create an account. 
                      When creating an account, you agree to:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Provide accurate and complete information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Keep your account information up to date</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Maintain the security of your password</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Not share your account with others</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Responsibility</h3>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <p className="text-orange-800 mb-3">
                        You are responsible for all activities that occur under your account. 
                        You must notify us immediately of any unauthorized use of your account.
                      </p>
                      <ul className="space-y-1 text-orange-800 text-sm">
                        <li>• Use strong, unique passwords</li>
                        <li>• Enable two-factor authentication when available</li>
                        <li>• Log out from shared or public computers</li>
                        <li>• Monitor your account for suspicious activity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section id="acceptable-use" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Acceptable Use Policy</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    You agree to use our Services only for lawful purposes and in accordance with these Terms. 
                    You agree not to use the Services:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h3 className="text-lg font-semibold text-red-900 mb-3">Prohibited Activities</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">Violate any applicable laws or regulations</span>
                        </li>
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">Infringe on intellectual property rights</span>
                        </li>
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">Transmit harmful or malicious code</span>
                        </li>
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">Attempt to gain unauthorized access</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h3 className="text-lg font-semibold text-red-900 mb-3">Content Restrictions</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">Post offensive or harmful content</span>
                        </li>
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">Share false or misleading information</span>
                        </li>
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">Violate privacy of others</span>
                        </li>
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-800 text-sm">Engage in spam or unsolicited communications</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Enforcement</h3>
                        <p className="text-yellow-800">
                          We reserve the right to investigate and take appropriate action against users who violate 
                          this Acceptable Use Policy, including suspension or termination of accounts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section id="payment-terms" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Fees and Billing</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Fees are clearly stated before purchase</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">All prices are in USD unless stated otherwise</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Taxes may apply based on your location</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Payment is due upon service completion</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Methods</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Credit and debit cards</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Bank transfers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Digital payment platforms</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Corporate invoicing available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Refund Policy</h3>
                    <p className="text-green-800 mb-3">
                      We offer refunds under certain conditions:
                    </p>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Service cancellation within 48 hours of booking (consultation services)</li>
                      <li>• Failure to deliver services as agreed upon</li>
                      <li>• Technical issues preventing service delivery</li>
                      <li>• Refund requests must be submitted within 30 days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Scale className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Intellectual Property Rights</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Rights</h3>
                    <p className="text-gray-600 mb-4">
                      The Services and their original content, features, and functionality are and will remain 
                      the exclusive property of SignInSoft and its licensors.
                    </p>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Scale className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-indigo-800">Website design, layout, and graphics</span>
                        </li>
                        <li className="flex items-start">
                          <Scale className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-indigo-800">Software, applications, and code</span>
                        </li>
                        <li className="flex items-start">
                          <Scale className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-indigo-800">Trademarks, logos, and brand elements</span>
                        </li>
                        <li className="flex items-start">
                          <Scale className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-indigo-800">Content, documentation, and materials</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h3>
                    <p className="text-gray-600 mb-4">
                      You retain ownership of any content you provide to us, but you grant us certain rights to use it.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700 mb-3">
                        By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to:
                      </p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Use, reproduce, and display your content</li>
                        <li>• Modify and adapt content for our Services</li>
                        <li>• Distribute content in connection with our Services</li>
                        <li>• Create derivative works for service improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation-liability" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Gavel className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Legal Notice</h3>
                        <p className="text-yellow-800 mb-3">
                          To the fullest extent permitted by applicable law, SignInSoft shall not be liable for any 
                          indirect, incidental, special, consequential, or punitive damages.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer of Warranties</h3>
                      <p className="text-gray-600 mb-3">
                        Our Services are provided "as is" and "as available" without warranties of any kind.
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• No guarantee of uninterrupted service</li>
                        <li>• No warranty of error-free operation</li>
                        <li>• No guarantee of specific results</li>
                        <li>• No warranty of merchantability</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Liability Cap</h3>
                      <p className="text-gray-600 mb-3">
                        Our total liability to you for any claims shall not exceed:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• The amount you paid for the specific service</li>
                        <li>• $1,000 USD in aggregate for all claims</li>
                        <li>• Whichever amount is lower</li>
                        <li>• Subject to applicable law limitations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Ban className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Termination</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Right to Terminate</h3>
                      <p className="text-gray-600 mb-3">
                        You may terminate your account at any time by:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Contacting our support team</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Using account deletion features</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Sending written notice</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Right to Terminate</h3>
                      <p className="text-gray-600 mb-3">
                        We may terminate your access if you:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Violate these Terms</span>
                        </li>
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Engage in prohibited activities</span>
                        </li>
                        <li className="flex items-start">
                          <Ban className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Fail to pay required fees</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="text-lg font-semibold text-red-900 mb-3">Effect of Termination</h3>
                    <p className="text-red-800 mb-3">
                      Upon termination of your account:
                    </p>
                    <ul className="space-y-1 text-red-800 text-sm">
                      <li>• Your access to the Services will cease immediately</li>
                      <li>• We may delete your account data after a reasonable period</li>
                      <li>• Outstanding payment obligations remain in effect</li>
                      <li>• Certain provisions of these Terms will survive termination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    If you have any questions about these Terms of Service, please contact us using the information below.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Mail className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">info@signinsoft.net</p>
                      <p className="text-gray-500 text-sm mt-1">Legal inquiries</p>
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
                      <p className="text-gray-600">SignInSoft Legal Department</p>
                      <p className="text-gray-600">123 Tech Street, Suite 100</p>
                      <p className="text-gray-600">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates Notice */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-center">
                  <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                    we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p className="text-gray-600">
                    Your continued use of the Services after any changes constitutes acceptance of the new Terms.
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
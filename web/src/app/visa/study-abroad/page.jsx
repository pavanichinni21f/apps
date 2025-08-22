"use client";

import { useState } from 'react';
import { GraduationCap, CheckCircle, FileText, Clock, ArrowRight, ChevronDown, ChevronUp, Users, Globe, BookOpen, Award, CheckSquare } from 'lucide-react';

export default function StudyAbroadVisaPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    university: '',
    message: ''
  });

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Top Universities Worldwide",
      description: "Access to prestigious universities across USA, UK, Canada, Australia, and more."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Smooth Process",
      description: "End-to-end support from application to visa approval with expert guidance."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "High Success Rate",
      description: "98% visa approval rate with our comprehensive documentation support."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Application",
      description: "Submit your application with required documents and academic records."
    },
    {
      step: "02", 
      title: "University Admission",
      description: "We help secure admission to your preferred university program."
    },
    {
      step: "03",
      title: "Visa Processing", 
      description: "Complete visa documentation and embassy interview preparation."
    },
    {
      step: "04",
      title: "Travel Ready",
      description: "Pre-departure guidance and arrival support in destination country."
    }
  ];

  const documents = [
    "Valid Passport (minimum 6 months validity)",
    "Academic Transcripts and Certificates", 
    "English Proficiency Test Scores (IELTS/TOEFL)",
    "Statement of Purpose (SOP)",
    "Letter of Recommendation",
    "Financial Statements/Sponsor Documents",
    "Medical Examination Reports",
    "University Acceptance Letter",
    "Visa Application Form",
    "Passport Size Photographs"
  ];

  const faqs = [
    {
      question: "How long does the study visa process take?",
      answer: "The typical processing time is 4-8 weeks depending on the country and university. We recommend starting the process 4-6 months before your intended start date."
    },
    {
      question: "What are the financial requirements for a study visa?",
      answer: "Financial requirements vary by country. Generally, you need to show funds covering tuition fees plus living expenses (typically $15,000-$50,000 annually depending on the destination)."
    },
    {
      question: "Can I work while studying abroad?",
      answer: "Most countries allow part-time work (20 hours/week) during studies and full-time during holidays. Some countries also offer post-study work permits."
    },
    {
      question: "Do I need to take English language tests?",
      answer: "Yes, most universities require IELTS (6.0-7.0) or TOEFL (80-100) scores. Some universities may waive this if you've studied in English medium."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "We provide complete support for reapplication including identifying rejection reasons and strengthening your application. Our success rate on reapplications is 95%."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center mr-3">
                <CheckSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">SigninSoft</div>
                <div className="text-xs text-orange-500 -mt-1">Get into your Future</div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
              <a href="/#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('/images/visa-study-abroad-bg.svg')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-full">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Study Abroad Visas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Achieve your dreams with the right study visa guidance
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-80">
              Turn your educational aspirations into reality with our comprehensive study abroad visa services. 
              We help students secure admissions and visas to top universities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Our Study Visa Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert guidance and proven success in helping students achieve their international education goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Step-by-Step Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach ensuring success at every stage of your study abroad journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Required Documents Checklist</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ensure you have all necessary documents ready for a smooth visa application process. 
                Our team will guide you through each requirement.
              </p>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-blue-900">Document Verification Service</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We provide professional document verification and attestation services to ensure 
                  all your papers meet embassy requirements.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Document Checklist</h3>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about study abroad visas
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-blue-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for Study Visa</h2>
            <p className="text-lg opacity-90">
              Start your journey to international education. Fill out the form below and our experts will contact you within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course/Field of Study</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="e.g., Computer Science, MBA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred University</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="University name (if known)"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tell us about your educational background, goals, or any specific questions..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center mr-3">
                  <CheckSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">SigninSoft</div>
                  <div className="text-xs text-orange-400 -mt-1">Get into your Future</div>
                </div>
              </div>
              <p className="text-gray-300">
                Leading consulting, business solution and systems integration firm.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Visa Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/visa/study-abroad" className="hover:text-orange-400 transition-colors">Study Abroad Visas</a></li>
                <li><a href="/visa/work-business" className="hover:text-orange-400 transition-colors">Work & Business Visas</a></li>
                <li><a href="/visa/travel-tourism" className="hover:text-orange-400 transition-colors">Travel & Tourism</a></li>
                <li><a href="/visa/extension-renewal" className="hover:text-orange-400 transition-colors">Extension & Renewal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Document Verification</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Immigration Consultation</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Pre-departure Guidance</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">24/7 Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Email: visas@SigninSoft.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Business Ave, Suite 100</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 SigninSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
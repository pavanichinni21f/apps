"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Briefcase, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Building, Users, Star, CheckSquare } from 'lucide-react';

export default function WorkBusinessVisaPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('skilled');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    country: '',
    experience: '',
    profession: '',
    investment: '',
    message: ''
  });

  const visaTypes = {
    skilled: {
      title: "Skilled Worker Visas",
      description: "For professionals with in-demand skills seeking employment opportunities abroad",
      process: [
        { step: "Skills Assessment", description: "Evaluate your qualifications and skills against destination country requirements" },
        { step: "Job Offer/Expression of Interest", description: "Secure employment or submit expression of interest to immigration authorities" },
        { step: "Documentation", description: "Prepare and verify all required documents including work contracts and certifications" },
        { step: "Visa Application", description: "Submit comprehensive visa application with supporting documentation" },
        { step: "Approval & Travel", description: "Receive visa approval and prepare for relocation with pre-departure support" }
      ],
      documents: [
        "Valid Passport (minimum 6 months validity)",
        "Job Offer Letter from Employer",
        "Educational Certificates & Transcripts",
        "Professional Experience Letters",
        "Skills Assessment Certificate",
        "English Language Proficiency Test",
        "Medical Examination Reports",
        "Police Clearance Certificate",
        "Financial Statements",
        "Resume/CV"
      ]
    },
    business: {
      title: "Business & Investor Visas",
      description: "For entrepreneurs and investors looking to establish or invest in businesses abroad",
      process: [
        { step: "Business Plan Development", description: "Create comprehensive business plan meeting immigration requirements" },
        { step: "Investment Documentation", description: "Prepare proof of funds and investment capacity documentation" },
        { step: "Business Registration", description: "Register business entity and obtain necessary licenses in destination country" },
        { step: "Visa Application", description: "Submit investor/business visa application with complete documentation" },
        { step: "Approval & Setup", description: "Receive visa approval and establish business operations" }
      ],
      documents: [
        "Valid Passport (minimum 6 months validity)",
        "Detailed Business Plan",
        "Proof of Investment Funds",
        "Bank Statements (6-12 months)",
        "Business Registration Documents",
        "Professional Qualifications",
        "Management Experience Proof",
        "Market Research Documentation",
        "Financial Audited Statements",
        "Letter of Intent"
      ]
    }
  };

  const successStories = [
    {
      name: "Dr. Rajesh Sharma",
      profession: "Software Engineer",
      country: "Canada",
      story: "Secured a skilled worker visa for Canada within 6 months. The team helped me with express entry process and job search.",
      rating: 5
    },
    {
      name: "Priya Patel", 
      profession: "Business Owner",
      country: "Australia",
      story: "Successfully obtained investor visa for Australia. Started my tech consulting business with their guidance.",
      rating: 5
    },
    {
      name: "Mohammad Ali",
      profession: "Healthcare Professional",
      country: "New Zealand", 
      story: "Smooth process for healthcare worker visa. The documentation support was exceptional.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What is the difference between skilled worker and business visas?",
      answer: "Skilled worker visas are for employees with job offers or in-demand skills, while business visas are for entrepreneurs and investors who want to establish or invest in businesses."
    },
    {
      question: "How long does the work visa process take?",
      answer: "Processing times vary by country and visa type. Skilled worker visas typically take 3-8 months, while business visas can take 6-12 months due to additional business setup requirements."
    },
    {
      question: "Do I need a job offer for a skilled worker visa?",
      answer: "Requirements vary by country. Some countries require a job offer (like H-1B for USA), while others use points-based systems where a job offer gives additional points but isn't mandatory."
    },
    {
      question: "What is the minimum investment required for business visas?",
      answer: "Investment requirements vary significantly by country. For example, EB-5 (USA) requires $800K-$1M, while Australia's investor visa requires $1.5M AUD. We'll help you understand specific requirements."
    },
    {
      question: "Can my family accompany me on a work visa?",
      answer: "Most work visas allow you to include spouse and dependent children. Family members may also be eligible to work or study depending on the visa category and country."
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
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} showTopHeader={true} />

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('/images/visa-work-business-bg.svg')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-full">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Work & Business Visas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Advance your career and business opportunities globally
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-80">
              Whether you're a skilled professional seeking new opportunities or an entrepreneur ready to expand globally, 
              we provide comprehensive visa solutions for your career and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Type Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Choose Your Visa Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the visa type that best matches your goals and circumstances
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('skilled')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'skilled' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                <Users className="w-5 h-5 inline mr-2" />
                Skilled Worker Visas
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'business' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                <Building className="w-5 h-5 inline mr-2" />
                Business & Investor Visas
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{visaTypes[activeTab].title}</h3>
                <p className="text-lg text-gray-600 mb-8">{visaTypes[activeTab].description}</p>
                
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Process Overview</h4>
                <div className="space-y-4">
                  {visaTypes[activeTab].process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-900 mb-1">{step.step}</h5>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-6">Required Documents</h4>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-3">
                    {visaTypes[activeTab].documents.map((doc, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real experiences from professionals who achieved their global career goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-blue-900">{story.name}</div>
                  <div className="text-sm text-gray-600">{story.profession}</div>
                  <div className="text-sm text-orange-500 font-medium">Now in {story.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about work and business visas
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Work Visa Application</h2>
            <p className="text-lg opacity-90">
              Take the first step towards your international career. Our experts will guide you through the entire process.
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Visa Type *</label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select Visa Type</option>
                  <option value="skilled-worker">Skilled Worker Visa</option>
                  <option value="business-investor">Business/Investor Visa</option>
                  <option value="intra-company">Intra-company Transfer</option>
                  <option value="startup">Startup Visa</option>
                </select>
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
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="uk">United Kingdom</option>
                  <option value="germany">Germany</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="singapore">Singapore</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Profession/Industry</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="e.g., Software Engineer, Marketing Manager"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Amount (for business visas)</label>
                <input
                  type="text"
                  name="investment"
                  value={formData.investment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="e.g., $500,000 USD"
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
                  placeholder="Tell us about your background, goals, current employment status, or any specific questions..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <span>Start Your Application</span>
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
                <li><a href="#" className="hover:text-orange-400 transition-colors">Career Guidance</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">24/7 Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Email: info@signinsoft.net</p>
                <p>Phone: +1(302) 703-1113</p>
                <p>Address: 1553 Route 27, Room 1000-2, Suite 1000, Somerset, NJ 08873</p>
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
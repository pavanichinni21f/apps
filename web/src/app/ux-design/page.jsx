"use client";

import { useState } from 'react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';
import { useDarkMode } from '../../hooks/useDarkMode';
import { 
  Palette, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Lightbulb,
  Monitor,
  Smartphone,
  Tablet,
  Eye,
  Target,
  Zap,
  Award,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  X,
  Upload,
  Send,
  User,
  Mail,
  Phone,
  FileText,
  Briefcase,
  MapPin
} from 'lucide-react';

export default function UXDesignPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'UI/UX Designer',
    experience: '',
    location: '',
    portfolio: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const designServices = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Modern, responsive web designs that engage users and drive conversions.",
      features: ["Responsive Design", "User Interface Design", "Landing Pages", "E-commerce Design"],
      deliverables: "Wireframes, Mockups, Prototypes, Style Guide"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Design",
      description: "Intuitive mobile app interfaces optimized for iOS and Android platforms.",
      features: ["Native App Design", "Cross-platform UI", "App Store Assets", "User Flow Design"],
      deliverables: "App Screens, Icons, Prototypes, Design System"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "User Experience (UX)",
      description: "Research-driven UX design that creates meaningful user experiences.",
      features: ["User Research", "Journey Mapping", "Usability Testing", "Information Architecture"],
      deliverables: "User Personas, Journey Maps, Wireframes, Test Reports"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Comprehensive brand identity design that reflects your company values.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography System"],
      deliverables: "Logo Files, Brand Book, Templates, Asset Library"
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your business goals, target audience, and market landscape",
      activities: ["Stakeholder interviews", "User research", "Competitor analysis", "Requirements gathering"]
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Developing design strategy and creating project roadmap",
      activities: ["Design strategy", "User personas", "Information architecture", "Project timeline"]
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "Creating visual designs and interactive prototypes",
      activities: ["Wireframing", "Visual design", "Prototyping", "Design system creation"]
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description: "Validating designs through user testing and iterative improvements",
      activities: ["Usability testing", "A/B testing", "Design refinement", "Final delivery"]
    }
  ];

  const portfolioProjects = [
    {
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Complete redesign of an e-commerce platform resulting in 40% increase in conversions",
      metrics: ["40% ↑ Conversions", "25% ↑ User Engagement", "60% ↓ Bounce Rate"]
    },
    {
      title: "Banking Mobile App",
      category: "Mobile Design",
      description: "User-friendly banking app design with focus on security and accessibility",
      metrics: ["4.8★ App Store Rating", "50% ↑ Daily Active Users", "30% ↓ Support Tickets"]
    },
    {
      title: "SaaS Dashboard",
      category: "UX Design",
      description: "Complex data visualization dashboard with intuitive user experience",
      metrics: ["35% ↑ User Retention", "45% ↓ Learning Curve", "90% User Satisfaction"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      rating: 5,
      comment: "SignInSoft's design team transformed our product completely. The user experience is now intuitive and our customers love the new interface."
    },
    {
      name: "Michael Chen",
      company: "RetailPro",
      role: "Product Manager",
      rating: 5,
      comment: "Outstanding work on our e-commerce platform. The design not only looks great but also significantly improved our conversion rates."
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceApp",
      role: "CTO",
      rating: 5,
      comment: "Professional, creative, and results-driven. Their UX research and design process helped us create a product our users truly love."
    }
  ];

  const faqs = [
    {
      question: "What's included in your UI/UX design services?",
      answer: "Our comprehensive UI/UX design services include user research, wireframing, visual design, prototyping, usability testing, and design system creation. We provide all source files and detailed documentation."
    },
    {
      question: "How long does a typical design project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website design takes 2-4 weeks, while complex applications can take 8-12 weeks. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide ongoing design support?",
      answer: "Yes, we offer ongoing design support and maintenance packages. This includes design updates, new feature designs, and continuous optimization based on user feedback and analytics."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We can work within your existing brand guidelines or help you evolve and refine them. We ensure all designs align with your brand identity and values."
    },
    {
      question: "What tools and software do you use?",
      answer: "We use industry-standard tools including Figma, Adobe Creative Suite, Sketch, InVision, and various prototyping tools. We can adapt to your preferred tools and workflows."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please select a file smaller than 5MB');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (in real implementation, you'd send to your backend)
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setTimeout(() => {
        setShowApplicationModal(false);
        setSubmitStatus(null);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: 'UI/UX Designer',
          experience: '',
          location: '',
          portfolio: '',
          coverLetter: '',
          resume: null
        });
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Palette className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            UI/UX <span className="text-blue-600">Design</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Create exceptional user experiences with our expert UI/UX design services. 
            From concept to launch, we craft designs that users love and businesses need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowApplicationModal(true)}
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors duration-300 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Apply Now - Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Design Services
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive design solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}>
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                <div className="mb-4">
                  <h4 className={`font-medium mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-center text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`text-sm p-3 rounded-lg ${
                  darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'
                }`}>
                  <strong>Deliverables:</strong> {service.deliverables}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Design Process
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A proven 4-step process that delivers exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => (
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

      {/* Portfolio Projects */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Real results from our design projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-lg`}>
                <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                  darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.category}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className={`text-sm font-medium ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {metric}
                    </div>
                  ))}
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
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Transform Your Digital Experience?
          </h2>
          <p className={`text-xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's create something amazing together. Start your design project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowApplicationModal(true)}
              className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors duration-300 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
              Join Our Design Team
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-2xl`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Apply for UI/UX Designer Position
                </h3>
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className={`p-2 rounded-lg hover:bg-gray-100 ${
                    darkMode ? 'hover:bg-gray-700 text-gray-400' : 'text-gray-500'
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Application Submitted Successfully!
                  </h4>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Thank you for your interest. We'll review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Position *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white' 
                              : 'bg-white border-gray-300 text-gray-900'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        >
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="Senior UI/UX Designer">Senior UI/UX Designer</option>
                          <option value="Product Designer">Product Designer</option>
                          <option value="Visual Designer">Visual Designer</option>
                          <option value="UX Researcher">UX Researcher</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Years of Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="2-3 years">2-3 years</option>
                        <option value="4-5 years">4-5 years</option>
                        <option value="6-8 years">6-8 years</option>
                        <option value="9+ years">9+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="City, Country"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Portfolio URL
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="https://your-portfolio.com"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Resume/CV *
                    </label>
                    <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
                      darkMode 
                        ? 'border-gray-600 bg-gray-700' 
                        : 'border-gray-300 bg-gray-50'
                    }`}>
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="cursor-pointer"
                      >
                        {formData.resume ? (
                          <div className={`${
                            darkMode ? 'text-green-400' : 'text-green-600'
                          }`}>
                            <FileText className="w-6 h-6 mx-auto mb-1" />
                            {formData.resume.name}
                          </div>
                        ) : (
                          <div>
                            <p className={`${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Click to upload your resume
                            </p>
                            <p className={`text-sm ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              PDF, DOC, or DOCX (Max 5MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Cover Letter
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowApplicationModal(false)}
                      className={`flex-1 px-6 py-3 rounded-lg border-2 font-semibold transition-colors duration-300 ${
                        darkMode 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </div>
                      ) : (
                        <>
                          Submit Application
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className={`text-sm text-center ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Your application will be sent to <strong>hr@signinsoft.net</strong>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
}
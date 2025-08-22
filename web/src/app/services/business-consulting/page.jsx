"use client";

import { useState } from 'react';
import NavigationBar from '../../../components/HomePage/NavigationBar';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Lightbulb, 
  Award,
  Phone,
  Mail,
  Star
} from 'lucide-react';

export default function BusinessConsultingPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies aligned with your long-term goals and market opportunities."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Optimization",
      description: "Identify and implement growth opportunities to scale your business efficiently and sustainably."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analysis",
      description: "Deep dive into your business metrics to uncover insights and improvement opportunities."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Strategy",
      description: "Foster innovation culture and implement cutting-edge solutions for competitive advantage."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Development",
      description: "Build high-performing teams and optimize organizational structure for maximum efficiency."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "Implement quality management systems and best practices for operational excellence."
    }
  ];

  const services = [
    "Business Strategy Development",
    "Market Analysis & Research",
    "Competitive Intelligence",
    "Process Optimization",
    "Change Management",
    "Digital Transformation",
    "Financial Planning & Analysis",
    "Risk Management",
    "Merger & Acquisition Support",
    "Operational Efficiency",
    "Leadership Development",
    "Performance Management"
  ];

  const caseStudies = [
    {
      company: "Tech Innovations Inc.",
      industry: "Technology",
      challenge: "Struggling with rapid growth and operational inefficiencies",
      solution: "Implemented scalable processes and organizational restructuring",
      result: "40% increase in operational efficiency and 60% revenue growth",
      duration: "6 months"
    },
    {
      company: "Manufacturing Solutions Ltd.",
      industry: "Manufacturing",
      challenge: "Outdated processes and declining market share",
      solution: "Digital transformation and lean manufacturing implementation",
      result: "25% cost reduction and 35% improvement in production efficiency",
      duration: "8 months"
    },
    {
      company: "Retail Dynamics Corp.",
      industry: "Retail",
      challenge: "Poor customer experience and inventory management",
      solution: "Customer journey optimization and inventory system overhaul",
      result: "50% improvement in customer satisfaction and 30% inventory cost savings",
      duration: "4 months"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "Tech Innovations Inc.",
      text: "SigninSoft's business consulting transformed our entire operation. Their strategic insights and hands-on approach delivered results beyond our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      company: "Manufacturing Solutions Ltd.",
      text: "The team's expertise in process optimization helped us modernize our operations and significantly improve our bottom line.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Retail Dynamics Corp.",
      text: "Outstanding consulting service. They understood our challenges and provided practical solutions that made an immediate impact.",
      rating: 5
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current business state, challenges, and opportunities."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create customized strategies and roadmaps aligned with your business objectives."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Develop detailed implementation plans with timelines, resources, and success metrics."
    },
    {
      step: "04",
      title: "Execution Support",
      description: "Hands-on support during implementation with regular monitoring and adjustments."
    },
    {
      step: "05",
      title: "Performance Monitoring",
      description: "Continuous tracking of results and optimization for sustained success."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} showTopHeader={true} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Business Consulting
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your business with strategic consulting and expert guidance
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Business Consulting Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive consulting services designed to drive growth and operational excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Business Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive suite of business consulting services covers every aspect of your organization, 
                from strategic planning to operational execution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Business Solutions Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to business transformation that delivers measurable results
            </p>
          </div>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from businesses we've helped transform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.company}</h3>
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">{study.industry}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Solution</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Result</h4>
                    <p className="text-sm text-green-600 font-medium">{study.result}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-xs text-gray-500">Duration: {study.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">Hear from leaders who've experienced our impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our business consulting services can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Case Study
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Contact our business consulting experts to discuss your specific needs and how we can help drive your success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <span>business@SigninSoft.com</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Challenge</label>
                  <textarea rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your current business challenges and goals..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">SigninSoft</div>
              <p className="text-gray-400">Transforming businesses through expert consulting and innovative solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/business-consulting" className="hover:text-white">Business Consulting</a></li>
                <li><a href="/services/employment-consulting" className="hover:text-white">Employment Consulting</a></li>
                <li><a href="/services/visa-consulting" className="hover:text-white">Visa Consulting</a></li>
                <li><a href="/services/design-and-development" className="hover:text-white">Design & Development</a></li>
                <li><a href="/services/staffing-services" className="hover:text-white">Staffing Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/career" className="hover:text-white">Career</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SigninSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
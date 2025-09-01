"use client";

import { useState } from 'react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';
import { useDarkMode } from '../../hooks/useDarkMode';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Calendar,
  TrendingUp,
  Shield,
  Lightbulb
} from 'lucide-react';

export default function AboutPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our interactions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We tailor our services to meet your unique needs."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge solutions and continuously evolve our service offerings."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "With worldwide expertise, we help you navigate international opportunities."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project and deliver exceptional results."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We're passionate about helping individuals and businesses achieve their goals."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/images/team/sarah.jpg",
      bio: "With over 15 years of experience in immigration and business consulting, Sarah founded SignInSoft to bridge the gap between global talent and opportunities.",
      expertise: ["Immigration Law", "Business Strategy", "International Relations"]
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/images/team/michael.jpg",
      bio: "Michael leads our technology initiatives, ensuring our digital solutions are cutting-edge and user-friendly for clients worldwide.",
      expertise: ["Software Development", "Digital Innovation", "System Architecture"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Immigration Services",
      image: "/images/team/emily.jpg",
      bio: "Emily specializes in complex immigration cases and has successfully helped thousands of clients achieve their visa and residency goals.",
      expertise: ["Visa Processing", "Document Verification", "Legal Compliance"]
    },
    {
      name: "David Kim",
      role: "Business Development Director",
      image: "/images/team/david.jpg",
      bio: "David focuses on expanding our global reach and developing strategic partnerships to better serve our international clientele.",
      expertise: ["Business Development", "Partnership Management", "Market Expansion"]
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "SignInSoft was established with a vision to simplify global mobility and business processes."
    },
    {
      year: "2019",
      title: "First 1,000 Clients",
      description: "Reached our first major milestone by successfully serving 1,000 satisfied clients."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our comprehensive digital platform to serve clients remotely during the pandemic."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across 50+ countries worldwide."
    },
    {
      year: "2022",
      title: "Technology Innovation",
      description: "Introduced AI-powered document processing and automated workflow systems."
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in immigration and business consulting services."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Clients Served" },
    { number: "50+", label: "Countries" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="text-blue-600">SignInSoft</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Empowering global mobility and business success through innovative solutions, 
            expert guidance, and unwavering commitment to excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm md:text-base ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Mission
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                To simplify complex global processes and empower individuals and businesses 
                to achieve their international goals through innovative technology, expert guidance, 
                and personalized service.
              </p>
            </div>
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <Zap className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Vision
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                To be the world's most trusted platform for global mobility and business solutions, 
                breaking down barriers and creating opportunities for success across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Core Values
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}>
                <div className="text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Journey
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className="w-1/2 px-8">
                    <div className={`p-6 rounded-xl ${
                      darkMode ? 'bg-gray-700' : 'bg-white'
                    } shadow-lg`}>
                      <div className="text-blue-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className={`text-xl font-semibold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {milestone.title}
                      </h3>
                      <p className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Meet Our Team
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The passionate professionals behind SignInSoft's success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className={`text-center p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`px-3 py-1 rounded-full text-xs ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-blue-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Start Your Journey?
          </h2>
          <p className={`text-xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join thousands of satisfied clients who have achieved their global goals with SignInSoft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors duration-300 ${
              darkMode 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
}
"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle, Users, Globe, Briefcase, GraduationCap, Plane, Building, ArrowLeft, Shield } from "lucide-react";
import NavigationBar from "../../components/HomePage/NavigationBar";

export default function ForgotPasswordPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const serviceCards = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Consulting",
      description: "Strategic solutions for growth",
      color: "from-blue-500 to-blue-600",
      delay: "0ms",
      link: "/services/business-consulting"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employment Services",
      description: "Career guidance & placement",
      color: "from-green-500 to-green-600",
      delay: "200ms",
      link: "/services/employment-consulting"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Study Abroad",
      description: "Education visa assistance",
      color: "from-purple-500 to-purple-600",
      delay: "400ms",
      link: "/visa/study-abroad"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel & Tourism",
      description: "Visa processing made easy",
      color: "from-orange-500 to-orange-600",
      delay: "600ms",
      link: "/visa/travel-tourism"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Work Visas",
      description: "Professional immigration",
      color: "from-red-500 to-red-600",
      delay: "800ms",
      link: "/visa/work-business"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Solutions",
      description: "Worldwide service network",
      color: "from-teal-500 to-teal-600",
      delay: "1000ms",
      link: "/services"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log('Password reset requested for:', email);
    }, 2000);
  };

  const handleBackToSignIn = () => {
    window.location.href = '/signin';
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} showTopHeader={false} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex">
        {/* Left Side - Forgot Password Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            {!isSubmitted ? (
              <>
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Forgot Password?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    No worries! Enter your email address and we'll send you a reset link.
                  </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email address"
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center">
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Reset Link...
                        </>
                      ) : (
                        <>
                          Send Reset Link
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleBackToSignIn}
                      className="inline-flex items-center text-sm text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Sign In
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Check Your Email
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We've sent a password reset link to <strong>{email}</strong>
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Didn't receive the email?</strong> Check your spam folder or try again in a few minutes.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                    }}
                    className="w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
                  >
                    Try Different Email
                  </button>
                  
                  <button
                    onClick={handleBackToSignIn}
                    className="w-full inline-flex justify-center items-center text-sm text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Sign In
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Side - Animated Service Cards */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 dark:from-orange-400/5 dark:to-red-400/5"></div>
          
          {/* Floating Animation Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-ping"></div>
          </div>

          <div className="relative z-10 max-w-lg w-full">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Secure & Reliable
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your account security is our top priority. We use industry-standard encryption.
              </p>
            </div>

            <div className="space-y-6">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 opacity-100 translate-y-0 ${
                    index % 2 === 0 ? 'animate-float-down' : 'animate-float-up'
                  }`}
                  style={{ animationDelay: card.delay }}
                >
                  <a href={card.link} className="block">
                    <div className={`bg-gradient-to-r ${card.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer`}>
                      <div className="flex items-center space-x-4">
                        <div className="text-white group-hover:scale-110 transition-transform duration-300">
                          {card.icon}
                        </div>
                        <div className="text-white">
                          <h4 className="text-lg font-semibold">{card.title}</h4>
                          <p className="text-white/80 text-sm">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-down {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        .animate-float-down {
          animation: float-down 3s ease-in-out infinite;
        }
        .animate-float-up {
          animation: float-up 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
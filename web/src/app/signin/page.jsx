import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle, Users, Globe, Briefcase, GraduationCap, Plane, Building } from "lucide-react";
import NavigationBar from "../../components/HomePage/NavigationBar";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const serviceCards = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Consulting",
      description: "Strategic solutions for growth",
      color: "from-blue-500 to-blue-600",
      delay: "0ms"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employment Services",
      description: "Career guidance & placement",
      color: "from-green-500 to-green-600",
      delay: "200ms"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Study Abroad",
      description: "Education visa assistance",
      color: "from-purple-500 to-purple-600",
      delay: "400ms"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel & Tourism",
      description: "Visa processing made easy",
      color: "from-orange-500 to-orange-600",
      delay: "600ms"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Work Visas",
      description: "Professional immigration",
      color: "from-red-500 to-red-600",
      delay: "800ms"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Solutions",
      description: "Worldwide service network",
      color: "from-teal-500 to-teal-600",
      delay: "1000ms"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', { email, password });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} showTopHeader={false} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex">
        {/* Left Side - Sign In Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Sign in to access your dashboard and services
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
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{' '}
                  <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    Sign up here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Animated Service Cards */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
          
          {/* Floating Animation Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-400/20 rounded-full animate-ping"></div>
          </div>

          <div className="relative z-10 max-w-lg w-full">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Services
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive solutions for your business and personal needs
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
                  <div className={`bg-gradient-to-r ${card.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}>
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
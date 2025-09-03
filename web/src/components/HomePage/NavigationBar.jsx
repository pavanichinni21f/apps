import { CheckSquare, Sun, Moon, Menu, X, ChevronDown, User, Calendar, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import TopHeader from "./TopHeader";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useUser } from "../../utils/useUser";
import useAuth from "../../utils/useAuth";

export default function NavigationBar({ showTopHeader = true }) {
  const { darkMode, toggleDarkMode, isLoading } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading } = useUser();
  const { signOut } = useAuth();
  const isAuthenticated = !!user;

  return (
    <>
      {showTopHeader && <TopHeader />}
      <nav className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center mr-3">
                  <CheckSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900 dark:text-white">
                    SigninSoft
                  </div>
                  <div className="text-xs text-orange-500 -mt-1">
                    Get into your Future
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {/* Company Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/about" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
                    <a href="/career" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Career</a>
                    <a href="/blog" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Blog</a>
                    <a href="/contact" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
                  </div>
                </div>
              </div>

              {/* IT Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  <span>IT Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/services/business-consulting" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Business Consulting</a>
                    <a href="/services/employment-consulting" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Employment Consulting</a>
                    <a href="/services/software-development" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Software Development</a>
                    <a href="/services/ui-ux-design" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">UI/UX Design</a>
                    <a href="/services/it-consulting" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">IT Consulting</a>
                    <a href="/services/cybersecurity" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Cybersecurity</a>
                    <a href="/services/data-analytics" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Data & Analytics</a>
                  </div>
                </div>
              </div>

              {/* Visa Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  <span>Visa Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/visa/study-abroad" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Study Abroad Visas</a>
                    <a href="/visa/work-business" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Work & Business Visas</a>
                    <a href="/visa/travel-tourism" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Travel & Tourism</a>
                    <a href="/extension-renewal" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Extension & Renewal</a>
                    <a href="/visa/immigration-consultation" className="block px-4 py-2 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Immigration Consultation</a>
                  </div>
                </div>
              </div>

              <a href="/career" className="text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Career</a>
              <a href="/contact" className="text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Contact</a>
              <a href="/blog" className="text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Blog</a>
              <a href="/book-appointment" className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
              </a>
            </div>
            
            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                disabled={isLoading}
                className="relative p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-500 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 transition-transform duration-500">
                  {darkMode ? (
                    <Sun className="w-5 h-5 animate-pulse" />
                  ) : (
                    <Moon className="w-5 h-5 animate-bounce" />
                  )}
                </div>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
              
              {/* User Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <User className="w-5 h-5" />
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200 dark:border-gray-700">
                  <div className="py-2">
                    {!isAuthenticated ? (
                      <a href="/signin" className="flex items-center space-x-3 px-4 py-3 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <LogIn className="w-4 h-4" />
                        <span>Sign In</span>
                      </a>
                    ) : (
                      <>
                        <a href="/dashboard" className="flex items-center space-x-3 px-4 py-3 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <User className="w-4 h-4" />
                          <span>Dashboard</span>
                        </a>
                        <button 
                          onClick={() => signOut()}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <a href="/about" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">About</a>
                <a href="/career" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Career</a>
                <a href="/services/business-consulting" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Business Consulting</a>
                <a href="/services/employment-consulting" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Employment Consulting</a>
                <a href="/services/software-development" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Software Development</a>
                <a href="/services/ui-ux-design" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">UI/UX Design</a>
                <a href="/services/it-consulting" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">IT Consulting</a>
                <a href="/services/cybersecurity" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Cybersecurity</a>
                <a href="/services/data-analytics" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Data & Analytics</a>
                <a href="/visa/study-abroad" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Study Abroad Visas</a>
                <a href="/visa/work-business" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Work & Business Visas</a>
                <a href="/visa/travel-tourism" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Travel & Tourism</a>
                <a href="/extension-renewal" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Extension & Renewal</a>
                <a href="/visa/immigration-consultation" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Immigration Consultation</a>
                <a href="/contact" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Contact</a>
                <a href="/blog" className="block px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">Blog</a>
                {!isAuthenticated ? (
                  <a href="/signin" className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </a>
                ) : (
                  <>
                    <a href="/dashboard" className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400">
                      <User className="w-4 h-4" />
                      <span>Dashboard</span>
                    </a>
                    <button 
                      onClick={() => signOut()}
                      className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-blue-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </>
                )}
                <a href="/book-appointment" className="flex items-center justify-center space-x-2 mx-3 my-2 px-4 py-3 text-base font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                  <Calendar className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

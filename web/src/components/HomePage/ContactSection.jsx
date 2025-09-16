import { Phone, Mail, MapPin, Send, MessageCircle, Sparkles } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-400 mb-8 shadow-lg border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
                        <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
                        <span>Get In Touch</span>
                        <Sparkles className="w-4 h-4 ml-2 animate-bounce" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        Ready to Transform Your
                        <span className="gradient-primary bg-clip-text text-transparent animate-shimmer">
                            {" "}
                            Business?
                        </span>
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                        Let's start the conversation and explore how we can help you achieve your goals
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="animate-slideInFromLeft">
                        <h3 className="text-3xl font-bold mb-8 text-primary">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            <div className="group flex items-center p-6 rounded-3xl bg-primary/80 backdrop-blur-xl shadow-large border border-color hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-large group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mr-6">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-secondary mb-1">Phone Number</div>
                                    <span className="text-lg font-semibold text-primary group-hover:text-blue-600 transition-colors duration-300">
                                        +1(302) 703-1113
                                    </span>
                                </div>
                            </div>
                            
                            <div className="group flex items-center p-6 rounded-3xl bg-primary/80 backdrop-blur-xl shadow-large border border-color hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-large group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mr-6">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-secondary mb-1">Email Address</div>
                                    <span className="text-lg font-semibold text-primary group-hover:text-green-600 transition-colors duration-300">
                                        info@signinsoft.net
                                    </span>
                                </div>
                            </div>
                            
                            <div className="group flex items-center p-6 rounded-3xl bg-primary/80 backdrop-blur-xl shadow-large border border-color hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-large group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mr-6">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-secondary mb-1">Office Location</div>
                                    <span className="text-lg font-semibold text-primary group-hover:text-purple-600 transition-colors duration-300">
                                        1553 Route 27, Room 1000-2, Suite 1000<br />Somerset, NJ 08873
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="animate-slideInFromRight">
                        <div className="relative p-8 rounded-3xl bg-primary/80 backdrop-blur-xl shadow-large border border-color overflow-hidden">
                            {/* Form background effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
                            
                            {/* Floating particles */}
                            <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.1s'}}></div>
                            <div className="absolute top-12 right-12 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.3s'}}></div>
                            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s'}}></div>
                            
                            <form className="space-y-6 relative z-10">
                                <div className="group">
                                    <label className="block text-sm font-semibold text-secondary mb-3 group-focus-within:text-primary transition-colors duration-300">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 bg-secondary/50 border border-color rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-primary placeholder-secondary/60 transition-all duration-300 hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                
                                <div className="group">
                                    <label className="block text-sm font-semibold text-secondary mb-3 group-focus-within:text-primary transition-colors duration-300">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 bg-secondary/50 border border-color rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-primary placeholder-secondary/60 transition-all duration-300 hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                
                                <div className="group">
                                    <label className="block text-sm font-semibold text-secondary mb-3 group-focus-within:text-primary transition-colors duration-300">
                                        Service Interest
                                    </label>
                                    <select className="w-full px-6 py-4 bg-secondary/50 border border-color rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-primary transition-all duration-300 hover:shadow-md focus:shadow-lg backdrop-blur-sm">
                                        <option value="">Select a service</option>
                                        <option value="business-consulting">Business Consulting</option>
                                        <option value="employment-consulting">Employment Consulting</option>
                                        <option value="visa-consulting">Visa Consulting</option>
                                        <option value="design-development">Design & Development</option>
                                        <option value="staffing-services">Staffing Services</option>
                                    </select>
                                </div>
                                
                                <div className="group">
                                    <label className="block text-sm font-semibold text-secondary mb-3 group-focus-within:text-primary transition-colors duration-300">
                                        Message
                                    </label>
                                    <textarea
                                        rows="5"
                                        className="w-full px-6 py-4 bg-secondary/50 border border-color rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-primary placeholder-secondary/60 transition-all duration-300 hover:shadow-md focus:shadow-lg backdrop-blur-sm resize-none"
                                        placeholder="Tell us about your project or requirements..."
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="group w-full relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-3xl font-semibold hover:shadow-large transform hover:scale-105 transition-all duration-500 flex items-center justify-center overflow-hidden"
                                >
                                    {/* Button glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <Send className="w-5 h-5 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
                                    <span className="relative z-10">Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

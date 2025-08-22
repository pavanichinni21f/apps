import { useState, useEffect } from "react";
import { Briefcase, ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { services } from "../../data/services";

export default function ServicesSection({ isVisible }) {
    const [activeService, setActiveService] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="services" className="py-24 bg-primary relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-green-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-800 dark:text-green-400 mb-6 shadow-lg border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm">
                        <Briefcase className="w-4 h-4 mr-2 animate-pulse" />
                        <span>Our Services</span>
                        <Zap className="w-4 h-4 ml-2 animate-bounce" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        Comprehensive Solutions for
                        <span className="gradient-primary bg-clip-text text-transparent animate-shimmer">
                            {" "}
                            Every Need
                        </span>
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                        From strategic consulting to digital transformation, we provide
                        end-to-end solutions tailored to your business goals
                    </p>
                </div>

                <div className="mb-16">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveService(index)}
                                className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-500 overflow-hidden ${activeService === index
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-large transform scale-105 animate-pulse"
                                        : "bg-primary/80 backdrop-blur-xl text-secondary hover:shadow-large hover:scale-105 border border-color"
                                    }`}
                            >
                                {/* Button glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeService === index ? 'opacity-100' : ''}`}></div>
                                
                                {/* Button content */}
                                <span className="relative z-10 flex items-center">
                                    {service.title}
                                    {activeService === index && (
                                        <Sparkles className="w-4 h-4 ml-2 animate-spin" />
                                    )}
                                </span>
                                
                                {/* Active indicator */}
                                {activeService === index && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full animate-pulse"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="relative bg-primary/80 backdrop-blur-xl rounded-3xl shadow-large border border-color p-8 lg:p-12 overflow-hidden group">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Floating particles */}
                        <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.2s'}}></div>
                        <div className="absolute top-16 right-16 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.8s'}}></div>
                        <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.2s'}}></div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-6">
                                <div className="relative">
                                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${services[activeService].color} text-white flex items-center justify-center mb-6 shadow-large transform hover:scale-110 hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                                        {/* Icon glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative z-10 transform hover:scale-110 transition-transform duration-300">
                                            {services[activeService].icon}
                                        </div>
                                    </div>
                                    
                                    {/* Floating ring animation */}
                                    <div className="absolute top-0 left-0 w-20 h-20 border-2 border-blue-400/20 rounded-full animate-ping"></div>
                                </div>
                                
                                <h3 className="text-3xl font-bold text-primary mb-6 animate-slideInFromLeft">
                                    {services[activeService].title}
                                </h3>
                                <p className="text-lg text-secondary mb-8 leading-relaxed animate-fadeIn">
                                    {services[activeService].description}
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {services[activeService].features.map((feature, idx) => (
                                        <div 
                                            key={idx} 
                                            className="flex items-center group/feature hover:bg-secondary/50 p-3 rounded-xl transition-all duration-300"
                                            style={{animationDelay: `${idx * 0.1}s`}}
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/feature:scale-110 group-hover/feature:text-green-400 transition-all duration-300" />
                                            <span className="text-secondary font-medium group-hover/feature:text-primary transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                
                                <a
                                    href={`/services/${services[activeService].title.toLowerCase().replace(/\\s+/g, "-").replace("&", "and")}`}
                                    className="group/link inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-large hover:scale-105 transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Button glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <span className="relative z-10">Learn More About {services[activeService].title}</span>
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300 relative z-10" />
                                </a>
                            </div>
                            
                            <div className="relative">
                                <div
                                    className={`${services[activeService].bgColor} h-80 rounded-3xl flex items-center justify-center text-secondary transition-all duration-700 transform hover:scale-105 relative overflow-hidden group/viz border border-color shadow-large`}
                                >
                                    {/* Visualization background effects */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover/viz:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Animated grid pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                                            {Array.from({ length: 64 }).map((_, i) => (
                                                <div 
                                                    key={i} 
                                                    className="border border-current opacity-20 group-hover/viz:opacity-40 transition-opacity duration-500"
                                                    style={{animationDelay: `${i * 0.02}s`}}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="relative z-10 text-center">
                                        <div className="text-6xl mb-4 opacity-20 group-hover/viz:opacity-40 transition-opacity duration-500">
                                            {services[activeService].icon}
                                        </div>
                                        <span className="font-semibold text-lg">
                                            {services[activeService].title} Visualization
                                        </span>
                                    </div>
                                    
                                    {/* Corner decorations */}
                                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-current opacity-20 group-hover/viz:opacity-40 transition-opacity duration-500"></div>
                                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-current opacity-20 group-hover/viz:opacity-40 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-current opacity-20 group-hover/viz:opacity-40 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-current opacity-20 group-hover/viz:opacity-40 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

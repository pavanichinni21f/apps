import { Target, Sparkles, Award, Zap } from "lucide-react";
import { features } from "../../data/features";

// Icon mapping
const iconMap = {
  Target: Target,
  Award: Award,
  Zap: Zap
};

export default function FeaturesSection({ isVisible }) {
    return (
        <section
            id="features"
            className="py-24 bg-secondary relative overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-400 mb-6 shadow-lg border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
                        <Target className="w-4 h-4 mr-2 animate-pulse" />
                        <span>Why Choose SigninSoft?</span>
                        <Sparkles className="w-4 h-4 ml-2 animate-bounce" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        Delivering Excellence Through
                        <span className="gradient-primary bg-clip-text text-transparent animate-shimmer">
                            {" "}
                            Innovation
                        </span>
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                        We deliver results-driven solutions with proven expertise across
                        multiple industries, combining strategic thinking with
                        cutting-edge technology
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Card background with glassmorphism effect */}
                            <div className="relative bg-primary/80 backdrop-blur-xl rounded-3xl p-8 shadow-large border border-color hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden">
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Floating particles effect */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.1s'}}></div>
                                <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.3s'}}></div>
                                <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                                
                                <div className="relative z-10 text-center">
                                    <div className="relative mb-8">
                                        <div
                                            className={`mx-auto w-24 h-24 rounded-3xl bg-gradient-to-r ${feature.color === "text-blue-500" ? "from-blue-500 to-blue-600" : feature.color === "text-green-500" ? "from-green-500 to-green-600" : "from-purple-500 to-purple-600"} text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-large relative overflow-hidden`}
                                        >
                                            {/* Icon glow effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                                {(() => {
                                                    const IconComponent = iconMap[feature.icon];
                                                    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
                                                })()}
                                            </div>
                                        </div>
                                        
                                        {/* Floating ring animation */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-32 h-32 border-2 border-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-pulse"></div>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-40 h-40 border border-purple-400/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000"></div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-secondary leading-relaxed group-hover:text-primary transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                    
                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-20 transition-all duration-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

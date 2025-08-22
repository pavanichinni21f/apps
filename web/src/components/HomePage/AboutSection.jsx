import { Award, ArrowRight, Users, TrendingUp, Star, Sparkles } from "lucide-react";

export default function AboutSection({ isVisible }) {
    return (
        <section
            id="about"
            className="py-24 bg-secondary relative overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-400/5 to-orange-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-400 mb-6 shadow-lg border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
                            <Award className="w-4 h-4 mr-2 animate-pulse" />
                            <span>About SigninSoft</span>
                            <Sparkles className="w-4 h-4 ml-2 animate-bounce" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                            Transforming Businesses for
                            <span className="gradient-primary bg-clip-text text-transparent animate-shimmer">
                                {" "}
                                15+ Years
                            </span>
                        </h2>
                        <p className="text-lg text-secondary mb-8 leading-relaxed animate-fadeIn">
                            With over 15 years of experience in the consulting industry,
                            SigninSoft has been helping businesses achieve their goals
                            through strategic guidance, innovative solutions, and expert
                            services that drive real results.
                        </p>
                        <p className="text-lg text-secondary mb-10 leading-relaxed animate-slideInFromLeft">
                            Our team of certified professionals specializes in business
                            transformation, talent acquisition, immigration services,
                            digital solutions, and workforce management with a proven track
                            record of success.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="group relative text-center p-8 rounded-3xl bg-primary/80 backdrop-blur-xl shadow-large border border-color hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
                                {/* Card background effects */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Floating particles */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.1s'}}></div>
                                <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.3s'}}></div>
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-large group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <TrendingUp className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                        500+
                                    </div>
                                    <div className="text-secondary font-medium group-hover:text-primary transition-colors duration-300">
                                        Projects Completed
                                    </div>
                                </div>
                                
                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                            </div>
                            
                            <div className="group relative text-center p-8 rounded-3xl bg-primary/80 backdrop-blur-xl shadow-large border border-color hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
                                {/* Card background effects */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Floating particles */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.2s'}}></div>
                                <div className="absolute top-6 right-8 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.4s'}}></div>
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-large group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Star className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                        98%
                                    </div>
                                    <div className="text-secondary font-medium group-hover:text-primary transition-colors duration-300">
                                        Client Satisfaction
                                    </div>
                                </div>
                                
                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                            </div>
                        </div>
                        <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-3xl font-semibold hover:shadow-large transform hover:scale-105 transition-all duration-500 flex items-center overflow-hidden">
                            {/* Button glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                            <span className="relative z-10">Learn More About Us</span>
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                        </button>
                    </div>
                    
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                    >
                        <div className="relative group">
                            {/* Main image container */}
                            <div className="relative h-96 rounded-3xl shadow-large overflow-hidden border border-color group-hover:scale-105 transition-all duration-700">
                                {/* Background Image */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/40 transition-all duration-500"></div>
                                </div>
                                
                                {/* Animated background pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                                        {Array.from({ length: 36 }).map((_, i) => (
                                            <div 
                                                key={i} 
                                                className="border border-white/20 group-hover:border-white/40 transition-all duration-500"
                                                style={{animationDelay: `${i * 0.05}s`}}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Content overlay */}
                                <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                                    <div className="p-8">
                                        <div className="text-6xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                            <Users className="w-16 h-16 mx-auto" />
                                        </div>
                                        <span className="font-semibold text-xl">Our Team Excellence</span>
                                    </div>
                                </div>
                                
                                {/* Floating elements inside */}
                                <div className="absolute top-8 left-8 w-4 h-4 bg-white/20 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.1s'}}></div>
                                <div className="absolute top-12 right-12 w-3 h-3 bg-white/20 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.3s'}}></div>
                                <div className="absolute bottom-8 left-12 w-2 h-2 bg-white/20 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                            </div>
                            
                            {/* Floating decorative elements */}
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-3xl blur-2xl group-hover:scale-110 group-hover:blur-3xl transition-all duration-700"></div>
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-red-500/30 rounded-3xl blur-2xl group-hover:scale-110 group-hover:blur-3xl transition-all duration-700"></div>
                            
                            {/* Additional floating rings */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

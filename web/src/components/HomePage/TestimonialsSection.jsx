import { Star, Quote, TrendingUp, Award, CheckCircle } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection({ isVisible }) {
    return (
        <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400/10 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 right-10 w-16 h-16 bg-blue-400/10 rounded-full animate-ping"></div>
                <div className="absolute bottom-10 left-10 w-20 h-20 bg-green-400/10 rounded-full animate-pulse"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 text-yellow-800 dark:text-yellow-400 mb-8 shadow-lg">
                        <Award className="w-5 h-5 mr-2" />
                        Client Success Stories
                        <TrendingUp className="w-4 h-4 ml-2" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Trusted by Industry
                        <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-gradient">
                            {" "}
                            Leaders
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Real feedback from businesses we've helped transform and grow worldwide
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`group relative backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} overflow-hidden`}
                            style={{ 
                                transitionDelay: `${index * 200}ms`,
                                background: index % 2 === 0 
                                    ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)' 
                                    : 'linear-gradient(135deg, rgba(249,250,251,0.9) 0%, rgba(255,255,255,0.9) 100%)'
                            }}
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>
                            
                            {/* Quote Icon */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <Quote className="w-8 h-8 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                                                style={{ animationDelay: `${i * 100}ms` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                                
                                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg font-medium relative z-10">
                                    "{testimonial.text}"
                                </p>
                                
                                <div className="flex items-center relative z-10">
                                    <div className="relative">
                                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            {testimonial.avatar}
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                                            {testimonial.position}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        </div>
                    ))}
                </div>
                
                {/* Bottom Stats */}
                <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: '800ms' }}>
                    <div className="group">
                        <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">Happy Clients</div>
                    </div>
                    <div className="group">
                        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">Success Rate</div>
                    </div>
                    <div className="group">
                        <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">4.9</div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">Average Rating</div>
                    </div>
                    <div className="group">
                        <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">Support</div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                .shadow-3xl {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </section>
    );
}

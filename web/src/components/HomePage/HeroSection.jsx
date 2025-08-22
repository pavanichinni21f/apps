import { ArrowRight, Play, CheckSquare, ChevronLeft, ChevronRight, Sparkles, Zap } from "lucide-react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { stats } from "../../data/stats";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const typedText = useTypewriter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      title: "Get Into Your Future with",
      subtitle: "Leading Business Solutions",
      description: "Leading consulting, business solution and systems integration firm providing comprehensive IT services, visa solutions, and digital transformation"
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      title: "Transform Your Business",
      subtitle: "Digital Innovation",
      description: "Empowering businesses with cutting-edge technology solutions and strategic consulting for sustainable growth"
    },
    {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      title: "Global Visa Solutions",
      subtitle: "Your Gateway Worldwide",
      description: "Expert visa consulting and immigration services to help you achieve your international dreams"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[600px] flex items-center"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/20 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30"></div>
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-orange-600/20 animate-gradient-x"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Floating Rings */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-orange-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-blue-400/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
      </div>
      {/* Sliding Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-orange-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full z-10">
        <div className="text-center text-white">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 animate-slideIn hover:bg-white/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Leading Business Solutions Provider
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block">{heroSlides[currentSlide].title}</span>
            <span className="block text-orange-400">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group relative border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center hover:border-white/50 hover:shadow-lg">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center animate-slideIn bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/10 hover:border-white/30"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative text-3xl md:text-4xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">
                    {stat.number}
                    {stat.suffix}
                  </div>
                </div>
                <div className="text-white/80 text-sm group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

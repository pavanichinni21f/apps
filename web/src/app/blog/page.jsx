"use client";

import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';
import { useDarkMode } from '../../hooks/useDarkMode';

export default function BlogPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'business', name: 'Business Strategy' },
    { id: 'employment', name: 'Employment' },
    { id: 'visa', name: 'Visa & Immigration' },
    { id: 'technology', name: 'Technology' },
    { id: 'industry', name: 'Industry Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How to Scale Your Business in 2024: A Complete Guide",
      excerpt: "Essential strategies for sustainable business growth in the modern marketplace. Learn proven methods to expand your operations while maintaining quality.",
      author: "Sarah Johnson",
      date: "August 15, 2024",
      category: "business",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Remote Work: Employment Trends to Watch",
      excerpt: "Explore the evolving landscape of remote work and its impact on recruitment, employee satisfaction, and business operations.",
      author: "Michael Chen",
      date: "August 12, 2024",
      category: "employment",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
    },
    {
      id: 3,
      title: "Navigating H-1B Visa Changes: What Employers Need to Know",
      excerpt: "Stay updated on the latest H-1B visa regulations and how they affect your international hiring strategy.",
      author: "Emily Rodriguez",
      date: "August 10, 2024",
      category: "visa",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Digital Transformation: A Step-by-Step Implementation Guide",
      excerpt: "Learn how to successfully implement digital transformation initiatives that drive efficiency and innovation.",
      author: "David Kim",
      date: "August 8, 2024",
      category: "technology",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 5,
      title: "Building High-Performance Teams in a Competitive Market",
      excerpt: "Strategies for attracting, developing, and retaining top talent in today's competitive employment landscape.",
      author: "Lisa Thompson",
      date: "August 5, 2024",
      category: "employment",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      title: "Industry 4.0: Manufacturing's Digital Revolution",
      excerpt: "Discover how smart manufacturing technologies are reshaping the industry and creating new opportunities.",
      author: "Robert Wilson",
      date: "August 3, 2024",
      category: "industry",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 7,
      title: "Startup Funding Strategies: From Seed to Series A",
      excerpt: "A comprehensive guide to securing funding for your startup at every stage of growth.",
      author: "Jennifer Lee",
      date: "August 1, 2024",
      category: "business",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 8,
      title: "The Art of Executive Search: Finding C-Level Talent",
      excerpt: "Best practices for identifying and recruiting executive-level talent for your organization.",
      author: "Mark Davis",
      date: "July 29, 2024",
      category: "employment",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <NavigationBar showTopHeader={true} />
      
      {/* Hero Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-600 to-blue-800'
      } text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Insights & Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Stay informed with the latest trends, strategies, and insights from our industry experts
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={`py-8 border-b ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && (
        <section className={`py-16 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-80 rounded-lg overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="bg-gray-200 h-full hidden items-center justify-center">
                  <span className="text-gray-500">Image not available</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === featuredPost.category)?.name}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className={`py-16 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(cat => cat.id === selectedCategory)?.name} Articles`}
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured || selectedCategory !== 'all').map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="bg-gray-200 h-full hidden items-center justify-center">
                    <span className="text-gray-500">Image not available</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={`py-20 ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-blue-600'
      } text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  PlayCircle,
  PauseCircle,
  RefreshCw,
  Moon,
  Sun,
  X,
  Image,
  Video,
  BookOpen,
  Globe,
  Star,
  MessageSquare,
  Share2,
  Download
} from "lucide-react";

export default function ContentDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddContentModal, setShowAddContentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [content, setContent] = useState([
    {
      id: 1,
      title: "Complete Guide to Digital Transformation",
      type: "Blog Post",
      status: "Published",
      author: "John Doe",
      category: "IT Consulting",
      publishDate: "2024-03-15",
      views: 1250,
      likes: 89,
      comments: 23,
      description: "Comprehensive guide covering all aspects of digital transformation for modern businesses",
      tags: ["Digital Transformation", "Technology", "Business Strategy"],
      featured: true
    },
    {
      id: 2,
      title: "Visa Application Process Explained",
      type: "Video",
      status: "Draft",
      author: "Jane Smith",
      category: "Visa Services",
      publishDate: "2024-03-20",
      views: 0,
      likes: 0,
      comments: 0,
      description: "Step-by-step video guide for visa application procedures",
      tags: ["Visa", "Immigration", "Documentation"],
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices 2024",
      type: "Article",
      status: "Published",
      author: "Mike Johnson",
      category: "Cybersecurity",
      publishDate: "2024-03-10",
      views: 2100,
      likes: 156,
      comments: 45,
      description: "Latest cybersecurity trends and best practices for businesses",
      tags: ["Cybersecurity", "Security", "Best Practices"],
      featured: true
    },
    {
      id: 4,
      title: "UI/UX Design Trends Infographic",
      type: "Infographic",
      status: "Review",
      author: "Sarah Wilson",
      category: "UI/UX Design",
      publishDate: "2024-03-25",
      views: 0,
      likes: 0,
      comments: 0,
      description: "Visual representation of current UI/UX design trends",
      tags: ["UI/UX", "Design", "Trends"],
      featured: false
    },
    {
      id: 5,
      title: "Business Consulting Success Stories",
      type: "Case Study",
      status: "Published",
      author: "David Brown",
      category: "Business Consulting",
      publishDate: "2024-03-05",
      views: 890,
      likes: 67,
      comments: 12,
      description: "Real-world examples of successful business transformations",
      tags: ["Business Consulting", "Success Stories", "Case Study"],
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics Workshop Recording",
      type: "Video",
      status: "Published",
      author: "Emily Davis",
      category: "Data Analytics",
      publishDate: "2024-02-28",
      views: 1680,
      likes: 124,
      comments: 34,
      description: "Complete workshop on data analytics fundamentals and tools",
      tags: ["Data Analytics", "Workshop", "Training"],
      featured: true
    }
  ]);

  const [newContent, setNewContent] = useState({
    title: "",
    type: "Blog Post",
    category: "",
    description: "",
    tags: "",
    featured: false
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Blog Post":
        return <FileText className="w-4 h-4" />;
      case "Video":
        return <Video className="w-4 h-4" />;
      case "Article":
        return <BookOpen className="w-4 h-4" />;
      case "Infographic":
        return <Image className="w-4 h-4" />;
      case "Case Study":
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Published":
        return <CheckCircle className="w-4 h-4" />;
      case "Draft":
        return <Edit className="w-4 h-4" />;
      case "Review":
        return <Clock className="w-4 h-4" />;
      case "Archived":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleAddContent = (e) => {
    e.preventDefault();
    const contentItem = {
      id: content.length + 1,
      ...newContent,
      status: "Draft",
      author: "Current User",
      publishDate: new Date().toISOString().split('T')[0],
      views: 0,
      likes: 0,
      comments: 0,
      tags: newContent.tags.split(',').map(tag => tag.trim())
    };
    setContent([...content, contentItem]);
    setNewContent({
      title: "",
      type: "Blog Post",
      category: "",
      description: "",
      tags: "",
      featured: false
    });
    setShowAddContentModal(false);
  };

  const filteredContent = content.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = typeFilter === "all" || item.type.toLowerCase().replace(" ", "-") === typeFilter;
    const matchesStatus = statusFilter === "all" || item.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalContent = content.length;
  const publishedContent = content.filter(item => item.status === "Published").length;
  const draftContent = content.filter(item => item.status === "Draft").length;
  const totalViews = content.reduce((sum, item) => sum + item.views, 0);
  const totalLikes = content.reduce((sum, item) => sum + item.likes, 0);
  const featuredContent = content.filter(item => item.featured).length;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/dashboard" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SigninSoft
              </a>
              <span className="ml-4 text-gray-500 dark:text-gray-400">/ Content</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleRefresh}
                className={`p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${isLoading ? "animate-spin" : ""}`}
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Content Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Create, manage, and publish your content across all channels</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Content</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalContent}</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <FileText className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Published</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{publishedContent}</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Views</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalViews.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <Eye className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Featured</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{featuredContent}</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
                <Star className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 rounded-xl border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:text-white"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 rounded-xl border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:text-white"
            >
              <option value="all">All Types</option>
              <option value="blog-post">Blog Post</option>
              <option value="video">Video</option>
              <option value="article">Article</option>
              <option value="infographic">Infographic</option>
              <option value="case-study">Case Study</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-xl border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="review">Review</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <button
            onClick={() => setShowAddContentModal(true)}
            className="flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Content
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div key={item.id} className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 mr-2">
                      {getTypeIcon(item.type)}
                      <span className="ml-1">{item.type}</span>
                    </span>
                    {item.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">by {item.author}</p>
                </div>
                <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                  {getStatusIcon(item.status)}
                  <span className="ml-1">{item.status}</span>
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Category</span>
                  <span className="font-medium text-gray-900 dark:text-white">{item.category}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Published</span>
                  <span className="font-medium text-gray-900 dark:text-white">{new Date(item.publishDate).toLocaleDateString()}</span>
                </div>
                
                {item.status === "Published" && (
                  <>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Views</span>
                      <span className="font-medium text-gray-900 dark:text-white">{item.views.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Engagement</span>
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center text-gray-900 dark:text-white">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          {item.comments}
                        </span>
                        <span className="flex items-center text-gray-900 dark:text-white">
                          <Star className="w-3 h-3 mr-1" />
                          {item.likes}
                        </span>
                      </div>
                    </div>
                  </>
                )}
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="inline-flex px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Content Modal */}
      {showAddContentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add New Content</h3>
              <button
                onClick={() => setShowAddContentModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddContent} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={newContent.title}
                  onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type</label>
                  <select
                    value={newContent.type}
                    onChange={(e) => setNewContent({...newContent, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="Blog Post">Blog Post</option>
                    <option value="Video">Video</option>
                    <option value="Article">Article</option>
                    <option value="Infographic">Infographic</option>
                    <option value="Case Study">Case Study</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    value={newContent.category}
                    onChange={(e) => setNewContent({...newContent, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Business Consulting">Business Consulting</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Visa Services">Visa Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  value={newContent.description}
                  onChange={(e) => setNewContent({...newContent, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={newContent.tags}
                  onChange={(e) => setNewContent({...newContent, tags: e.target.value})}
                  placeholder="e.g. Technology, Business, Strategy"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={newContent.featured}
                  onChange={(e) => setNewContent({...newContent, featured: e.target.checked})}
                  className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mark as Featured Content
                </label>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddContentModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Add Content
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
import { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  FileText,
  Calendar,
  Settings,
  Plus,
  Search,
  Bell,
  User,
  TrendingUp,
  DollarSign,
  Briefcase,
  Globe,
  Moon,
  Sun,
  Filter,
  Download,
  RefreshCw,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  Zap,
  Target,
  Activity,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showNotifications, setShowNotifications] = useState(false);

  // Real-time data simulation
  const [realtimeStats, setRealtimeStats] = useState({
    clients: 248,
    projects: 42,
    revenue: 125430,
    consultations: 89,
  });

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setRealtimeStats((prev) => ({
        clients: prev.clients + Math.floor(Math.random() * 3),
        projects: prev.projects + Math.floor(Math.random() * 2),
        revenue: prev.revenue + Math.floor(Math.random() * 1000),
        consultations: prev.consultations + Math.floor(Math.random() * 2),
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Total Clients",
      value: realtimeStats.clients.toLocaleString(),
      change: "+12%",
      trend: "up",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Active Projects",
      value: realtimeStats.projects.toString(),
      change: "+8%",
      trend: "up",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Revenue",
      value: `$${realtimeStats.revenue.toLocaleString()}`,
      change: "+23%",
      trend: "up",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Consultations",
      value: realtimeStats.consultations.toString(),
      change: "+15%",
      trend: "up",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      client: "Tech Innovations Inc.",
      service: "Business Consulting",
      status: "In Progress",
      deadline: "2024-09-15",
      progress: 75,
      priority: "High",
      avatar: "TI",
    },
    {
      id: 2,
      client: "Global Enterprises",
      service: "Visa Consulting",
      status: "Completed",
      deadline: "2024-08-30",
      progress: 100,
      priority: "Medium",
      avatar: "GE",
    },
    {
      id: 3,
      client: "StartUp Solutions",
      service: "Design & Development",
      status: "In Progress",
      deadline: "2024-09-20",
      progress: 45,
      priority: "High",
      avatar: "SS",
    },
    {
      id: 4,
      client: "HR Partners",
      service: "Employment Consulting",
      status: "Planning",
      deadline: "2024-10-01",
      progress: 20,
      priority: "Low",
      avatar: "HP",
    },
  ];

  const upcomingMeetings = [
    {
      id: 1,
      client: "Acme Corp",
      time: "10:00 AM",
      date: "Today",
      type: "Strategy Review",
      avatar: "AC",
      duration: "1h",
    },
    {
      id: 2,
      client: "Beta Industries",
      time: "2:30 PM",
      date: "Today",
      type: "Initial Consultation",
      avatar: "BI",
      duration: "30m",
    },
    {
      id: 3,
      client: "Gamma Solutions",
      time: "11:00 AM",
      date: "Tomorrow",
      type: "Project Update",
      avatar: "GS",
      duration: "45m",
    },
  ];

  const notifications = [
    {
      id: 1,
      text: "New client inquiry from TechCorp",
      time: "2 min ago",
      type: "client",
    },
    {
      id: 2,
      text: "Project milestone completed",
      time: "15 min ago",
      type: "project",
    },
    {
      id: 3,
      text: "Meeting reminder in 30 minutes",
      time: "30 min ago",
      type: "calendar",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Planning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const filteredProjects = recentProjects.filter((project) => {
    const matchesSearch =
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || project.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Header with Glassmorphism */}
      <header className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                SigninSoft
              </a>
              <span className="ml-4 text-gray-500 dark:text-gray-400">
                Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Advanced Search */}
              <div className="relative group">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Smart search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-80 rounded-xl border-0 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:text-white"
                />
              </div>

              {/* Refresh Button */}
              <button
                onClick={handleRefresh}
                className={`p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${isLoading ? "animate-spin" : ""}`}
              >
                <RefreshCw className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-50">
                    <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Notifications
                      </h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-4 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                          <p className="text-sm text-gray-900 dark:text-white">
                            {notification.text}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* User Menu */}
              <button className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Modern Sidebar */}
          <div className="lg:w-64">
            <nav className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
              <ul className="space-y-3">
                {[
                  {
                    id: "overview",
                    icon: BarChart3,
                    label: "Overview",
                    color: "text-blue-500",
                  },
                  {
                    id: "clients",
                    icon: Users,
                    label: "Clients",
                    color: "text-green-500",
                  },
                  {
                    id: "projects",
                    icon: Briefcase,
                    label: "Projects",
                    color: "text-purple-500",
                  },
                  {
                    id: "content",
                    icon: FileText,
                    label: "Content",
                    color: "text-orange-500",
                  },
                  {
                    id: "calendar",
                    icon: Calendar,
                    label: "Calendar",
                    color: "text-red-500",
                  },
                  {
                    id: "settings",
                    icon: Settings,
                    label: "Settings",
                    color: "text-gray-500",
                  },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                        activeTab === item.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 mr-3 transition-colors ${activeTab === item.id ? "text-white" : item.color}`}
                      />
                      <span className="font-medium">{item.label}</span>
                      {activeTab === item.id && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Welcome Section with Animation */}
                <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                      Welcome back! 🚀
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Here's what's happening with your consulting business
                      today.
                    </p>
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                        <Activity className="w-4 h-4 mr-1" />
                        <span>All systems operational</span>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div
                        className={`backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl ${stat.bgColor}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg`}
                          >
                            {stat.icon}
                          </div>
                          <div className="flex items-center text-sm">
                            {stat.trend === "up" ? (
                              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                            ) : (
                              <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                            )}
                            <span
                              className={
                                stat.trend === "up"
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-red-600 dark:text-red-400"
                              }
                            >
                              {stat.change}
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                            {stat.title}
                          </p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            from last month
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Projects and Meetings */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Projects with Advanced Features */}
                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mr-4">
                          Recent Projects
                        </h2>
                        <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-2 py-1 rounded-lg text-xs font-medium">
                          {filteredProjects.length} active
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="text-xs rounded-lg border-0 bg-gray-100 dark:bg-gray-700 dark:text-white"
                        >
                          <option value="all">All Status</option>
                          <option value="in progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="planning">Planning</option>
                        </select>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                          View All
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4 max-h-80 overflow-y-auto">
                      {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative">
                          <div className="border-l-4 border-blue-500 pl-4 p-3 rounded-r-xl hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-200">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold mr-3">
                                  {project.avatar}
                                </div>
                                <h3 className="font-medium text-gray-900 dark:text-white">
                                  {project.client}
                                </h3>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(project.status)}`}
                                >
                                  {project.status}
                                </span>
                                <span
                                  className={`px-2 py-1 rounded-lg text-xs font-medium ${getPriorityColor(project.priority)}`}
                                >
                                  {project.priority}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              {project.service}
                            </p>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                Due: {project.deadline}
                              </span>
                              <div className="flex items-center space-x-2">
                                <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                  <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                  {project.progress}%
                                </span>
                              </div>
                            </div>
                            {/* Quick Actions */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2">
                              <button className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                                <MoreHorizontal className="w-4 h-4 text-gray-400" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Upcoming Meetings */}
                  <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mr-4">
                          Today's Schedule
                        </h2>
                        <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded-lg text-xs font-medium">
                          {upcomingMeetings.length} meetings
                        </span>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl text-sm hover:shadow-lg transition-all duration-200 flex items-center">
                        <Plus className="w-4 h-4 mr-1" />
                        Add Meeting
                      </button>
                    </div>
                    <div className="space-y-4">
                      {upcomingMeetings.map((meeting, index) => (
                        <div key={meeting.id} className="group relative">
                          <div className="flex items-center p-4 bg-gradient-to-r from-gray-50/50 to-blue-50/50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl hover:shadow-md transition-all duration-200">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4">
                              {meeting.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h3 className="font-medium text-gray-900 dark:text-white">
                                  {meeting.client}
                                </h3>
                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {meeting.duration}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {meeting.type}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                  <span className="font-medium text-blue-600 dark:text-blue-400">
                                    {meeting.time}
                                  </span>
                                  <span className="mx-1">•</span>
                                  <span>{meeting.date}</span>
                                </div>
                                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                                    <Eye className="w-3 h-3 text-gray-400" />
                                  </button>
                                  <button className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                                    <Edit className="w-3 h-3 text-gray-400" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {index < upcomingMeetings.length - 1 && (
                            <div className="w-px h-4 bg-gray-200 dark:bg-gray-600 ml-5 my-1"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Enhanced other tabs will follow similar pattern... */}
            // rest of other tabs with similar modern styling
          </div>
        </div>
      </div>

      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

import { useState } from 'react';
import { Calendar, Clock, User, Video, CheckCircle, X, MapPin, Phone, Star } from 'lucide-react';
import NavigationBar from '../../components/HomePage/NavigationBar';
import Footer from '../../components/HomePage/Footer';
import { useDarkMode } from '../../hooks/useDarkMode';

export default function BookAppointmentPage() {
  const { darkMode } = useDarkMode();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    meetingType: 'google-meet'
  });

  const services = [
    {
      id: 'business-consulting',
      title: 'Business Consulting',
      description: 'Strategic business planning and growth consulting',
      duration: '60 minutes',
      price: '$150',
      icon: '💼',
      features: ['Business Strategy', 'Market Analysis', 'Growth Planning', 'Risk Assessment']
    },
    {
      id: 'employment-consulting',
      title: 'Employment Consulting',
      description: 'Career guidance and employment solutions',
      duration: '45 minutes',
      price: '$120',
      icon: '👥',
      features: ['Career Planning', 'Resume Review', 'Interview Prep', 'Job Search Strategy']
    },
    {
      id: 'visa-consulting',
      title: 'Visa Consulting',
      description: 'Immigration and visa application assistance',
      duration: '90 minutes',
      price: '$200',
      icon: '🛂',
      features: ['Visa Assessment', 'Document Review', 'Application Guidance', 'Legal Advice']
    },
    {
      id: 'design-development',
      title: 'Design & Development',
      description: 'UI/UX design and web development consultation',
      duration: '75 minutes',
      price: '$180',
      icon: '🎨',
      features: ['UI/UX Design', 'Web Development', 'Mobile Apps', 'Brand Identity']
    }
  ];

  const consultants = [
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      title: 'Senior Business Consultant',
      specialties: ['business-consulting', 'employment-consulting'],
      experience: '8+ years',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bio: 'Expert in strategic business planning with extensive experience in helping startups and SMEs achieve sustainable growth.'
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      title: 'Immigration Specialist',
      specialties: ['visa-consulting'],
      experience: '12+ years',
      rating: 4.8,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bio: 'Certified immigration consultant with deep expertise in visa applications and immigration law across multiple countries.'
    },
    {
      id: 'emily-davis',
      name: 'Emily Davis',
      title: 'Lead UX Designer',
      specialties: ['design-development'],
      experience: '10+ years',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bio: 'Award-winning designer specializing in user experience design and digital product development for enterprise clients.'
    },
    {
      id: 'david-wilson',
      name: 'David Wilson',
      title: 'HR & Career Consultant',
      specialties: ['employment-consulting', 'business-consulting'],
      experience: '15+ years',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bio: 'Former Fortune 500 HR executive now helping professionals navigate career transitions and workplace challenges.'
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedConsultant(null);
  };

  const handleConsultantSelect = (consultant) => {
    setSelectedConsultant(consultant);
    setShowBookingModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would:
      // 1. Create the appointment in your database
      // 2. Generate Google Meet link
      // 3. Send calendar invites
      // 4. Send confirmation emails
      
      console.log('Appointment booked:', {
        service: selectedService,
        consultant: selectedConsultant,
        date: selectedDate,
        time: selectedTime,
        formData
      });
      
      setBookingSuccess(true);
      
      // Reset form after successful booking
      setTimeout(() => {
        setShowBookingModal(false);
        setBookingSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          meetingType: 'google-meet'
        });
        setSelectedDate('');
        setSelectedTime('');
        setSelectedService(null);
        setSelectedConsultant(null);
      }, 3000);
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('There was an error booking your appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setBookingSuccess(false);
  };

  const filteredConsultants = selectedService 
    ? consultants.filter(consultant => consultant.specialties.includes(selectedService.id))
    : consultants;

  // Generate next 14 days for date selection
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const availableDates = generateDates();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <NavigationBar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book Your Consultation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Schedule a personalized consultation with our expert consultants and take your business to the next level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Choose Service
            </button>
            <button 
              onClick={() => document.getElementById('consultants').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Service
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Select the consultation service that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedService?.id === service.id ? 'ring-2 ring-purple-500 shadow-lg' : ''
                }`}
                onClick={() => handleServiceSelect(service)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{service.duration}</span>
                  <span className="text-lg font-bold text-purple-600">{service.price}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {selectedService?.id === service.id && (
                  <div className="mt-4 p-2 bg-purple-50 rounded-lg text-center">
                    <span className="text-purple-600 font-semibold">Selected</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section id="consultants" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Expert Consultants
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {selectedService 
                ? `Available consultants for ${selectedService.title}`
                : 'Choose from our team of experienced professionals'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredConsultants.map((consultant) => (
              <div key={consultant.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={consultant.image} 
                    alt={consultant.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{consultant.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{consultant.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{consultant.experience}</p>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(consultant.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    {consultant.rating} ({consultant.reviews} reviews)
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{consultant.bio}</p>
                
                <button 
                  onClick={() => handleConsultantSelect(consultant)}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  Book Appointment <Calendar className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple steps to book your consultation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Service',
                description: 'Select the consultation service that matches your needs',
                icon: <User className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Pick Consultant',
                description: 'Choose from our team of expert consultants',
                icon: <Calendar className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Schedule Time',
                description: 'Select your preferred date and time slot',
                icon: <Clock className="w-8 h-8" />
              },
              {
                step: '04',
                title: 'Join Meeting',
                description: 'Receive Google Meet link and join your consultation',
                icon: <Video className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-purple-600 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Book Appointment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {selectedService?.title} with {selectedConsultant?.name}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Success Message */}
              {bookingSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <div>
                    <span className="text-green-800 dark:text-green-200 font-semibold">Appointment booked successfully!</span>
                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                      Google Meet link will be sent to {formData.email}
                    </p>
                  </div>
                </div>
              )}

              {/* Appointment Details */}
              <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Appointment Details</h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><strong>Service:</strong> {selectedService?.title}</p>
                  <p><strong>Consultant:</strong> {selectedConsultant?.name}</p>
                  <p><strong>Duration:</strong> {selectedService?.duration}</p>
                  <p><strong>Price:</strong> {selectedService?.price}</p>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Date *
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a date</option>
                    {availableDates.map((date) => {
                      const dateObj = new Date(date);
                      const formattedDate = dateObj.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      });
                      return (
                        <option key={date} value={date}>
                          {formattedDate}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm border rounded-md transition-colors ${
                          selectedTime === time
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Meeting Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Meeting Type *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700 dark:text-gray-300">
                      <input
                        type="radio"
                        name="meetingType"
                        value="google-meet"
                        checked={formData.meetingType === 'google-meet'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <Video className="w-4 h-4 mr-2 text-purple-600" />
                      Google Meet (Recommended)
                    </label>
                    <label className="flex items-center text-gray-700 dark:text-gray-300">
                      <input
                        type="radio"
                        name="meetingType"
                        value="phone"
                        checked={formData.meetingType === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <Phone className="w-4 h-4 mr-2 text-purple-600" />
                      Phone Call
                    </label>
                    <label className="flex items-center text-gray-700 dark:text-gray-300">
                      <input
                        type="radio"
                        name="meetingType"
                        value="in-person"
                        checked={formData.meetingType === 'in-person'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                      In-Person (NYC Office)
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your specific needs or questions..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || bookingSuccess || !selectedDate || !selectedTime}
                    className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Booking...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </div>

                {/* Google Meet Notice */}
                {formData.meetingType === 'google-meet' && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center pt-4">
                    📅 Google Meet link and calendar invite will be sent to your email
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Modal,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CalendarDashboard = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Team Meeting',
      description: 'Weekly team sync and project updates',
      date: '2024-01-25',
      time: '10:00 AM',
      duration: '1 hour',
      type: 'meeting',
      attendees: ['John Doe', 'Jane Smith'],
      location: 'Conference Room A',
      reminder: '15 minutes before',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Client Presentation',
      description: 'Present project proposal to new client',
      date: '2024-01-26',
      time: '2:00 PM',
      duration: '2 hours',
      type: 'presentation',
      attendees: ['Mike Johnson', 'Sarah Wilson'],
      location: 'Client Office',
      reminder: '30 minutes before',
      priority: 'high',
    },
    {
      id: '3',
      title: 'Project Deadline',
      description: 'Final submission for mobile app project',
      date: '2024-01-28',
      time: '11:59 PM',
      duration: 'All day',
      type: 'deadline',
      attendees: [],
      location: 'Remote',
      reminder: '1 day before',
      priority: 'critical',
    },
    {
      id: '4',
      title: 'Training Session',
      description: 'React Native advanced concepts workshop',
      date: '2024-01-30',
      time: '9:00 AM',
      duration: '4 hours',
      type: 'training',
      attendees: ['Development Team'],
      location: 'Training Room',
      reminder: '1 hour before',
      priority: 'medium',
    },
  ]);

  // Helper functions
  const navigatePrevious = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() - 1);
    }
    setCurrentDate(newDate);
  };

  const navigateNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setCurrentDate(newDate);
  };

  const getCalendarTitle = () => {
    const options = { year: 'numeric', month: 'long' };
    if (viewMode === 'day') {
      return currentDate.toLocaleDateString('en-US', { ...options, day: 'numeric' });
    }
    return currentDate.toLocaleDateString('en-US', options);
  };

  const getTodayEvents = () => {
    const today = new Date().toISOString().split('T')[0];
    return events.filter(event => event.date === today);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return events.filter(event => new Date(event.date) >= today)
                 .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return { backgroundColor: '#dc3545', borderColor: '#dc3545' };
      case 'high':
        return { backgroundColor: '#fd7e14', borderColor: '#fd7e14' };
      case 'medium':
        return { backgroundColor: '#ffc107', borderColor: '#ffc107' };
      case 'low':
        return { backgroundColor: '#28a745', borderColor: '#28a745' };
      default:
        return { backgroundColor: '#6c757d', borderColor: '#6c757d' };
    }
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'meeting':
        return { backgroundColor: '#007bff' };
      case 'presentation':
        return { backgroundColor: '#6f42c1' };
      case 'deadline':
        return { backgroundColor: '#dc3545' };
      case 'training':
        return { backgroundColor: '#20c997' };
      default:
        return { backgroundColor: '#6c757d' };
    }
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'meeting':
        return 'people';
      case 'presentation':
        return 'easel';
      case 'deadline':
        return 'flag';
      case 'training':
        return 'school';
      default:
        return 'calendar';
    }
  };

  const renderMonthView = () => {
    return (
      <View style={styles.calendarGrid}>
        <Text style={styles.calendarViewTitle}>Month View</Text>
        <Text style={styles.calendarViewSubtitle}>Calendar grid coming soon</Text>
      </View>
    );
  };

  const renderWeekView = () => {
    return (
      <View style={styles.calendarGrid}>
        <Text style={styles.calendarViewTitle}>Week View</Text>
        <Text style={styles.calendarViewSubtitle}>Weekly schedule coming soon</Text>
      </View>
    );
  };

  const renderDayView = () => {
    return (
      <View style={styles.calendarGrid}>
        <Text style={styles.calendarViewTitle}>Day View</Text>
        <Text style={styles.calendarViewSubtitle}>Daily agenda coming soon</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
        <TouchableOpacity onPress={() => {
          Alert.alert('Create Event', 'Event creation form coming soon!');
        }}>
          <Ionicons name="add" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>

      {/* View Mode Selector */}
      <View style={styles.viewModeContainer}>
        <TouchableOpacity
          style={[styles.viewModeButton, viewMode === 'month' && styles.activeViewMode]}
          onPress={() => setViewMode('month')}
        >
          <Text style={[styles.viewModeText, viewMode === 'month' && styles.activeViewModeText]}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.viewModeButton, viewMode === 'week' && styles.activeViewMode]}
          onPress={() => setViewMode('week')}
        >
          <Text style={[styles.viewModeText, viewMode === 'week' && styles.activeViewModeText]}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.viewModeButton, viewMode === 'day' && styles.activeViewMode]}
          onPress={() => setViewMode('day')}
        >
          <Text style={[styles.viewModeText, viewMode === 'day' && styles.activeViewModeText]}>Day</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Calendar Header */}
        <View style={styles.calendarHeader}>
          <TouchableOpacity onPress={navigatePrevious}>
            <Ionicons name="chevron-back" size={24} color="#007bff" />
          </TouchableOpacity>
          <Text style={styles.calendarTitle}>{getCalendarTitle()}</Text>
          <TouchableOpacity onPress={navigateNext}>
            <Ionicons name="chevron-forward" size={24} color="#007bff" />
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{getTodayEvents().length}</Text>
            <Text style={styles.statLabel}>Today</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{getUpcomingEvents().length}</Text>
            <Text style={styles.statLabel}>Upcoming</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{events.length}</Text>
            <Text style={styles.statLabel}>Total Events</Text>
          </View>
        </View>

        {/* Calendar Grid */}
        {viewMode === 'month' && renderMonthView()}
        {viewMode === 'week' && renderWeekView()}
        {viewMode === 'day' && renderDayView()}

        {/* Upcoming Events */}
        <View style={styles.eventsSection}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {getUpcomingEvents().map(event => (
            <TouchableOpacity
              key={event.id}
              style={styles.eventCard}
              onPress={() => {
                setSelectedEvent(event);
                setModalVisible(true);
              }}
            >
              <View style={styles.eventHeader}>
                <View style={styles.eventInfo}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <View style={[styles.priorityBadge, getPriorityColor(event.priority)]}>
                    <Text style={styles.priorityText}>{event.priority}</Text>
                  </View>
                </View>
                <View style={[styles.eventTypeIcon, getEventTypeColor(event.type)]}>
                  <Ionicons name={getEventTypeIcon(event.type)} size={16} color="#fff" />
                </View>
              </View>
              <Text style={styles.eventDescription}>{event.description}</Text>
              <View style={styles.eventDetails}>
                <View style={styles.eventDetail}>
                  <Ionicons name="calendar" size={14} color="#666" />
                  <Text style={styles.eventDetailText}>{event.date}</Text>
                </View>
                <View style={styles.eventDetail}>
                  <Ionicons name="time" size={14} color="#666" />
                  <Text style={styles.eventDetailText}>{event.time}</Text>
                </View>
                <View style={styles.eventDetail}>
                  <Ionicons name="location" size={14} color="#666" />
                  <Text style={styles.eventDetailText}>{event.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Event Detail Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedEvent && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedEvent.title}</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Ionicons name="close" size={24} color="#333" />
                  </TouchableOpacity>
                </View>
                
                <ScrollView style={styles.modalBody}>
                  <Text style={styles.modalDescription}>{selectedEvent.description}</Text>
                  
                  <View style={styles.modalSection}>
                    <Text style={styles.modalSectionTitle}>Event Details</Text>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Date:</Text>
                      <Text style={styles.detailValue}>{selectedEvent.date}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Time:</Text>
                      <Text style={styles.detailValue}>{selectedEvent.time}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Duration:</Text>
                      <Text style={styles.detailValue}>{selectedEvent.duration}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Location:</Text>
                      <Text style={styles.detailValue}>{selectedEvent.location}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Type:</Text>
                      <Text style={styles.detailValue}>{selectedEvent.type}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Priority:</Text>
                      <View style={[styles.priorityBadge, getPriorityColor(selectedEvent.priority)]}>
                        <Text style={styles.priorityText}>{selectedEvent.priority}</Text>
                      </View>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Reminder:</Text>
                      <Text style={styles.detailValue}>{selectedEvent.reminder}</Text>
                    </View>
                  </View>
                  
                  {selectedEvent.attendees.length > 0 && (
                    <View style={styles.modalSection}>
                      <Text style={styles.modalSectionTitle}>Attendees</Text>
                      {selectedEvent.attendees.map((attendee, index) => (
                        <View key={index} style={styles.attendeeItem}>
                          <Ionicons name="person" size={16} color="#666" />
                          <Text style={styles.attendeeName}>{attendee}</Text>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  <View style={styles.modalActions}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Ionicons name="create" size={20} color="#007bff" />
                      <Text style={styles.actionText}>Edit Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Ionicons name="trash" size={20} color="#dc3545" />
                      <Text style={[styles.actionText, { color: '#dc3545' }]}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  viewModeContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  viewModeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
  },
  activeViewMode: {
    backgroundColor: '#007bff',
  },
  viewModeText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeViewModeText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  calendarGrid: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e9ecef',
    alignItems: 'center',
  },
  calendarViewTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  calendarViewSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  eventsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  eventInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginRight: 10,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
  },
  eventTypeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },
  eventDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  eventDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 5,
  },
  eventDetailText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  modalBody: {
    padding: 20,
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  modalSection: {
    marginBottom: 20,
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f9fa',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
  },
  attendeeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f9fa',
  },
  attendeeName: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#007bff',
    marginLeft: 8,
    fontWeight: '500',
  },
});

export default CalendarDashboard;
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Modal,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ContentDashboard = () => {
  const router = useRouter();
  const [contents, setContents] = useState([
    {
      id: '1',
      title: 'Welcome to Our Platform',
      type: 'Article',
      status: 'Published',
      author: 'John Doe',
      createdDate: '2024-01-15',
      lastModified: '2024-01-20',
      views: 1250,
      likes: 45,
      category: 'General',
      excerpt: 'Learn about our platform features and how to get started with your journey.',
      thumbnail: 'https://via.placeholder.com/150x100',
    },
    {
      id: '2',
      title: 'Getting Started Guide',
      type: 'Tutorial',
      status: 'Draft',
      author: 'Jane Smith',
      createdDate: '2024-01-18',
      lastModified: '2024-01-22',
      views: 0,
      likes: 0,
      category: 'Tutorial',
      excerpt: 'Step-by-step guide to help new users navigate through the platform.',
      thumbnail: 'https://via.placeholder.com/150x100',
    },
    {
      id: '3',
      title: 'Advanced Features Overview',
      type: 'Video',
      status: 'Scheduled',
      author: 'Mike Johnson',
      createdDate: '2024-01-20',
      lastModified: '2024-01-23',
      views: 0,
      likes: 0,
      category: 'Features',
      excerpt: 'Explore advanced features that can boost your productivity.',
      thumbnail: 'https://via.placeholder.com/150x100',
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('content');

  // Helper functions
  const filteredContent = () => {
    return contents.filter(content => {
      const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           content.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === 'All' || content.type === filterType;
      const matchesStatus = filterStatus === 'All' || content.status === filterStatus;
      return matchesSearch && matchesType && matchesStatus;
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published':
        return { backgroundColor: '#d4edda', borderColor: '#c3e6cb' };
      case 'Draft':
        return { backgroundColor: '#fff3cd', borderColor: '#ffeaa7' };
      case 'Scheduled':
        return { backgroundColor: '#d1ecf1', borderColor: '#bee5eb' };
      default:
        return { backgroundColor: '#f8f9fa', borderColor: '#dee2e6' };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Content</Text>
        <TouchableOpacity onPress={() => {
          Alert.alert('Create Content', 'Content creation editor coming soon!');
        }}>
          <Ionicons name="add" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'content' && styles.activeTab]}
          onPress={() => setActiveTab('content')}
        >
          <Text style={[styles.tabText, activeTab === 'content' && styles.activeTabText]}>Content</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'media' && styles.activeTab]}
          onPress={() => setActiveTab('media')}
        >
          <Text style={[styles.tabText, activeTab === 'media' && styles.activeTabText]}>Media</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'analytics' && styles.activeTab]}
          onPress={() => setActiveTab('analytics')}
        >
          <Text style={[styles.tabText, activeTab === 'analytics' && styles.activeTabText]}>Analytics</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'content' && (
          <>
            {/* Search and Filter */}
            <View style={styles.searchContainer}>
              <View style={styles.searchBox}>
                <Ionicons name="search" size={20} color="#666" />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search content..."
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
              <TouchableOpacity style={styles.filterButton}>
                <Ionicons name="filter" size={20} color="#007bff" />
              </TouchableOpacity>
            </View>

            {/* Stats Cards */}
            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>{contents.length}</Text>
                <Text style={styles.statLabel}>Total Content</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>
                  {contents.filter(c => c.status === 'Published').length}
                </Text>
                <Text style={styles.statLabel}>Published</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>
                  {contents.filter(c => c.status === 'Draft').length}
                </Text>
                <Text style={styles.statLabel}>Drafts</Text>
              </View>
            </View>

            {/* Content List */}
            <View style={styles.contentSection}>
              <Text style={styles.sectionTitle}>Your Content</Text>
              {filteredContent().map(content => (
                <TouchableOpacity
                  key={content.id}
                  style={styles.contentCard}
                  onPress={() => {
                    setSelectedContent(content);
                    setModalVisible(true);
                  }}
                >
                  <Image source={{ uri: content.thumbnail }} style={styles.thumbnail} />
                  <View style={styles.contentInfo}>
                    <View style={styles.contentHeader}>
                      <Text style={styles.contentTitle}>{content.title}</Text>
                      <View style={[styles.statusBadge, getStatusColor(content.status)]}>
                        <Text style={styles.statusText}>{content.status}</Text>
                      </View>
                    </View>
                    <Text style={styles.contentExcerpt}>{content.excerpt}</Text>
                    <View style={styles.contentMeta}>
                      <View style={styles.metaItem}>
                        <Ionicons name="document" size={14} color="#666" />
                        <Text style={styles.metaText}>{content.type}</Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Ionicons name="person" size={14} color="#666" />
                        <Text style={styles.metaText}>{content.author}</Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Ionicons name="calendar" size={14} color="#666" />
                        <Text style={styles.metaText}>{content.lastModified}</Text>
                      </View>
                    </View>
                    <View style={styles.contentStats}>
                      <View style={styles.statItem}>
                        <Ionicons name="eye" size={14} color="#666" />
                        <Text style={styles.statText}>{content.views}</Text>
                      </View>
                      <View style={styles.statItem}>
                        <Ionicons name="heart" size={14} color="#666" />
                        <Text style={styles.statText}>{content.likes}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {activeTab === 'media' && (
          <View style={styles.mediaSection}>
            <Text style={styles.sectionTitle}>Media Library</Text>
            <View style={styles.mediaGrid}>
              {[1, 2, 3, 4, 5, 6].map(item => (
                <TouchableOpacity key={item} style={styles.mediaItem}>
                  <Image
                    source={{ uri: `https://via.placeholder.com/150x150?text=Media${item}` }}
                    style={styles.mediaImage}
                  />
                  <Text style={styles.mediaName}>Image {item}.jpg</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {activeTab === 'analytics' && (
          <View style={styles.analyticsSection}>
            <Text style={styles.sectionTitle}>Content Analytics</Text>
            <View style={styles.analyticsCard}>
              <Text style={styles.analyticsTitle}>Performance Overview</Text>
              <View style={styles.analyticsStats}>
                <View style={styles.analyticsStat}>
                  <Text style={styles.analyticsNumber}>12.5K</Text>
                  <Text style={styles.analyticsLabel}>Total Views</Text>
                </View>
                <View style={styles.analyticsStat}>
                  <Text style={styles.analyticsNumber}>2.3K</Text>
                  <Text style={styles.analyticsLabel}>Engagements</Text>
                </View>
                <View style={styles.analyticsStat}>
                  <Text style={styles.analyticsNumber}>18.5%</Text>
                  <Text style={styles.analyticsLabel}>Growth</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Content Detail Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedContent && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedContent.title}</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Ionicons name="close" size={24} color="#333" />
                  </TouchableOpacity>
                </View>
                
                <ScrollView style={styles.modalBody}>
                  <Image source={{ uri: selectedContent.thumbnail }} style={styles.modalThumbnail} />
                  <Text style={styles.modalDescription}>{selectedContent.excerpt}</Text>
                  
                  <View style={styles.modalSection}>
                    <Text style={styles.modalSectionTitle}>Content Details</Text>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Type:</Text>
                      <Text style={styles.detailValue}>{selectedContent.type}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Status:</Text>
                      <View style={[styles.statusBadge, getStatusColor(selectedContent.status)]}>
                        <Text style={styles.statusText}>{selectedContent.status}</Text>
                      </View>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Author:</Text>
                      <Text style={styles.detailValue}>{selectedContent.author}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Created:</Text>
                      <Text style={styles.detailValue}>{selectedContent.createdDate}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Views:</Text>
                      <Text style={styles.detailValue}>{selectedContent.views}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.modalActions}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Ionicons name="create" size={20} color="#007bff" />
                      <Text style={styles.actionText}>Edit Content</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Ionicons name="share" size={20} color="#28a745" />
                      <Text style={styles.actionText}>Share</Text>
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#007bff',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
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
  contentSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
    flexDirection: 'row',
  },
  thumbnail: {
    width: 80,
    height: 60,
    borderRadius: 6,
    marginRight: 15,
  },
  contentInfo: {
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  contentExcerpt: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },
  contentMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 5,
  },
  metaText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  contentStats: {
    flexDirection: 'row',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  statText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  mediaSection: {
    marginBottom: 20,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mediaItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  mediaImage: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    marginBottom: 8,
  },
  mediaName: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  analyticsSection: {
    marginBottom: 20,
  },
  analyticsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  analyticsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  analyticsStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  analyticsStat: {
    alignItems: 'center',
  },
  analyticsNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  analyticsLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
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
  modalThumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 15,
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

export default ContentDashboard;
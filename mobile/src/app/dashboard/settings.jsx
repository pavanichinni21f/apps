import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Switch,
  TextInput,
  Modal,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SettingsDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSync: true,
    biometric: false,
    language: 'English',
    timezone: 'UTC+0',
  });
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    company: 'SignInSoft Inc.',
    role: 'Administrator',
    avatar: null,
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'profile' && styles.activeTab]}
            onPress={() => setActiveTab('profile')}
          >
            <Ionicons name="person-outline" size={20} color={activeTab === 'profile' ? '#007AFF' : '#666'} />
            <Text style={[styles.tabText, activeTab === 'profile' && styles.activeTabText]}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'preferences' && styles.activeTab]}
            onPress={() => setActiveTab('preferences')}
          >
            <Ionicons name="settings-outline" size={20} color={activeTab === 'preferences' ? '#007AFF' : '#666'} />
            <Text style={[styles.tabText, activeTab === 'preferences' && styles.activeTabText]}>Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'security' && styles.activeTab]}
            onPress={() => setActiveTab('security')}
          >
            <Ionicons name="shield-outline" size={20} color={activeTab === 'security' ? '#007AFF' : '#666'} />
            <Text style={[styles.tabText, activeTab === 'security' && styles.activeTabText]}>Security</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <View style={styles.section}>
            <View style={styles.profileHeader}>
              <View style={styles.avatarContainer}>
                {profile.avatar ? (
                  <Image source={{ uri: profile.avatar }} style={styles.avatar} />
                ) : (
                  <View style={styles.avatarPlaceholder}>
                    <Ionicons name="person" size={40} color="#666" />
                  </View>
                )}
                <TouchableOpacity 
                  style={styles.avatarEdit}
                  onPress={() => {
                    setModalType('avatar');
                    setShowModal(true);
                  }}
                >
                  <Ionicons name="camera" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{profile.name}</Text>
                <Text style={styles.profileRole}>{profile.role}</Text>
                <Text style={styles.profileCompany}>{profile.company}</Text>
              </View>
            </View>

            <View style={styles.settingsGroup}>
              <Text style={styles.groupTitle}>Personal Information</Text>
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => {
                  setModalType('name');
                  setShowModal(true);
                }}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="person-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Full Name</Text>
                </View>
                <View style={styles.settingRight}>
                  <Text style={styles.settingValue}>{profile.name}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#ccc" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => {
                  setModalType('email');
                  setShowModal(true);
                }}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="mail-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Email</Text>
                </View>
                <View style={styles.settingRight}>
                  <Text style={styles.settingValue}>{profile.email}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#ccc" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => {
                  setModalType('phone');
                  setShowModal(true);
                }}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="call-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Phone</Text>
                </View>
                <View style={styles.settingRight}>
                  <Text style={styles.settingValue}>{profile.phone}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#ccc" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <View style={styles.section}>
            <View style={styles.settingsGroup}>
              <Text style={styles.groupTitle}>Notifications</Text>
              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="notifications-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Push Notifications</Text>
                </View>
                <Switch
                  value={settings.notifications}
                  onValueChange={(value) => setSettings({...settings, notifications: value})}
                  trackColor={{ false: '#e0e0e0', true: '#007AFF' }}
                />
              </View>
            </View>

            <View style={styles.settingsGroup}>
              <Text style={styles.groupTitle}>Appearance</Text>
              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="moon-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Dark Mode</Text>
                </View>
                <Switch
                  value={settings.darkMode}
                  onValueChange={(value) => setSettings({...settings, darkMode: value})}
                  trackColor={{ false: '#e0e0e0', true: '#007AFF' }}
                />
              </View>
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => {
                  setModalType('language');
                  setShowModal(true);
                }}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="language-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Language</Text>
                </View>
                <View style={styles.settingRight}>
                  <Text style={styles.settingValue}>{settings.language}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#ccc" />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsGroup}>
              <Text style={styles.groupTitle}>Data & Sync</Text>
              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="sync-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Auto Sync</Text>
                </View>
                <Switch
                  value={settings.autoSync}
                  onValueChange={(value) => setSettings({...settings, autoSync: value})}
                  trackColor={{ false: '#e0e0e0', true: '#007AFF' }}
                />
              </View>
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => {
                  setModalType('timezone');
                  setShowModal(true);
                }}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="time-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Timezone</Text>
                </View>
                <View style={styles.settingRight}>
                  <Text style={styles.settingValue}>{settings.timezone}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#ccc" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <View style={styles.section}>
            <View style={styles.settingsGroup}>
              <Text style={styles.groupTitle}>Authentication</Text>
              <View style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name="finger-print-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Biometric Login</Text>
                </View>
                <Switch
                  value={settings.biometric}
                  onValueChange={(value) => setSettings({...settings, biometric: value})}
                  trackColor={{ false: '#e0e0e0', true: '#007AFF' }}
                />
              </View>
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => {
                  setModalType('password');
                  setShowModal(true);
                }}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="lock-closed-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Change Password</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#ccc" />
              </TouchableOpacity>
            </View>

            <View style={styles.settingsGroup}>
              <Text style={styles.groupTitle}>Privacy</Text>
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => Alert.alert('Privacy Policy', 'View privacy policy and data usage information.')}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="shield-checkmark-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Privacy Policy</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#ccc" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => Alert.alert('Terms of Service', 'View terms and conditions.')}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="document-text-outline" size={20} color="#666" />
                  <Text style={styles.settingLabel}>Terms of Service</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#ccc" />
              </TouchableOpacity>
            </View>

            <View style={styles.settingsGroup}>
              <Text style={styles.groupTitle}>Account Actions</Text>
              <TouchableOpacity 
                style={[styles.settingItem, styles.dangerItem]}
                onPress={() => Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Sign Out', style: 'destructive', onPress: () => router.push('/') }
                ])}
              >
                <View style={styles.settingLeft}>
                  <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
                  <Text style={[styles.settingLabel, styles.dangerText]}>Sign Out</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Edit Modal */}
        <Modal
          visible={showModal}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text style={styles.modalCancel}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>
                {modalType === 'name' && 'Edit Name'}
                {modalType === 'email' && 'Edit Email'}
                {modalType === 'phone' && 'Edit Phone'}
                {modalType === 'password' && 'Change Password'}
                {modalType === 'language' && 'Select Language'}
                {modalType === 'timezone' && 'Select Timezone'}
                {modalType === 'avatar' && 'Change Avatar'}
              </Text>
              <TouchableOpacity onPress={() => {
                Alert.alert('Success', 'Changes saved successfully!');
                setShowModal(false);
              }}>
                <Text style={styles.modalSave}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              {(modalType === 'name' || modalType === 'email' || modalType === 'phone') && (
                <TextInput
                  style={styles.modalInput}
                  placeholder={`Enter ${modalType}`}
                  value={profile[modalType]}
                  onChangeText={(text) => setProfile({...profile, [modalType]: text})}
                />
              )}
              {modalType === 'password' && (
                <View>
                  <TextInput
                    style={styles.modalInput}
                    placeholder="Current Password"
                    secureTextEntry
                  />
                  <TextInput
                    style={styles.modalInput}
                    placeholder="New Password"
                    secureTextEntry
                  />
                  <TextInput
                    style={styles.modalInput}
                    placeholder="Confirm New Password"
                    secureTextEntry
                  />
                </View>
              )}
              {modalType === 'avatar' && (
                <View style={styles.avatarOptions}>
                  <TouchableOpacity style={styles.avatarOption}>
                    <Ionicons name="camera" size={24} color="#007AFF" />
                    <Text style={styles.avatarOptionText}>Take Photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.avatarOption}>
                    <Ionicons name="image" size={24} color="#007AFF" />
                    <Text style={styles.avatarOptionText}>Choose from Gallery</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </SafeAreaView>
        </Modal>
      </ScrollView>
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
  content: {
    flex: 1,
  },
  // Tab Navigation
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#f0f8ff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginLeft: 6,
  },
  activeTabText: {
    color: '#007AFF',
  },
  // Section
  section: {
    padding: 16,
  },
  // Profile Header
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEdit: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007AFF',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 2,
  },
  profileCompany: {
    fontSize: 14,
    color: '#666',
  },
  // Settings Groups
  settingsGroup: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
  dangerItem: {
    borderBottomWidth: 0,
  },
  dangerText: {
    color: '#FF3B30',
  },
  // Modal
  modalContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  modalCancel: {
    fontSize: 16,
    color: '#666',
  },
  modalSave: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  modalContent: {
    padding: 16,
  },
  modalInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 16,
  },
  avatarOptions: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  avatarOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarOptionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
});

export default SettingsDashboard;
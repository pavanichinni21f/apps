import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../utils/auth/useAuth';
import { useUser } from '../utils/auth/useUser';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const { signIn, signOut } = useAuth();
  const { user, loading } = useUser();
  
  const isAuthenticated = !loading && !!user;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    router.push(path);
  };

  const handleSignOut = () => {
    signOut();
    setIsMenuOpen(false);
  };

  const companyItems = [
    { title: 'About Us', path: '/about' },
    { title: 'Our Team', path: '/team' },
    { title: 'Careers', path: '/careers' },
    { title: 'Contact', path: '/contact' },
  ];

  const itServicesItems = [
    { title: 'Web Development', path: '/services/web-development' },
    { title: 'Mobile Apps', path: '/services/mobile-apps' },
    { title: 'Cloud Solutions', path: '/services/cloud' },
    { title: 'AI & ML', path: '/services/ai-ml' },
  ];

  const visaServicesItems = [
    { title: 'Student Visa', path: '/visa/student' },
    { title: 'Work Visa', path: '/visa/work' },
    { title: 'Tourist Visa', path: '/visa/tourist' },
    { title: 'Business Visa', path: '/visa/business' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        {/* Logo */}
        <TouchableOpacity 
          style={styles.logoContainer}
          onPress={() => handleNavigation('/')}
        >
          <Text style={styles.logoText}>SignInSoft</Text>
        </TouchableOpacity>

        {/* Menu Button */}
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Ionicons 
            name={isMenuOpen ? 'close' : 'menu'} 
            size={24} 
            color="#333" 
          />
        </TouchableOpacity>
      </View>

      {/* Mobile Menu Modal */}
      <Modal
        visible={isMenuOpen}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsMenuOpen(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Menu</Text>
            <TouchableOpacity onPress={toggleMenu}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.menuContent}>
            {/* Company Dropdown */}
            <View style={styles.menuSection}>
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => toggleDropdown('company')}
              >
                <Text style={styles.menuItemText}>Company</Text>
                <Ionicons 
                  name={activeDropdown === 'company' ? 'chevron-up' : 'chevron-down'} 
                  size={20} 
                  color="#666" 
                />
              </TouchableOpacity>
              {activeDropdown === 'company' && (
                <View style={styles.dropdown}>
                  {companyItems.map((item, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => handleNavigation(item.path)}
                    >
                      <Text style={styles.dropdownItemText}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* IT Services Dropdown */}
            <View style={styles.menuSection}>
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => toggleDropdown('itServices')}
              >
                <Text style={styles.menuItemText}>IT Services</Text>
                <Ionicons 
                  name={activeDropdown === 'itServices' ? 'chevron-up' : 'chevron-down'} 
                  size={20} 
                  color="#666" 
                />
              </TouchableOpacity>
              {activeDropdown === 'itServices' && (
                <View style={styles.dropdown}>
                  {itServicesItems.map((item, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => handleNavigation(item.path)}
                    >
                      <Text style={styles.dropdownItemText}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Visa Services Dropdown */}
            <View style={styles.menuSection}>
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => toggleDropdown('visaServices')}
              >
                <Text style={styles.menuItemText}>Visa Services</Text>
                <Ionicons 
                  name={activeDropdown === 'visaServices' ? 'chevron-up' : 'chevron-down'} 
                  size={20} 
                  color="#666" 
                />
              </TouchableOpacity>
              {activeDropdown === 'visaServices' && (
                <View style={styles.dropdown}>
                  {visaServicesItems.map((item, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => handleNavigation(item.path)}
                    >
                      <Text style={styles.dropdownItemText}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Direct Menu Items */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleNavigation('/portfolio')}
            >
              <Text style={styles.menuItemText}>Portfolio</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleNavigation('/blog')}
            >
              <Text style={styles.menuItemText}>Blog</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleNavigation('/pricing')}
            >
              <Text style={styles.menuItemText}>Pricing</Text>
            </TouchableOpacity>

            {/* Authentication Section */}
            <View style={styles.authSection}>
              {isAuthenticated ? (
                <>
                  <TouchableOpacity 
                    style={[styles.menuItem, styles.dashboardItem]}
                    onPress={() => handleNavigation('/dashboard')}
                  >
                    <Ionicons name="grid-outline" size={20} color="#007bff" />
                    <Text style={[styles.menuItemText, styles.dashboardText]}>Dashboard</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.menuItem, styles.signOutItem]}
                    onPress={handleSignOut}
                  >
                    <Ionicons name="log-out-outline" size={20} color="#dc3545" />
                    <Text style={[styles.menuItemText, styles.signOutText]}>Sign Out</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity 
                  style={[styles.menuItem, styles.signInItem]}
                  onPress={() => {
                    setIsMenuOpen(false);
                    signIn();
                  }}
                >
                  <Ionicons name="log-in-outline" size={20} color="#007bff" />
                  <Text style={[styles.menuItemText, styles.signInText]}>Sign In</Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 60,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  menuButton: {
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  menuContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  menuSection: {
    marginVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  dropdown: {
    paddingLeft: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginTop: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#666',
  },
  authSection: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: '#e0e0e0',
  },
  dashboardItem: {
    backgroundColor: '#f8f9ff',
    borderRadius: 8,
    marginBottom: 8,
  },
  dashboardText: {
    color: '#007bff',
    marginLeft: 8,
  },
  signOutItem: {
    backgroundColor: '#fff5f5',
    borderRadius: 8,
  },
  signOutText: {
    color: '#dc3545',
    marginLeft: 8,
  },
  signInItem: {
    backgroundColor: '#f8f9ff',
    borderRadius: 8,
  },
  signInText: {
    color: '#007bff',
    marginLeft: 8,
  },
});

export default NavigationBar;
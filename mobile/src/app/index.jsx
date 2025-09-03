import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import { AuthModal } from '../utils/auth/useAuthModal';

export default function Index() {
  return (
    <View style={styles.container}>
      <NavigationBar />
      <ScrollView style={styles.content}>
        <HeroSection />
      </ScrollView>
      <AuthModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});
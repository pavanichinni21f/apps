import React from 'react';
import { Stack } from 'expo-router';
import { useRequireAuth } from '../../utils/auth/useAuth';

export default function DashboardLayout() {
  // Require authentication for all dashboard routes
  useRequireAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="clients" />
      <Stack.Screen name="projects" />
      <Stack.Screen name="content" />
      <Stack.Screen name="calendar" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}
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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ClientsDashboard = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    status: 'active',
  });

  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Solutions Inc.',
      status: 'active',
      projects: 3,
      lastContact: '2024-01-15',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      phone: '+1 (555) 987-6543',
      company: 'Digital Marketing Co.',
      status: 'active',
      projects: 1,
      lastContact: '2024-01-12',
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'mbrown@startup.io',
      phone: '+1 (555) 456-7890',
      company: 'Innovation Startup',
      status: 'inactive',
      projects: 0,
      lastContact: '2023-12-20',
    },
  ]);

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || client.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleAddClient = () => {
    if (!newClient.name || !newClient.email) {
      Alert.alert('Error', 'Please fill in required fields (Name and Email)');
      return;
    }

    const client = {
      id: Date.now(),
      ...newClient,
      projects: 0,
      lastContact: new Date().toISOString().split('T')[0],
    };

    setClients([...clients, client]);
    setNewClient({ name: '', email: '', phone: '', company: '', status: 'active' });
    setShowAddModal(false);
  };

  const handleEditClient = () => {
    if (!selectedClient.name || !selectedClient.email) {
      Alert.alert('Error', 'Please fill in required fields (Name and Email)');
      return;
    }

    setClients(clients.map(client => 
      client.id === selectedClient.id ? selectedClient : client
    ));
    setShowEditModal(false);
    setSelectedClient(null);
  };

  const handleDeleteClient = (clientId) => {
    Alert.alert(
      'Delete Client',
      'Are you sure you want to delete this client?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setClients(clients.filter(client => client.id !== clientId));
          },
        },
      ]
    );
  };

  const openEditModal = (client) => {
    setSelectedClient({ ...client });
    setShowEditModal(true);
  };

  const getStatusColor = (status) => {
    return status === 'active' ? '#28a745' : '#6c757d';
  };

  const ClientModal = ({ visible, onClose, client, onSave, isEdit = false }) => (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{isEdit ? 'Edit Client' : 'Add Client'}</Text>
          <TouchableOpacity onPress={onSave}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.modalContent}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Name *</Text>
            <TextInput
              style={styles.input}
              value={isEdit ? client?.name : newClient.name}
              onChangeText={(text) => {
                if (isEdit) {
                  setSelectedClient({ ...client, name: text });
                } else {
                  setNewClient({ ...newClient, name: text });
                }
              }}
              placeholder="Enter client name"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email *</Text>
            <TextInput
              style={styles.input}
              value={isEdit ? client?.email : newClient.email}
              onChangeText={(text) => {
                if (isEdit) {
                  setSelectedClient({ ...client, email: text });
                } else {
                  setNewClient({ ...newClient, email: text });
                }
              }}
              placeholder="Enter email address"
              keyboardType="email-address"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput
              style={styles.input}
              value={isEdit ? client?.phone : newClient.phone}
              onChangeText={(text) => {
                if (isEdit) {
                  setSelectedClient({ ...client, phone: text });
                } else {
                  setNewClient({ ...newClient, phone: text });
                }
              }}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Company</Text>
            <TextInput
              style={styles.input}
              value={isEdit ? client?.company : newClient.company}
              onChangeText={(text) => {
                if (isEdit) {
                  setSelectedClient({ ...client, company: text });
                } else {
                  setNewClient({ ...newClient, company: text });
                }
              }}
              placeholder="Enter company name"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Clients</Text>
        <TouchableOpacity onPress={() => setShowAddModal(true)}>
          <Ionicons name="add" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>

      {/* Search and Filter */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search clients..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
          {['all', 'active', 'inactive'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.filterButton,
                filterStatus === status && styles.filterButtonActive
              ]}
              onPress={() => setFilterStatus(status)}
            >
              <Text style={[
                styles.filterButtonText,
                filterStatus === status && styles.filterButtonTextActive
              ]}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Clients List */}
      <ScrollView style={styles.clientsList}>
        {filteredClients.map((client) => (
          <View key={client.id} style={styles.clientCard}>
            <View style={styles.clientInfo}>
              <View style={styles.clientHeader}>
                <Text style={styles.clientName}>{client.name}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(client.status) }]}>
                  <Text style={styles.statusText}>{client.status}</Text>
                </View>
              </View>
              
              <Text style={styles.clientEmail}>{client.email}</Text>
              <Text style={styles.clientCompany}>{client.company}</Text>
              
              <View style={styles.clientStats}>
                <Text style={styles.statText}>{client.projects} projects</Text>
                <Text style={styles.statText}>Last contact: {client.lastContact}</Text>
              </View>
            </View>
            
            <View style={styles.clientActions}>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => openEditModal(client)}
              >
                <Ionicons name="pencil" size={18} color="#007bff" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => handleDeleteClient(client.id)}
              >
                <Ionicons name="trash" size={18} color="#dc3545" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        
        {filteredClients.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="people-outline" size={64} color="#ccc" />
            <Text style={styles.emptyStateText}>No clients found</Text>
            <Text style={styles.emptyStateSubtext}>
              {searchQuery ? 'Try adjusting your search' : 'Add your first client to get started'}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Add Client Modal */}
      <ClientModal
        visible={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddClient}
      />

      {/* Edit Client Modal */}
      <ClientModal
        visible={showEditModal}
        onClose={() => setShowEditModal(false)}
        client={selectedClient}
        onSave={handleEditClient}
        isEdit={true}
      />
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
  searchContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 8,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#007bff',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#666',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  clientsList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  clientCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 6,
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  clientInfo: {
    flex: 1,
  },
  clientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  clientName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  clientEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  clientCompany: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  clientStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statText: {
    fontSize: 12,
    color: '#999',
  },
  clientActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
    marginLeft: 8,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 64,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
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
  cancelButton: {
    fontSize: 16,
    color: '#666',
  },
  saveButton: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '600',
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputGroup: {
    marginVertical: 12,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default ClientsDashboard;
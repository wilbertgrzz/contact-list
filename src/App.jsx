import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  // 1. useState untuk mengelola array data kontak
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Budi Santoso', phone: '08123456789' },
      { id: 2, name: 'Siti Rahma', phone: '08987654321' }
    ];
  });

  // 2. useEffect untuk menyimpan kontak ke LocalStorage saat state 'contacts' berubah
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Handler Tambah Kontak
  const handleAddContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  // Handler Hapus Kontak
  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>📱 Kontak Saya</h1>
      <ContactForm onAddContact={handleAddContact} />
      <hr style={{ margin: '20px 0', border: '0.5px solid #eee' }} />
      <h2>Daftar Kontak ({contacts.length})</h2>
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '450px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    fontFamily: 'sans-serif',
  },
};

export default App;
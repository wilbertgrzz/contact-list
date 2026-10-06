import React from 'react';

function ContactItem({ contact, onDelete }) {
  return (
    <div style={styles.card}>
      <div>
        <h3 style={styles.name}>{contact.name}</h3>
        <p style={styles.phone}>📞 {contact.phone}</p>
      </div>
      <button style={styles.deleteBtn} onClick={() => onDelete(contact.id)}>
        Hapus
      </button>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    margin: '8px 0',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  name: { margin: '0 0 4px 0', color: '#333' },
  phone: { margin: 0, color: '#666', fontSize: '14px' },
  deleteBtn: {
    backgroundColor: '#ff4d4f',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ContactItem;
import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDeleteContact }) {
  if (contacts.length === 0) {
    return <p style={{ textAlign: 'center', color: '#888' }}>Belum ada kontak tersimpan.</p>;
  }

  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDeleteContact} />
      ))}
    </div>
  );
}

export default ContactList;
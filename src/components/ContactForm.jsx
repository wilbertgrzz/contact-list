import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return alert('Mohon isi nama dan nomor telepon!');

    onAddContact({
      id: Date.now(),
      name,
      phone,
    });

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Nama Lengkap"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Nomor Telepon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.addBtn}>
        Tambah Kontak
      </button>
    </form>
  );
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' },
  addBtn: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default ContactForm;
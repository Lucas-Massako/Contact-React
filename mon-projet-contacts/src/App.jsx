import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Login from './pages/Login'; // Il manquait l'import
import ProtectedRoute from './components/ProtectedRoute'; // Il manquait l'import
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: Date.now() };
    setContacts([...contacts, contactWithId]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const editContact = (contact) => {
    console.log("Modifier le contact :", contact);
  };

  // UN SEUL return qui englobe tout
  return (
    <div className="App">
      <header>
        <h1>Gestionnaire de Contacts</h1>
        <nav style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px' }}>
          <Link to="/">Accueil</Link>
          <Link to="/add">Ajouter Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <ContactList contacts={contacts} onDelete={deleteContact} onEdit={editContact} />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={
            <ProtectedRoute>
              <ContactForm addContact={addContact} />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
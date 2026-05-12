

import { useEffect, useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

import './App.css'
import { api } from './lib/api';
import { Routes, Route } from 'react-router-dom';




function App() {
  
  const [contacts, setContacts] = useState([]);

  // Fonction pour ajouter un contact
  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: Date.now() };
    setContacts([...contacts, contactWithId]);
  };

  // Fonction pour supprimer un contact
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  // Fonction pour la modification
  const editContact = (contact) => {
    console.log("Modifier le contact :", contact);
    // Cette partie sera liée à ton backend plus tard
  };

  return (
    <div className="App">
      <header>
        <h1>Gestionnaire de Contacts</h1>
      </header>

      <main>
        {}
        <ContactForm addContact={addContact} />

        <hr />

        {/* Liste qui affiche les contacts créés */}
        <ContactList 
          contacts={contacts} 
          onDelete={deleteContact} 
          onEdit={editContact} 
        />
      </main>
    </div>
  )
  return (
  <div className="App">
    <nav>
      <link to="/">Accueil</link>
      <link to="/addContact">Ajouter Contact</link>
    <link to="/login">Login</link>
    </nav>
    </div>
  );
    
}
<Routes>
  <Route path="/" element={
    <ProtectedRoute><contactList contacts={contacts} deleteContact={deleteContact} updatedContacts={updatedContacts}></ProtectedRoute>
    <Route path="/login" element={<Login />} />
    <Route path="/add" element={
      <ProtectedRoute>
        <ContactForm addContact={addContact} />
      </ProtectedRoute>
    } />
  
}
</Routes>
  


export default App
import { useState } from 'react'
import './App.css'


import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

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
}

export default App
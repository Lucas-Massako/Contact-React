import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="contact-list">
      <h2>Ma Liste de Contacts</h2>
      {contacts.length === 0 ? (
        <p>Aucun contact trouvé.</p>
      ) : (
        contacts.map((contact) => (
          <ContactItem 
            key={contact.id} 
            contact={contact} 
            onDelete={onDelete} 
            onEdit={onEdit} 
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
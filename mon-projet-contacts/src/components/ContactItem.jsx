const ContactItem = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="contact-item" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      <p><strong>{contact.Prénom} {contact.Nom}</strong></p>
      <p>📧 {contact.email}</p>
      <p>📞 {contact.Num}</p>
      
      <div className="actions">
        <button onClick={() => onEdit(contact)} style={{ marginRight: '5px' }}>
          Modifier
        </button>
        <button onClick={() => onDelete(contact.id)} style={{ backgroundColor: '#ff4d4d', color: 'white' }}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
import { useState } from 'react';

const ContactForm = ({ addContact }) => {

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    tel: ''
  });

  // Fonction pour mettre à jour le state à chaque changement dans un input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // On vérifie que les champs ne sont pas vides (validation de base)
    if (!formData.prenom || !formData.nom || !formData.email || !formData.tel) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    // On envoie les données à la fonction addContact reçue en prop de App.jsx
    addContact(formData);

    // On réinitialise le formulaire après l'envoi
    setFormData({
      prenom: '',
      nom: '',
      email: '',
      tel: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Ajouter un Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="tel"
            name="tel"
            placeholder="Téléphone"
            value={formData.tel}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enregistrer le contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
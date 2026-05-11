import { useState } from 'react';

const ContactForm = ({ addContact }) => {

  const [formData, setFormData] = useState({
    Prénom: '',
    Nom: '',
    email: '',
    Num: ''
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
    if (!formData.Prénom || !formData.Nom || !formData.email || !formData.Num) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    // On envoie les données à la fonction addContact reçue en prop de App.jsx
    addContact(formData);

    // On réinitialise le formulaire après l'envoi
    setFormData({
      Prénom: '',
      Nom: '',
      email: '',
      Num: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Ajouter un Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="Prénom"
            placeholder="Prénom"
            value={formData.Prénom}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            value={formData.Nom}
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
            name="Num"
            placeholder="Téléphone"
            value={formData.Num}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enregistrer le contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
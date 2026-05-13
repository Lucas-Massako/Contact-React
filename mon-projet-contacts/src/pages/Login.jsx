import { useState } from "react";
import { useNavigate }  from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        login(email, password)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                alert("Erreur de connexion : " + err.message);
            });
    }
    
    
    return (   
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>

        <form onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
        />
        <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Se connecter</button> 
       <p style={{ 
            background: '#f8f9fa', 
            padding: '10px 20px', 
            textAlign: 'center',
             alignItems: 'center', 
            margin: '0 auto 20px auto', 
            width: 'fit-content', 
            borderRadius: '5px', 
            border: '1px solid #ddd',
            fontSize: '0.9rem',
        color: '#555'
}}>
  💡 <strong>Compte de test :</strong> admin@example.com / password123
</p>
       
    </form>
     </div>
    );
}   
export default Login;
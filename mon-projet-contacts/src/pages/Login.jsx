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
        <form onSubmit={handleSubmit}> style display: flex; flex-direction: column; align-items: center; margin-top: 50px;
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // style margin-bottom: 10px; padding: 8px; width: 200px;
        />
        <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // style margin-bottom: 10px; padding: 8px; width: 200px;
        />
        <button type="submit">Se connecter</button>  // style padding: 8px 16px;
    </form>
    );
}   
export default Login;
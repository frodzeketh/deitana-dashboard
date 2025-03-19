import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); // Redirige a Dashboard.jsx
  };

  return (
    <div style={styles.container}>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin} style={styles.button}>
        Ir al Dashboard
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;

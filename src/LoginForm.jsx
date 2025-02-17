import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import Swal from "sweetalert2";
import Logo from "./Logo";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  // meme fonction que mobile et web
  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !motDePasse) {
      Swal.fire("Champs vides", "Veuillez remplir tous les champs", "error");
      return false;
    }

    try {
      const res = await fetch("http://213.156.132.144:3033/connexion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          mot_de_passe: motDePasse,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        Swal.fire("Erreur", data.error || "Une erreur est survenue", "error");
        return;
      }
    } catch (err) {
      console.error("Erreur connexion :", err);
      Swal.fire("Erreur", "Problème de connexion", "error");
    }
  };

  return (
    <Container maxWidth="xs">
      <Logo />

      <Box
        sx={{
          background: "#1c1c1c",
          color: "#fff",
          padding: "25px",

          borderRadius: "10px",
          mt: "50px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#e91e63",

            marginBottom: "20px",
          }}
        >
          Connexion 🔐
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            label="Mot de passe"
            type="password"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            sx={{ marginBottom: "15px" }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#e91e63",
              color: "#fff",
              "&:hover": { backgroundColor: "#b71c48" },
            }}
            type="submit"
          >
            Se connecter
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;

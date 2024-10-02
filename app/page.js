"use client"; // Indica que este é um Client Component

import React from "react";
import { Button, TextField, Paper, Typography, Grid } from "@mui/material";

// Adicione o caminho da sua imagem de fundo
const backgroundImage = 'url("https://cdn.dribbble.com/users/1732574/screenshots/5819252/media/43e81994ab016663f62e75cada68b72c.gif")';

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    // Adicione a lógica de autenticação aqui
  };

  const handleRegister = () => {
    // Lógica de redirecionamento para a página de registro
    console.log("Redirecting to registration page...");
  };

  return (
    <div style={{
      height: '100vh',
      backgroundImage: backgroundImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Faça seu Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField 
              label="Email" 
              type="email" 
              fullWidth 
              margin="normal" 
              required 
            />
            <TextField 
              label="Senha" 
              type="password" 
              fullWidth 
              margin="normal" 
              required 
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
            >
              Entrar
            </Button>
          </form>
          <Button 
            onClick={handleRegister} 
            variant="outlined" 
            color="secondary" 
            fullWidth 
            style={{ marginTop: '10px' }}
          >
            Registrar
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

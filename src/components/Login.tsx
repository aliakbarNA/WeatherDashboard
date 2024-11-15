
import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Paper } from '@mui/material';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(username);
  };

  return (
    <Container 
      component="main" 
      maxWidth="xs" 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} // مرکز کردن
    >
      <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
        <Typography variant="h4" gutterBottom align="center">
          ورود به حساب کاربری
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="نام کاربری"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            ورود
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
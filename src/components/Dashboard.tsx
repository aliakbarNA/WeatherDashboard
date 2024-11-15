import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WeatherDashboard from './WeatherDashboard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4">داشبورد آب و هوا</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        خروج
      </Button>
      <WeatherDashboard />
    </Container>
  );
};

export default Dashboard;
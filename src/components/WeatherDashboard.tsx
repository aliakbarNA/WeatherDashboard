
import React, { useState } from 'react';
import { fetchWeather } from '../services/weatherService';
import { Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

interface WeatherDashboardProps {
  isLoggedIn: boolean;
  onLogout: () => void; 
  onBackToLogin: () => void;
}

const WeatherDashboard: React.FC<WeatherDashboardProps> = ({ isLoggedIn, onLogout, onBackToLogin }) => {
  const { t } = useTranslation();
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault(); 
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom align="center">
          {t('weather.title')}
        </Typography>

        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Button onClick={() => i18n.changeLanguage('fa')} style={{ marginRight: '10px' }}>
            فارسی
          </Button>
          <Button onClick={() => i18n.changeLanguage('en')}>
            English
          </Button>
        </div>

        
        <form onSubmit={handleSearch}>
          <TextField
            label={t('weather.city')}
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            {t('weather.search')}
          </Button>
        </form>

        {error && <Typography color="error" align="center">{t('weather.error')}</Typography>}

        {weatherData && (
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                {weatherData.location.name}, {weatherData.location.country}
              </Typography>
              <Typography variant="body1" align="center">
                {t('weather.temperature')}: {weatherData.current.temp_c} °C
              </Typography>
              <Typography variant="body1" align="center">
                {t('weather.status')}: {weatherData.current.condition.text}
              </Typography>
              <Typography variant="body1" align="center">
                {t('weather.humidity')}: {weatherData.current.humidity}%
              </Typography>
              <Typography variant="body1" align="center">
                {t('weather.wind_speed')}: {weatherData.current.wind_kph} km/h
              </Typography>
            </Grid>
          </Grid>
        )}

       
        <Button variant="contained" color="secondary" onClick={isLoggedIn ? onLogout : onBackToLogin} style={{ marginTop: '20px' }}>
          {isLoggedIn ? t('logout') : t('login')}
        </Button>
      </Paper>
    </Container>
  );
};

export default WeatherDashboard;
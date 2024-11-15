
import React, { useState } from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import Login from './components/Login';
import './i18n'; 

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string) => {
    console.log(`User logged in: ${username}`);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setIsLoggedIn(false);
  };

  const handleBackToLogin = () => {
    setIsLoggedIn(false); 
  };

  return (
    <div>
      <h1>Weather App</h1>
      {isLoggedIn ? (
        <WeatherDashboard 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout} 
          onBackToLogin={handleBackToLogin} 
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

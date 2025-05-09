import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function NavBar() {
  const { darkMode, toggleTheme } = useTheme(); // Using ThemeContext
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ccc', color: '#000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton size="large" edge="start" color="inherit" component={Link} to="/" sx={{ mr: 2 }}>
          <MovieIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie Explorer
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
            <Typography variant="body1" sx={{ mx: 2 }}>Welcome, {user.username}</Typography>
            <Button color="inherit" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">Login</Button>
        )}
        <Switch checked={darkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

import '../Styles/Login.css';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Home from './Home.jsx';
import axios from 'axios'

export default function Login() {
  const [state, setState] = React.useState({
    right: false,
  });

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    try {
      // Replace with your login API endpoint
      const response = await axios.post('/api/login', { username, password });

      if (response.data.success) {
        setIsLoggedIn(true);
        setState({ ...state, right: false }); // Close the drawer after successful login
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
    >
      <form onSubmit={handleLogin} className='login-form'>
        <h2>Login</h2>
        {error && <p className='error'>{error}</p>}
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <>
          <span onClick={toggleDrawer('right', true)} style={{color:'#ffffff'}}>Hello,Log in</span>
          <Drawer
            anchor='right'
            open={state.right}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </>
      )}
    </div>
  );
}

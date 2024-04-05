import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { TextField, Button, Container, Typography, Box, Alert, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import backgroundImage from '../assets/home_back2.jpg';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/home');
            })
            .catch(err => {
                console.error(err.message);
                setErrorMessages("Error (auth/invalid-credential).");
            });
    };

    useEffect(() => {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = 'cover';
      return () => {
          document.body.style.backgroundImage = '';
          document.body.style.backgroundSize = '';
      };
  }, []);


    return (
        <Container component="main" >
          <Paper elevation={10} sx={{ padding: 2, marginBottom: 10}}>
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Hello, Admin
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate // dont not/ prevent vliadating the form
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mt: 1
                }}
              >
              <TextField
                margin="normal"
                required
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth={false}
                variant="contained"
              >
                Sign In
              </Button>
              {errorMessages && (
                <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
                  {errorMessages}
                </Alert>
              )}
            </Box>
          </Box>
        </Paper>

      </Container>
    );
}

export default LoginPage;
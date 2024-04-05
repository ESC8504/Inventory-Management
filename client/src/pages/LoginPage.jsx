import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    }

    return (
        <Container component="main" maxWidth="xs">
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
      </Container>
    );
}

export default LoginPage;
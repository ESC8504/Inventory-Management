import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import SKImage from  '../assets/SKB.png';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

function NavBar() {

    const navigate = useNavigate();

    const [isLogged, setIsLogged] = useState(false);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.error(err.message);
            });
    };

    useEffect(() => {
        const checkLoginStatus = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        });
        // to unmount here
        return checkLoginStatus;
    }, []);

    return (
        <AppBar position="fixed" x={{ width: '100%', top: 0 }}>
            <Container>
                {isLogged ? (
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h5">
                            Inventory Management System
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <img src={SKImage} style={{ height: '30px' }}  />
                            <Button color="inherit" component={Link} to="/home">Home</Button>
                            <Button color="inherit" component={Link} to="/warehouse">Warehouse</Button>
                            <Button color="inherit" component={Link} to="/category">Category</Button>
                            <Button color="inherit" component={Link} to="/dash">Inventory</Button>
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>
                        </Box>
                    </Toolbar>
                ) : (
                    <Toolbar sx={{ justifyContent: 'center' }} >
                        <Typography variant="h4" component="div">
                            Inventory Management System
                        </Typography>
                    </Toolbar>
                )}
            </Container>
        </AppBar>
    )
}

export default NavBar
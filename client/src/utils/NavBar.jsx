import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import SKImage from '../../public/SKB.png';

function NavBar() {
    return (
        <AppBar position="fixed" x={{ width: '100%', top: 0 }}>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h4" component="div">
                        Inventory Management System
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <img src={SKImage} style={{ height: '30px' }}  />
                        <Button color="inherit" component={Link} to="/home">Home</Button>
                        <Button color="inherit" component={Link} to="/warehouse">Warehouse</Button>
                        <Button color="inherit" component={Link} to="/category">Category</Button>
                        <Button color="inherit" component={Link} to="/dash">Dashboard</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
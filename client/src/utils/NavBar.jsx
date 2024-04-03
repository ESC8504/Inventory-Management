import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

function NavBar() {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" component="div">
                        Inventory Management
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
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
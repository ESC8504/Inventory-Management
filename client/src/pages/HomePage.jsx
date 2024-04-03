import { Container, Typography, Box } from '@mui/material';

function HomePage() {
    return (
        <Container maxWidth="md">
            <Box sx={styles}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome back, Admin
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Inventory Management System
                </Typography>
            </Box>
        </Container>
    );
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80vh'
};

export default HomePage;
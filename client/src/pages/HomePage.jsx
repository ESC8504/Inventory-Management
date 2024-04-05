import { Container, Typography, Box } from '@mui/material';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";

function HomePage() {
    return (
        <Container maxWidth="md">
            <ReactRain
                numDrops="5"
            />
            <Box sx={styles}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome back, Admin
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Eric's Custom PC Builder Store
                </Typography>
            </Box>
        </Container>
    );
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80vh',
    animation: 'fadeIn 3s ease-out forwards',
};

export default HomePage;
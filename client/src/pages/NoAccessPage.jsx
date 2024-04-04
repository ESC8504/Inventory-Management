import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NoAccessPage() {

    const navigate = useNavigate();

    return (
        <Container>
            <Box>
                <Typography variant="h3" gutterBottom>
                    You do not have access to this page
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    Please login to access this page
                </Typography>
                <Button variant="contained" onClick={() => navigate('/')}>Login</Button>
            </Box>
        </Container>
    );
}

export default NoAccessPage;
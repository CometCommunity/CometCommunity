import { Typography, Container, Box } from '@mui/material';
import CenterTitle from '@components/CenterTitle';
import MuiNextLink from '@components/MuiNextLink'

const Terms = () => {
  return (
    <>
        <Container maxWidth="760px" sx={{ maxWidth: '760px', mx: 'auto', mt: '6rem' }}>
            <CenterTitle 
                title="404 Not Found"
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography>Please return <MuiNextLink href="/">Home</MuiNextLink></Typography>
            </Box>
        </Container>
    </>
  );
};

export default Terms;

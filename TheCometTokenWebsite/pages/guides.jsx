import { Typography, Container } from '@mui/material';
import PageTitle from '@components/PageTitle';

const Guides = () => {
  return (
    <>
        <Container maxWidth="760px" sx={{ maxWidth: '760px', mx: 'auto' }}>
            <PageTitle 
                title="Learn how to use our dApps"
                subtitle="You can watch the videos or follow the guides and learn how our various dApps can be used"
            />
            
            <Typography variant="p">
                Coming soon
            </Typography>

        </Container>
    </>
  );
};

export default Guides;
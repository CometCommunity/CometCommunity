import { Container, Grid, Divider } from '@mui/material';
import CenterTitle from '@components/CenterTitle';
import RelatedLinkItem from './RelatedLinkItem';

// { id: 0, title: '', caption: '', icon: '', href: '', background: '' },

const Projects = ({ title, subtitle, links }) => {
  return (
    <>
        
        <Divider sx={{ my: 10, maxWidth: 'lg', mx: 'auto' }} />
            <Container maxWidth='lg'>
                <CenterTitle 
                    title={title}
                    subtitle={subtitle}
                />
                    <Grid container spacing={3} alignItems="stretch" justifyContent="center" sx={{ flexGrow: 1, mb: 3 }}> 
                        {links.map((link) => {
                            return <RelatedLinkItem key={link.id} link={link} />;
                        })} 
                    </Grid>

            </Container>
        
    </>
  );
};

export default Projects;
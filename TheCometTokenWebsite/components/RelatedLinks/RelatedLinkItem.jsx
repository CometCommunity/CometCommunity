import { Typography, Icon, Box, Grid } from '@mui/material';
// import { styled } from '@mui/system';
import MuiNextLink from '@components/MuiNextLink'

/* const LinkIcon = styled('div')(({ theme }) => ({

}))

const LinkTitle = styled('div')(({ theme }) => ({

}))

const LinkCaption = (({ theme }) => ({
    
}))

const HoverArrow = styled('div')(({ theme }) => ({

    '&:hover': {

    }
})) */

const RelatedLinkItem = ({ link }) => {

    const extraStyles = {
        bgcolor: link.background,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        py: '1rem',
        color: '#fff',
        borderRadius: 2,
        textDecoration: 'none',
        '&:hover': {
            
        }
    }
  
  return (
    
        <Grid item md={4} xs={12} sx={{ maxWidth: '320px' }}>
            <MuiNextLink href={link.href} sx={{ textDecoration: 'none' }}> 
                <Box sx={extraStyles}>
                    
                        <Icon fontSize="large" >
                            {link.icon}
                        </Icon>
                    
                        <Typography variant="h4" sx={{ }}>
                            {link.title}
                        </Typography>
                    
                    <Typography>
                        {link.caption}
                    </Typography>
                    
                        <Icon>
                            east
                        </Icon>
                    
                </Box>
            </MuiNextLink> 
        </Grid>
    
  );
};

export default RelatedLinkItem;

import { useMediaQuery, Stack, useTheme } from '@mui/material';
import MuiNextLink from '@components/MuiNextLink';

const Navbar = ({ navLinks }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    
      <Stack direction='row' spacing={4} sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        {!isMobile && (
          <>
            {navLinks.map(({ title, path }, i) => (
              <MuiNextLink
                key={`${title}${i}`}
                href={path}
                variant='button'
                sx={{
                  color: 'rgb(230, 215, 218)',
                  '&:hover': {
                    color: 'white',
                  },
                  textTransform: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  px: '0.5rem'
                }}
                underline='none'
              >
                {title}
              </MuiNextLink>
            ))}
          </>
        )}
      </Stack>

  );
};

export default Navbar;

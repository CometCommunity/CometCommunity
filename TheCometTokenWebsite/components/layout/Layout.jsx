import { useMediaQuery, Container, Box } from '@mui/material';
import { 
  // styled, 
  useTheme 
} from '@mui/system';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import BottomNav from '@components/navigation/BottomNav';
/* import Gradients from '@components/stylistic/Gradients';
import theme from '../../styles/theme';

const PageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));
 */
const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      

     {/*  <Box maxWidth='lg' sx={{ position: 'relative', mx: 'auto', height: '0', pointerEvents: 'none', zIndex: '-100' }} aria-hidden="true">
        <Gradients />
      </Box> */}

      <Header />
      
        <Box sx={{
          display: 'flex',
          alignContent: 'space-between',
          flexDirection: 'column',
          pt: theme.spacing(8),
          minHeight: '100vh',
        }}>
          <Box sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <Container maxWidth='lg' sx={{ position: 'relative', pb: { xs: theme.spacing(12), md: theme.spacing(1) } }}>
            <Footer />
          </Container>
        </Box>
        
      {isMobile && <BottomNav />}

      
      
    </>
  );
};

export default Layout;

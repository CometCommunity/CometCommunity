import { styled } from '@mui/system';
import makeGlassBg from 'styles/makeGlassStyle';

const GlassContainer = styled('div')(({ theme }) => ({
  ...makeGlassBg(theme),
  padding: 20,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
}));
export default GlassContainer;

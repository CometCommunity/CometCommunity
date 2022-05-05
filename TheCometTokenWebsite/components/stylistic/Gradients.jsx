import { Box } from '@mui/material';
import theme from '../../styles/theme';

const Gradients = () => {
    return (
        <>
        <Box sx={{ position: 'absolute', right: '-450px', top: '0' }}>
            <svg width="800" height="502" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
                <circle cx="400" cy="102" r="400" fill="url(#heroglow_paint0_radial)" fillOpacity=".6" />
                <circle cx="209" cy="289" r="170" fill="url(#heroglow_paint1_radial)" fillOpacity=".4" />
                <defs>
                <radialGradient id="heroglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 149 251) scale(315.089)">
                    <stop stopColor={theme.palette.primary.main} />
                    <stop offset="1" stopColor={theme.palette.primary.main} stopOpacity=".01" />
                </radialGradient>
                <radialGradient id="heroglow_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -40 249) scale(133.913)">
                    <stop stopColor={theme.palette.tertiary.main} />
                    <stop offset="1" stopColor={theme.palette.tertiary.main} stopOpacity=".01" />
                </radialGradient>
                </defs>
            </svg>
        </Box>
        
        </>
    );
};

export default Gradients;
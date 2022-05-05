import * as React from 'react';
import { Box } from '@mui/material';
import theme from '../../styles/theme';

const LowerGradients = () => {
    return (
        <>
            <Box sx={{ position: 'absolute', right: { xs: '-70vw', sm: '-100vw', md: '-70vw' }, top: { xs: '100px', md: '-40vh' } }}>
                <svg width="180vw" height="180vh" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
                    
                        <circle cx="240" cy="394" r="1000" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4" />
                        <circle cx="438" cy="240" r="1000" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6" />
                        <defs>
                        <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(200)">
                            <stop stopColor={theme.palette.primary.main} />
                            <stop offset="1" stopColor={theme.palette.primary.main} stopOpacity=".01" />
                        </radialGradient>
                        <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(300)">
                            <stop stopColor={theme.palette.tertiary.main} />
                            <stop offset="1" stopColor={theme.palette.tertiary.main} stopOpacity=".01" />
                        </radialGradient>
                        </defs>
                </svg>
            </Box>
        </>
    );
};

export default LowerGradients;
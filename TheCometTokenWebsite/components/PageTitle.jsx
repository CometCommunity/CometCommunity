import { Typography, Box, Divider }  from '@mui/material';

const PageTitle = ({ title, subtitle }) => {
    return (
        <Box sx={{ mt: 12 }}>
            <Typography variant="h1">
                {title}
            </Typography>
            <Typography variant="subtitle1">
                {subtitle}
            </Typography>
            <Divider sx={{ width: '2rem', mb: '1.5rem' }} />
        </Box>
    )
}

export default PageTitle
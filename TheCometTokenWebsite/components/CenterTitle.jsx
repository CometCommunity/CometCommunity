import { Typography, Box }  from '@mui/material';

const CenterTitle = ({ title, subtitle, main }) => {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, mt: (main ? 12 : 0) }}>
            <Box
                sx={{
                    textAlign: 'center'
                    , maxWidth: '768px'
                }}
            >
                <Typography variant={main ? 'h1' : 'h2'}>
                    {title}
                </Typography>

                <Typography
                    variant='subtitle1'
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    )
}

export default CenterTitle
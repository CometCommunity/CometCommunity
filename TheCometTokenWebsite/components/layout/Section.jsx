import { Box, Container }  from '@mui/material';
import CenterTitle from '@components/CenterTitle'

const boxStyles = {
    background: 'linear-gradient(rgba(46, 46, 51, 0.3), rgba(29, 29, 32, 0) 300px)',
    pt: '5rem',
    pb: '3rem',
    borderTopColor: 'rgba(46,46,51,1)!important',
    borderStyle: 'solid',
    border: 0,
    borderTop: 1
}

const Section = ({ title, subtitle, children, toggleOutside, extra, main }) => {

    return (
        <>

            {toggleOutside ? (
                <>
                <CenterTitle 
                    title={title} 
                    subtitle={subtitle}
                    main={main}
                />
                
                {extra ? (
                <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: '3rem' }}>
                    {extra}
                </Container>
                ) : ''}

                <Box sx={boxStyles}>

                    <Container maxWidth='lg' sx={{ }}>

                    {children}

                    </Container>
                </Box>
                </>
            
            ) : (

                <>
                    <Box sx={boxStyles}>
                    <Container maxWidth='lg' sx={{ }}>

                        <CenterTitle 
                            title={title} 
                            subtitle={subtitle}
                        />

                        {children}
                    </Container>
                </Box>
                </>
            )}
        </>
    )
}

export default Section
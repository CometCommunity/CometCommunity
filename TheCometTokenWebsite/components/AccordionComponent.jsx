import { useState } from 'react';
import { 
    Typography, 
    Accordion,
    AccordionSummary,
    AccordionDetails 
}  from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const AccordionComponent = ({ accordionItems, uniqueId }) => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
        

        {accordionItems.map((item) => {
            return (
                <>
                <Accordion 
                    key={item.id} 
                    expanded={expanded === ('panel_' + uniqueId + item.id)} 
                    onChange={handleChange(('panel_' + uniqueId + item.id))}
                >

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={'panel' + uniqueId + item.id + 'bh-content'}
                    id={'panel' + uniqueId + item.id + 'bh-header'} 
                >
                    <Typography variant="h6" sx={{ m: 0 }}>
                        {item.title}
                    </Typography>
                </AccordionSummary>
    
                <AccordionDetails>
                    <Typography variant="p">
                        {item.bodyText}
                    </Typography>
                </AccordionDetails>
                
            </Accordion>
            </>
                )
        })} 
        </>
        
    )
}

export default AccordionComponent


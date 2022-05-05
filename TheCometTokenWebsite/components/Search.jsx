import { useRef } from 'react'
import { Icon, Paper, InputBase } from "@mui/material";
import theme from "../styles/theme";



    const thisComponent = useRef(null);

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
    };
    const submitForm = (e) => {
        e.preventDefault()
        thisComponent.current?.scrollIntoView()
    }

    return (
        <>
            {/* <TextField
                placeholder="Search"
                color="background" 
                id="search"
                size="small"
                sx={{
                    background: theme.palette.greyButton.background,
                    width: {
                        md: '70%',
                        xs: '90%'
                    }
                }}
                value={search}
                onChange={handleChange}
            > 
                <Icon>search</Icon>
            </TextField> */}


            <Paper
                component="form"
                onSubmit={submitForm}
                sx={{ 
                    p: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    background: theme.palette.greyButton.background,
                    border: '1px solid',
                    borderColor: 'rgba(82,82,90,1)',
                    width: {
                        md: '60%',
                        xs: '90%'
                    },
                    color: theme.palette.text.primary
                }}
                ref={thisComponent}
            >

                <Icon sx={{ color: theme.palette.text.secondary }}>search</Icon>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={placeholder}
                    inputProps={{ 'aria-label': 'search' }}
                    value={search}
                    onChange={handleChange}
                />

            </Paper>
                <div id="top"></div>
            
        </>
    )
}

export default Search;
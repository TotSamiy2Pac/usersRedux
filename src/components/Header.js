import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button} from "@mui/material";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <h2>User</h2>
                <nav className={'nav'}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about-page'}>About</Link>
                </nav>
                <Box className={'boxBtn'}>
                    <Button variant={'contained'} color={'success'}>
                        <Link to={'/sign-in'}>sign in</Link>
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                    >
                        <Link to={'/sign-up'}>sign up</Link>
                    </Button>
                </Box>
            </div>
        </header>
    );
};

export default Header;
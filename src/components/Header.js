import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {LOG_OUT} from "../redux/types/types";

const Header = () => {
    const isAuth = useSelector(state => state.usersReducer.isAuth)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch({type: LOG_OUT})
        // console.log('click')
    }

    console.log(isAuth)

    return (
        <header>
            <div className="header-container">
                <h2>User</h2>
                <nav className={'nav'}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about-page'}>About</Link>
                    <Link to={'/user-page'}>Личный кабинет</Link>
                </nav>
                <Box className={'boxBtn'}>
                    {isAuth ?
                        <Button
                            onClick={handleLogOut}
                        >
                            Log out
                        </Button>
                        :
                        <Box>
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
                    }
                </Box>
            </div>
        </header>
    );
};

export default Header;
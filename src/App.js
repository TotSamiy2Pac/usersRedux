import React from 'react';
import {Route, Router, Routes} from "react-router-dom";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import {PrivateRoute} from "./components/PrivateRoute";
// import {isAuth} from "./lib/helper";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import {useSelector} from "react-redux";
import AboutPage from "./pages/AboutPage";


const App = () => {
    const isAuth = useSelector(state => state.usersReducer.isAuth)



    // console.log(isAuth)

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>} />
            <Route path={'/about-page'} element={<AboutPage/>} />
            <Route path={'/sign-in'} element={<SignInPage/>} />
            <Route path={'/sign-up'} element={<SignUpPage/>} />
            <Route path={'/user-page'} element={
                <PrivateRoute auth={{isAuthenticated: isAuth}}>
                    <UserPage/>
                </PrivateRoute>
            } />
          {/*<Route path={'/user-page'} element={<UserPage/>} />*/}
        </Routes>
    );
};

export default App;
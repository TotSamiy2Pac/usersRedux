import React from 'react';
import {Route, Router, Routes} from "react-router-dom";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import {isAuth} from "./lib/helper";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<UserPage/>} />
            {/*<Route path={'/home-page'} element={*/}
            {/*    <PrivateRoute auth={{isAuthenticated: isAuth()}}>*/}
            {/*        <UserPage/>*/}
            {/*    </PrivateRoute>*/}
            {/*} />*/}
          {/*<Route path={'/'} element={<HomePage/>} />*/}
        </Routes>
    );
};

export default App;
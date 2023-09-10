import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const PrivateRoute = ({ children}) => {
    const isAuth = useSelector(state => state.usersReducer.isAuth)

    const isAuthenticated = isAuth;

    if (isAuthenticated ) {
        return children
    }
    return <Navigate to="/sign-up" />
}
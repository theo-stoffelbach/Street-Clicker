import React from "react";
import { useContext } from "react";
import Auth from "../contexts/auth"

const AuthenticatedRoute = ({ path, compoment }) => {
    const { isAuth } = useContext(Auth);

    return isAuth ? (
        <Route exact path={path} compoment={compoment} />
    ) : (
        <Redirect to="/login" />
    )
}

export default AuthenticatedRoute
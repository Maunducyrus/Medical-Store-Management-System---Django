import React from "react";
import { Navigate } from "react-router-dom"

class LogoutComponent extends React.Component {
    render() {
        return < Navigate to="/" />
    }
}

export default LogoutComponent;
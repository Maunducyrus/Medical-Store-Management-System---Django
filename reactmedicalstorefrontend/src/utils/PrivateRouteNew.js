import React, { Component } from "react";
import { Route, Navigate, Router, Routes } from "react-router-dom"
import AuthHandler from "./AuthHandler";
import MainComponent from "../components/MainComponent"

export var PrivateRouteNew = ({ page, activepage, ...rest }) => {
    return (
        <Route
            {...rest}
           render={(props) => 
            AuthHandler.loggedIn() ? (
                <MainComponent Page={Page} activepage={activepage} {...props}/>
            ) : (
                <Navigate to="/" />
            )
          }
        />
    
    );
};

export default PrivateRouteNew;


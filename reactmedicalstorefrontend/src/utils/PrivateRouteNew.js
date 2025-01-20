// import React, { Component } from "react";
// import { Route, Navigate } from "react-router-dom"
// import AuthHandler from "./AuthHandler";
// import MainComponent from "../components/MainComponent"

// export var PrivateRouteNew = ({ page, activepage, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//            render={(props) => 
//             AuthHandler.loggedIn() ? (
//                 <MainComponent Page={page} activepage={activepage} {...props}/>
//             ) : (
//                 <Navigate to="/" />
//             )
//           }
//         />
    
//     );
// };

// export default PrivateRouteNew;

import React from "react";
import { Navigate } from "react-router-dom";
import AuthHandler from "./AuthHandler";
import MainComponent from "../components/MainComponent";

export const PrivateRouteNew = ({ page, activepage }) => {
  if (AuthHandler.loggedIn()) {
    return <MainComponent Page={page} activepage={activepage} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRouteNew;


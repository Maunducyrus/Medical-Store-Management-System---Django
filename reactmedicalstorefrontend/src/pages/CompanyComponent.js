import React, { Component } from 'react';
import AuthHandler from '../utils/AuthHandler';

class CompanyComponent extends React.Component {

    // componentDidMount(){
    //     console.log(AuthHandler.CheckTokenExpiry());
    // }

    render() {
        return <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>MANAGE COMPANY</h2>
            </div>
        </div>
        </section>
    }
}

export default CompanyComponent;
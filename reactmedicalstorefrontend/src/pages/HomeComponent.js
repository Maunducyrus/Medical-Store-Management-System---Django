// import React from 'react';
import React, { Component } from 'react';

class HomeComponets extends Component {
    render() {
        return <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>DASHBOARD</h2>
            </div>

            <div className="row clearfix">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box bg-pink hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">bookmark</i>
                        </div>
                        <div className="content">
                            <div className="text">TOTAL REQUEST</div>
                            <div className="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20">125</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box bg-cyan hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">bookmark</i>
                        </div>
                        <div className="content">
                            <div className="text">TOTAL SALES</div>
                            <div className="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20">257</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box bg-light-green hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">bookmark</i>
                        </div>
                        <div className="content">
                            <div className="text">TOTAL MEDICINES</div>
                            <div className="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20">243</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box bg-orange hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">bookmark</i>
                        </div>
                        <div className="content">
                            <div className="text">TOTAL COMPANY</div>
                            <div className="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20">1225</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- #END# Widgets -->
            <!-- CPU Usage --> */}
              
        </div>
        </section>
    }
}

export default HomeComponets;
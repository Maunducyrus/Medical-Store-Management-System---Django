import React, { Component } from "react"; // Import Component
import Overlay from "./Overlay"; // Import the Overlay component
import PageLoader from "./PageLoader"
import Navbar from "./Navbar"; // Import the Navbar component
import Sidebar from "./Sidebar"; // Import the Sidebar component
import GoogleFontLoader from 'react-google-font-loader';
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends Component {
        state = {
            bodyClass: "theme-red ls-closed",
            displayOverlay: "none",
            width: window.screen.Width,
        };

        onBarClick = () => {
            if (this.state.bodyClass == "theme-red ls-closed overlay-open") {
              this.setState({ bodyClass: "theme-red ls-closed" });
              this.setState({ displayOverlay: "none" });
            } else if (this.state.bodyClass == "theme-red ls-closed") {
              this.setState({ bodyClass: "theme-red ls-closed overlay-open" });
              this.setState({ displayOverlay: "block" });
            }
          };

          onscreenresize = () => {
            console.log(window.screen.width);
            this.setState({ width: window.screen.width });
          };

          componentWillMount() {
            window.addEventListener("resize", this.onscreenresize);
          }
        
          componentWillUnmount() {
            window.removeEventListener("resize", this.onscreenresize);
          }
    

    // handleResize = () => {
    //     this.setState({ width: window.innerWidth });
    // };

    // onBarClick = () => {
    //     const { bodyClass, displayOverlay } = this.state;
    //     this.setState({
    //         bodyClass:
    //             bodyClass === "theme-red ls-closed overlay-open"
    //                 ? "theme-red ls-closed"
    //                 : "theme-red ls-closed overlay-open",
    //         displayOverlay: displayOverlay === "block" ? "none" : "block",
    //     });
    // };

    // onscreenresize = () => {
    //     console.log(window.screen.width);
    //     this.setState({ width: window.screen.width });
    // }

    // componentWillMount(){
    //     window.addEventListener("resize", this.onscreenresize);
    // }

    
    // componentWillUnmount(){
    //     window.removeEventListener("resize", this.onscreenresize);
    // }

    render() {
        console.log(this.props);
        if (this.state.width > 1150) {
            document.getElementById("root").className = "theme-red";
        } else {
            document.getElementById("root").className = this.state.bodyClass;
        }

        var Page = this.props.Page;

        return (
            <React.Fragment>
                <GoogleFontLoader
                  fonts={[
                    {
                        font: "Roboto",
                        weights: [400, 700],
                    },
                 ]}
                 subsets={["latin", "cyrillic-ext"]}
                />
              <GoogleFontLoader
                 fonts={[
                    {
                     font: "Material+Icons",
                     },
                    ]}
                />

             <Overlay display={this.state.displayOverlay} />
             <Navbar onBarClick={this.onBarClick} />
             <Sidebar activepage={this.props.activepage} />
             <Page {...this.props} />
            </React.Fragment>
        )






        const { bodyClass, displayOverlay, width } = this.state;

        // Set body class based on screen width
        const rootClassName = width > 1150 ? "theme-red" : bodyClass;

        return (
            <React.Fragment>
                <GoogleFontLoader
                    fonts={[
                        { font: "Roboto", weights: [400, 700] },
                        { font: "Material+Icons" },
                    ]}
                />
                {/* <div id="root" className={rootClassName}> */}
                    <Overlay display={displayOverlay} />
                    <Navbar onBarClick={this.onBarClick} />
                    <Sidebar  activepage={this.props.activepage}/>
                    <> {this.props.page} </>
                {/* </div> */}
            </React.Fragment>
        );
    }
}

export default MainComponent;
 
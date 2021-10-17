import './App.css';
import SecondTemplate from "./SecondTemplate/SecondTemplate";
import FirstTemplate from "./FirstTemplate/FirstTemplate";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Welcome from "./Welcome/Welcome";
import Images from "./Images/Images"
import AudiosVideos from "./AudiosVideos/AudiosVideos"
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Upcoming from "./Upcoming/Upcoming";


import React, {} from "react";

import {isMobile} from "react-device-detect";
import Footer from "./Footer/Footer";

function App() {
    if(isMobile){
        return (
            <Router>
                <Switch>
                    <Route exact path={"/"} render={(props) => (
                        <Welcome {...props} mobile={true}/>
                    )}/>
                    <Route exact path={"/firstTemplate"} render={(props) => (
                        <FirstTemplate {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/secondTemplate"} render={(props) => (
                        <SecondTemplate {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/firstTemplate/Gallery/Pictures"} render={(props) => (
                        <Images {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/secondTemplate/Gallery/Pictures"} render={(props) => (
                        <Images {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/firstTemplate/Gallery/AudiosVideos"} render={(props) => (
                        <AudiosVideos {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/secondTemplate/Gallery/AudiosVideos"} render={(props) => (
                        <AudiosVideos {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/SecondTemplate/About"} render={(props) => (
                        <About {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/SecondTemplate/Gallery"} render={(props) => (
                        <Gallery {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/SecondTemplate/Schedule"} render={(props) => (
                        <Upcoming {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/secondTemplate/contact"} render={(props) => (
                        <Footer {...props} mobile={true} />
                    )}/>
                </Switch>
            </Router>
        )
    }else{
        return (
            <Router>
                <Switch>
                    <Route exact path={"/"} render={(props) => (
                        <Welcome {...props} mobile={false} />
                    )}/>
                    <Route exact path={"/firstTemplate"} render={(props) => (
                        <FirstTemplate {...props} mobile={false} />
                    )}/>
                    <Route exact path={"/secondTemplate"} component={SecondTemplate}/>
                    <Route path={"/firstTemplate/Gallery/Pictures"} component={Images} />
                    <Route path={"/secondTemplate/Gallery/Pictures"} component={Images} />
                    <Route path={"/firstTemplate/Gallery/AudiosVideos"} component={AudiosVideos}/>
                    <Route path={"/secondTemplate/Gallery/AudiosVideos"} component={AudiosVideos}/>
                    <Route path={"/SecondTemplate/About"} component={About}/>
                    <Route path={"/SecondTemplate/Gallery"} component={Gallery}/>
                    <Route path={"/SecondTemplate/Schedule"} component={Upcoming}/>
                    <Route path={"/SecondTemplate/contact"} component={Footer}/>
                </Switch>
            </Router>
        );
    }
}

export default App;

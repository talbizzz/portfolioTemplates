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
                <Switch>
                    <Route exact path={"/portfolioTemplates"} render={(props) => (
                        <Welcome {...props} mobile={true}/>
                    )}/>
                    <Route exact path={"/portfolioTemplates/firstTemplate"} render={(props) => (
                        <FirstTemplate {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/secondTemplate"} render={(props) => (
                        <SecondTemplate {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/firstTemplate/Gallery/Pictures"} render={(props) => (
                        <Images {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/secondTemplate/Gallery/Pictures"} render={(props) => (
                        <Images {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/firstTemplate/Gallery/AudiosVideos"} render={(props) => (
                        <AudiosVideos {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/secondTemplate/Gallery/AudiosVideos"} render={(props) => (
                        <AudiosVideos {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/SecondTemplate/About"} render={(props) => (
                        <About {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/SecondTemplate/Gallery"} render={(props) => (
                        <Gallery {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/SecondTemplate/Schedule"} render={(props) => (
                        <Upcoming {...props} mobile={true} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/secondTemplate/contact"} render={(props) => (
                        <Footer {...props} mobile={true} />
                    )}/>
                </Switch>
        )
    }else{
        return (
            <Router>
                <Switch>
                    <Route exact path={"/portfolioTemplates"} render={(props) => (
                        <Welcome {...props} mobile={false} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/firstTemplate"} render={(props) => (
                        <FirstTemplate {...props} mobile={false} />
                    )}/>
                    <Route exact path={"/portfolioTemplates/secondTemplate"} component={SecondTemplate}/>
                    <Route path={"/portfolioTemplates/firstTemplate/Gallery/Pictures"} component={Images} />
                    <Route path={"/portfolioTemplates/secondTemplate/Gallery/Pictures"} component={Images} />
                    <Route path={"/portfolioTemplates/firstTemplate/Gallery/AudiosVideos"} component={AudiosVideos}/>
                    <Route path={"/portfolioTemplates/secondTemplate/Gallery/AudiosVideos"} component={AudiosVideos}/>
                    <Route path={"/portfolioTemplates/SecondTemplate/About"} component={About}/>
                    <Route path={"/portfolioTemplates/SecondTemplate/Gallery"} component={Gallery}/>
                    <Route path={"/portfolioTemplates/SecondTemplate/Schedule"} component={Upcoming}/>
                    <Route path={"/portfolioTemplates/SecondTemplate/contact"} component={Footer}/>
                </Switch>
            </Router>
        );
    }
}

export default App;

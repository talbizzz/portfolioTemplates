import './App.css';
import SecondTemplate from "./SecondTemplate/SecondTemplate";
import FirstTemplate from "./FirstTemplate/FirstTemplate";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Welcome from "./Welcome/Welcome";
import Images from "./Images/Images"
import AudiosVideos from "./AudiosVideos/AudiosVideos"

import React, {useState} from "react";

function App() {
    return (
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Welcome}/>
                    <Route exact path={"/firstTemplate"} component={FirstTemplate}/>
                    <Route exact path={"/secondTemplate"} component={SecondTemplate}/>
                    <Route path={"/firstTemplate/Gallery/Pictures"} component={Images} />
                    <Route path={"/firstTemplate/Gallery/AudiosVideos"} component={AudiosVideos}/>
                </Switch>
            </Router>
    );
}

export default App;

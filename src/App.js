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

function App() {
    return (
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Welcome}/>
                    <Route exact path={"/firstTemplate"} component={FirstTemplate}/>
                    <Route exact path={"/secondTemplate"} component={SecondTemplate}/>
                    <Route path={"/firstTemplate/Gallery/Pictures"} component={Images} />
                    <Route path={"/firstTemplate/Gallery/AudiosVideos"} component={AudiosVideos}/>
                    <Route path={"/SecondTemplate/About"} component={About}/>
                    <Route path={"/SecondTemplate/Gallery"} component={Gallery}/>
                    <Route path={"/SecondTemplate/Schedule"} component={Upcoming}/>
                </Switch>
            </Router>
    );
}

export default App;

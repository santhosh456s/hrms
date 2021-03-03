import { React, useState } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import Dashbord from './component/dashboard/Dashbord';
import Calender from './component/dashboard/screen/recruitment/calender/calender';
import Onboarding from './component/dashboard/screen/recruitment/onboarding/Onboarding';
import Reacruitment from './component/dashboard/screen/recruitment/Recruitmrnt';
import Report from './component/dashboard/screen/recruitment/report/Report';
import Home from './component/dashboard/screen/home/Home.js';
import Setting from './component/dashboard/screen/recruitment/settings/Setting';
import Login from './component/dashboard/screen/login/Login';
const Contraler = () => {

    return (
        <Router>

            <Switch>
                <Route path="/login" render={(props) => <Login{...props} />}></Route>
                <Dashbord >

                    <Route exact path="/" render={(props) => <Home {...props} />}></Route>
                    <Route exact path="/recruitment" render={(props) => <Reacruitment {...props} />}></Route>
                    <Route exact path="/onboarding" render={(props) => <Onboarding {...props} />}></Route>
                    <Route exact path="/reports" render={(props) => <Report {...props} />}></Route>
                    <Route exact path="/calender" render={(props) => <Calender {...props} />}></Route>
                    <Route exact path="/settings" render={(props) => <Setting {...props} />}></Route>

                </Dashbord>
            </Switch>
        </Router >

    );
}
export default Contraler;
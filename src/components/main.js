import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingpage from './landingpage';
import aboutus from './aboutus';
import contact from './contact';


const Main = () => (
    <Switch>
        <Route exact path="/" component={landingpage} />
        <Route path="/contact" component={contact} />
        <Route path="/aboutus" component={aboutus} />
    </Switch>
)

export default Main;
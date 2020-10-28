import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingpage from './landingpage';
import aboutus from './aboutus';
import contact from './contact';
import skip2 from './skip2';
import menu from './menu';
import brocollisoup from './brocollisoup';
import order from './order';
import card from './card';
import shareSoup from './shareSoup';
import paymentMethod from './paymentMethod';
import checkorder from './checkorder';
import myMap from './myMap';
import checkorder2 from './checkorder2';
import Item from '/Item';

const Main = () => (
    <Switch>
        <Route exact path="/" component={landingpage} />
        <Route path="/contact" component={contact} />
        <Route path="/aboutus" component={aboutus} />
        <Route path="/skip2" component={skip2} />
        <Route path="/menu" component={menu} />
        <Route path="/brocollisoup" component={brocollisoup} />
        <Route path="/order" component={order} />
        <Route path="/card" component={card} />
        <Route path="/paymentMethod" component={paymentMethod} />
        <Route path="/shareSoup" component={shareSoup} />
        <Route path="/checkorder" component={checkorder} />
        <Route path="/checkorder2" component={checkorder2} />
        <Route path="/myMap" component={myMap} />
        <Route path="/Item" component={Item} />
    </Switch>
)

export default Main;
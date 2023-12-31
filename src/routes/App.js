import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import ModalVideo from '../containers/ModalVideo';
import NotFound from '../containers/NotFound';
//import Player from '../containers/Player';
import Register from '../containers/Register';

const App = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/player/:id" component={ModalVideo} /> 
                <Route component={NotFound} />
            </Switch>

    </BrowserRouter>
)

export default App;

//npm install react-router-dom --save
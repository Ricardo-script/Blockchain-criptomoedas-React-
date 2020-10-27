import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Header from './components/Header';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Quem from './pages/Quem';
import Oque from './pages/Oque';
import history from './History';


const Routes = () =>(
    <Router history={history}>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <Route exact path ="/quem" component={Quem}/>
            <Route exact path ="/oque" component={Oque}/>
        </Switch>
    </Router>
);

export default Routes;
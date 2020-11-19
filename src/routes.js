import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Header from './components/Header';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Quem from './pages/Quem';
import Oque from './pages/Oque';
import history from './History';
import Dashboard from './pages/Dashboard';
import Topcoin from './pages/Topcoin';
import Cotacoes from './pages/Cotacoes';


const Routes = () =>(
    <Router history={history}>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <Route exact path ="/quem" component={Quem}/>
            <Route exact path ="/oque" component={Oque}/>
            <Route exact path ="/dashboard" component={Dashboard}/>
            <Route exact path ="/topcoin" component={Topcoin}/>
            <Route exact path ="/cotacoes" component={Cotacoes}/>
        </Switch>
    </Router>
);

export default Routes;
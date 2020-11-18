import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Logo from './logo-Bit.png';
import { Link } from 'react-router-dom';
import history from '../../History';
import { HiChartPie } from "react-icons/hi";
import { FaBitcoin } from "react-icons/fa";
import { GiPlanetCore } from "react-icons/gi";


class Header extends Component{
    constructor(props){
        super(props);
        this.state ={}

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(){
        history.replace('/login');        
    }

    logout(){
        localStorage.removeItem('token_autenticacao');
        history.replace('/login');
        console.log(this.props.history);        
    }

    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/"><img src={ Logo } alt="" width="40" height="40"/></Link> 
                    <Navbar.Brand href="/">FactoryBit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/quem">Quem somos nós?</Nav.Link>
                            <Nav.Link href="oque">Oque é?</Nav.Link>
                            <NavDropdown title="Gráficos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/dashboard"><HiChartPie/> Dashboard</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/topcoin"><FaBitcoin/> Ranking Top moedas</NavDropdown.Item>
                                <NavDropdown.Item href="/cotacoes"><GiPlanetCore/> Cotações</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/cadastro">Criar conta</Nav.Link>
                        </Nav>

                        <Nav>
                        <Nav.Link
                            href="/login"
                            onClick={localStorage.getItem('token_autenticacao') === null ? 
                            this.login : 
                            this.logout
                            }>
                            {localStorage.getItem('token_autenticacao') === null ? 'Entrar' : 'Sair'}
                            
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>      
            </div>
            );
    }
}

export default Header;
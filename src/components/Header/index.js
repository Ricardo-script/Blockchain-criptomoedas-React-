import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Logo from './logo-Bit.png';
import { Link } from 'react-router-dom';
import { HiChartPie } from "react-icons/hi";
import { FaBitcoin } from "react-icons/fa";
import { GiPlanetCore } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";


const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        faça seu cadastro e fique por dentro
        de todas as atualizações de criptomoedas em tempo real, o cadastro é muito
        simples, seguro, rapido e gratuito.
    </Tooltip>
  );


class Header extends Component{
    constructor(props){
        super(props);
        this.state ={}

        //this.login = this.login.bind(this);
        //this.logout = this.logout.bind(this);
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
                            
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 2000 }}
                                overlay={renderTooltip}
                            >
                            <Nav.Link href="/cadastro">Criar conta</Nav.Link>
                            </OverlayTrigger>

                        </Nav>
                        <Nav>
                        <Nav.Link href="/ouvidoria">Ouvidoria <BiSupport/></Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>      
            </div>
            );
    }
}

export default Header;
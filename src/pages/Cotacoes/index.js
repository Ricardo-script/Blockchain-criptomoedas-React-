import React,{ Component } from 'react';
import { Table } from 'reactstrap';
import { Container, Header, Title, AreaCotacao, Logo } from './styles';
import { GiPlanetCore } from "react-icons/gi";
import logoBit from '../../assets/logoBit.png';
import logoDolar from '../../assets/logoDolar.png';
import logoRipple from '../../assets/logoRipple.png';
import logoEthereum from '../../assets/logoEthereum.png';
import logoLite from '../../assets/logoLite.png';
import logoEuro from '../../assets/logoEuro.png';
import logoLibra from '../../assets/logoLibra.png';
import logoPeso from '../../assets/logoPeso.png';
import logoLene from '../../assets/logoLene.png';
import logoFranco from '../../assets/logoFranco.png';
import logoYuan from '../../assets/logoYuan.png';
import logoShekel from '../../assets/logoShekel.png';
import { BiMedal } from "react-icons/bi";

export default class Cotacoes extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{
                "BTC":'',
                "USD":'',
                "USDT":'',
                "CAD":'',
                "EUR":'',
                "GBP":'',
                "ARS":'',
                "LTC":'',
                "JPY":'',
                "CHF":'',
                "AUD":'',
                "CNY":'',
                "ILS":'',
                "ETH":'',
                "XRP":'',
            }
        }
    }
    
    componentDidMount(){
        let url = 'https://economia.awesomeapi.com.br/all/'
        fetch(url)
        .then((response) => response.json())
        .then((json) =>{
         let state = this.state;
         state.data = json;
         this.setState(state);
         console.log(state);
        });  
    }

    render(){

        const BTC = this.state.data.BTC
        const USD = this.state.data.USD
        const USDT = this.state.data.USDT
        const CAD = this.state.data.CAD
        const EUR = this.state.data.EUR
        const GBP = this.state.data.GBP
        const ARS = this.state.data.ARS
        const LTC = this.state.data.LTC
        const JPY = this.state.data.JPY
        const CHF = this.state.data.CHF
        const AUD = this.state.data.AUD
        const CNY = this.state.data.CNY
        const ILS = this.state.data.ILS
        const ETH = this.state.data.ETH
        const XRP = this.state.data.XRP

        return(
            <Container>
                <Header>
                    <Title><GiPlanetCore/>Cotações</Title>
                </Header>
                <AreaCotacao>
                    <Table className="grid">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Criptomoeda</th>
                                <th>Code</th>
                                <th>Preço</th>
                                <th>Percentual</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><Logo src={logoEthereum}></Logo>{ETH.name}</td>
                                <td>{ETH.code}</td>
                                <td>{ETH.bid}</td>
                                <td>{ETH.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><Logo src={logoRipple}></Logo>{XRP.name}</td>
                                <td>{XRP.code}</td>
                                <td>{XRP.bid}</td>
                                <td>{XRP.pctChange}</td>
                            </tr>

                            <tr>
                                <th scope="row">4</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">13</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">14</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                            <tr>
                                <th scope="row">15</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.pctChange}</td>
                            </tr>
                        </tbody>
                    </Table>  
                </AreaCotacao>
            </Container>
        );
    }
}
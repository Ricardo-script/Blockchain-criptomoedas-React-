import React,{ Component } from 'react';
import { Table } from 'reactstrap';
import { Container, Header, Title, AreaCotacao, Scroll, Logo } from './styles';
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

        //=================converter data==============================================
        const BTC_data = new Date(BTC.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const USD_data = new Date(USD.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const USDT_data = new Date(USDT.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const CAD_data = new Date(CAD.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const EUR_data = new Date(EUR.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const GBP_data = new Date(GBP.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const ARS_data = new Date(ARS.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const LTC_data = new Date(LTC.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const JPY_data = new Date(JPY.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const CHF_data = new Date(CHF.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const AUD_data = new Date(AUD.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const CNY_data = new Date(CNY.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const ILS_data = new Date(ILS.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const ETH_data = new Date(ETH.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        const XRP_data = new Date(XRP.create_date).toLocaleString('pt-BR', {timeZone: 'UTC'});
        
        //=============================================================================


        return(
            <Container>
                <Header>
                    <Title><GiPlanetCore/>Cotações</Title>
                </Header>
                <AreaCotacao>
                    <Scroll>
                    <Table className="grid">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Criptomoeda</th>
                                <th>Code</th>
                                <th>Última Venda</th>
                                <th>Última Compra</th>
                                <th>Preço Máximo</th>
                                <th>Preço Minimo</th>
                                <th>Percentual</th>
                                <th>Atualização</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                <td>{BTC.code}</td>
                                <td>{BTC.bid}</td>
                                <td>{BTC.ask}</td>
                                <td>{BTC.high}</td>
                                <td>{BTC.low}</td>
                                <td>{BTC.pctChange + '%'}</td>
                                <td>{BTC_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><Logo src={logoEthereum}></Logo>{ETH.name}</td>
                                <td>{ETH.code}</td>
                                <td>{ETH.bid}</td>
                                <td>{ETH.ask}</td>
                                <td>{ETH.high}</td>
                                <td>{ETH.low}</td>
                                <td>{ETH.pctChange + '%'}</td>
                                <td>{ETH_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><Logo src={logoRipple}></Logo>{XRP.name}</td>
                                <td>{XRP.code}</td>
                                <td>{XRP.bid}</td>
                                <td>{XRP.ask}</td>
                                <td>{XRP.high}</td>
                                <td>{XRP.low}</td>
                                <td>{XRP.pctChange + '%'}</td>
                                <td>{XRP_data}</td>
                            </tr>

                            <tr>
                                <th scope="row">4</th>
                                <td><Logo src={logoLite}></Logo>{LTC.name}</td>
                                <td>{LTC.code}</td>
                                <td>{LTC.bid}</td>
                                <td>{LTC.ask}</td>
                                <td>{LTC.high}</td>
                                <td>{LTC.low}</td>
                                <td>{LTC.pctChange + '%'}</td>
                                <td>{LTC_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><Logo src={logoDolar}></Logo>{USD.name}</td>
                                <td>{USD.code}</td>
                                <td>{USD.bid}</td>
                                <td>{USD.ask}</td>
                                <td>{USD.high}</td>
                                <td>{USD.low}</td>
                                <td>{USD.pctChange + '%'}</td>
                                <td>{USD_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td><Logo src={logoDolar}></Logo>{USDT.name}</td>
                                <td>{USDT.code}</td>
                                <td>{USDT.bid}</td>
                                <td>{USDT.ask}</td>
                                <td>{USDT.high}</td>
                                <td>{USDT.low}</td>
                                <td>{USDT.pctChange + '%'}</td>
                                <td>{USDT_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td><Logo src={logoDolar}></Logo>{CAD.name}</td>
                                <td>{CAD.code}</td>
                                <td>{CAD.bid}</td>
                                <td>{CAD.ask}</td>
                                <td>{CAD.high}</td>
                                <td>{CAD.low}</td>
                                <td>{CAD.pctChange + '%'}</td>
                                <td>{CAD_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td><Logo src={logoEuro}></Logo>{EUR.name}</td>
                                <td>{EUR.code}</td>
                                <td>{EUR.bid}</td>
                                <td>{EUR.ask}</td>
                                <td>{EUR.high}</td>
                                <td>{EUR.low}</td>
                                <td>{EUR.pctChange + '%'}</td>
                                <td>{EUR_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td><Logo src={logoLibra}></Logo>{GBP.name}</td>
                                <td>{GBP.code}</td>
                                <td>{GBP.bid}</td>
                                <td>{GBP.ask}</td>
                                <td>{GBP.high}</td>
                                <td>{GBP.low}</td>
                                <td>{GBP.pctChange + '%'}</td>
                                <td>{GBP_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td><Logo src={logoPeso}></Logo>{ARS.name}</td>
                                <td>{ARS.code}</td>
                                <td>{ARS.bid}</td>
                                <td>{ARS.ask}</td>
                                <td>{ARS.high}</td>
                                <td>{ARS.low}</td>
                                <td>{ARS.pctChange + '%'}</td>
                                <td>{ARS_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td><Logo src={logoLene}></Logo>{JPY.name}</td>
                                <td>{JPY.code}</td>
                                <td>{JPY.bid}</td>
                                <td>{JPY.ask}</td>
                                <td>{JPY.high}</td>
                                <td>{JPY.low}</td>
                                <td>{JPY.pctChange + '%'}</td>
                                <td>{JPY_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td><Logo src={logoFranco}></Logo>{CHF.name}</td>
                                <td>{CHF.code}</td>
                                <td>{CHF.bid}</td>
                                <td>{CHF.ask}</td>
                                <td>{CHF.high}</td>
                                <td>{CHF.low}</td>
                                <td>{CHF.pctChange + '%'}</td>
                                <td>{CHF_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">13</th>
                                <td><Logo src={logoDolar}></Logo>{AUD.name}</td>
                                <td>{AUD.code}</td>
                                <td>{AUD.bid}</td>
                                <td>{AUD.ask}</td>
                                <td>{AUD.high}</td>
                                <td>{AUD.low}</td>
                                <td>{AUD.pctChange + '%'}</td>
                                <td>{AUD_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">14</th>
                                <td><Logo src={logoYuan}></Logo>{CNY.name}</td>
                                <td>{CNY.code}</td>
                                <td>{CNY.bid}</td>
                                <td>{CNY.ask}</td>
                                <td>{CNY.high}</td>
                                <td>{CNY.low}</td>
                                <td>{CNY.pctChange + '%'}</td>
                                <td>{CNY_data}</td>
                            </tr>
                            <tr>
                                <th scope="row">15</th>
                                <td><Logo src={logoShekel}></Logo>{ILS.name}</td>
                                <td>{ILS.code}</td>
                                <td>{ILS.bid}</td>
                                <td>{ILS.ask}</td>
                                <td>{ILS.high}</td>
                                <td>{ILS.low}</td>
                                <td>{ILS.pctChange + '%'}</td>
                                <td>{ILS_data}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Scroll>
                </AreaCotacao>
            </Container>
        );
    }
}
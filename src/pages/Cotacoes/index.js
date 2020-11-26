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
                                    <th>Variação</th>
                                    <th>Atualização</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><Logo src={logoBit}></Logo>{BTC.name}</td>
                                    <td>{BTC.code}</td>
                                    <td>R$ {parseFloat(BTC.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(BTC.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(BTC.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(BTC.low).toFixed(2).replace(".",",")}</td>
                                    <td>{BTC.pctChange + '%'}</td>
                                    <td>{BTC_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><Logo src={logoEthereum}></Logo>{ETH.name}</td>
                                    <td>{ETH.code}</td>
                                    <td>R$ {parseFloat(ETH.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ETH.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ETH.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ETH.low).toFixed(2).replace(".",",")}</td>
                                    <td>{ETH.pctChange + '%'}</td>
                                    <td>{ETH_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td><Logo src={logoRipple}></Logo>{XRP.name}</td>
                                    <td>{XRP.code}</td>
                                    <td>R$ {parseFloat(XRP.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(XRP.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(XRP.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(XRP.low).toFixed(2).replace(".",",")}</td>
                                    <td>{XRP.pctChange + '%'}</td>
                                    <td>{XRP_data}</td>
                                </tr>

                                <tr>
                                    <th scope="row">4</th>
                                    <td><Logo src={logoLite}></Logo>{LTC.name}</td>
                                    <td>{LTC.code}</td>
                                    <td>R$ {parseFloat(LTC.bid).toFixed(2)}</td>
                                    <td>R$ {parseFloat(LTC.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(LTC.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(LTC.low).toFixed(2).replace(".",",")}</td>
                                    <td>{LTC.pctChange + '%'}</td>
                                    <td>{LTC_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td><Logo src={logoDolar}></Logo>{USD.name}</td>
                                    <td>{USD.code}</td>
                                    <td>R$ {parseFloat(USD.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(USD.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(USD.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(USD.low).toFixed(2).replace(".",",")}</td>
                                    <td>{USD.pctChange + '%'}</td>
                                    <td>{USD_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td><Logo src={logoDolar}></Logo>{USDT.name}</td>
                                    <td>{USDT.code}</td>
                                    <td>R$ {parseFloat(USDT.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(USDT.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(USDT.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(USDT.low).toFixed(2).replace(".",",")}</td>
                                    <td>{USDT.pctChange + '%'}</td>
                                    <td>{USDT_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td><Logo src={logoDolar}></Logo>{CAD.name}</td>
                                    <td>{CAD.code}</td>
                                    <td>R$ {parseFloat(CAD.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(CAD.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(CAD.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(CAD.low).toFixed(2).replace(".",",")}</td>
                                    <td>{CAD.pctChange + '%'}</td>
                                    <td>{CAD_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td><Logo src={logoEuro}></Logo>{EUR.name}</td>
                                    <td>{EUR.code}</td>
                                    <td>R$ {parseFloat(EUR.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(EUR.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(EUR.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(EUR.low).toFixed(2).replace(".",",")}</td>
                                    <td>{EUR.pctChange + '%'}</td>
                                    <td>{EUR_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td><Logo src={logoLibra}></Logo>{GBP.name}</td>
                                    <td>{GBP.code}</td>
                                    <td>R$ {parseFloat(GBP.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(GBP.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(GBP.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(GBP.low).toFixed(2).replace(".",",")}</td>
                                    <td>{GBP.pctChange + '%'}</td>
                                    <td>{GBP_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td><Logo src={logoPeso}></Logo>{ARS.name}</td>
                                    <td>{ARS.code}</td>
                                    <td>R$ {parseFloat(ARS.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ARS.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ARS.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ARS.low).toFixed(2).replace(".",",")}</td>
                                    <td>{ARS.pctChange + '%'}</td>
                                    <td>{ARS_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td><Logo src={logoLene}></Logo>{JPY.name}</td>
                                    <td>{JPY.code}</td>
                                    <td>R$ {parseFloat(JPY.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(JPY.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(JPY.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(JPY.low).toFixed(2).replace(".",",")}</td>
                                    <td>{JPY.pctChange + '%'}</td>
                                    <td>{JPY_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td><Logo src={logoFranco}></Logo>{CHF.name}</td>
                                    <td>{CHF.code}</td>
                                    <td>R$ {parseFloat(CHF.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(CHF.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(CHF.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(CHF.low).toFixed(2).replace(".",",")}</td>
                                    <td>{CHF.pctChange + '%'}</td>
                                    <td>{CHF_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">13</th>
                                    <td><Logo src={logoDolar}></Logo>{AUD.name}</td>
                                    <td>{AUD.code}</td>
                                    <td>R$ {parseFloat(AUD.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(AUD.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(AUD.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(AUD.low).toFixed(2).replace(".",",")}</td>
                                    <td>{AUD.pctChange + '%'}</td>
                                    <td>{AUD_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">14</th>
                                    <td><Logo src={logoYuan}></Logo>{CNY.name}</td>
                                    <td>{CNY.code}</td>
                                    <td>R$ {parseFloat(CNY.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(CNY.ask).toFixed(2).replace(".",",")}</td>
                                    <td>v{parseFloat(CNY.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(CNY.low).toFixed(2).replace(".",",")}</td>
                                    <td>{CNY.pctChange + '%'}</td>
                                    <td>{CNY_data}</td>
                                </tr>
                                <tr>
                                    <th scope="row">15</th>
                                    <td><Logo src={logoShekel}></Logo>{ILS.name}</td>
                                    <td>{ILS.code}</td>
                                    <td>R$ {parseFloat(ILS.bid).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ILS.ask).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ILS.high).toFixed(2).replace(".",",")}</td>
                                    <td>R$ {parseFloat(ILS.low).toFixed(2).replace(".",",")}</td>
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
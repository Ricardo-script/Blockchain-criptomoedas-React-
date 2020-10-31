import React, { Component } from 'react';
import { Container, Header, AreaMoeda, AreaInfo, Logo, Titulo, Valor, Moeda, Data} from './styled';
import logoBit from '../../assets/logoBit.png';
import logoDolar from '../../assets/logoDolar.png';
import logoRipple from '../../assets/logoRipple.png'


export default class Topcoin extends Component{
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
        let url = 'https://economia.awesomeapi.com.br/all/' // top moedas atual
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
                <Header>Top 15 Moedas</Header>
                <AreaMoeda>
                <AreaInfo>

                    <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{BTC.name} <strong>{BTC.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{BTC.high}</Valor>
                            <Valor>Menor preço unitário:{BTC.low}</Valor>
                            <Data>Última atualização:{BTC.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>
                   
                    <AreaInfo>
                        <Logo src={logoDolar}></Logo>
                        <Moeda>
                            <Titulo>Nome:{USD.name} <strong>{USD.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{USD.high}</Valor>
                            <Valor>Menor preço unitário:{USD.low}</Valor>
                            <Data>Última atualização:{USD.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{USDT.name} <strong>{USDT.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{USDT.high}</Valor>
                            <Valor>Menor preço unitário:{USDT.low}</Valor>
                            <Data>Última atualização:{USDT.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{CAD.name} <strong>{CAD.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{CAD.high}</Valor>
                            <Valor>Menor preço unitário:{CAD.low}</Valor>
                            <Data>Última atualização:{CAD.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{EUR.name} <strong>{EUR.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{EUR.high}</Valor>
                            <Valor>Menor preço unitário:{EUR.low}</Valor>
                            <Data>Última atualização:{EUR.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{GBP.name} <strong>{GBP.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{GBP.high}</Valor>
                            <Valor>Menor preço unitário:{GBP.low}</Valor>
                            <Data>Última atualização:{GBP.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{ARS.name} <strong>{ARS.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{ARS.high}</Valor>
                            <Valor>Menor preço unitário:{ARS.low}</Valor>
                            <Data>Última atualização:{ARS.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{LTC.name} <strong>{LTC.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{LTC.high}</Valor>
                            <Valor>Menor preço unitário:{LTC.low}</Valor>
                            <Data>Última atualização:{LTC.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{JPY.name} <strong>{JPY.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{JPY.high}</Valor>
                            <Valor>Menor preço unitário:{JPY.low}</Valor>
                            <Data>Última atualização:{JPY.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{CHF.name} <strong>{CHF.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{CHF.high}</Valor>
                            <Valor>Menor preço unitário:{CHF.low}</Valor>
                            <Data>Última atualização:{CHF.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{AUD.name} <strong>{AUD.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{AUD.high}</Valor>
                            <Valor>Menor preço unitário:{AUD.low}</Valor>
                            <Data>Última atualização:{AUD.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{CNY.name} <strong>{CNY.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{CNY.high}</Valor>
                            <Valor>Menor preço unitário:{CNY.low}</Valor>
                            <Data>Última atualização:{CNY.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{ILS.name} <strong>{ILS.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{ILS.high}</Valor>
                            <Valor>Menor preço unitário:{ILS.low}</Valor>
                            <Data>Última atualização:{ILS.create_date}</Data>
                        </Moeda>
                    <br/>
                    </AreaInfo>

                    <AreaInfo>
                        <Logo src={logoBit}></Logo>
                        <Moeda>
                            <Titulo>Nome:{ETH.name} <strong>{ETH.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{ETH.high}</Valor>
                            <Valor>Menor preço unitário:{ETH.low}</Valor>
                            <Data>Última atualização:{ETH.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>

                    <AreaInfo>
                        <Logo src={logoRipple}></Logo>
                        <Moeda>
                            <Titulo>Nome:{XRP.name} <strong>{XRP.code}</strong></Titulo>
                            <Valor>Maior preço unitário:{XRP.high}</Valor>
                            <Valor>Menor preço unitário:{XRP.low}</Valor>
                            <Data>Última atualização:{XRP.create_date}</Data>
                        </Moeda>
                    </AreaInfo>
                    <br/>
                    
                </AreaMoeda>
            </Container>
        );
    }
 
}
import React, { Component } from 'react';
import { Container, Header, AreaMoeda, AreaInfo, Logo,
         Titulo, Valor, Moeda, Data, Grafico, DataInfo
       } from './styled';
import {Bar} from 'react-chartjs-2';
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
        let url = 'https://economia.awesomeapi.com.br/all/' // top moedas atual(https://docs.awesomeapi.com.br/api-de-moedas)
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

        //=================converter moeda==============================================
        

        //==============================================================================

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


        const databars = {
            labels: ['BTC', 'USD', 'USDT', 'CAD', 'EUR', 'GBP',
                     'ARS', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY',
                      'ILS', 'ETH', 'XRP'
                    ],
            datasets: [{
                label: '# Top 15 Moedas em tempo real',
                data: [
                    BTC.high, USD.high, USDT.high, CAD.high, EUR.high, GBP.high,
                    ARS.high, LTC.high, JPY.high, CHF.high, AUD.high, CNY.high,
                    ILS.high, ETH.high, XRP.high,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',

                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',

                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1
            }]
        }
         
        return(
            <Container>
                <Header><BiMedal/>Top 15 Moedas</Header>
                <DataInfo>
                    <AreaMoeda>
                        <AreaInfo>
                            <Logo src={logoBit}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{BTC.name} <strong>{BTC.code}</strong></Titulo>
                                    <Valor>Maior preço unitário: R$ {parseFloat(BTC.high).toFixed(2)}</Valor>
                                    <Valor>Menor preço unitário: R$ {parseFloat(BTC.low).toFixed(2)}</Valor>
                                    <Data>Última atualização: {BTC_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoEthereum}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{ETH.name} <strong>{ETH.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{parseFloat(ETH.high).toFixed(2)}</Valor>
                                    <Valor>Menor preço unitário:{parseFloat(ETH.low).toFixed(2)}</Valor>
                                    <Data>Última atualização:{ETH_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoRipple}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{XRP.name} <strong>{XRP.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{parseFloat(XRP.high).toFixed(2)}</Valor>
                                    <Valor>Menor preço unitário:{parseFloat(XRP.low).toFixed(2)}</Valor>
                                    <Data>Última atualização:{XRP_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoLite}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{LTC.name} <strong>{LTC.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{parseFloat(LTC.high).toFixed(2)}</Valor>
                                    <Valor>Menor preço unitário:{parseFloat(LTC.low).toFixed(2)}</Valor>
                                    <Data>Última atualização:{LTC_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>
                        
                            <AreaInfo>
                                <Logo src={logoDolar}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{USD.name} <strong>{USD.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{parseFloat(USD.high).toFixed(2)}</Valor>
                                    <Valor>Menor preço unitário:{parseFloat(USD.low).toFixed(2)}</Valor>
                                    <Data>Última atualização:{USD_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoDolar}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{USDT.name} <strong>{USDT.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{parseFloat(USDT.high).toFixed(2)}</Valor>
                                    <Valor>Menor preço unitário:{parseFloat(USDT.low).toFixed(2)}</Valor>
                                    <Data>Última atualização:{USDT_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoDolar}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{CAD.name} <strong>{CAD.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{parseFloat(CAD.high).toFixed(2)}</Valor>
                                    <Valor>Menor preço unitário:{parseFloat(CAD.low).toFixed(2)}</Valor>
                                    <Data>Última atualização:{CAD_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoEuro}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{EUR.name} <strong>{EUR.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{EUR.high}</Valor>
                                    <Valor>Menor preço unitário:{EUR.low}</Valor>
                                    <Data>Última atualização:{EUR_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoLibra}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{GBP.name} <strong>{GBP.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{GBP.high}</Valor>
                                    <Valor>Menor preço unitário:{GBP.low}</Valor>
                                    <Data>Última atualização:{GBP_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoPeso}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{ARS.name} <strong>{ARS.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{ARS.high}</Valor>
                                    <Valor>Menor preço unitário:{ARS.low}</Valor>
                                    <Data>Última atualização:{ARS_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>
                            
                            <AreaInfo>
                                <Logo src={logoLene}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{JPY.name} <strong>{JPY.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{JPY.high}</Valor>
                                    <Valor>Menor preço unitário:{JPY.low}</Valor>
                                    <Data>Última atualização:{JPY_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoFranco}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{CHF.name} <strong>{CHF.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{parseFloat(CHF.high).toFixed(2)}</Valor>
                                    <Valor>Menor preço unitário:{CHF.low}</Valor>
                                    <Data>Última atualização:{CHF_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoDolar}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{AUD.name} <strong>{AUD.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{AUD.high}</Valor>
                                    <Valor>Menor preço unitário:{AUD.low}</Valor>
                                    <Data>Última atualização:{AUD_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoYuan}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{CNY.name} <strong>{CNY.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{CNY.high}</Valor>
                                    <Valor>Menor preço unitário:{CNY.low}</Valor>
                                    <Data>Última atualização:{CNY_data}</Data>
                                </Moeda>
                            </AreaInfo>
                            <br/>

                            <AreaInfo>
                                <Logo src={logoShekel}></Logo>
                                <Moeda>
                                    <Titulo>Nome:{ILS.name} <strong>{ILS.code}</strong></Titulo>
                                    <Valor>Maior preço unitário:{ILS.high}</Valor>
                                    <Valor>Menor preço unitário:{ILS.low}</Valor>
                                    <Data>Última atualização:{ILS_data}</Data>
                                </Moeda>
                            <br/>
                        </AreaInfo>  
                    </AreaMoeda>

                    <Grafico>
                        <Bar
                            data={databars}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </Grafico>
                </DataInfo>       
            </Container>
        );
    }
 
}
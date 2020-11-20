import React, { Component } from 'react';
import { Container, DashGeral, Dash, AreaLegend, Legend,HeaderGeral,Header, Grafico, AreaGrafico } from './styles';
import logobit from '../../assets/bitgreen.png';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';


export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{
                ticker:{
                    'high': '',
                    'low': '',
                    'vol': '',
                    'last': '',
                    'buy': '',
                    'sell': '',
                    'date': '',
                }
            } 
        }
    }

  componentDidMount(){
       let url = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
       fetch(url)
       .then((response) => response.json())
       .then((json) =>{
        let state = this.state;
        state.data = json;
        this.setState(state);
        console.log(json);
       });
       
   }

   

   render(){

    const keyData = this.state.data.ticker;

    //==========================converter dados da Api: data ======================================
    const unix_timestamp = keyData.date;
    const dataAtual = new Date(unix_timestamp * 1000);
    const year = dataAtual.getFullYear();
    const month = dataAtual.getMonth();
    const day = dataAtual.getDay();
    const hours = dataAtual.getHours();
    const minutes = "0" + dataAtual.getMinutes();
    const seconds = "0" + dataAtual.getSeconds();
    const dataFormatada = ' ' + (day <= 9 ? '0' + day: day) + '/' + month + '/' +  year + ' ' + hours +
    ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    //converter moeda:
    //const moedaFormatada = keyData.low.toLocaleString('pt-BR', { style:'currency:', currency: 'BRL'});
    //console.log('moeda é : ' + moedaFormatada/1000);

    //==============================================================================================

    //===================================Area Gráficos=====================================
    
    const databars = {
        labels: ['Maior Unitário', 'Menor Unitário','Vlr.Último', 'Maior oferta', 'Menor oferta'],
        datasets: [{
            label: '# Resumo do dia - em tempo real',
            data: [keyData.high, keyData.low,  keyData.last, keyData.buy, keyData.sell,70000], //7000 apenas para eixo
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]

       
    }
    //==============================Comparação entre Preços==============================
    const database = {
        labels: [
            'Maior Preço Unitário',
            'Maior Preço de Compra',
            'Quantidade negociada',
        ],
        datasets: [{
            data: [keyData.high, keyData.low, keyData.last],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#8000FF',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                
            ]
        }]
    };
    //===================================================================================

    //======================Comparação entre Maior e Menor oferta========================
    const dataOferta = {
        labels: [
            'Maior Preço de oferta',
            'Menor Preço de oferta',
            
        ],
        datasets: [{
            data: [keyData.high, keyData.low],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
            ]
        }]
    };
    //===================================================================================

    //===================================fim Gráficos===================================== 
        return(
            <Container>
                
                    <DashGeral>
                        <HeaderGeral><img src={logobit} alt="10"/>
                            Resumo das últimas 24 horas de negociações
                        </HeaderGeral>

                        <AreaLegend>
                            <Legend>Data e hora da informação:{dataFormatada}</Legend>
                            <Legend>Maior preço unitário: R$ {parseFloat(keyData.high).toFixed(2)}</Legend>
                            <Legend>Menor preço unitário: R$ {parseFloat(keyData.low).toFixed(2)}</Legend>
                            <Legend>Quantidade negociada: R$ {parseFloat(keyData.vol).toFixed(2)}</Legend>
                            <Legend>Preço unitário da última: R$ {parseFloat(keyData.last).toFixed(2)}</Legend>
                            <Legend>Maior preço de oferta de compra: R$ {parseFloat(keyData.buy).toFixed(2)}</Legend>
                            <Legend>Menor preço de oferta de venda: R$ {parseFloat(keyData.sell).toFixed(2)}</Legend>
                        </AreaLegend>
                        <Grafico className="graficoStyled">
                            <Bar
                                data={databars}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                        </Grafico>
                    </DashGeral>

                <AreaGrafico>
                    <Dash>
                        <Header><img src={logobit} alt="10" width={'7%'}/>
                            Comparativo entre preço unitário
                        </Header>
                        <AreaLegend>
                            <Legend>Maior preço unitário: R$ {parseFloat(keyData.high).toFixed(2)}</Legend>
                            <Legend>Menor preço unitário: R$ {parseFloat(keyData.low).toFixed(2)}</Legend>
                            <Legend>Preço unitário da última: R$ {parseFloat(keyData.last).toFixed(2)}</Legend>
                            <Legend>Data e hora da informação:{dataFormatada}</Legend>
                        </AreaLegend>

                        <Grafico className="graficoStyled">
                            <Doughnut
                                data={database}
                            />
                        </Grafico>
                    </Dash>


                    <Dash>
                        <Header><img src={logobit} alt="10" width={'7%'}/>
                            Resumo Comparativo de ofertas
                        </Header>
                        <AreaLegend>
                            <Legend>Maior preço de oferta de compra: R$ {parseFloat(keyData.buy).toFixed(2)}</Legend>
                            <Legend>Menor preço de oferta de venda: R$ {parseFloat(keyData.sell).toFixed(2)}</Legend>
                            <Legend>Data e hora da informação:{dataFormatada}</Legend>
                        </AreaLegend>
                        <Grafico className="graficoStyled">
                            <Doughnut
                                data={dataOferta}
                            />
                        </Grafico>
                    </Dash>
                </AreaGrafico>                   

            </Container>
       );
   }
}





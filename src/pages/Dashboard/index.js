import React, { Component } from 'react';
import { Container, DashGeral, Dash, AreaLegend, Legend, Header, Grafico, AreaGrafico } from './styles';
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
                        <Header style={{height:'7%'}}><img src={logobit} alt="10" width={'3.5%'}/>
                            Resumo das últimas 24 horas de negociações
                        </Header>

                        <AreaLegend>
                            <Legend>Data e hora da informação:{keyData.date}</Legend>
                            <Legend>Maior preço unitário:{keyData.high}</Legend>
                            <Legend>Menor preço unitário:{keyData.low}</Legend>
                            <Legend>Quantidade negociada:{keyData.vol}</Legend>
                            <Legend>Preço unitário da última:{keyData.last}</Legend>
                            <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                            <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
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
                            <Legend>Maior preço unitário:{keyData.high}</Legend>
                            <Legend>Menor preço unitário:{keyData.low}</Legend>
                            <Legend>Preço unitário da última:{keyData.last}</Legend>
                            <Legend>Data e hora da informação:{keyData.date}</Legend>
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
                            <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                            <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
                            <Legend>Data e hora da informação:{keyData.date}</Legend>
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





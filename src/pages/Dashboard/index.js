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
    const database = {
        labels: [
            'Maior Preço Unitário',
            'Maior Preço de Compra',
        ],
        datasets: [{
            data: [keyData.high, keyData.buy],
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

    const databars = {
        labels: ['Maior Unitário', 'Menor Unitário', 'Qtd.Negociada', 'Vlr.Último', 'Maior oferta', 'Menor oferta'],
        datasets: [{
            label: '# Resumo do dia - em tempo real',
            data: [keyData.high, keyData.low, keyData.vol, keyData.last, keyData.buy, keyData.sell],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }


    //===================================fim Gráficos===================================== 
        return(
            <Container>
                
                    <DashGeral>
                        <Header><img src={logobit} alt="10" width={'7%'}/>
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
                            Resumo das últimas 24 horas de negociações
                        </Header>
                        <AreaLegend>
                            <Legend>Maior preço unitário:{keyData.high}</Legend>
                            <Legend>Menor preço unitário:{keyData.low}</Legend>
                            <Legend>Quantidade negociada:{keyData.vol}</Legend>
                            <Legend>Preço unitário da última:{keyData.last}</Legend>
                            <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                            <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
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
                            Resumo das últimas 24 horas de negociações
                        </Header>
                        <AreaLegend>
                            <Legend>Maior preço unitário:{keyData.high}</Legend>
                            <Legend>Menor preço unitário:{keyData.low}</Legend>
                            <Legend>Quantidade negociada:{keyData.vol}</Legend>
                            <Legend>Preço unitário da última:{keyData.last}</Legend>
                            <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                            <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
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
                            Resumo das últimas 24 horas de negociações
                        </Header>
                        <AreaLegend>
                            <Legend>Maior preço unitário:{keyData.high}</Legend>
                            <Legend>Menor preço unitário:{keyData.low}</Legend>
                            <Legend>Quantidade negociada:{keyData.vol}</Legend>
                            <Legend>Preço unitário da última:{keyData.last}</Legend>
                            <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                            <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
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
                            Resumo das últimas 24 horas de negociações
                        </Header>
                        <AreaLegend>
                            <Legend>Maior preço unitário:{keyData.high}</Legend>
                            <Legend>Menor preço unitário:{keyData.low}</Legend>
                            <Legend>Quantidade negociada:{keyData.vol}</Legend>
                            <Legend>Preço unitário da última:{keyData.last}</Legend>
                            <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                            <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
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
                            Resumo das últimas 24 horas de negociações
                        </Header>
                        <AreaLegend>
                            <Legend>Maior preço unitário:{keyData.high}</Legend>
                            <Legend>Menor preço unitário:{keyData.low}</Legend>
                            <Legend>Quantidade negociada:{keyData.vol}</Legend>
                            <Legend>Preço unitário da última:{keyData.last}</Legend>
                            <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                            <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
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
                            Resumo das últimas 24 horas de negociações
                        </Header>
                        <AreaLegend>
                            <Legend>Maior preço unitário:{keyData.high}</Legend>
                            <Legend>Menor preço unitário:{keyData.low}</Legend>
                            <Legend>Quantidade negociada:{keyData.vol}</Legend>
                            <Legend>Preço unitário da última:{keyData.last}</Legend>
                            <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                            <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
                            <Legend>Data e hora da informação:{keyData.date}</Legend>
                        </AreaLegend>

                        <Grafico className="graficoStyled">
                            <Doughnut
                                data={database}
                            />
                        </Grafico>
                    </Dash>

                </AreaGrafico>
            </Container>
       );
   }
}



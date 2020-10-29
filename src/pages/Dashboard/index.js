import React, { Component } from 'react';
import { Container, Dash, Legend, Header, Grafico } from './styles';
import logobit from '../../assets/bitgreen.png';
import {Doughnut} from 'react-chartjs-2';


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
     
        return(
            <Container>
                    <Dash>
                        <Header><img src={logobit} alt="10" width={'7%'}/>
                            Resumo das últimas 24 horas de negociações
                        </Header>
                        <Legend>Maior preço unitário:{keyData.high}</Legend>
                        <Legend>Menor preço unitário:{keyData.low}</Legend>
                        <Legend>Quantidade negociada:{keyData.vol}</Legend>
                        <Legend>Preço unitário da última:{keyData.last}</Legend>
                        <Legend>Maior preço de oferta de compra:{keyData.buy}</Legend>
                        <Legend>Menor preço de oferta de venda:{keyData.sell}</Legend>
                        <Legend>Data e hora da informação:{keyData.date}</Legend>

                        <Grafico>
    
                            <Doughnut
                                data={database}
                            />
                        </Grafico>
                </Dash>
            </Container>
       );
   }
}



import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carteira from './images/carteira.png';
import Moedas from './images/moedas.png';
import Wallet from './images/wallet.png';
import { Capa } from './styled';


const Quem = () => (
    <Capa>
        <Carousel className="slide">
            <Carousel.Item  className="carousel">
                <img
                className="d-block w-100"
                src= { Carteira }
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Consquistando liberdade financeira de seus clientes</h3>
                <p>Com Tecnologia de ponta, segurança e rapidez, Somos umas das
                   maiores empresas de bitcoins do Brasil.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className="carousel">
                <img
                className="d-block w-100"
                src={ Moedas }
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{color: ' orange '}}>Paixão pelo trabalho</h3>
                <p style={{color: ' #FFF '}}>Amamos o nosso trabalho, dedicação,
                vislumbramos um futuro melhor e queremos deixar nossa marca
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className="carousel"> 
                <img
                className="d-block w-100"
                src={ Wallet }
                alt="Third slide"
                width="70%"
                />

                <Carousel.Caption>
                <h3>Realização dos sonhos</h3>
                <p style={{color: ' #40FF00 '}}>Nosso compromisso com você é simplificar para a realização de seus sonhos</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Capa>
);

export default Quem;
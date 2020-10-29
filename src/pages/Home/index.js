import React from 'react';
import Background from './Images/menu_fundo.png';
import { Capa, Container } from './styled';

const Home = () =>(
    <Container>
        <div>
            <Capa src={Background} alt="100" />
        </div>
    </Container>
    
);

export default Home;


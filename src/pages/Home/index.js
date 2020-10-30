import React from 'react';
import Background from './Images/menu_fundo.png';
import { Capa, Container, AreaCapa } from './styled';

const Home = () =>(
    <Container>
            <AreaCapa>
                <Capa src={Background} alt="100" />
            </AreaCapa>
    </Container>
    
);

export default Home;


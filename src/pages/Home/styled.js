import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height:92.5vh;
    background-color: black;
`;

export const AreaCapa = styled.div`
   
`;

export const Asset = styled.img`
    width:70%;
    height:70%;
    margin: 0 auto;
`;

export const Capa = styled.img`
    width: 100%;
    height: 100%;

    @media(max-width: 980px){
        margin-top:25%;
        width: 100%;
        height: 100%;        
    }
`;

export const Audio = styled.img`
    width:10%;
`;

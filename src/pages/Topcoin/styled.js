import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
`;

export const Header = styled.div`
    background-color:#FE9A2E;
    padding:20px;
    text-align:center;
    font-size: 35px;
    font-weight: bold;
    color:#FFF;
        @media(max-width: 500px){
            font-size: 20px;
        }
`;

export const AreaMoeda = styled.div`
    border: 1px solid #D8D8D8;
    width:30%;
    margin: 2% 0 0 15%;
    padding: 5px;
    box-shadow: -5px 5px 0px -2px #A4A4A4;

    @media(max-width:1200px){
        width:90%;
        margin: 2% auto;
    }
`;

export const Logo = styled.img`
    width:15%;
    height:15%;
    margin: 0 5%;   
`;

export const AreaInfo = styled.div`
    border-bottom: 1px solid #D8D8D8;
    display:flex;
    flex-direction:row;
    align-items:center;
`;

export const Moeda = styled.div`
   display:flex;
   flex-direction:column;
`;

export const Titulo = styled.div`
    color:orange;
`;

export const Valor = styled.span`

`;

export const Data = styled.span`

`;


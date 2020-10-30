import styled from "styled-components";

export const Container = styled.div`

`;

export const AreaGrafico = styled.div`
    width: 70%;
    height:100%;
    margin: 0 auto;
    display:grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    grid-gap:20px;

        @media(max-width: 1000px){
            width:100%;
            display: block;
        }
`;

export const DashGeral = styled.div`
    background:#FFF;
    width:70vw;
    height:80vh;
    min-width:350px;
    margin: 2% auto;
    box-shadow: 8px 8px 0px -3px rgba(17,255,98,0.51);
    
        .graficoStyled{
                width:90%;
                height:40%;
            }

        @media(max-width: 1000px){
            width:90vw;
            height:70vh;
            margin: 2% auto;
            .graficoStyled{
                width:94%;
                height:47%;
            }
        }
        
`;

export const Header = styled.div`
    background-color:orange;
    padding:4px;
    text-align:left;
    font-weight:bold;
    color:#1C1C1C;
        @media(max-width: 1390px){
            font-size:14px;
        }

    img{
       /* margin-left: -18%;
        margin-right: 5%;*/
        margin-left: 1vw;
        margin-right: 1vw;
    }

        @media(max-width: 1200){
            img{
            margin-left: -15%;
            margin-right: 2%;
        }
    }
`;


export const Dash = styled.div`
    background:#FFF;
    width:30vw;
    min-width:350px;
    height:100%;
    margin: 2% 0 0 2%;
    box-shadow: 8px 8px 0px -3px rgba(17,255,98,0.51);

        @media(max-width: 1000px){
            width:90vw;
        }
        .graficoStyled{
            width:100%;
            height:50%;
        }
`;

export const AreaLegend = styled.div`
   display: flex;
   flex-direction:column;
   @media(max-width: 1220px){
            font-size:12px;
            transition:1s;
        }
`;

export const Legend = styled.span`
    padding:3px;
    margin-left:5px;
`;

export const Grafico = styled.div`   
    width: 90%;
    align-items:center;
    justify-content:center;
    margin: 0 auto;
        @media(max-width: 1015px){
            width: 350px;
        }
`;
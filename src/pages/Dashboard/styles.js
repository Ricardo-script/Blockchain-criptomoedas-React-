import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Dash = styled.div`
    background:#FFF;
    width:30%;
    min-width:350px;
    height:75%;
    margin: 2% 0 0 2%;
    box-shadow: 8px 8px 0px -3px rgba(17,255,98,0.51);
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
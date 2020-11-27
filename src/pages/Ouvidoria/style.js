import styled from "styled-components";

export const AreaForm = styled.div`
    background-color: #FFF;
    margin:2% auto;
    width:60%; 
    padding:2%;
    border-radius:5px;

   
    .btn-cad{
       width: 20%;
       min-width: 110px;
    }

    @media(max-width:470px){
        width:95%;

        #areaForm{
            padding:5%;
        }

        .btn-cad{
            width: 20vw;
        }
        
    }

    .border{
        border: 1px solid red;
        margin-bottom:2%;
    }
    
    #text{
        height:40vh;
    }
    .title{
        color:#585858;
    }

`;


export const CapaImg = styled.img`
    width: 100%;
    margin: 0 auto;
`;

export const CapaSend = styled.img`
    width: 70%;
    margin: 0 auto;
`;
export const Audio = styled.img`
    width:10%;
`;





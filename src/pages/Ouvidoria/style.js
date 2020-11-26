import styled from "styled-components";

export const AreaForm = styled.div`
    background-color: #FFF;
    margin:2% auto;
    width:60%; 
    padding:2%;
    border-radius:5px;

    #areaForm{
 
    }

    @media(max-width:470px){
        width:95%;

        #areaForm{
        padding:5%;
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
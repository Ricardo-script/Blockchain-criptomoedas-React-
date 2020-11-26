import styled from 'styled-components';

export const Formulario = styled.div`
    width: 50%;
    min-width:500px;
    min-height:600px;
    margin: 0 auto;
    margin-top: 3%;
    background-color: #FFF;
    padding: 20px;
    border-radius:5px;
    overflow-y: hidden;
    height:50%;
    @media(max-width: 470px){
        margin: 0 auto;
        margin-top: 0;
    }

       .btn-cad{
        width:200px;
        margin-left: 60%;
        @media(max-width: 470px){margin-left:0}
        
    }
    @media(max-width: 470px) {
        max-width:300px;
        min-width:360px;
        margin-top:0;
        border-radius:0;
        
    }
    .imputTelefone{
        min-width: 148px;
    }
    .inputCelular{
        min-width: 148px;
    }
    .EmailTelefone{
        display:flex;
        flex-direction:row;
    }
    .cpfInput{
        width:100%;
        min-width: 150px;
    }
    .dataInput{
        width:460px;
        @media(max-width: 470px) {width: 320px;}
    }
    .emailInput{
        width:460px;
        min-width: 320px;
        max-width:460px;
        @media(max-width: 470px) {
            width:320px;
            min-width: 320px;
            max-width:350px;
        }
    }
`;

export const AreaButton = styled.div`
    display: flex;
    justify-content: center;
`;



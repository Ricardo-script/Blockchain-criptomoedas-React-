import styled from 'styled-components';

export const Form = styled.form`
    border: 2px solid orange;
    border-radius: 5px;
    background: #FFF;
    width: 400px;
    margin: 100px 0 0 200px;

    .btnSingIn{
        width: 230px;
        margin: 7px 0 40px 80px;
    }
    .btnCreate{
        width: 230px;
        margin: 0px 0 40px 80px;
    }

    .form-control{
        width: 320px;
        margin-left: 30px;
    }

    label{
        margin-left: 30px;
    }

    h3{
        margin: 10px 0 10px 20px;
        font-size: 40px;
        color:#424242;
        
    }
    p{
        display: relative;
        margin: 0px 15px 20px 0;
        font-size: 12px;
    }

    .link{
        text-decoration: none;
        color: #FFF;
    }

    @media(max-width: 470px){
        border: 1px solid #FFF;
        border-radius: 0;
        background: #FFF;
        width: 100%;
        height: 100%;
        margin: 0;

        .btnSingIn{
            width: 230px;
            margin: 7px 0 25px 60px;
        }
        .btnCreate{
            width: 230px;
            margin: 0px 0 10px 60px;

        }

        .form-control{
            width: 320px;
            margin-left: 20px;
        }

        label{
            margin-left: 20px;
        }

        h3{
            margin: 5px 0 10px 20px;
            font-size: 40px;
            color: #424242;
        }
        p{
            display: relative;
            margin: 20px 15px 23px 0px;
            font-size: 12px;
        }

    }

`;
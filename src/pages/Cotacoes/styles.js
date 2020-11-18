import styled from 'styled-components';

export const Container = styled.div`

`;

export const Header = styled.div`
    background-color: #FE9A2E;
    height: 120px; @media(max-width: 470px){ height: 120px;}
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const Title = styled.span`
    color:#FFF;
    font-size: 35px;
    font-weight: bold;
    color:#FFF;
`;

export const AreaCotacao = styled.div`
    background-color:#FFF;

    .grid{
        width:90%;
        border:1px solid #E6E6E6;
        margin: 0 auto;

        @media(max-width:800px){
            td,tr{
                font-size:12px;
            }
        }

        @media(max-width:470px){
            td,tr{
                font-size:14px;
                width:80%;
            }
        }
    }
`;

export const Scroll = styled.div`
    @media(max-width:800px){
    max-width: 99%;
    max-height:40%;
    overflow: scroll;
    }
    @media(max-width:470px){
        overflow: scroll;
        max-height:100%;
    }
`;

export const Logo = styled.img`
    width: 4vh;
    position:relative;   
`;
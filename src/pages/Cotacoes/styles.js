import styled from 'styled-components';

export const Container = styled.div`

`;

export const Header = styled.div`
    background-color: #FE9A2E;
    height: 120px; @media(max-width: 470px){ height: 140px;}
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
    }
`;

export const Logo = styled.img`
    width: 4vh;
    position:relative;   
`;
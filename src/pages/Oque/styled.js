import styled from "styled-components";

export const Container = styled.div`
    background-color: #FE9A2E;
    
`;

export const AreaTitulo = styled.span`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FE9A2E;
    height: 120px; @media(max-width: 470px){ height: 140px;}

    .titulo{
        font-size: 35px;
        font-weight: bold;
        color:#FFF;
      
    }
    .descricao{
       display:flex;
       text-align: center;
    }
`;

export const AreaPost = styled.div`
    position: absolute;
    background-color:#FFF;
    
        .imgPost{
            opacity:0;
            width:50%;
            height:50%;
            margin: 5px 0 0 5px;
            border-radius:10px;
            border: 5px solid orange;
        }
        
        @media(max-width: 470px){
            .imgPost{
                width:95%;
                height:95%;
            } 
        }
`;

export const Post = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .textoBase{
      text-align:center;
      width:85%;
      padding:15px;
      display:flex;
      margin-left:-350px;
      opacity:0;
    }
    .textoBase2{
      text-align:center;
      width:85%;
      padding:15px;
      display:flex;
      margin-right:-350px;
      opacity:0;
    }
    .textoBase3{
      text-align:center;
      width:85%;
      padding:15px;
      display:flex;
      margin-top:30px;
      opacity:0;
    }
    .textoBase4{
      text-align:center;
      width:85%;
      padding:15px;
      display:flex;
      margin-left:-350px;
      opacity:0;
    }
    .title-header{
        font-size: 25px; @media(max-width: 470px){font-size: 25px;}
        font-family: cursive;
        padding:15px;
    }

    /* Efeito de Transição:*/
    
    #inicio{
       opacity:0;
       transition: 2s;
    }
    #foto2 {
       opacity:1;
       transition: 4s;
    }
    #foto3{
       opacity:1;
       transition: 2s;
    }
    #foto4{
       opacity:1;
       transition: 4s;
    }
    #texto{
        margin-left:0;
        opacity:1;
        transition:2s;  
    }
    #texto2{
        margin-right:0;
        opacity:1;
        transition:2s;
    }
    #texto3{
        margin-top:0px;
        opacity:1;
        transition:2s; 
    }
    #texto4{
        margin-left:0;
        opacity:1;
        transition:2s; 
    }
`;


import styled from 'styled-components';

export const Capa = styled.div`

   img{
       max-width: 40%;
       min-width: 400px;
       max-height: 50%;
       min-height: 50%;
   }
   .slide{
      margin: 5% auto;
      width: 70%;@media(max-width:600px){ width: 100%}
   }

   h3{
       color: purple;
   }
   
   p{
       color: orange;
       margin-top: 50px;
   }

   @media (max-width: 480px) { 
    img{
        width: 100%;
        min-width: 340px;
        height: 100%;
      
    }
    .slide{
        margin: 10% 0 0 0px;
        width: 100%;
        height: 100%;
    }
 
    h3{
        color: purple;
    }
    p{
        color: orange;
        margin-top: 50px;
    }
}
`;
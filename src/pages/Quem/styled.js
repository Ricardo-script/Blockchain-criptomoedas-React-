import styled from 'styled-components';

export const Capa = styled.div`
   img{
       max-width: 40%;
       min-width: 40%;
       max-height: 50%;
       min-height: 50%;
   }
   .slide{
       margin: 150px 0 0 250px;
       width: 70%;
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
        max-width: 100%;
        min-width: 100%;
        max-height: 100%;
        min-height:100%;
       
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
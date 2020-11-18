import React, {useEffect, useState} from 'react';
import { Container, AreaTitulo, AreaPost, Post } from './styled';
import tecladoimg from '../../assets/tecladobit.jpg';
import tempoimg from '../../assets/tempo.jpg';
import comprarimg from '../../assets/comprar.jpg';
import segurancaimg from '../../assets/seguranca.jpg';
import { FaBitcoin } from "react-icons/fa";

function Oque(){

    function barraRolagem(){
        
        if (document.documentElement.scrollTop === 0) {
            setClassName('inicio');
        }
        if (document.documentElement.scrollTop > 250) {
            setClassName('foto2');
        }
        if (document.documentElement.scrollTop > 0) {  
            setTexto('texto');
        }
        if (document.documentElement.scrollTop > 500) {  
            setText2('texto2');
        }
        if(document.documentElement.scrollTop > 1100){
            setfoto3('foto3');
        }
        if (document.documentElement.scrollTop > 1428) {  
            setTexto3('texto3');
        }
        if(document.documentElement.scrollTop > 1728){
            setfoto4('foto4');
        }
        if (document.documentElement.scrollTop > 2028) {  
            setTexto4('texto4');
        }
        console.log(document.documentElement.scrollTop)
    }

    const [className, setClassName] = useState('');
    const [foto3, setfoto3] = useState('');
    const [foto4, setfoto4] = useState('');
    const [texto, setTexto] = useState('');
    const [texto2, setText2] = useState('');
    const [texto3, setTexto3] = useState('');
    const [texto4, setTexto4] = useState('');


    useEffect(() => {
        window.onscroll = () => barraRolagem();
    },[]);

    return(
        <Container>
            <AreaTitulo>
                <span className="titulo">Oque é Bitcoin?<FaBitcoin/></span>
                <span className="descricao">
                    Neste Tutorial iremos explicar
                    como funciona a tecnologia Bitcoin,
                    como comprar, vender e manter em 
                    segurança.
                </span>
            </AreaTitulo>

            <AreaPost>
                <Post>
                    <span className="title-header">Como funciona o Bitcoin?</span>
                    <img src={tecladoimg} className="imgPost" style={{opacity:1}} alt="10" />
                    <span className="textoBase" id={texto}>
                        BitCoin é uma moeda digital que existe online e funciona
                        como uma moeda, todas essas moedas e todas as transações
                        que são realizadas ficam registradas em um índice global
                        chamdado Blockchain, que é responsável por registrar as
                        transações por meio de criptografia.
                    </span>
                </Post>

                <Post>
                    <span className="title-header">Quais são as vantagens do Bitcoin?</span>
                    <img src={tempoimg} className="imgPost" id={className} alt="10" />
                    <span className="textoBase2" id={texto2}>
                        1. Não há taxas - Bitcoins é isento de taxas <br/>
                        2. Sem esperas - você não tem que esperar cair o dinheiro
                        na conta bancária,as transações bitcoins são processadas
                        rapidamente<br/>
                        3. Sem Fronteiras - o bitcoin é uma ótima solução para lidar com 
                        taxas de transação, taxas de câmbio ou moedas estrangeiras.
                        4 Não Há disputas - Embora o bitcoin seja digital, funciona mais como 
                        dinheiro do que o próprio crédito. As transações Bitcoin são finais e 
                        não podem ser contestadas por um cliente com base na sua opinião (por exemplo, se 
                        gostou ou não do seu serviço).<br/>
                        5 Oportunidade de investimento - Como outras moedas, o bitcoin flutua em termos
                        de valor.<br/>
                    </span>
                </Post>

                <Post>  
                    <span className="title-header">Como Comprar e Vender?</span>
                    <img src={comprarimg} className="imgPost" id={foto3} alt="10" />
                    <span className="textoBase3" id={texto3}>
                        São três as maneiras de comprar e vender:<br/>
                        Mineirar - Factorybit Exchanges - P2P<br/>
                        Para começar a negociar bitcoin e outras criptomoedas em uma exchange,
                        como a FactoryBit o primeiro passo é se cadastrar na plataforma. 
                        Se você desejar comprar criptomoedas, você terá que depositar dinheiro na
                        conta da corretora para que seja possível realizar uma ordem de compra para 
                        adquirir a criptomoeda escolhida.
                    </span>
                </Post>

                <Post>
                    <span className="title-header">Bitcoin é seguro?</span>
                    <img src={segurancaimg} className="imgPost" id={foto4} alt="10" />
                    <span className="textoBase4" id={texto4}>
                    A segurança do bitcoin está atrelada à sua criptografia. 
                    Seus códigos complexos compõem um sistema muito seguro e 
                    de difícil decifração.<br/>
                    Isto é, Blockchain é uma cadeia de blocos de informações que 
                    registra todas as transações que ocorrem pelo mundo de forma criptografada. 
                    Assim, as compras e vendas de Bitcoins, por exemplo, não dependem de apenas 
                    um servidor, e sim de um sistema que é aberto a todos os usuários.As informações
                    armazenadas nos blocos são automaticamente protegidas por um código exclusivo. 
                    Essa “assinatura”, também conhecida por hash ou proof of work, garante que o sistema
                    seja interligado, uma vez que cada bloco leva sua própria assinatura e a do bloco anterior.

                    </span>
                </Post>
                   
                
            </AreaPost>
        </Container>
    );
} 

export default Oque;

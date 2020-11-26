import React, { useState, useEffect } from 'react';
import Background from './Images/menu_fundo.png';
import { Capa, Container, AreaCapa, Asset, Audio} from './styled';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Assistente from '../../assets/Assistente.png';
import voz from '../../assets/apresentacao.mp3';
import mic from '../../assets/mic.png';

const Home = (props) => {
    const {
        className
    } = props;
    
    //const [modal, setModal] = useState(true);
    const [modal, setModal] = useState('');
    const toggle = () => setModal(!modal);
    const cadastro = () => window.location.href = "cadastro"; 

    

    useEffect(() => {
        const storageOn = sessionStorage.getItem('logon');
        if(storageOn){
            setModal(false);
        }else{
            setModal(true);
        }
    },[]);

    useEffect(()=> {
        sessionStorage.setItem('logon', JSON.stringify(1));
    },[modal]);

    
    const tocar = () => document.querySelector('audio').play();

    return(
         
        <Container>
            <Modal isOpen={modal} toggle={toggle} className={className} >
            <ModalHeader toggle={toggle}>Seja muito bem vindo!</ModalHeader>
            <ModalBody>
                <audio src={voz}></audio>
                <label onClick={tocar}><Audio src={mic} alt="" /></label><br/>
                Olá! Somos a Factorybit, estamos muito felizes por receber você!
                Somos uma empresa que oferece serviços baseados na tecnologia Blockchain
                e estamos ansiosos por te-lo conosco, faça seu cadastro e fique por dentro
                de todas as atualizações de criptomoedas em tempo real, o cadastro é muito
                simples, seguro, rapido e gratuito
            </ModalBody>
            <Asset src={Assistente} alt="" />
            <ModalFooter>
                <Button color="primary" onClick={cadastro}>Cadastrar</Button>{' '}
                <Button color="secondary" onClick={toggle}>Quero conhecer</Button>
            </ModalFooter>
            </Modal>
    
            <AreaCapa>
                <Capa src={Background} alt="100" />
            </AreaCapa>
        </Container>
    );

} 

export default Home;
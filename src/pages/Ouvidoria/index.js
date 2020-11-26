import React, { Component } from 'react';
import { AreaForm, CapaImg, Audio } from  './style';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Modal from 'react-bootstrap/Modal'
import imgOuvidoria from '../../assets/ouvidoria.jpg';
import voz from '../../assets/voz.mp3';
import mic from '../../assets/mic.png';


class Ouvidoria extends Component{
  constructor(props){
    super(props);
    this.state = {
      show:true
    }

    this.tocar = this.tocar.bind(this);
  }

  tocar(){
   
      const audio = document.querySelector('audio')
      audio.play()
    
  }

  render(){

    const handleClose = () => this.setState({show:false});

      return(
        <AreaForm>
          <Container id="areaForm">
            <Form>

              <Modal show={this.state.show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title><span>Fale conosco - Atendimento Virtual</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <audio src={voz}></audio>
                <label onClick={this.tocar}><Audio src={mic} alt="" /></label>
                  <p>
                    Olá! Eu sou a Assistente Virtual da FACTORYBIT.
                    Para iniciar o atendimento, por favor, 
                    informe seu nome, seu e-mail, e sua mensagem, 
                    responderemos o quanto antes!
                  </p>
                  <CapaImg src={imgOuvidoria} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok, Entendi!
                  </Button>
                </Modal.Footer>
              </Modal>
              
            <FormGroup>
              <Label for="examplePassword">Digite seu Nome</Label>
              <Input type="password" name="name" id="name" placeholder="Digite seu Nome" />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Digite seu E-mail</Label>
              <Input type="email" name="email" id="email" placeholder="nome@email.com" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText" className="title">Mensagem</Label>
              <Input type="textarea" name="text" id="text" />
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="checkbox"/>{' '}
                  Eu não sou um robô!
                </Label>
              </FormGroup>
                     
              <Button>Enviar</Button>
          </Form>
        </Container>
      </AreaForm>
    );
  }
}

export default Ouvidoria;


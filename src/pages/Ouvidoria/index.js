import React, { Component } from 'react';
import { AreaForm, CapaImg, Audio, CapaSend } from  './style';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Modal from 'react-bootstrap/Modal'
import imgOuvidoria from '../../assets/ouvidoria.jpg';
import voz from '../../assets/voz.mp3';
import mic from '../../assets/mic.png';
import msgSend from '../../assets/msgSend.png';
import mensagem from '../../assets/mensagem.mp3';



class Ouvidoria extends Component{
  constructor(props){
    super(props);
    this.state = {
      show:true,
      showb:false,
      email:'',
      username:'',
      message:'',
    }

    this.tocar = this.tocar.bind(this);
    this.btnEnviar = this.btnEnviar.bind(this);
    this.fimSend = this.fimSend.bind(this);
  }
  
  tocar(){
    const audio = document.querySelector('audio');
    audio.play(); 
  }

  fimSend(){
    window.location.href = "/";
  }

  async btnEnviar(){
    const data = JSON.stringify(this.state);
    let url = 'https://talk-to-us-factorybit.herokuapp.com/talk-to-us-factorybit/message'

    const response =  await fetch(url,{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: data
    }); 

    

    // verificação no servidor:
    if(response.status === 400){
      const respostaJson = await response.json();
      alert(respostaJson.error.error_message);
    } 
    if(response.status === 201){
      //inserir modal
      this.setState({username:'',email:'', message:''});
      this.setState({showb:true});
    }

  }

  render(){

    const handleClose = () => this.setState({show:false});
    const handleCloseb = () => this.setState({showb:false});

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



              <Modal show={this.state.showb} onHide={handleCloseb} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title><span>Mensagem Enviada</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <audio src={mensagem}></audio>
                <label onClick={this.tocar}><Audio src={mic} alt=""/></label>
                  <p>
                    Mensagem enviada!<hr/><br/>
                    Obrigado por nos contactar, em breve responderemos a sua mensagem
                    no seu e-mail
                  </p>
                  <CapaSend src={msgSend} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.fimSend}>
                    Ok, Entendi!
                  </Button>
                </Modal.Footer>
              </Modal>


            <FormGroup>
              <Label for="name">Digite seu Nome</Label>
              <Input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Digite seu Nome"
                onChange={(e) => this.setState({username:e.target.value})}
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Digite seu E-mail</Label>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="nome@email.com"
                onChange={(e) => this.setState({email: e.target.value})} 
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText" className="title">Mensagem</Label>
              <Input 
                type="textarea" 
                name="text" 
                id="text"
                onChange={(e) => this.setState({message: e.target.value})} 
              />
            </FormGroup>
                               
              <Button variant="primary" className="btn-cad" type="button" onClick={this.btnEnviar}>
                Enviar
              </Button>
    
          </Form>
        </Container>
      </AreaForm>
    );
  }
}

export default Ouvidoria;


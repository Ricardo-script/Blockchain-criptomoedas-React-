import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Formulario, AreaButton } from './styled';
import Modal from 'react-modal';
import MaskedFormControl from 'react-bootstrap-maskedinput'

/*estilizar modal*/
const customStyles = {
     content : {
     top: '50%',
     left: '50%',
     right: 'auto',
     bottom: 'auto',
     marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
     //background: 'gray',
     width:'55%',
     height:'60%',
   }

 };

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"", 
            code:"",
            email:"",
            password:"", 
            born_date: "", 
            cellphone: "", 
            telephone: "", 
            city: "", 
            postal_code: "", 
            number:"", 
            state:"",

            openModal:false,
            modalsenha: true,
            msg: '',
            resposta:'',
            msgerro:'',
        }   

        this.btnCadastrarOnClick = this.btnCadastrarOnClick.bind(this);       
    }
    

    async btnCadastrarOnClick(){
        const data = JSON.stringify(this.state);
        console.log(data);
        let url = 'https://clients-control-api.herokuapp.com/clients-control-api/client'

            const response =  await fetch(url,{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: data
            })
            if(response.status === 400){
                const respostaJson = await response.json();
                console.log(respostaJson);
                //alert(respostaJson.error.error_message);
                this.setState({msg: respostaJson.error.error_message});
                this.setState({resposta:'Por favor conferir os campos!'});
                this.setState({msgerro:'Para continuar o cadastro favor corrigir os campos faltantes!'});
                
            }
            if(response.status === 201){
                if(this.state.password === this.state.repeteSenha){
                    const respostaJson = await response.json();
                    console.log(respostaJson);
                    //alert('Usuário cadastrado com sucesso!');
                    this.setState({resposta:'Usuário cadastrado com sucesso!'});
                    this.setState({msgerro:'Seja muito bem vindo!'})
                    this.props.history.push('/login');
                    alert('igual');
                }else{
                    alert('Repetição de senha incorreta por favor verificar!');
                    this.setState({openModal:false});
                    return;
                }
            }

        console.log(response)
        this.setState({openModal:true});
    }

    render(){
        return(
            <Formulario>
                <Modal isOpen={this.state.openModal} style={customStyles}>
                    <h2>{this.state.resposta}</h2>
                    <p>{this.state.msgerro}</p>
                    <span>{this.state.msg}</span>
                    <br/>            
                    <Button style={{
                        margin: '30% 0 0 75%',
                        width: '20%',
                    }} 
                    onClick={() => this.setState({openModal:false})}>
                        Ok
                    </Button>
                </Modal>

                <Form>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control 
                            placeholder="Nome Completo" 
                            onChange={(e) => this.setState({name: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Row className="EmailTelefone">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>CPF:</Form.Label>
                            <Form.Control 
                                className="cpfInput"
                                placeholder="CPF sem traços ou espaços"
                                maxLength={11}
                                onChange={(e) => this.setState({code: e.target.value})} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                                placeholder="E-mail" 
                                className="emailInput"
                                type="email"
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Data de Nascimento:</Form.Label>
                                <Form.Control 
                                    type="date"
                                    className="dataInput"
                                    onChange={(e) => this.setState({born_date: e.target.value})}
                                >
                            </Form.Control>            
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Celular</Form.Label>
                            <MaskedFormControl
                                type="text"
                                mask='1-1111-1111'
                                className="inputCelular"
                                placeholder="9-0000-0000"
                                onChange={(e) => this.setState({cellphone: e.target.value})}
                            />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Telefone</Form.Label>
                                <MaskedFormControl
                                    type="text"
                                    mask='1111-1111' 
                                    className="imputTelefone"
                                    placeholder="0000-0000"
                                    onChange={(e) => this.setState({telephone: e.target.value})} 
                                />
                        </Form.Group>
                    </Form.Row>
                        
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Cidade:</Form.Label>
                                <Form.Control 
                                    type="text"
                                    className="infoStyle"
                                    onChange={(e) => this.setState({city: e.target.value})}
                                />          
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>CEP</Form.Label>
                                <MaskedFormControl 
                                    type="text"
                                    mask='11111-111'
                                    placeholder="CEP:00000-000"
                                    className="infoStyle"
                                    onChange={(e) => this.setState({postal_code: e.target.value})}
                                />
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                 <Form.Label>Número</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Nº"
                                    className="infoStyle"
                                    onChange={(e) => this.setState({number: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="UF:"
                                    maxLength={2}
                                    className="infoStyle"
                                    onChange={(e) => this.setState({state: e.target.value})} 
                                />
                            </Form.Group>
                        </Form.Row>
                      
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Senha" 
                                        className="senhaInput"
                                        onChange={(e) => this.setState({password: e.target.value})}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Confirmar Senha</Form.Label>
                                    <Form.Control type="password" 
                                    placeholder="Confirmar senha" 
                                    className="senhaInput"
                                    onChange={(e) => this.setState({repeteSenha: e.target.value})}
                                    />
                            </Form.Group>
                        </Form.Row>
                        <AreaButton>
                            <Button variant="primary" className="btn-cad" type="button" onClick={this.btnCadastrarOnClick}>
                                Cadastrar
                            </Button>
                        </AreaButton>
                </Form>
            </Formulario>

        );
    }
    
}

export default Cadastro;

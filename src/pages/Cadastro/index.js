import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Input } from 'reactstrap'
import Col from 'react-bootstrap/Col';
import { Formulario, AreaButton } from './styled';
import Modal from 'react-modal';
import MaskedFormControl from 'react-bootstrap-maskedinput'
import info from '../../assets/info.png';
import tick from '../../assets/tick.png';

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
    // width:'55%',
    //height:'55%',
    },
 };

 const customButtons ={
    display:'flex',
 }

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"", 
            code:"",
            email:"",
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
            btnvoltar:'Corrigir',
            btnacesso:'Sair',
            autenticado:false,
        }   

        this.btnCadastrarOnClick = this.btnCadastrarOnClick.bind(this);
        this.pageLogin = this.pageLogin.bind(this);       
    }
    

    async btnCadastrarOnClick(){
        //validação de campos vazios:
        if(this.state.name === ''){
            this.setState({msg: 'Por favor preeencher o campo Nome',
             openModal: true, resposta:'Por favor conferir os campos!',
             msgerro:'Para continuar o cadastro por favor corrigir os campos!'
            });
            return;
        }

        if(this.state.code === ''){
            this.setState({msg: 'Por favor preeencher o campo CPF',
             openModal: true, resposta:'Por favor conferir os campos!',
             msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
            return;
        }

        if(this.state.email === ''){
            this.setState({msg: 'Por favor preeenchero campo E-mail',
            openModal: true, resposta:'Por favor conferir os campos!',
            msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
            return;
        }
        
        if(this.state.born_date === ''){
            this.setState({msg: 'Por favor preeencher o campo com sua data de nascimento',
            openModal: true, resposta:'Por favor conferir os campos!',
            msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
        }
        if(this.state.cellphone === ''){
            this.setState({msg: 'Por favor preeencher o campo Celular',
            openModal: true, resposta:'Por favor conferir os campos!',
            msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
            return;
        }
        if(this.state.telephone === ''){
            this.setState({msg: 'Por favor preeencher o campo Telefone',
            openModal: true, resposta:'Por favor conferir os campos!',
            msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
            return;
        }
        if(this.state.city === ''){
            this.setState({msg: 'Por favor preeencher o campo Cidade',
            openModal: true, resposta:'Por favor conferir os campos!',
            msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
            return;
        }
        if(this.state.postal_code === ''){
            this.setState({msg: 'Por favor preeencher o campo CEP',
            openModal: true, resposta:'Por favor conferir os campos!',
            msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
            return;
        }
        if(this.state.number === ''){
            this.setState({msg: 'Por faVor preeencher o campo Número',
            openModal: true, resposta:'Por favor conferir os campos!',
            msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
            return;
        }
        if(this.state.state === ''){
            this.setState({msg: 'Por favor preeencher o campo Estado',
            openModal: true, resposta:'Por favor conferir os campos!',
            msgerro:'Para continuar o cadastro por favor corrigir os campos!'
        });
            return;
        }
        
        const data = JSON.stringify(this.state);
        let url = 'https://clients-control-api.herokuapp.com/clients-control-api/client'

        const response =  await fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: data
        })

        // verificação no servidor:
        if(response.status === 400){
            const respostaJson = await response.json();
            //console.log(respostaJson);
            //alert(respostaJson.error.error_message);
            this.setState({msg: respostaJson.error.error_message});
            this.setState({resposta:'Por favor conferir os campos!'});
            this.setState({msgerro:'Para continuar o cadastro por favor corrigir os campos!'}); 
        }
        if(response.status === 201){
            //const respostaJson = await response.json();
            this.setState({msg: 'Seja muito bem vindo!',
                resposta:'Usuário cadastrado com sucesso',
                msgerro:'Ficamos felizes por te-lo conosco!',
                btnacesso:'Inicio',
                btnvoltar:'Voltar',
                autenticado:true
            });
        }
           
        this.setState({openModal: true});
        
    }


    pageLogin(){
        this.props.history.push('/'); 
    }


    render(){
        return(
            <Formulario>

                <Modal isOpen={this.state.openModal} style={customStyles}>
                    <h2>{this.state.resposta}</h2><hr/>
                    <p>{this.state.msgerro}</p>
                    <div style={{display: "flex", 
                        flexDirection:'row', 
                        alignItems:'center',
                    }}>
                        <span style={{color:'red'}}>{this.state.msg}</span>
                        <br/>
                        <img src={this.state.autenticado ? tick : info} alt="100" width="15%" style={{
                            marginLeft:'30%'
                        }}/>
                    </div><hr/>
                    <div style={customButtons}>          
                        <Button style={{
                            margin: '7% 0 0 45%',
                            width: '25%',
                        }} 
                        onClick={() => this.setState({openModal:false})}>
                           {this.state.btnvoltar}
                        </Button>

                        <Button style={{
                            height:'20%',
                            width: '25%',
                            background:'#F06262',
                            margin:'7% 0 0 5%',
                            border:'1px solid #D91C1C',
                        }} 
                        onClick={this.pageLogin}>
                            {this.state.btnacesso}
                        </Button>
                    </div>

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
                                maxLength={35} 
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
                                mask='(11)1-1111-1111'
                                className="inputCelular"
                                placeholder="(00)0-0000-0000"
                                onChange={(e) => this.setState({cellphone: e.target.value})}
                            />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Telefone</Form.Label>
                                <MaskedFormControl
                                    type="text"
                                    mask='(11)1111-1111' 
                                    className="imputTelefone"
                                    placeholder="(00)0000-0000"
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
                                <Input type="select" name="select" 
                                    id="exampleSelect"
                                    placeholder="UF"
                                    className="infoStyle"
                                    onChange={(e) => this.setState({state: e.target.value})} 
                                >
                                    <option value="SP">SP</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                </Input>
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

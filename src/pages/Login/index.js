import React, { Component } from "react";
import { Form } from './styleds';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import api from '../../api';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }

        this.logon = this.logon.bind(this);
    }

    async logon(){
        try {
            const response = await api.post("/auth",this.state);
            localStorage.setItem('token_autenticacao',response.data.token);
            console.log(response.data);
            //this.props.history.push("/");
            this.props.history.replace("/");
           
        } catch (error) {
            alert('Falha ao autenticar usuário');
        }
        
    }
    render() {
        return (
            <Form>
                <h3>Entrar</h3>
                <div className="form-group">
                    <label>Inserir Usuário</label>
                    <input type="email" className="form-control" placeholder="Usuário" onChange={(e) => this.setState({email: e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Lembrar usuário</label>
                    </div>
                </div>
                <Button type="button" color="primary" className="btnSingIn" onClick={this.logon}>Entrar</Button>
                <Button type="button" color="secondary" className="btnCreate">
                    <Link to="/cadastro" className="link">Criar uma conta</Link>
                </Button>
            </Form>
        );
    }
}


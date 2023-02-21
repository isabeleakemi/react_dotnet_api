import React, { Component } from "react";
import Footer from './shared/Footer';
import Header from './shared/Header';
import { Link } from "react-router-dom";
import axios from "axios";

class Clientes extends Component {  
  state = {
    clientes: []
  }

  componentDidMount(){
    axios.get('https://localhost:44367/clientes').then(response => {
      
      const clientes = response.data
      this.setState({ clientes })
      
    })
  }

  render() {
      return (
        <div>
          <Header></Header>
          <main>
            <div className="bd-masthead mb-3" id="content">
              <div className="container-xxl bd-gutter">
                <div className="col-md-8 mx-auto text-center">
                  <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="200" height="165" alt="Bootstrap" className="d-block mx-auto mb-3"></img>
                  <h1 className="mb-3 fw-semibold lh-1">Lista de clientes - {this.state.clientes.length}</h1>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.clientes.map((cliente, index) => (
                        <tr key={index}>
                          <td>{cliente.nome}</td>
                          <td>{cliente.telefone}</td>
                          <td>{cliente.endereco}</td>
                          <td><Link to={`/cliente/${cliente.id}`}>Editar</Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Link className="btn btn-primary" to={`/cliente/novo`}>Novo</Link>
                  <p style={{marginTop: "30px"}} className="text-muted mb-0">Versão v0.0.1</p>
                </div>
              </div>
            </div>
          </main>
          <Footer></Footer>
        </div>
      )
  }
}

export default Clientes;

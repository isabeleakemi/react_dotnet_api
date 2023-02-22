import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Footer from './shared/Footer';
import Header from './shared/Header';
import axios from "axios";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ClienteMostrar extends Component {
  state = {
    cliente: {
      id: 0,
      nome: "",
      telefone: "",
      endereco: "",
    }
  }

  onChange = (e) => {
    let cliente = this.state.cliente
    cliente[e.target.name] = e.target.value
    this.setState({cliente: cliente})
  }

  salvar(cliente){
    if(cliente && cliente.id && cliente.id > 0){
      axios.put(`https://localhost:44367/clientes/${cliente.id}`, cliente).then(response => {
        window.location.href = "/clientes"
        //this.props.history.push("/clientes")
      })
    }
    else{
      axios.post(`https://localhost:44367/clientes/criar`, cliente).then(response => {
        window.location.href = "/clientes"
        //this.props.history.push("/clientes")
      })
    }
  }

  salvar2 = () => {
    if(this.state.cliente.id > 0){
      axios.put(`https://localhost:44367/clientes/${this.state.cliente.id}`, this.state.cliente).then(response => {
        //window.location.href = "/clientes"
        this.props.history.push("/clientes")
      })
    }
    else{
      axios.post(`https://localhost:44367/clientes/criar`, this.state.cliente).then(response => {
        this.props.history.push("/clientes")
      })
    }
  }

  componentDidMount(){
    let id = this.props.params.id
    if(id){
      axios.get(`https://localhost:44367/clientes/${id}`).then(response => {
      const cliente = response.data
      this.setState({ cliente })
      })
    }
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
                <h1 className="mb-3 fw-semibold lh-1">Mostrando cliente {this.id}</h1>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input type="text" className="form-control" id="nome" name="nome" value={this.state.cliente.nome} onChange={this.onChange} placeholder="Digite o nome" />
                </div>
                <div className="form-group" style={{marginTop: "10px"}}>
                  <label htmlFor="telefone">Telefone</label>
                  <input type="text" className="form-control" id="telefone" name="telefone" value={this.state.cliente.telefone} onChange={this.onChange} placeholder="Digite o telefone" />
                </div>
                <div className="form-group" style={{marginTop: "10px"}}>
                  <label htmlFor="endereco">Endereço</label>
                  <input type="text" className="form-control" id="endereco" name="endereco" value={this.state.cliente.endereco} onChange={this.onChange} placeholder="Digite o endereço" />
                </div>
                <button type="button" onClick={() => {this.salvar(this.state.cliente)}} className="btn btn-primary" style={{marginTop: "10px"}}>Salvar</button>
              </form>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default withParams(ClienteMostrar);

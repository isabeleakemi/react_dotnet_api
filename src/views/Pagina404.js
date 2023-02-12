import React, { Component } from "react";
import Footer from './shared/Footer';
import Header from './shared/Header';

class Pagina404 extends Component {
  render() {
      return (
        <div>
          <Header></Header>
          <main>
            <div className="bd-masthead mb-3" id="content">
              <div className="container-xxl bd-gutter">
                <div className="col-md-8 mx-auto text-center">
                  <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="200" height="165" alt="Bootstrap" className="d-block mx-auto mb-3"></img>
                  <h1 className="mb-3 fw-semibold lh-1">Ops... página não encontrada</h1>
                  
                </div>
              </div>
            </div>
          </main>
          <Footer></Footer>
        </div>
      )
  }
}

export default Pagina404;

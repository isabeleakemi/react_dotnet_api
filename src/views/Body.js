import React, { Component } from "react";
import { Link } from "react-router-dom";

class Body extends Component {
  render() {
      return <main>
        <div className="bd-masthead mb-3" id="content">
          <div className="container-xxl bd-gutter">
            <div className="col-md-8 mx-auto text-center">
              <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="200" height="165" alt="Bootstrap" className="d-block mx-auto mb-3"></img>
              <h1 className="mb-3 fw-semibold lh-1">Uma aplicação criada em ReactJs com torne-se um programador</h1>
              <p className="lead mb-4">Todavia, o desafiador cenário globalizado possibilita uma melhor visão global das condições financeiras e administrativas exigidas.</p>
              <div className="d-flex flex-column flex-lg-row align-items-md-stretch justify-content-md-center gap-3 mb-4">
                <div className="d-inline-block v-align-middle fs-5">
                  <div className="bd-code-snippet">
                    <div className="bd-clipboard">
                      <button type="button" className="btn-clipboard">
                        <svg className="bi" role="img" aria-label="Copy">
                          <use href="#clipboard"></use>
                        </svg>
                      </button>
                    </div>
                    <div className="highlight">
                      <pre tabIndex="0" className="chroma">
                        <code className="language-sh" data-lang="sh">
                          <span className="line">
                            <span className="cl">Hello world!</span>
                          </span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                
                <Link to="/clientes" className="btn btn-lg bd-btn-lg btn-bd-primary d-flex align-items-center justify-content-center fw-semibold">
                  <svg className="bi me-2" aria-hidden="true">
                    <use xlinkHref="#book-half"></use>
                  </svg>
                  Cadastrar clientes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
  }
}

export default Body;

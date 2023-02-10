import React, { Component } from "react";

class Body extends Component {
  render() {
      return <main>
        <div class="bd-masthead mb-3" id="content">
          <div class="container-xxl bd-gutter">
            <div class="col-md-8 mx-auto text-center">
              <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="200" height="165" alt="Bootstrap" class="d-block mx-auto mb-3"></img>
              <h1 class="mb-3 fw-semibold lh-1">Uma aplicação criada em ReactJs com torne-se um programador</h1>
              <p class="lead mb-4">Todavia, o desafiador cenário globalizado possibilita uma melhor visão global das condições financeiras e administrativas exigidas.</p>
              <div class="d-flex flex-column flex-lg-row align-items-md-stretch justify-content-md-center gap-3 mb-4">
                <div class="d-inline-block v-align-middle fs-5">
                  <div class="bd-code-snippet">
                    <div class="bd-clipboard">
                      <button type="button" class="btn-clipboard">
                        <svg class="bi" role="img" aria-label="Copy">
                          <use href="#clipboard"></use>
                        </svg>
                      </button>
                    </div>
                    <div class="highlight">
                      <pre tabindex="0" class="chroma">
                        <code class="language-sh" data-lang="sh">
                          <span class="line">
                            <span class="cl">Hello world!</span>
                          </span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                <a href="/clientes" class="btn btn-lg bd-btn-lg btn-bd-primary d-flex align-items-center justify-content-center fw-semibold">
                  <svg class="bi me-2" aria-hidden="true">
                    <use xlinkHref="#book-half"></use>
                  </svg>
                  Cadastrar clientes
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  }
}

export default Body;

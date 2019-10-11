import React from "react";
import Count from "./Count";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-blue padding-top margin-bottom-large">
        <div className="container">
          <header className="App-header">
            <div className="float-left">
              <h1 className="no-padding-top no-margin-bottom App-link">
                Usedby.dev
              </h1>
              <p>Most used repositories on Github</p>
            </div>
            <div className="float-right">tweet</div>
          </header>
        </div>
      </div>
      <div className="container">
        <div className="row margin-bottom-large">
          <Count organisation="facebook" repo="react" />
          <Count organisation="vuejs" repo="vue" />
          <Count organisation="angular" repo="angular" />
        </div>

        <div className="row margin-bottom-large">
          <Count organisation="babel" repo="babel" />
          <Count organisation="tensorflow" repo="tensorflow" />
          <Count organisation="gatsbyjs" repo="gatsby" />
        </div>

        <div className="row margin-bottom-large">
          <Count organisation="jekyll" repo="jekyll" />
          <Count organisation="rails" repo="rails" />
          <Count organisation="laravel" repo="laravel" />
        </div>

        <div className="row margin-bottom-large">
          <Count organisation="zeit" repo="next.js" />
          <Count organisation="twbs" repo="bootstrap" />
          <Count organisation="django" repo="django" />
        </div>

        <div className="row margin-bottom-large">
          <Count organisation="webpack" repo="webpack" />
          <Count organisation="prettier" repo="prettier" />
          <Count organisation="npm" repo="cli" />
        </div>

        <div className="row margin-bottom-large">
          <Count organisation="jgthms" repo="bulma" />
          <Count organisation="jquery" repo="jquery" />
          <Count organisation="spring-projects" repo="spring-boot" />
        </div>
      </div>
    </div>
  );
}
export default App;

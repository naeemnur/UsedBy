import React from "react";
import Count from "./Count";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-blue padding-top margin-bottom-large">
        <div className="container">
          <header className="App-header">
            <h1 className="no-padding-top">
              <span className="App-link">Used by</span> most repos on Github
            </h1>
          </header>
        </div>
      </div>
      <div className="container">
        <div className="row margin-bottom-large">
          <div className="grid-third">
            <Count organisation="facebook" repo="react" />
          </div>
          <div className="grid-third">
            <Count organisation="vuejs" repo="vue" />
          </div>
          <div className="grid-third">
            <Count organisation="angular" repo="angular" />
          </div>
        </div>

        <div className="row margin-bottom-large">
          <div className="grid-third">
            <Count organisation="babel" repo="babel" />
          </div>
          <div className="grid-third">
            <Count organisation="tensorflow" repo="tensorflow" />
          </div>
          <div className="grid-third">
            <Count organisation="gatsbyjs" repo="gatsby" />
          </div>
        </div>

        <div className="row margin-bottom-large">
          <div className="grid-third">
            <Count organisation="jekyll" repo="jekyll" />
          </div>
          <div className="grid-third">
            <Count organisation="rails" repo="rails" />
          </div>
          <div className="grid-third">
            <Count organisation="laravel" repo="laravel" />
          </div>
        </div>

        <div className="row margin-bottom-large">
          <div className="grid-third">
            <Count organisation="zeit" repo="next.js" />
          </div>
          <div className="grid-third">
            <Count organisation="twbs" repo="bootstrap" />
          </div>
          <div className="grid-third">
            <Count organisation="django" repo="django" />
          </div>
        </div>

        <Count organisation="webpack" repo="webpack" />
        <Count organisation="prettier" repo="prettier" />
        <Count organisation="npm" repo="cli" />

        <Count organisation="jgthms" repo="bulma" />
        <Count organisation="jquery" repo="jquery" />
        <Count organisation="spring-projects" repo="spring-boot" />
      </div>
    </div>
  );
}
export default App;

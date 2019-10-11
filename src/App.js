import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import Count from "./Count";
import "./App.css";

function App() {
  const siteName = "Usedby.dev";
  const siteTagline = "Most used repositories on Github";
  return (
    <Fragment>
      <Helmet>
        <title>
          {siteName} | {siteTagline}
        </title>
        <meta name="description" content={siteTagline} />
      </Helmet>
      <div className="bg-blue padding-top margin-bottom-large">
        <div className="container">
          <header className="App-header">
            <div className="float-left">
              <h1 className="no-padding-top no-margin-bottom App-link">
                {siteName}
              </h1>
              <p>{siteTagline}</p>
            </div>
            <div className="float-right"></div>
          </header>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Count org="webpack" repo="webpack" />
          <Count org="facebook" repo="react" />
          <Count org="rails" repo="rails" />
        </div>

        <div className="row">
          <Count org="vuejs" repo="vue" />
          <Count org="prettier" repo="prettier" />
          <Count org="angular" repo="angular" />
        </div>

        <div className="row">
          <Count org="jquery" repo="jquery" />
          <Count org="jekyll" repo="jekyll" />
          <Count org="twbs" repo="bootstrap" />
        </div>

        <div className="row">
          <Count org="npm" repo="cli" />
          <Count org="babel" repo="babel" />
          <Count org="gatsbyjs" repo="gatsby" />
        </div>

        <div className="row">
          <Count org="jgthms" repo="bulma" />
          <Count org="tensorflow" repo="tensorflow" />
          <Count org="zeit" repo="next.js" />
        </div>

        <div className="row">
          <Count org="spring-projects" repo="spring-boot" />
          <Count org="facebook" repo="create-react-app" />
        </div>
      </div>
    </Fragment>
  );
}
export default App;

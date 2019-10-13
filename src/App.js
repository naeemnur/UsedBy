import React, { Fragment } from "react";
import { createBrowserHistory } from "history";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import Count from "./Count";
import "./App.css";

// Google Analytics
const history = createBrowserHistory();
ReactGA.initialize("UA-21264529-12");

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
  window.scrollTo(0, 0); // take page back to top on view change
});

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
            <div className="text-center">
              <h1 className="no-padding-top no-margin-bottom App-link">
                {siteName}
              </h1>
              <p className="padding-top-small">{siteTagline}</p>
            </div>
          </header>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Count org="expressjs" repo="express" />
          <Count org="webpack" repo="webpack" />
          <Count org="facebook" repo="react" />
        </div>

        <div className="row">
          <Count org="sass" repo="node-sass" />
          <Count org="axios" repo="axios" />
          <Count org="socketio" repo="socket.io" />
        </div>

        <div className="row">
          <Count org="gulpjs" repo="gulp" />
          <Count org="rails" repo="rails" />
          <Count org="vuejs" repo="vue" />
        </div>

        <div className="row">
          <Count org="prettier" repo="prettier" />
          <Count org="reduxjs" repo="redux" />
          <Count org="angular" repo="angular" />
        </div>

        <div className="row">
          <Count org="ReactTraining" repo="react-router" />
          <Count org="gruntjs" repo="grunt" />
          <Count org="jquery" repo="jquery" />
        </div>

        <div className="row">
          <Count org="jekyll" repo="jekyll" />
          <Count org="vuejs" repo="vuex" />
          <Count org="twbs" repo="bootstrap" />
        </div>

        <div className="row">
          <Count org="necolas" repo="normalize.css" />
          <Count org="nfl" repo="react-helmet" />
          <Count org="npm" repo="cli" />
        </div>

        <div className="row">
          <Count org="babel" repo="babel" />
          <Count org="gatsbyjs" repo="gatsby" />
          <Count org="angular" repo="angular.js" />
        </div>

        <div className="row">
          <Count org="jgthms" repo="bulma" />
          <Count org="d3" repo="d3" />
          <Count org="tensorflow" repo="tensorflow" />
        </div>

        <div className="row">
          <Count org="zeit" repo="next.js" />{" "}
          <Count org="FortAwesome" repo="Font-Awesome" />
          <Count org="daneden" repo="animate.css" />
        </div>

        <div className="row">
          <Count org="yarnpkg" repo="yarn" />
          <Count org="preactjs" repo="preact" />
          <Count org="nestjs" repo="nest" />
        </div>

        <div className="row">
          <Count org="spring-projects" repo="spring-boot" />
          <Count org="facebook" repo="create-react-app" />
        </div>
      </div>
      <div className="footer padding-top padding-bottom">
        <div className="container">
          <div className="float-left">
            Made by{" "}
            <a
              rel="author"
              href="https://naeemnur.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Naeem Nur
            </a>
          </div>
          <div className="float-right">
            <a
              href="https://github.com/naeemnur/UsedBy/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/naeemnur/usedby"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>{" "}
            •{" "}
            <a
              href="https://twitter.com/intent/tweet?original_referer=https://usedby.dev&text=Usedby: Most used repositories on Github by @naeemol&url=https://usedby.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;

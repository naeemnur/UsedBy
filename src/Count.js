import React, { Component } from "react";
let shortNumber = require("short-number");

export default class Count extends Component {
  state = {
    hasErrors: false,
    org: this.props.org,
    repo: this.props.repo,
    count: 0,
  };

  componentDidMount() {
    const url =
      "https://github-dependents.glitch.me/" +
      this.state.org +
      "/" +
      this.state.repo +
      "?limit=1";

    fetch(url, {
      credentials: "same-origin",
    })
      .then(res => res.json())
      .then(res => this.setState({ count: res.totalDependants }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    const repoName = this.state.repo;
    const totalCount = this.state.count;
    const shortCount = shortNumber(totalCount);
    const repoUrl =
      "https://github.com/" + this.state.org + "/" + this.state.repo;
    return (
      <div className="grid-third margin-bottom-large">
        <a
          href={repoUrl}
          className="count-card"
          target="_blank"
          rel="noopener noreferrer"
          key={totalCount}
        >
          <img
            className="chevron"
            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1IiB3aWR0aD0iOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS41NDggMS4wOTRsNi4zMzYgNi4zYy4xNTUuMTUzLjE1NS4yOTIgMCAuNDQ1bC02LjMzNiA2LjNhLjM0NS4zNDUgMCAwIDEtLjIyNC4wODMuMzEzLjMxMyAwIDAgMS0uMzIzLS4zMDZjMC0uMDk3LjAyOC0uMTY2LjA5OC0uMjIyTDcuMjEgNy42MTYgMS4wOTggMS41NEEuMjUuMjUgMCAwIDEgMSAxLjMzYzAtLjA5Ny4wMjgtLjE2Ny4wOTgtLjIzNi4xNTQtLjEyNS4yOTQtLjEyNS40NSAweiIgZmlsbD0iIzYxNjc3MSIgc3Ryb2tlPSIjNjE2NzcxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+"
            alt="Chevron"
          ></img>
          <p>
            <span className="repo-name">{repoName}</span> used by
          </p>
          <span className="count-class">{shortCount}</span>
          <div className="repos-name">repositories</div>
        </a>
      </div>
    );
  }
}

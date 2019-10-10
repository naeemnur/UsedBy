import React, { Component } from "react";
let shortNumber = require("short-number");

export default class Count extends Component {
  state = {
    hasErrors: false,
    organisation: this.props.organisation,
    repo: this.props.repo,
    count: 0,
  };

  componentDidMount() {
    fetch(
      "https://github-dependents.glitch.me/" +
        this.state.organisation +
        "/" +
        this.state.repo +
        "?limit=1"
    )
      .then(res => res.json())
      .then(res => this.setState({ count: res.totalDependants }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    const repoName = this.state.repo;
    const totalCount = this.state.count;
    const shortCount = shortNumber(totalCount);
    return (
      <div className="count-card">
        <p>{repoName} is used by</p>
        <span className="count-class">{shortCount}</span>
        <div className="repos-name">repositories</div>
      </div>
    );
  }
}

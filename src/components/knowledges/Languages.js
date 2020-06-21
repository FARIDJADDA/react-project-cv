import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 0.5 },
      { id: 2, value: "css", xp: 0.5 },
      { id: 3, value: "TypeScript", xp: 0.2 },
    ],

    frameworks: [
      { id: 1, value: "React", xp: 0.5 },
      { id: 2, value: "Bootsrap", xp: 0.3 },
      { id: 3, value: "Angular", xp: 0.1 },
      { id: 4, value: "Materialize", xp: 0.4 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages:"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworkDisplay"
          title="frameworks & bibliothèques:"
        />
      </div>
    );
  }
}

import React, { Component } from "react";

import SkillDisplay from "./SkillDisplay/SkillDisplay";

class SkillProfiler extends Component {
  state = {
    skills: [
      {
        index: 0,
        name: "Basic Web",
        level: 4,
        subItems: [
          {
            index: "0a",
            name: "HTML",
            level: 4
          },
          {
            index: "0b",
            name: "CSS",
            level: 3
          }
        ]
      },
      {
        index: 1,
        name: "JavaScript",
        level: 4,
        subItems: [
          {
            index: "1a",
            name: "React",
            level: 3
          },
          {
            index: "1b",
            name: "Node.js",
            level: 1
          }
        ]
      },
      {
        index: 2,
        name: "PHP",
        level: 3,
        subItems: [
          {
            index: "2a",
            name: "Wordpress",
            level: 2
          },
          {
            index: "2b",
            name: "PDO",
            level: 2
          }
        ]
      },
      {
        index: 3,
        name: "C#",
        level: 3,
        subItems: [
          {
            index: "3a",
            name: "LINQ",
            level: 1
          },
          {
            index: "3b",
            name: "WPF",
            level: 1
          },
          {
            index: "3c",
            name: "Xamarin",
            level: 1
          }
        ]
      },
      {
        index: 4,
        name: "Java",
        level: 2,
        subItems: [
          {
            index: "4a",
            name: "JavaFx",
            level: 1
          },
          {
            index: "4b",
            name: "Android development",
            level: 1
          }
        ]
      },
      {
        index: 5,
        name: "SQL",
        level: 2,
        subItems: []
      },
      {
        index: 6,
        name: "GIT",
        level: 3,
        subItems: []
      },
      {
        index: 7,
        name: "Linux",
        level: 3,
        subItems: []
      },
      {
        index: 8,
        name: "English",
        level: 4,
        subItems: [
          {
            index: "8a",
            name: "Written",
            level: 4
          },
          {
            index: "8b",
            name: "Spoken",
            level: 4
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div>
        <SkillDisplay items={this.state.skills} />
      </div>
    );
  }
}

export default SkillProfiler;

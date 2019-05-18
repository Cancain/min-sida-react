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
            name: "React Web",
            level: 4
          },
          {
            index: "1b",
            name: "React Native",
            level: 2
          },
          {
            index: "1c",
            name: "Node.js",
            level: 2
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
            level: 3
          },
          {
            index: "2b",
            name: "Drupal",
            level: 3
          },
          {
            index: "2c",
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
          },
          {
            index: "3d",
            name: "Unity game engine",
            level: 2
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
        index: 7,
        name: "Linux",
        level: 3,
        subItems: []
      },
      {
        index: 8,
        name: "Rust",
        level: 1,
        subItems: []
      },
      {
        index: 9,
        name: "English",
        level: 4,
        subItems: [
          {
            index: "9a",
            name: "Written",
            level: 4
          },
          {
            index: "9b",
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

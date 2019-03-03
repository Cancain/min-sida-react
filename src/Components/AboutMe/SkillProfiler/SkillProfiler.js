import React, { Component } from 'react';

import SkillDisplay from './SkillDisplay/SkillDisplay';

class SkillProfiler extends Component {

    state = {
        skills: [
            {
                index: 7,
                name: 'Basic Web',
                level: 4,
                subItems: [
                    {
                        index: '7a',
                        name: 'HTML',
                        level: 4
                    },
                    {
                        index: '7b',
                        name: 'CSS',
                        level: 3
                    }
                ]
            },
            {
                index: 0,
                name: 'JavaScript',
                level: 4,
                subItems: [
                    {
                        index: '0a',
                        name: 'React',
                        level: 4
                    },
                    {
                        index: '0b',
                        name: 'Node.js',
                        level: 1
                    }
                ]
            },
            {
                index: 1,
                name: 'PHP',
                level: 3,
                subItems: [
                    {
                        index: '1a',
                        name: 'Wordpress',
                        level: 2
                    }
                ]
            },
            {
                index: 2,
                name: 'C#',
                level: 3,
                subItems: [
                    {
                        index: '2a',
                        name: 'LINQ',
                        level: 1
                    },
                    {
                        index: '2b',
                        name: 'WPF',
                        level: 1
                    },
                    {
                        index: '2c',
                        name: 'Xamarin',
                        level: 1
                    }
                ]
            },
            {
                index: 3,
                name: 'Java',
                level: 2,
                subItems: [
                    {
                        index: '3a',
                        name: 'JavaFx',
                        level: 1
                    },
                    {
                        index: '3b',
                        name: 'Android development',
                        level: 1
                    }
                ]
            },
            {
                index: 4,
                name: 'SQL',
                level: 2,
                subItems: [
                    {
                        index: '4a',
                        name: 'PDO',
                        level: 2
                    }
                ]
            },
            {
                index: 5,
                name: 'GIT',
                level: 3,
                subItems: []
            },
            {
                index: 6,
                name: 'English',
                level: 4,
                subItems: [
                    {
                        index: '6a',
                        name: 'Written',
                        level: 4
                    },
                    {
                        index: '6b',
                        name: 'Speaking',
                        level: 4
                    },
                ]
            }

        ]
    }

    render() {
        return (
            <div>
                <SkillDisplay items={this.state.skills} />
            </div>
        )
    }
}

export default SkillProfiler;
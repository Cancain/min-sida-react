import React, { Component } from 'react';

import SkillDisplay from './SkillDisplay/SkillDisplay';

class SkillProfiler extends Component {

    state = {
        skills: [
            {
                index: 0,
                name: 'JavaScript',
                level: 3,
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
                level: 4,
                subItems: []
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
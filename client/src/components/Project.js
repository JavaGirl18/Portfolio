import React, { Component } from 'react';
import axios from 'axios'

class Project extends Component {
state ={
    project:{}
}

componentDidMount() {

    if (this.props.match.params) {
        const projectId = this.props.match.params.id
        this.getProject(projectId)
    }
}


getProject = (projectId) => {
    axios.get(`/api/projects/${projectId}`)
        .then(res => {
            console.log("response from api", res.data)
            this.setState({ project: res.data})
            console.log(this.state.project)

        })
        .catch((err) => {
            console.error(err)
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.project.projectName}
                {this.state.project.description}
                {this.state.project.languages}
            </div>
        );
    }
}

export default Project;
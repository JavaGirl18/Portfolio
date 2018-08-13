import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Projects extends Component {
    render() {
        const projectsList = this.props.projects
        console.log(projectsList)
        const allProjects = projectsList.map((project, index) => {
            let eachProject = `/projects/${project._id}`
            console.log(eachProject)
            return (
                <div>
                <li key={index}>
                    <Link to={eachProject}>
                    {project.projectName}</Link>
                </li>
               
                 </div>
            )
        })

        return (
            <div>
               {allProjects}
            </div>
        );
    }
}

export default Projects;
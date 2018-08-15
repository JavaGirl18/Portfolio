import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Grid, Col, Row, Button, Thumbnail } from 'react-bootstrap'

const Project = styled.div`
padding: 20px;
margin-top: 200px;
background-color: blue;
width: 100vw;
border: solid;
flex: 2;
// margin-left: 10px;
&:hover {
    background-color:red;

}
`
const BigP = styled.div`
display: flex;
text-align: center;
padding:20px;
margin:0 auto;

`

const View = styled.div`
button{
border-radius: 5px;
background-color: white;
color: black;
margin-top:15px;
}
`

class Projects extends Component {
    render() {
        const projectsList = this.props.projects
        console.log(projectsList)
        const allProjects = projectsList.map((project, index) => {
            let eachProject = `/projects/${project._id}`
            console.log(eachProject)
            return (

                <div class="zoom" key={index}>
                    <Row>
                        <Col xs={12} md={12}>

                            <h3>{project.projectName}</h3>
                            <p>{project.description}</p>
                            <View>
                                <a href={project.heroku_link}><button bsStyle="primary">View Project</button></a>
                            </View>

                        </Col>
                    </Row>
                </div>
            )
        })

        return (
            <div>
                <center> <h1>Welcome</h1>
                    <h1>Valencia Cooper</h1>
                    <div>
<button>About Me</button>
                    </div>
                    <p>Full Stack Web Developer</p></center>
                <BigP>
                    {allProjects}
                </BigP>
            </div>
        );
    }
}

export default Projects;
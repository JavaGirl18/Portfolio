import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Media, Col, Row, ProgressBar } from 'react-bootstrap'

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
const Info = styled.div`
float: right;
border:dashed;
color: white;
padding: 20px;
margin-top: -10px;
margin-right: 10px;
`

const Pic = styled.div`

img{
border-radius: 360px;
margin-bottom: 30px;
margin-left: 350px;
}
`
const BigP = styled.div`
display: flex;
text-align: center;
padding:20px;
// margin:0 auto;
margin-top:-100px;
// font-family: 'Amatic SC', cursive;
font-size: 15px;

`
const Title = styled.div`
h1{
    font-family: 'Hind', sans-serif;
color: white;
font-size: 35px;
}
`

const View = styled.div`
button{
border-radius: 5px;
background-color: white;
color: black;
margin-top:15px;
font-family: 'Amatic SC', cursive;
}
`
const About = styled.div`
color: white;
margin-bottom: 70px;
font-family: 'Amatic SC', cursive;
font-size: 20px;
font-weight:bold;
`
const Icons = styled.div`
display: flex;
`
const Welcome = styled.div`
h1{
margin-top:30px;
    font-family: 'Hind', sans-serif;
}
margin-left: 10px;
`
const Load = styled.div`
i{
color: white;
}
`
class Projects extends Component {
    render() {
        const projectsList = this.props.projects || []
        console.log(projectsList)
        const allProjects = projectsList.map((project, index) => {
            let eachProject = `/projects/${project._id}`
            console.log(eachProject)
            return (

                <Load class="zoom" key={index}>
                    <div>
                        <i aria-hidden='true' class='asterisk loading icon' color='white' />
                    </div>
                    <Row>
                        <Col xs={12} md={12}>

                            <h3>{project.projectName}</h3>
                            <p>{project.description}</p>
                            <View>
                                <a href={project.heroku_link}><button bsStyle="primary">View Project</button></a>
                            </View>

                        </Col>

                    </Row>

                </Load>

            )
        })

        return (
            <div>

                <Welcome> <h1>Welcome</h1></Welcome>
                <Info>
               <center><h1>Valencia Cooper, MBA</h1>
                <h3>Full Stack Web Developer</h3>
                <h4>With a keen interest in Back End Development</h4></center> 
</Info>
                <center><Pic>
                    <img src='https://media.licdn.com/dms/image/C4E03AQFCUXHHZi-IOA/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=DIBBqNCEYWFidKmQ_PDCev_jWzN2dnvXoAkYi2m78Y8' />
                </Pic></center>
                <center>  <i aria-hidden='true' class=' white asterisk loading inverted icon' /> <div>  <h1>About Me</h1>

                    <hr></hr></div> </center>

                <center> <About>
                    <Media.List>
                        <Media.ListItem>

                            <i class='lightbulb icon' />

                            <Media.Body>
                                <Media.Heading>Intellectually curious</Media.Heading>
                                <p>
                                    I like to "figure things out". Problem solving is what I do!
      </p>

                                <Media>

                                    <i class='music icon' />

                                    <Media.Body>
                                        <Media.Heading>I love music</Media.Heading>
                                        <p>
                                            I sing. I write. Music makes me happy!
          </p>

                                        <Media>

                                            <i class="code icon" />

                                            <Media.Body>
                                                <Media.Heading>Loves to code</Media.Heading>
                                                <p>
                                                    I am a Full Stack Developer with a business background. I enjoy creating software that aids entrepreneurs and small businesses.
              </p>
                                            </Media.Body>
                                        </Media>
                                    </Media.Body>
                                </Media>

                                <Media>

                                    <i class='book icon' />

                                    <Media.Body>
                                        <Media.Heading>I love to learn</Media.Heading>
                                        <p>
                                            I've earned an MBA but I will always be a student! I am an avid learner.
                                         </p>
                                    </Media.Body>
                                </Media>
                            </Media.Body>
                        </Media.ListItem>
                    </Media.List>
                </About></center>
                <center>                    <i aria-hidden='true' class='white asterisk loading inverted icon' />
                    <Title><h1>Projects</h1></Title></center>
                <hr></hr>
                <BigP>


                    {allProjects}

                </BigP>


            </div>
        );
    }
}

export default Projects;
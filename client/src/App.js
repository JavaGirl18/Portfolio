import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Projects from './components/Projects'
import Project from './components/Project'
import Resume from './components/Resume'
import styled from 'styled-components'

const Icons = styled.div`
display: flex;

padding: 40px;
margin-left: 650px;
i{
  color:black;
}

`
const Contain = styled.div`
color:white;
align-items: center;
margin-top: 50px;
`
const Email = styled.div`
font-size: 20px;
font-family: 'Amatic SC', cursive;
`
class App extends Component {
  state = {
    projects:[]
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = () => {
    axios.get('/api/projects').then((res) => {
      this.setState({ projects: res.data })
    })

      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    const ProjectsPage = (props) => {
      return (
        <Projects projects={this.state.projects}{...props} />
      )
    }
    const ProjectPage = (props) => {
      return (
        <Project getProjects={this.getProjects}project={this.state.projects}{...props} />
      )
    }
    const ResumePage = (props) => {
      return (
        <Resume {...props} />
      )
    }

    return (
   <div id = "container">
    <Router>
      <Switch>
      <Route exact path='/' component={ProjectsPage}></Route>
      <Route exact path='/resume' component={ResumePage}></Route>
          <Route exact path='/projects' render={ProjectsPage}></Route>
          <Route exact path='/projects/:id' render={ProjectPage}></Route>
      </Switch>
    </Router>
    <center>
      <Contain>
    <i aria-hidden='true' class='asterisk loading icon'/><h1>Contact Me</h1>
    <hr></hr>
    <Email>
     <p>Email: valenciacooper89@gmail.com</p></Email>
     <Icons>
     
  <i aria-hidden='true' class='github large icon' />
                    <a href="#" class="fa fa-linkedin"></a>
                   
                    </Icons>
   </Contain>  </center>
   </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Projects from './components/Projects'

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

    return (
    <Router>
      <Switch>
      {/* <Route exact path='/' component={HomePage}></Route> */}
          <Route exact path='/projects' render={ProjectsPage}></Route>
          {/* <Route exact path='/projects/:id' render={ProjectPage}></Route> */}
      </Switch>
    </Router>
    );
  }
}

export default App;

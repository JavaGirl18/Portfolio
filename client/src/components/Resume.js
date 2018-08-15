import React, { Component } from 'react';
import styled from 'styled-components'

const Body = styled.div`
background-color :#f5f5f5;
width: 600px;
margin: 0 auto;
padding: 0;
`

const List = styled.div`
color: #555;
  font-size: 22px;
  padding: 0 !important;
  width: 500px;
  font-family: courier, monospace;
  border: 1px solid #dedede;
  li{
    list-style: none;
    border-bottom: 1px dotted #ccc;
    text-indent: 25px;
    height: auto;
    padding: 10px;
    text-transform: capitalize;
  }
`
const Lines = styled.div`
border-left: 1px solid #ffaa9f;
  border-right: 1px solid #ffaa9f;
  width: 2px;
  float: left;
  height: 495px;
  margin-left: 40px;
`
const Skills = styled.div`
display:flex;
flex-wrap: wrap;
`

class Resume extends Component {
    render() {
        return (
            <Body>
                <h4>Resume</h4>
                <Lines></Lines>
                <List>
                    <li>Related Skills</li>
                    <Skills>
                    <li>JavaScript</li>
                    <li>Express</li>
                    <li>Node.JS</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>HTML 5, CSS 5</li>

                    <li>Ruby on Rails</li>
                    <li>PostgreSQL</li>
                    <li>Active Record</li>
                    <li>Git</li>
                    <li>Heroku</li>
                    <li>Salesforce.com</li>
                    <li>HTML 5, CSS 5, Project Management</li>
                   
                    <li>Excellent communication skills</li>
                    <li>Training</li>
                    <li>Data Analysis</li>
</Skills>
                    <li>Education</li>
                    <li>Education</li>
                </List>
            </Body>
        );
    }
}

export default Resume;
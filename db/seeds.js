require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const { ProjectsModel } = require('./projectSchema')

// Connect to Database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })

    const project1 = new ProjectsModel({
        projectName: "Black Jack",
        description: "The classic Black Jack game made using JQuery, JavaScript HTML & CSS",
        languages: "JQuery, JavaScript HTML & CSS",
        frameworks: "Date",
        database:"N/A",
        heroku_link: "https://wizardly-banach-ed0420.netlify.com/",
        git_hub_link: "https://github.com/JavaGirl18/Black-Jack",
        image: "../public/images/bj.png"
    })
    const project2 = new ProjectsModel({
        projectName: "Budget Up",
        description: "Budget Up is a financial tracking and goal planning app using the MERN Stack",
        languages: " Node JS, Javascript, HTML, CSS",
        frameworks: "Express",
        database: "MongoDB",
        heroku_link: "https://secret-fjord-87063.herokuapp.com/",
        git_hub_link: "https://github.com/JavaGirl18/BudgetUp",
        image: "../public/images/bu.png"
    })
    const project3 = new ProjectsModel({
        projectName: "Get Ish Done!",
        description: "Get Ish Done is a Project Management app using the MERN Stack",
        languages: "Node JS, Javascript, HTML, CSS",
        frameworks: "Express",
        database: "MongoDB",
        heroku_link: "https://getishdone.herokuapp.com/",
        git_hub_link: "https://github.com/JavaGirl18/getIshDone-",
        image: "../public/images/gis.png"
    })
    const project4 = new ProjectsModel({
        projectName: "Code.Universe",
        description: "Code.Universe is an Event app for programmers in Atlanta",
        languages: "Ruby, Javascript, HTML,CSS",
        frameworks: "Ruby on Rails, React",
        database:"PostgreSQL",
        heroku_link: "https://code-universe.herokuapp.com/",
        git_hub_link: "https://github.com/JavaGirl18/Code.Universe",
        image: "../public/images/cu.png"
    })

    const projects = [project1, project2, project3, project4]

    ProjectsModel.remove().then(() => ProjectsModel.insertMany(projects))
    .then(()=> mongoose.connection.close())
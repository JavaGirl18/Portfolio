const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProjectsSchema = new Schema({
    projectName: String,
    description: String,
    languages: String,
    frameworks: String,
    database:String,
    heroku_link: String,
    git_hub_link: String,
    image: String
})

const ProjectsModel = mongoose.model('Projects', ProjectsSchema)

module.exports = { ProjectsModel } 
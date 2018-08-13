var express = require('express');

const router = express.Router({ mergeParams: true })



const { ProjectsModel } = require('../db/projectSchema.js')
//get route
router.get('/', function (req, res) {
    ProjectsModel.find(req.params.id).then((projects) => {
        res.send(projects)
    })
});

//show route
router.get('/:id', async (req, res) => {
    ProjectsModel.findById(req.params.id)
        .then((project) => {
            res.send(project)
        })
})

//create route
router.post('/', (req, res) => {
    const newUser = new ProjectsModel(req.body)
    newUser.save().then((users)=>{
        res.send(users)
    })
})


//update route
router.put('/:id', async (req, res) => {
    const projectId = req.params.id
    const updatedProject = req.body
    const savedProject = await ProjectsModel.findByIdAndUpdate(projectId, updatedProject)
    res.send(savedProject)

})


//delete route
router.delete('/:id',(req, res) => {
    const projectId = req.params.id
        ProjectsModel.findByIdAndRemove(projectId).then(()=>{
            res.send({msg: 'project deleted'})
    })
        .then((user) => {
            res.send(user)
                .catch(err => console.log((err)))
        })
})

module.exports = router;
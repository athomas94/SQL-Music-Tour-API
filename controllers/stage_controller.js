//DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

//GET ALL EVENTS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A STAGE
stages.get('/:id', async (req,res) => {
    try {
        const foundStages = await Stage.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A STAGE
stages.post('/:id', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A STAGE
stages.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.create(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Successfully updated stage'
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A STAGE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Successfully deleted stage'
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//EXPORT
module.exports = stages
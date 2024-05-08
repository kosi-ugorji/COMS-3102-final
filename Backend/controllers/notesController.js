const Notes = require('../models/noteModel')
const mongoose = require('mongoose')

// get all notes
const getNotes = async (req, res) => {
    //fetches notes sorted by last created
    const notes = await Notes.find({}).sort({createdAT: -1})

    res.status(200).json(notes)
}

// create a new note
const createNote = async (req, res) => {
    const {title, body} = req.body

    try{
        const note = await Notes.create({title, body})
        res.status(200).json(note)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a note
const deleteNote = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such note"})
    }
    const note = await Notes.findOneAndDelete({_id: id})

    if (!note){
        return res.json(404).json({error: "No such note"})
    }

    res.status(200).json(note)
}

//edit a note
const editNote = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such note"})
    }
    const note = await Notes.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!note){
        return res.json(404).json({error: "No such note"})
    }

    res.status(200).json(note)

}

module.exports = {
    getNotes,
    createNote,
    deleteNote,
    editNote
}
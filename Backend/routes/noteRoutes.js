const express = require('express')
const router = express.Router()

const {
    getNotes,
    createNote,
    deleteNote,
    editNote
} = require('../controllers/notesController')

//GET all Notes
router.get('/', getNotes)


//POST a note
router.post('/', createNote)

//DELETE a note
router.delete('/:id', deleteNote)

//UPDARE a note
router.patch('/:id', editNote)



module.exports =  router
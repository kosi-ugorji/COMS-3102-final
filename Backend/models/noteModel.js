const mongoose = require('mongoose')

const Schema = mongoose.Schema

const notesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String, 
        required: true
    }
},{timestamps : true })

module.exports = mongoose.model('Notes', notesSchema)

//notesSchema.find() - to get all notes

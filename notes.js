const fs = require("fs")

addNote = (title, body) => {
    const allNotesString = fs.readFileSync("data.json")
    let allNotes = JSON.parse(allNotesString)

    allNotes.push({ title, body })
    fs.writeFileSync("data.json", JSON.stringify(allNotes))
}
getAll = () => {
    const notesString = fs.readFileSync("data.json")
    const notes = JSON.parse(notesString)
    notes.map(note => {
        console.log(`Notes: ${note.title} \n Body: ${note.body}`)
    })
}
read = (title) => {
    const notesString = fs.readFileSync("data.json")
    const notes = JSON.parse(notesString)
    notes.map(note => {
        if (note.title === title)
            console.log(`Notes: ${note.title} Body: ${note.body}`)
    })
}
// console.log(`reading ${title}`)

remove = (title) => {
    const allNotesString = fs.readFileSync("data.json")
    let allNotes = JSON.parse(allNotesString)

    const AfterFilter = allNotes.filter(note => note.title.toLowerCase() !== title.toLowerCase() ? true : false)

    fs.writeFileSync("data.json", JSON.stringify(AfterFilter))
}
module.exports = {
    addNote,
    getAll,
    read,
    remove
}

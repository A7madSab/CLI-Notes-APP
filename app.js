const _ = require("lodash")
const yargs = require("yargs")
const { argv } = yargs

const notes = require("./notes")
const command = argv._[0]

switch (command) {
    case 'add':
        // console.log("add")
        notes.addNote(argv.title, argv.body)
        break
    case 'list':
        notes.getAll()
        break
    case 'read':
        notes.read(argv.title)
        break
    case 'delete':
        notes.remove(argv.title)
        break
    default:
        console.log("not Ava")
        break
}

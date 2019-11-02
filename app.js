console.log("Starting App")

const fs = require("fs")
const os = require("os")
const _ = require("lodash")

const notes = require("./notes")

// console.log(_.isString("asd"))
// console.log(_.isString(0))

const filteredArray = _.uniq(["Ahmad", 1, "Ahmad"])
console.log(filteredArray)

const data = [
    {
        age: notes.id
    }
]

fs.appendFileSync("greeting.txt", JSON.stringify(data))
const fs = require("node:fs")

const content = fs.readFileSync('hello.txt')
console.log(content.toString())
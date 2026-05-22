import fs from "node:fs/promises"

// Async Task
/* let i = 0
const timerId = setInterval(() => {
    console.log(i++)
    if(i === 15){
        clearInterval(timerId)
    }
} , 0)

// Async Task
const content = await fs.readFile('./sample.txt','utf-8' )
console.log('Reading Done')
console.log(content) */

// Write file

// Step-1 : Sample.txt -> Read 
/* const content = await fs.readFile('./sample.txt' , 'utf-8')

// Step-2 : Output.txt -> sample.txt Read -> content
fs.writeFile('output.txt' ,content ) */

// Rename file
/* fs.rename('./output.txt' , 'output1.txt') */

/* fs.unlink('output.txt' , () => {
    console.log('File deleted')
} ) */

/* fs.rmdir('images') */

/* fs.mkdir('images') */
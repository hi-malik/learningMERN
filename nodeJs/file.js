// // Creating file using fs
const fs = require("fs")

// // Synchronous
// // fs.writeFileSync("vanshika.txt", "Jai Shree Ram")

// // File creation 2nd way

// // Asynchronous
// fs.writeFile("himanshu.txt", "Sita Ram", (err) => {})

// Now let's read a file

//Method - 1 (Synchronous)
// const result = fs.readFileSync("vanshika.txt", "utf-8")
// console.log(result)

//Method - 2 (Asynchronous)
fs.readFile("vanshika.txt", "utf-8", (err, answer) => {
    if (err) console.log("Error")
    else console.log(answer)
})
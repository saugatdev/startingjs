import * as fs from 'node:fs/promises';

await fs.writeFile("hello.txt","Thank you saugat")


// let contents = await fs.readFile("hello.txt","utf-8")
// console.log(contents)

try{

let contents = await fs.readFile("helloww.txt","utf-8")
console.log(contents);
}

catch(err){
    console.log(err);

}
console.log("exited");
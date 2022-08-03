// import fs from "fs";
// console.log("HelloWorld");
// function HelloMini(){
//     console.log("HEllow granny");
// }HelloMini();
import fs from "fs";
import path from "path";
const filepath = "./textpractise/metext.txt";
console.log(path.dirname(filepath));
console.log(path.extname(filepath));
console.log(path.basename(filepath));
console.log(path.isAbsolute(filepath));

fs.readFile("./textpractise/metext.txt", (err, content)=>{

    if(err) 
        {
            console.log(err);
            console.log("Error occured while reading file.")
            return false;
        }

    console.log(content.toString());
    

})

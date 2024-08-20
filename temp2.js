const fs = require("fs")

// updates
function cleanFile(fileName){
    return new Promise((resolve)=>{
      let content = fs.readFileSync(fileName,"utf-8")
      content.trim();
      fs.writeFileSync(fileName,"Updated file","utf-8")
      resolve();
    })
}

// async function main(){
//     await cleanFile("a.txt")
//     console.log("Done Cleaning File")
// }

function main(){
    console.log("Done Cleaning File")
}

cleanFile("a.txt").then(main)

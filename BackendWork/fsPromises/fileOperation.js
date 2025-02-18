const promise=require('fs').promises;
const fsp=promise.writeFile("data.txt","hello world")
fsp.then(()=>{
    console.log("data written")
}).catch((err)=>{
    console.log("error while writing"+ err)
}).finally(()=>{
    console.log("finally close all resources automatically")

})
async function readFileAsync(){
    const data= await promise.readFile('data.txt',{encoding:'utf-8'});
    console.log(data)
}
readFileAsync()
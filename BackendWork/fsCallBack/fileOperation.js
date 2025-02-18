const fs=require('fs')
function writeInFile(){
fs.writeFile('data.txt',"welcome to fsd session",()=>{
    console.log("data written successfully")
})
}
function readInFile(){
fs.readFile('data.txt',(err,data)=>{
if(err){
    console.log("error while reading the data "+ err)
}
else{
    console.log(data.toString());
}
})
}
function appendInFile(){
fs.appendFile('data.txt',"welcome to fsd session",()=>{
    console.log("data appended successfully")
})
}
const obj={
    writeFile:writeInFile,
    readFile:readInFile,
    appendFile:appendInFile
}
module.exports=obj;
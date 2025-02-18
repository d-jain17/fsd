const fs= require('fs');
function dataWrite(){
    try{
fs.writeFileSync("data.txt","Hello Node Js using fs module")
console.log("data written successfully")
    }
    catch(err){
        console.log("error: "+err)
    }
}
function dataRead(){

try{
const rf=fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rf)
}
catch(err){
    console.log("error: "+err)
}
}
function dataAppend(s){
    try{
        fs.appendFileSync("data.txt",s);
       
    }
    catch(err){
        console.log("error: "+err)
    }
}
function deleteFile(){
    try{
        fs.unlinkSync("data.txt")
        console.log("file deleted successfully")
    }
    catch(err){
        console.log("error: "+err)
    }
}
const obj={
    dataRead:dataRead,
    dataWrite:dataWrite,
    dataAppend:dataAppend,
    deleteFile:deleteFile
}
module.exports=obj;
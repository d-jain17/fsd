const fs=require('fs')
function dataCopy(){
    fs.readFile("studentData.json", { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.log("Error while reading the data: " + err);
        } else {
            fs.writeFile("copyData.json", data, (err) => {
                if (err) {
                    console.log("Error while writing data: " + err);
                } else {
                    console.log("Data written successfully");
                }
            });
        }
    });
}
 function newData(){
    fs.readFile("copyData.json",{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log("error while reading the data "+ err)
        }
        else{
            console.log(data.toString());
        }
        })
}
const obj={
    dataCopy:dataCopy,
    newData:newData

}
module.exports=obj;
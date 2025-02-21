const fs=require('fs').promises
const http=require('http')
const PORT= 2527
const server= http.createServer(async (req,res)=>{
    /*try{
    res.setHeader('Content-Type','text/html')
    res.write("Welcome to Http and fs module")
    const data = await fs.readFile('student.json',{encoding:'utf-8'})
    res.write(`<h2 style='color:cyan'>${data}</h2>`)
    res.end("Response Ended")
    }catch(err){
        console.log("Error while reading file"+err)
    }*/

    if(req.url=="/home" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        const htmlTemplate = await fs.readFile('home.html')
        res.end(htmlTemplate)
    }
    else if(req.url=="/textdata" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        const htmlTemplate = await fs.readFile('textdata.html')
        res.end(htmlTemplate)
    }
    else{
        res.setHeader('Content-Type','text/html')
        const htmlTemplate = await fs.readFile('error.html')
        res.end(htmlTemplate)
    }
})
server.listen(PORT, ()=>{
    console.log("server is running on "+ PORT)
})
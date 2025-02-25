const http= require('http')
const fs=require('fs').promises
const PORT= 3001
const server= http.createServer((req,res)=>{
    if(req.url=="/register" && req.method=="POST"){
        let body=''
        let arr=[]
        req.on('data',chunk=>{
            
            body+=chunk;
        })
        req.on('end', async()=>{
            const {name,email,password}=JSON.parse(body)
            console.log(name)
            await fs.appendFile('student.json',JSON.stringify({name,email,password}))
        })
        res.end(JSON.stringify({"message":"/register api hit successfully!"}))
    }
//res.end("Welcome to Node Server")
})
server.listen(PORT,()=>{
    console.log("server is running on " + PORT)
})
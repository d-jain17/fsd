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
            const fdata= await fs.readFile('student.json',{encoding:'utf-8'})
            arr=JSON.parse(fdata)
            console.log(arr)
            const result=arr.find(ele=>ele.email==email)
            if(result){
                res.setHeader('Content-Type','application/json')
                return res.end(JSON.stringify({"message":"This is already registered with us"}))
            }
            arr.push({name,email,password})
            await fs.writeFile('student.json',JSON.stringify(arr,null,2))
            res.end(JSON.stringify({"message":"/register api hit successfully!"}))
        })
    }
    else if(req.url=="/login" && req.method=="POST"){
        let body=""
        let arr=[]
        req.on("data",chunk=>{
            body+=chunk
        })
        req.on('end',async()=>{
            const {email,password}=JSON.parse(body)
            const fdata= await fs.readFile('student.json',{encoding:'utf-8'})
            arr=JSON.parse(fdata)
            console.log(arr)
            const result=arr.find(ele=>ele.email==email && ele.password==password)
            if(result){
                res.setHeader('Content-Type','application/json')
                return res.end(JSON.stringify({"message":"Login Success"}))
            }
            else{
                res.setHeader('Content-Type','application/json')
                return res.end(JSON.stringify({"message":"Login Success"}))
            }
        })
    }
//res.end("Welcome to Node Server")
})
server.listen(PORT,()=>{
    console.log("server is running on " + PORT)
})
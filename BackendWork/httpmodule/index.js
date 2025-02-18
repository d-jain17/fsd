const http=require('http')
const PORT=2527;
const server= http.createServer((req,res)=>{
    if(req.url=='/' && req.method=='GET'){
    console.log("inside server body")
    res.setHeader("Content-Type","text/html");
    //console.log(Object.keys(req))
    console.log(req.url+" "+req.method)
res.write("<div style='background-color:pink'><h2 style='color:cyan'> welcome to node server</h2></div>")
res.end("server is stoped");
    }
    if(req.url=='/show' && req.method=='GET'){
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify({
            msg:"sucessfully hit the api"
        }))
    }
    
})

server.listen(PORT,()=>{
    console.log("server is running on "+ PORT)
})
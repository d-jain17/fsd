const http= require('http')
const PORT= 2527
const server = http.createServer(async (req,res)=>{
    res.setHeader('Content-Type','text/html')
    const data= await fetch("https://fakestoreapi.com/products")
    const jsondata= await data.json()
    console.log(jsondata[0].category)
    const htmlTemplate=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>online shop</title>
    <style>
        .container{
            background-color: floralwhite;
            border: 2px solid black;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .child1,.child2,.child3{
            height: 200px;
            width: 300px;
            border: 1px solid sienna;


        }
    </style>
</head>
<body>
    <div class="container">
        <div class="child1"> ${jsondata[0].category} <img height="200px" width="300px" src=${jsondata[0].image}></div>
        <div class="child2"> ${jsondata[1].category} <img height="200px" width="300px" src=${jsondata[1].image}></div>
        <div class="child3"> ${jsondata[2].category} <img height="200px" width="300px" src=${jsondata[2].image}></div>
    </div>
</body>
</html>`

res.end(htmlTemplate)
})
server.listen(PORT,()=>{
    console.log("server is running"+ PORT)
})
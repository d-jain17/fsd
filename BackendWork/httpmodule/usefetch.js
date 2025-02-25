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
            width:300px;
            justify-content: space-around;
        }
        img{
            height: 200px;
            width: 300px;
            border: 1px solid sienna;


        }
            .parent{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            gap:10px;}
    
    </style>
</head>
<body>
    <div class="parent">
    ${
        jsondata.map(ele=>{
            return(
                `
                <div class="container">
                <div>${ele.id}</div>
                <div><img src="${ele.image}"></div>
                <div>${ele.category}
                ${ele.id}</div>
                <div>${ele.description}</div>
                <div>Rs. ${ele.price}</div>
                </div>
                `
            )
        })
    }
    </div>
</body>
</html>`

res.end(htmlTemplate)
})
server.listen(PORT,()=>{
    console.log("server is running"+ PORT)
})
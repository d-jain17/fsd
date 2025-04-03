import  { useState } from 'react'

function Registration() {
    const [data,setData]=useState({name:"",email:"",password:""})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    function sendData(e){
        e.preventDefault()
        console.log(data)
        let name = data.name
        let email=data.email
        let password=data.password
        fetch("http://localhost:3001/register",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{"Content-Type":"application/json"},
        })
    }

  return (
    <div>
    <div>Registration</div>
    <form onSubmit={sendData}>
    <div className="form-group">
    <label htmlFor="exampleInputName">Name</label>
    <input type="text" className="form-control" name='name' id="exampleInputName" placeholder="Enter name" value={data.name} onChange={handleChange}/>
  </div> 
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={data.email} onChange={handleChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" >Password</label>
    <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password" value={data.password} onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Registration
import React from 'react'
import { Link } from 'react-router'
function Home() {
  return (
    <div>
        <h1>Welcome to home page</h1>
        <Link to='/login'>
        <button>Login</button>
        </Link>
        <Link to='/register'>
        <button>Register</button>
        </Link>
    </div>
  )
}

export default Home
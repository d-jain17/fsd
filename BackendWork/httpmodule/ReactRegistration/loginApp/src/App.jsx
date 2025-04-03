
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Registration from './components/Registration';
import {Link,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
function App() {
  return (
    
      <div>
       
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Registration/>}></Route> 
            <Route path='/login' element={<Login/>}></Route> 
          </Routes>

        
        </div>
        
    
  )
}

export default App

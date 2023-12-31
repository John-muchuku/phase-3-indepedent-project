import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
export default function Login() 
{
    const {login} = useContext(AuthContext)
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    const  handleSubmit = (e) =>{
        e.preventDefault()
    //    console.log(username)
    //    console.log(password)
       login(username, password)
    }



  return (
    <div className='p-5 d-flex flex-column align-items-center'> <h1 className='text-dark'>

</h1>
<form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="name" class="form-control " id="exampleInputName" aria-describedby="emailHelp" onChange={(e)=> setUsername(e.target.value) }/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label ">Password</label>
    <input type="password" class="form-control " id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value) }/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input " id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" class=" btn rounded-pill">Submit</button>

  <div className='form-text p-2'>Don't have an account? 
    <Link to="/Register"> Register</Link>
  </div>
  
</form>



    </div>




    
  )
}


import React, { useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'



function Register() {

    const {register} = useContext(AuthContext)
    
    const [username, setUsername] = useState()
    const [email, setUseremail] = useState()
    const [password, setPassword] = useState()


    const  handleSubmit = (e) =>{
        e.preventDefault()

    
       register(username, email, password)
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
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setUseremail(e.target.value) }/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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

  <div className='form-text p-2'>have an account? 
    <a href="/Login"> Login</a>
  </div>
  
</form>

    </div>
    
  )
}

export default Register
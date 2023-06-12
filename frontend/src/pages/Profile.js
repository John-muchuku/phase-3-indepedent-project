import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Profile() 
{
  const {current_user, logout} = useContext(AuthContext)

  console.log("Current user in profile ", current_user)
  return (
    <div>
      {current_user && current_user?
      <>
    
    <div class="card text-center" width="50rem">
  <div class="card-body">
    <hi>
  <img width="30" height="30" src="https://img.icons8.com/arcade/64/test-account.png" alt="test-account"/>
          𝙿𝚛𝚘𝚏𝚒𝚕𝚎</hi>


      <h5>𝚄𝚜𝚎𝚛𝚗𝚊𝚖𝚎  : {current_user && current_user.username}</h5>
      <h5>𝙴𝚖𝚊𝚒𝚕 : {current_user && current_user.email}</h5>
      <h5>𝙳𝚊𝚝𝚎 𝙹𝚘𝚒𝚗𝚎𝚍 : {current_user && current_user.created_at}</h5>
      </div>
</div>


   </>:
   <div className='text-danger'>
    Login to access this page
   </div>
}

<div class="d-flex justify-content-center p-3">
  <a href="/login" class="btn rounded-pill" onClick={()=>logout()} >
    𝙻𝚘𝚐𝚘𝚞𝚝
  </a>
</div>
    </div>
  )
}

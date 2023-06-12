import { useContext } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'





function Navbar() {

    const {current_user, logout} = useContext(AuthContext)

    console.log("CURRENT USER IN NAVBAR ", current_user)
  
    

  return (
    <div className=''>

       <nav class="navbar navbar-expand-lg " style={{"background" :"#EBF4FA"}}>
  <div class="container ">
    

    <a class="navbar-brand fw-bold" href="#">
    <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/external-house-magic-and-fairy-tale-icongeek26-outline-colour-icongeek26.png" alt="external-house-magic-and-fairy-tale-icongeek26-outline-colour-icongeek26"/>
       <span style={{color:"#6f42c1"}}>𝙅𝙊𝙃</span><span style={{color:"#00FFCA"}}>𝙈𝙐𝘾𝙃</span>
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
        <li class="nav-item mx-2">
          <Link to="/" class="nav-link active " aria-current="page" href="#">
          <img width="24" height="25" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/24/external-home-multimedia-kiranshastry-gradient-kiranshastry.png" alt="external-home-multimedia-kiranshastry-gradient-kiranshastry"/>
            𝙷𝚘𝚖𝚎</Link>
        </li>
        
        {current_user && current_user?
        <>     

        <li class="nav-item mx-2">
          
          <a class="nav-link active " href="#" tabindex="-1" aria-disabled="true">
          <img width="24" height="25" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/24/external-add-banking-and-finance-kiranshastry-gradient-kiranshastry.png" alt="external-add-banking-and-finance-kiranshastry-gradient-kiranshastry"/>
          𝙰𝚍𝚍</a>
        </li>

        <li  to="/Wishlist" class="nav-item mx-2">
          <Link to="/Wishlist" class=" nav-link active" href="#">
          <img  width="23" height="23" src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/23/external-wishlist-black-friday-xnimrodx-lineal-gradient-xnimrodx.png" alt="external-wishlist-black-friday-xnimrodx-lineal-gradient-xnimrodx"/>
          𝚆𝚒𝚜𝚑𝚕𝚒𝚜𝚝
            </Link>
        </li>


        <li  to="/Wishlist" class="nav-item mx-2">
          <Link to="/Profile" class=" nav-link active" href="#">
          <img width="30" height="30" src="https://img.icons8.com/arcade/64/test-account.png" alt="test-account"/>
          𝙿𝚛𝚘𝚏𝚒𝚕𝚎
            </Link>
        </li>




        </>:
        <>
        <li class="nav-item  float flex mx-2 g-2">
          <Link to="/login" class=" btn rounded-pill" href="#">
          
            𝚕𝚘𝚐𝚒𝚗</Link>
        </li>

        </>
       }



      </ul>
      
      
       

    </div>
    
  </div>
  
</nav>
    </div>
  )
}

export default Navbar
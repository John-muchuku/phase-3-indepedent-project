import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    
<div class=" container-sm p-2 row mx-auto">

<div class="flex col-md-4  mt-1" style={{"minHeight" : "20vh" }} >
  <h1 className='p-4 mt-2'>

 
  <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/external-house-magic-and-fairy-tale-icongeek26-outline-colour-icongeek26.png" alt="external-house-magic-and-fairy-tale-icongeek26-outline-colour-icongeek26"/>
  <span style={{color:"#6f42c1"}}>𝙅𝙊𝙃</span><span style={{color:"#00FFCA"}}>𝙈𝙐𝘾𝙃</span>

<p className='slogan ' style={{color:"#FF6000"}}>

𝐹𝒾𝓃𝒹 𝒴𝑜𝓊𝓇 𝒟𝓇𝑒𝒶𝓂 𝐻𝑜𝓂𝑒 𝒯𝑜𝒹𝒶𝓎!

</p>



  </h1>




</div>

    <div class="flex col-md-7  mt-2" style={{"minHeight" : "20vh" }}>

    <div id="carouselExampleControls" class="carousel slide p-1 mx-auto w-175" data-bs-ride="carousel">
  <div class="carousel-inner rounded-2">
    <div class="carousel-item active">
      <img src="https://koch-properties.com/_next/image?url=%2Fproperties%2F62d69f58c1eaa5d064e3d465%2F1679063378953.jpg&w=1080&q=75" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://koch-properties.com/_next/image?url=%2Fproperties%2F62d694c0c1eaa5d064e3d463%2F1658230524891.jpg&w=1080&q=75" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://koch-properties.com/_next/image?url=%2Fproperties%2F62d694c0c1eaa5d064e3d463%2F1658231136645.jpg&w=1080&q=75" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  


  <div class="row p-3 ">
  <div class="col-sm-6 mt-2">
    <div class="card ">
      <div class="card-body">
      <h5 class="card-title">
        <img  width="65" height="65" src='https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg' alt='...'></img>
        𝑩𝒖𝒚 𝒂 𝒉𝒐𝒎𝒆</h5>
        <p class="card-text">Discover the path to your dream home—where aspirations become reality. Experience the joy of owning a haven that reflects your style and fills your heart. Embrace a new chapter of blissful living in a tranquil and captivating setting.</p>
        <Link to="./Buy" class="btn rounded-pill">𝙵𝚒𝚗𝚍 𝚊 𝚑𝚘𝚖𝚎</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-2 ">
    <div class="card ">
      <div class="card-body">
        <h5 class="card-title">
        <img width="65" height="65" src='https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg'alt='...'></img>
        𝑹𝒆𝒏𝒕𝒂𝒍 𝒉𝒐𝒎𝒆
        </h5>

        <p class="card-text">Discover your ideal rental home, tailored to fit your lifestyle and preferences.Experience the freedom and flexibility of renting, with well-maintained options that offer a perfect blend of affordability and quality.</p>
        <Link to="./Rent" class="btn rounded-pill">𝙵𝚒𝚗𝚍 𝚊 𝚛𝚎𝚗𝚝𝚊𝚕</Link>
      </div>
    </div>
  </div>
</div>
</div>



  )
}

export default Home
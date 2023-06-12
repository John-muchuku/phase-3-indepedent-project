import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Rate from './Rate'
import { useParams } from 'react-router-dom'
import { PostContext } from '../context/PostContext'
import { AuthContext } from '../context/AuthContext'

function Buysingle() {

  
    const {posts, deletePost} = useContext(PostContext)
    const {current_user} = useContext(AuthContext)
  
    const {id} = useParams()
    const singlePost = posts && posts.find(post =>(
      post.id==id
    ))
  
    console.log(singlePost)






  return (

  <div>



<Link to="/Buy" type="button" className="btn-close p-3" aria-label="Close"></Link>


<div class=" container-sm p-2 row mx-auto">

<div class="flex col-md-4  mt-1" style={{"minHeight" : "20vh" }} >
  
<div className='p-2'>
        <div className=" card border-secondary shadow rounded " style={{ width: "100%" }} >
          <img src={singlePost && singlePost.image} alt="..." className='card-img-top' style={{ objectFit: "cover", height: "200px" }} />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <h6 className=''>
              <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/marker.png" alt="marker"/> {singlePost && singlePost.user.username}
            </h6>
            <h6>
              <img width="23" height="23" src="https://img.icons8.com/fluency-systems-regular/48/bed.png" alt="bed" />{singlePost && singlePost.bedrooms}   𝙱𝚎𝚍𝚛𝚘𝚘𝚖𝚜
            </h6>
            
          </div>
        </div>
      </div>
      



  




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

<div className='p-3'>
<div class="card  ">
  <div class="p-2">
    
  </div>
  <div class="card-body">
    <h5 class="card-title">More information</h5>
    <p class="card-text">We are delighted to offer fully furnished and serviced apartments located in the prestigious Riverside area, specifically on Riverside Lane. The apartments are designed to provide a convenient and comfortable living experience, with a wide range of amenities to cater to your every need.

For your safety and security, we have installed 24-hour security, CCTV cameras, electric fences, and controlled parking. In addition, The apartments are equipped with a borehole to ensure a steady water supply, and we offer cable TV and internet connectivity to keep you connected.

The apartments feature a gym, high-speed lift, intercom, and perimeter wall, adding an extra layer of security. Being located near tarmac roads makes it easy to move around the area, and our swimming pool is the perfect place to unwind and relax.</p>
<div className='row p-3'>
    <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
  <div className="">
    <a href="#" className="bt btn shadow rounded-pill">Book a Viewing</a>
  </div>

  <div className="">
    <a href="#" className="bt btn shadow rounded-pill">
      <img width="23" height="23" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/add--v1.png" alt="add--v1" />
      Add to wishlist
    </a>
  </div>
<div className="">
    <a href="#" onClick={()=>deletePost(singlePost.id)} className="bt btn shadow rounded-pill">
      Delete
    </a>
  </div>



  <div className="">
    <Rate />
  </div>
</div>

</div>

  </div>
</div>
</div>

</div>
  
    </div>




  )
}

export default Buysingle
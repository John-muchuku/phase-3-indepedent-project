import React from 'react'

import { Link } from 'react-router-dom'
import { useContext } from "react"
import { PostContext } from "../context/PostContext"



function Buy() {


    const {posts} = useContext(PostContext)
  return (
    

<div className='container-fluid p-3 row' style={{minHeight:"50vh"}}>
  
    {
          posts && posts.length<1?
          <div className="text-info">
            There is no posts at the moment
          </div>:""
        }


{posts && posts.map((post)=>(


      <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 '>
        <div className=" card toggle border-secondary shadow rounded " style={{ width: "100%" }} >
          <img src={post.image} alt="...." className='card-img-top' style={{ objectFit: "cover", height: "200px" }} />
          <div className="card-body">
            <h5 className="card-title">{post.price}</h5>
            <h6 className=''>
              <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/marker.png" alt="marker"/> {post.location}
            </h6>
            <h6>
              <img width="23" height="23" src="https://img.icons8.com/fluency-systems-regular/48/bed.png" alt="bed" /> {post.bedrooms} 𝙱𝚎𝚍𝚛𝚘𝚘𝚖𝚜
            </h6>
            <Link to={`/Buysingle/${post.id}`} className="bt btn p-2 w-100 shadow">𝚁𝚎𝚊𝚍 𝚖𝚘𝚛𝚎</Link>
          </div>
        </div>
      </div>

))
}


  
</div>


    
  )
}

export default Buy
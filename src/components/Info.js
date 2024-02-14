import React from 'react'
import Img1 from '../images/book.jpg'
import Img2 from "../images/head.jpg"
import Img3 from "../images/paper.jpg"
import Img4 from "../images/selection.jpg"
import Img5 from "../images/graph.jpg"


const InfoData=[
    {
        img:Img1,
        p:'Learn to Look at the challenges through a different lens'
    },
    {
        img:Img3,
        p:'Learn to Look at the challenges through a different lens'
    },
    {
        img:Img4,
        p:'Learn to Look at the challenges through a different lens'
    },
    {
        img:Img5,
        p:'Learn to Look at the challenges through a different lens'
    },
    {
        img:Img2,
        p:'Learn to Look at the challenges through a different lens'
    },
]

function Info() {
  return (
    <div className='Total_Info'>
       <div className='Info_Text'>
        <h1>But,</h1>
        <h2>Why should you become a Mindful Marketer?</h2>
       </div>
       <div className='Info_Card'  data-aos="fade-right">
            {InfoData.map((Data)=>{
                const{img,p} = Data;
                return(
                    <div className='Inner_Info_Card'>
                    <img  src={img} alt='images'/>
                    <p>{p}</p>
                    </div>
                );
            })}
       </div>
    </div>
  )
}

export default Info
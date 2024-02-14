import React from 'react'
import "../App.css"
import Button from './Button'
import HeroImge from "../images/Hero.jpg"
import Card from "../components/Card"


function Home() {
  return (
    <div className='Total_Home'>
        <div className='Home_Text'>
            <img src='https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/61fd9bde8c5a65f23058bb16_GS%20Light.png' alt='logoimg' />
            <div className='Home_h1_text'>
                <h1>Discover a Consultant's Approach to Problem Solving</h1>
            </div>
            <p>Learn the proven approach used by top strategy consultants to tackle complex business challenges effectively. Solve an MBB case study LIVE with Ashwin to understand the concepts hands-on.</p>
            <div className='Home_cards'>
                <Card />
            </div>
            <Button title={"Register Now at ₹ 499 "} />
            <a href='/'>Click here to get team discount</a>

        </div>
        <div className='Home_image'>
            <img src={HeroImge} alt='' />
            <a href='/'>Instructed by</a>
        </div>
        
    </div>
  )
}

export default Home
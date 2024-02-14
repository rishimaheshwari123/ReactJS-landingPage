import React from 'react'
import AboutImage from "../images/about.jpg"



function About() {
  return (
    <div className='Total_About'>
            <div className='Cards_About'>
            <div className='Card_Text'>
            <h1>ABOUT <span>FOUNDERX</span></h1>
            <p>The world needs your creativity and ingenuity. Don't put your dreams on hold. Start your founder's journey today!</p>
            </div>
                <div className='Sub_About'>
                <img src={AboutImage} alt='imae' />
                <div className='Text_Card_About'>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p>Master a <b>structured approach</b> to building a tech venture.</p>
                    </div>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p><b>Get coached by</b> India's top 1% founders, , operators and investors.</p>
                    </div>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p><b>Learn by doing</b> - Work on actual startup ideas in a real-world startup team simulation.</p>
                    </div>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p><b>Expand your network</b> in the community of like- minded peers.</p>
                    </div>
                    <div className='Total_Bullet'>
                        <i className="fa-solid fa-caret-right"></i>
                        <p><b>Find your co-founder</b> & your core team among the fellows and alumni.</p>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default About
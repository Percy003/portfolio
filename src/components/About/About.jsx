import React from 'react'
import { getImageUrl } from "../../utils"
import './About.css'
export const About = () => {
  return (
    <section className='aContainer' id='about'>
        <h2 className='aTitle'>About</h2>
        <div className='aContent'>
            <img
            src={getImageUrl("boy.png")}
            alt='A boy standing'
            className='aBoyImage'
            />
            <ul className='aItems'>
                <li className='aItem'>
                    <div className='aItemText'>
                        <h3 className='ah3'>Skills</h3>
                        <ul >
                            <li >c++</li>
                            <li >html</li>
                            <li>javaScript</li>
                            <li>React.js</li>
                            <li>git/github</li>
                        </ul>
                    </div>
                </li>
                <li className='aItem'>
                    <div className='aItemText'>
                        <h3 className='ah3'>Education</h3>
                        <ul>
                            <li>
                            Class 10 : St. Mary's convent school,Uttarakhand, 89%  
                            </li>
                            <li>
                            Class 12 : Army Public School,Uttarakhand,65.5%(PCM with
                                cs) 
                            </li>
                            <li>
                            College :Graphic Era University,Uttarakhand,80.6%(B.Tech
                                CSE)
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

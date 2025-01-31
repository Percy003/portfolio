import React from 'react'
import { getImageUrl } from '../../utils'
import './Name.css'
export const Name = () => {
  return (
    <section className='container'>
        <div className='content'>
            <h1 className='NameTitle'>Hi, I'm <span className='snt'>Prashant</span></h1>
            <p className='pName'>I'm a passionate Web Developer</p>

        </div>
        <img src={getImageUrl("boyImage.jpg")} alt="Image" className='boyImage'/>
    </section>
  )
}


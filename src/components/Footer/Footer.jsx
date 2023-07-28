import React from 'react'
import './footer.css'
import meditation from '../../assets/meditation.png'
import swimming from '../../assets/swimming.png'
import riding from '../../assets/riding.png'
import workingOut from '../../assets/workingOut.png'

export default function Footer() {
  return (
    <footer>
      <div className='category'>
        <img className='category_img' alt='meditation' src={meditation}/>
        <img className='category_img' alt='swimming' src={swimming}/>
        <img className='category_img' alt='riding' src={riding}/>
        <img className='category_img' alt='workingOut' src={workingOut}/>
      </div>
    </footer>
  )
}

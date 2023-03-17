// ------------------------------------------------------
// Navigation Prerequisites
// ------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
// ------------------------------------------------------
// UI Style sheets
// ------------------------------------------------------
import '../../AppStyles/global.css';
import '../../AppStyles/color.css';
import '../../AppStyles/dimension.css';
import '../../AppStyles/navbar.css';
import '../../AppStyles/mediaqueries.css';
// ------------------------------------------------------
// Images
// ------------------------------------------------------
import {VscGithubAlt} from 'react-icons/vsc';
// ------------------------------------------------------
// Images
// ------------------------------------------------------
import brand from '../images/brand.svg';

function Navbar() {
  return (
    <>
      <div className="head-nav p-4 md:p-7 grid grid-cols-2 gap-20">
        <div className="brand col-span-2 md:col-span-1" >
          <img src={brand} alt="swastik bose brand" />
          <p className='font-11 subquote l-h-1 pt-11 md:pt-12 pl-1.5 f-color-9'>thinking <br />abstract for new creation</p>
          
        </div>
        <div className="routes">
          <ul className='navbar'>
            <li className='font-7 f-size-res f-color-1 pt-11 md:pt-16 lg:pt-12 md:pr-4 lg:px-0'><Link to="/">Home</Link></li>
            <li className='font-7 f-size-res f-color-1 pt-11 md:pt-16 lg:pt-12 md:pr-4 lg:px-0'><Link to="/about">About</Link></li>
            <li className='font-7 f-size-res f-color-1 pt-11 md:pt-16 lg:pt-12 md:pr-4 lg:px-0'><Link to="/skills">Skills</Link></li>
            <li className='font-7 f-size-res f-color-1 pt-11 md:pt-16 lg:pt-12 md:pr-4 lg:px-0'><Link to="/projects">Projects</Link></li>
            <li className='font-7 f-size-res f-color-1 pt-11 md:pt-16 lg:pt-12 md:pr-4 lg:px-0'><Link to="/experience">Experience</Link></li>
            <li className='font-7 f-size-res f-color-1 pt-11 md:pt-16 lg:pt-12 md:pr-4 lg:px-0'><Link to="/contact">Contact</Link></li>
            <li className='font-7 f-size-res f-color-1 pt-4 md:pt-8 lg:pt-4 md:pl-5 md:pr-5 lg:pr-0 lg:pl-12'>
              <button type='button' className='bg-color-1 p-3.5 git-btn'>
                <VscGithubAlt size={50} className='color-5' />
              </button>
            </li>
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
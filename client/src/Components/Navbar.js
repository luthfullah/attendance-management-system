import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'

const Navbar = () => {
  return (

    <nav className="bg-light-blue pa3">
      <div className="flex justify-between items-center">
        <div>
          <img className="f4 fw6 white" src={logo} height='50px' width='auto'/>
        </div>
        <div className="flex">
          <Link className="f4 link dim ph3 pv2 mb2 dib white bg-navy br-pill mr2" to="/about">About</Link>
          {/* <Link className="f4 link dim ph3 pv2 mb2 dib white bg-navy br-pill mr2" to="">C111</Link> */}
           <Link className="f4 link dim ph3 pv2 mb2 dib white bg-navy br-pill" to="/home">Go back</Link>
        </div>
      </div>
    </nav>
//     <div>
//     <nav className='bg-blue'>
    
//     <Link to="/about">C111</Link>
//     <Link to="/home">Home</Link>
    
// </nav>
// </div>
  )
}

export default Navbar

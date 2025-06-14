import React, { useState } from 'react'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navLinks = [
      {href:'#home', label: 'Home'},
      {href:'#services', label:'services'},
      {href:'#about', label: 'About Us'},
      {href:'#specialities', label: 'Our Specialities'},
      {href:'#contact', label: 'Contact'},
  
    ]


  return (

    <header className='bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <a href="/" className='flex items-center focus:outline-none focus:ring-2 focus:ring-pink-600 rounded'>Clinic</a>
      </div>


    </header>
  )
}

export default Header

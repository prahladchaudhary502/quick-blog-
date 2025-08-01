import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';

const Navbar = () => {
    const{navigate, token} = useAppContext()

  return (
    <div className='flex justify-between items-center by-5 mx-8 sm:mx-20 xl:mx-32'>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' />
       
        <div className="mt-6">
  <button onClick={()=>navigate('/admin')} className='
    flex items-center gap-2 
    rounded-full text-sm font-medium 
    cursor-pointer bg-[#5044E5] text-white 
    px-8 py-2.5 
    hover:bg-indigo-600 
    transition-all duration-300 
    shadow-md hover:shadow-lg
    active:scale-95
  '>
    {token ? 'Dashboard' : 'Login'}
    <img src={assets.arrow} className='w-3 mt-0.5' alt="arrow" />
  </button>
</div>

    </div>
  )
}

export default Navbar
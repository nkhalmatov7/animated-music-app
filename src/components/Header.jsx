import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
  const buttonStyle =
    'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]'

  return (
    <div
      id="header"
      className="bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]"
    >
      <img
        src="https://www.freepnglogos.com/uploads/beats-music-logo-png-6.png"
        alt="Logo"
        className="w-[42px] h-[42px] mb-2"
      />
      <CenterMenu />
      <div id="buttons" className="flex">
        <button className={`mr-[20px] hover:bg-[#232A4E] ` + buttonStyle}>
          Log in
        </button>
        <button className={buttonStyle + ` hover:bg-[#232A4E]`}>Sign up</button>
      </div>
    </div>
  )
}

export default Header

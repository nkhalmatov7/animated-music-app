import React from 'react'
import Feature from './Feature'
import path318 from '../assets/Path 318.png'
import Group2 from '../assets/Group 2.png'
import musicIcon from '../assets/music icon.png'
import Group4 from '../assets/Group 4.png'

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img src={path318} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon={Group2} title="For Live Music" />
        <Feature icon={musicIcon} title="For Daily Music" />
        <Feature icon={Group4} title="For Artists" />
      </div>
    </div>
  )
}

export default Experience

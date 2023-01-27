import React from 'react'
import {BsLinkedin,BsGithub} from "react-icons/bs"
import {FaWhatsapp} from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsGithub/>
        </div>
        <div>
            <FaWhatsapp/>
        </div>
        </div>
  )
}

export default SocialMedia
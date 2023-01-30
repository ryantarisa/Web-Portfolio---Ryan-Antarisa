import React from 'react'
import {BsLinkedin,BsGithub} from "react-icons/bs"
import {FaWhatsapp} from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.linkedin.com/in/ryan-antarisa-25305615b/'>
            <BsLinkedin/>
        </a>
        <a href='https://github.com/ryantarisa'>
            <BsGithub/>
        </a>
        <a href='tel:+6287885729863'>
            <FaWhatsapp/>
        </a>
        </div>
  )
}

export default SocialMedia
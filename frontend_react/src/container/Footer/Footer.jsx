import React, {useState} from 'react'
import {images} from "../../constants"
import {AppWrapp, MotionWrap} from "../../wrapper"
import {client} from "../../client"
import "./Footer.scss"


const Footer = () => {
 const [formData, setFormData] = useState({name: "", email:"", message:""})
 const [isFormSubmitted, setIsFormSubmitted] = useState(false)
 const [loading, setLoading] = useState(false)

 const {name, email, message} = formData
 const handleChangeInput = (e) => {
  const {name,value} = e.target

  setFormData({...formData, [name]: value})
 }

 const handleSubmit = () => {
  setLoading(true);

  const contact = {
    _type:"contact",
    name: name,
    email:email,
    message:message
  }

client.create(contact).then(()=>
{setLoading(false);
setIsFormSubmitted(true)})
 }


  return (
    <>
    <h2 className='head-text'>
      <p></p>
    Hit Me Up!
    <br/> Before You Go-go
    </h2>

    <div className='app__footer-cards'>
    <div className='app__footer-card'>
    <img src={images.email} alt="email" />
    <a href='mailto:ryanantarisara@gmail.com' className='p-text'>ryanantarisara@gmail.com</a>
    </div>
    <div className='app__footer-card'>
    <img src={images.mobile} alt="mobile" />
    <a href='tel:+6287885729863' className='p-text'>+62 878 8572 9863</a>
    </div>
    </div>


{!isFormSubmitted ? 
<div className='app__footer-form app__flex'>
<div className='app__flex'>
<input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
</div>
<div className='app__flex'>
<input className='p-text' type="text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
</div>
<div>
  <textarea className='p-text'
  placeholder='Your Message'
  value={message} name="message" onChange={handleChangeInput}></textarea>
</div>
<button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
</div>
: 
<div>
  <h3 className='head-text'>
Thank you for getting in touch, {name}!
  </h3>
</div>}
    </>
  )
}

export default AppWrapp (MotionWrap (Footer, "app__footer"),"contact")
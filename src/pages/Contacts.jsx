import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import Aos from 'aos';
import 'aos/dist/aos.css'


function Contacts() {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  const dispatch = useDispatch()

  const {usercontacts} = useSelector(state => state)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formdata,setFormdata] = useState({})
  const [allformdata,setAllformdata] = useState([])

  const handleSubmit= (e) => {
    e.preventDefault()
    dispatch({ type: "SENDUSER", payload: formdata })
   
  }

  const handleChange = (e) => {
    setFormdata({...formdata, [e.target.name] : e.target.value})
  }

  

  return (

    <div className='contact-page'>
      <div className="container">
        <div className="contact-page-form">
          <div className="contact-page-text">
            <h2>Veb həlli, veb dəstəyi və ya rəqəmsal böyümə ilə bağlı köməyə ehtiyacınız var?</h2>
            <h3>Bizə zəng edin: <span>+994-51-624-22-19</span></h3>
            <h3>Həftə içi açıq: <span>08:00-00:00</span></h3>
            <ul>
              <li>
                <Link to=''><i class="fa-brands fa-facebook-f"></i> </Link>
              </li>
              <li>
                <Link to=''><i class="fa-brands fa-instagram"></i> </Link>
              </li>
              <li>
                <Link to=''><i class="fa-brands fa-linkedin-in"></i> </Link>
              </li>

              <li>
                <Link to=''> <i class="fa-brands fa-twitter"></i></Link>
              </li>
            </ul>
          </div>
          <div className="contact-page-info">
            <h2 className='elaqesaxla'> Bizimlə əlaqə saxla</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" placeholder='Ad' name='ad' onChange={(e) => handleChange(e)}/>
              <input type="text" placeholder='Soyad' name='soyad' onChange={(e) => handleChange(e)}/>
              <input type="tel:" placeholder='Əlaqə nömrəniz' name='nömrə' onChange={(e) => handleChange(e)}/>
              <input type="email" placeholder='E-poçt ünvanınız' name='email' onChange={(e) => handleChange(e)}/>
              <textarea name="mesaj"  cols="20" rows="5" placeholder='Mesajınız' onChange={(e) => handleChange(e)}></textarea>
              <button>Göndər</button>
            </form>
          </div>
        </div>

        <div className="contact-page-map">
          <div className="contact-map-text">
            <h2>Biz BAKI-da yerləşirik</h2>
            <h3> <i className="fa-solid fa-location-dot"></i> <span> ADNSU, Bakı, Azərbaycan</span></h3>
            <h3><i className="fa-solid fa-phone"></i> <span>+994-51-624-22-19</span></h3>
            <h3><i className="fa-solid fa-phone"></i> <span>+994-50-667-27-00</span></h3>
            <h3> <i className="fa-solid fa-envelope"></i> <span>coffee_adnsu@gmail.com</span></h3>

          </div>
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.367624909192!2d49.84637781485404!3d40.37854417936957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7c3a641cf%3A0x53a5c1e7cc11c36f!2zQXrJmXJiYXljYW4gRMO2dmzJmXQgTmVmdCB2yZkgU8mZbmF5ZSBVbml2ZXJzaXRldGk!5e0!3m2!1saz!2s!4v1672840016674!5m2!1saz!2s" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts

import './Signup.css'

import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import axios from 'axios'


function Signup() {
    const alert = useAlert()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')

    const submitForm = async (e) => {
        e.preventDefault();
        if(!name.length || !email.length || !details.length){
            alert.show('please fill the form')
            return;
        }
        try {
            const response = await axios.post("http://localhost:8080/submit", {
                name, email, details
            })
            console.log(response.data);
            alert.success(response.data.msg)
            setName('')
            setEmail('')
            setDetails('')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">

            <header>
                <h1 id='header-txt'>Contact Us</h1>
            </header>

            <form className='contact-form' onSubmit={submitForm}>
                <label className='input-label'>Name</label>
                <br />
                <input name='name' className='input name-input' value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Enter your Full Name' required />
                <br />
                <label className='input-label'>Email</label>
                <br />
                <input name='email' className='input email-input' value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='pmohdsafu2890@gmail.com' required />
                <br />
                <label className='input-label'>DETAILS</label>
                <br />
                <input name='details' className='input details-input' value={details} onChange={e => setDetails(e.target.value)} type="text" placeholder='Enter your Project Details' required />
                <br />

                <button id='send-msg-btn'>SEND MESSAGE</button>

            </form>

            <div className="icons-main">
                <i className="fa fa-instagram social-media-icon"></i>
                <i className="fa fa-twitter social-media-icon"></i>
                <i className="fa fa-youtube-play social-media-icon"></i>
            </div>
        </div>
    )
}

export default Signup
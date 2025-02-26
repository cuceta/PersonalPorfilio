import React from 'react';
import './ContactMe.css'

const ContactMe = () => {

    return (
        <section className='contact' id='contact'>
            <h1>Contact Me!</h1>
            <form action="https://formspree.io/f/xdkaedng" method='post'>
                <div className='contact-content-wrapper'>
                    <div className='name-email-content'>
                        <div className='content'>
                            <label htmlFor="Name" hidden>
                                Name
                            </label>
                            <input type="text" name="Name" id='Name' placeholder="Name" required/>
                        </div>

                        <div className='content'>
                            <label htmlFor="Email" hidden>
                                Email
                            </label>
                            <input type="text" name="Email" id='Email' placeholder="Email" required/>
                        </div>
                    </div>


                    <div className='message-content'>
                        <label htmlFor="Message" hidden>
                            Message
                        </label>
                        <textarea name="Message" id='Message' placeholder="Message" required></textarea>
                    </div>
                </div>
                <div className="sub-buttom">
                <input className="hover-buttom" type='submit' value='submit'/>
                </div>
            </form>
        </section>
    );
}

export default ContactMe;
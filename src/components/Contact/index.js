import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import kwesforms from "kwesforms";


function Contact() {
    const [formState, setFormState] = useState({ Name: '', Email: '', Message: '' });
    const { name, email, message } = formState;

    const url = window.location.href;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        kwesforms.init();
        // window.location.reload();
    }

    return (
        <section className="contact">
            <h2>Contact me</h2>
            <form id="contact-form" className='kwes-form' action="https://kwesforms.com/api/foreign/forms/SVLUnKYagNAL4H88Y4rX" onSubmit={handleSubmit}>
                <div className="form-el">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="Name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="form-el">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="Email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="form-el message">
                    <label htmlFor="message">Message:</label>
                    <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                <button type="submit">Submit</button>
                <div>
                    {errorMessage ? <p className="error-text">{errorMessage}</p> : <p className="hidden-error">Contact</p>}
                </div>
            </form>
        </section>
    )
}

export default Contact;
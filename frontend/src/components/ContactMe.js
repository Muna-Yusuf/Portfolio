import React, { useState } from 'react';
import axios from '../axiosInstance';

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('contact/send-email/', { name, email, message });
            setStatus('Message sent successfully!');
        } catch (error) {
            setStatus('Failed to send message.');
        }
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
}

export default ContactMe;

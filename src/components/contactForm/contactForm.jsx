import {useContext, useState, useEffect } from 'react';
import "./contactForm.css";
import Button from '../button/button';

import { AppContext } from '../../contexts/AppContext';

function ContactForm() {
    const appContext = useContext(AppContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // corrigido aqui

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            setFormSubmitLoading(true);  // inicia o loading
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                        access_key: "375c2ab2-5393-401f-b715-54f4f2bb3454"
                    })
                });

                if (response.ok) {
                    setFormSubmitted(true);  // sucesso
                } else {
                    alert("Erro ao enviar");
                }
            } catch (e) {
                alert(`Erro: ${e.message}`);
            } finally {
                setFormSubmitLoading(false); // termina o loading
            }
        }
    };

    useEffect(() => {
        const isValidEmail = (email) => {   
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const isValid = 
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            isValidEmail(formData.email) &&
            formData.message.trim() !== '';

        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='contact-form d-flex fd-column '>
            <h2>{appContext.languages[appContext.language].contact.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex form-group">
                    <input
                        type="text"
                        id="name"
                        name="name" 
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        className="form-input"
                        onChange={handleChange} 
                    />
                    <input
                        type="email"
                        id="email"
                        name="email" 
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        className="form-input"
                        onChange={handleChange} 
                    />
                </div>

                <div className="d-flex form-group">
                    <textarea 
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        name="message"
                        id="message"
                        rows="4"
                        className="form-input"
                        onChange={handleChange} 
                    ></textarea>
                </div>

                <div className="al-center d-flex jc-end form-group">
                  {formSubmitted && <p className='text-primary'>{appContext.languages[appContext.language].contact.successMsg}</p> }
                    <Button 
                        type="submit"
                        buttonStyle="secondary" 
                        disabled={!isFormValid || formSubmitLoading}>
                        {appContext.languages[appContext.language].general.send}
                    </Button> 
                </div>
            </form>
        </div>
    );
}

export default ContactForm;

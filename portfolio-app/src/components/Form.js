import "./FormStyles.css";

import React, { useState } from 'react'
import Loading from './Loading';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxwU7QvrUzgrs-3zWKRi2jZwLc9mLcz6OCMVSqndOMcxC_uO5bprg1bqZ-HLqBKuTUfVg/exec', {
          method: 'POST',
          headers: {
              "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(formData),
          redirect: 'follow'
      });

      const result = await response.json();

      if (result.result === 'success') {
          alert('Thank you for joining our newsletter!');
          setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
          });
      } 
    } catch (error) {
      console.error('Submission error', error);
      //setSubmitError('An error occurred. Please try again later.');
    } finally {
      //setIsSubmitting(false);
      setIsLoading(false);
  }
  };

  return (
    <div className="form">
        {isLoading && <Loading />}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}></input>
            <label htmlFor="message">Message</label>
            <textarea rows="6" id="message" name="message" placeholder="Type your message here" value={formData.message} onChange={handleChange} />
            <button className="btn" >Submit</button>
        </form>
    </div>
  )
}

export default Form

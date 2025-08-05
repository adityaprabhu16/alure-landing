import "./FormStyles.css";

import React, { useState } from 'react'
import Loading from './Loading';
import Modal from './Modal';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

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
    setModalOpen(false);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzBQAi5FnWLEX1OklfGrvPNF-IPxRvN-V7Jsl7K4fcF7XQJ2s0s5ZQ0FiUc7Au8L1cmYw/exec', {
          method: 'POST',
          headers: {
              "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(formData),
          redirect: 'follow'
      });

      const result = await response.json();

      if (result.result === 'success') {
          setModalType('success');
          setModalMessage('Thank you for joining our newsletter! We\'ll be in touch soon.');
          setModalOpen(true);
          setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
          });
      } else {
          setModalType('error');
          setModalMessage('There was an error submitting your message. Please try again.');
          setModalOpen(true);
      }
    } catch (error) {
      console.error('Submission error', error);
      setModalType('error');
      setModalMessage('There was an error submitting your message. Please try again.');
      setModalOpen(true);
    } finally {
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
        
        {/* Success/Error Modal */}
        <Modal 
          isOpen={modalOpen}
          type={modalType}
          message={modalMessage}
          onClose={() => setModalOpen(false)}
        />
    </div>
  )
}

export default Form

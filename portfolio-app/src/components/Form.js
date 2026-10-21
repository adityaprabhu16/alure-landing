import "./FormStyles.css";

import React, { useState } from 'react'
import Loading from './Loading';
import Modal from './Modal';

const MESSAGE_MAX = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_SUCCESS = "Thanks. Your message is on its way to Alure.";

const Form = ({ fixedSubject = null, successMessage = null, source = "Contact" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: fixedSubject ?? "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
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
    setErrors(prev => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Enter your name.';
    }
    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email.';
    }
    if (!fixedSubject && !formData.subject.trim()) {
      nextErrors.subject = 'Enter a subject.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Enter a message.';
    } else if (formData.message.length > MESSAGE_MAX) {
      nextErrors.message = `Message must be ${MESSAGE_MAX} characters or fewer.`;
    }
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatusMessage('Check the highlighted fields and try again.');
      setModalOpen(false);
      return;
    }

    setErrors({});
    setStatusMessage('');
    setIsLoading(true);
    setModalOpen(false);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzBQAi5FnWLEX1OklfGrvPNF-IPxRvN-V7Jsl7K4fcF7XQJ2s0s5ZQ0FiUc7Au8L1cmYw/exec', {
          method: 'POST',
          headers: {
              "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: `${source}: ${(fixedSubject ?? formData.subject).trim()}`,
            message: formData.message.trim(),
            source
          }),
          redirect: 'follow'
      });

      const result = await response.json();

      if (result.result === 'success') {
          const confirmation = successMessage ?? DEFAULT_SUCCESS;
          setModalType('success');
          setModalMessage(confirmation);
          setStatusMessage(confirmation);
          setModalOpen(true);
          setFormData({
              name: '',
              email: '',
              subject: fixedSubject ?? '',
              message: ''
          });
      } else {
          const failure = 'There was an error submitting your message. Please try again.';
          setModalType('error');
          setModalMessage(failure);
          setStatusMessage(failure);
          setModalOpen(true);
      }
    } catch (error) {
      console.error('Submission error', error);
      const failure = 'There was an error submitting your message. Please try again.';
      setModalType('error');
      setModalMessage(failure);
      setStatusMessage(failure);
      setModalOpen(true);
    } finally {
      setIsLoading(false);
  }
  };

  return (
    <div className="form">
        {isLoading && <Loading />}
        <p className="form-status" role="status" aria-live="polite">{statusMessage}</p>
        <form id="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
            {!fixedSubject && (
              <>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && <p id="subject-error" className="field-error">{errors.subject}</p>}
              </>
            )}
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              id="message"
              name="message"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
            <button className="btn" type="submit">Submit</button>
        </form>
        
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

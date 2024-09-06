import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS

import { fadeIn } from '../../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Replace with your own EmailJS user_id, service_id, and template_id
    emailjs.sendForm('service_ki5youk', 'template_hqy43jb', e.target, 'C4XnpEjs3wG7xywLu')
      .then(
        (result) => {
          setIsSending(false);
          setSuccessMessage('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          setIsSending(false);
          setErrorMessage('Failed to send the message. Please try again.');
        }
      );
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          
          {/* Success/ Error message */}
          {successMessage && <div className="text-green-500">{successMessage}</div>}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <motion.form 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={sendEmail}  // Call sendEmail function on form submit
          >
            <div className='flex gap-x-6 w-full'>
              <input 
                type='text' 
                name="name"
                placeholder='name' 
                className='input' 
                value={formData.name}
                onChange={handleInputChange}  // Update form state on change
                required
              />
              <input 
                type='email' 
                name="email"
                placeholder='email' 
                className='input' 
                value={formData.email}
                onChange={handleInputChange} 
                required
              />
            </div>
            <input 
              type='text' 
              name="subject"
              placeholder='subject' 
              className='input' 
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea 
              name="message"
              placeholder='message' 
              className='textarea'
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button 
              type="submit"
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              disabled={isSending}
            >
              <span className={`transition-all duration-500 ${isSending ? 'opacity-0' : ''}`}>
                {isSending ? 'Sending...' : 'Let\'s Talk'}
              </span>
              <BsArrowRight 
                className={`transition-all duration-500 ${isSending ? 'opacity-0' : ''} group-hover:translate-x-2 group-hover:opacity-100`} 
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

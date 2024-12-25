import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapLocationDot } from 'react-icons/fa6';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import ContactImage from '../assets/contact-form.jpg';
import OfficeLocation from '../assets/office location.png';

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="hero-section" style={{ backgroundImage: `url(${ContactImage})` }}>
        <div className="hero-content">
          <h3 data-aos="fade-right contact-header">
            If you are interested and would like to know more about us
            and join this wonderful family, please get in touch.
          </h3>
        </div>
      </div>
      <form
        className="contact-form"
        action="https://formspree.io/f/mwkgokak"
        method="post"
        data-aos="fade-left"
        encType="multipart/form-data"
      >
        <ul>
          <li>
            <label htmlFor="firstName">First Name:</label>
            <input
              className="input-field"
              type="text"
              id="firstName"
              name="user_firstName"
              placeholder="Enter your first name"
              maxLength="30"
              required
            />
          </li>
          <li>
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="input-field"
              type="text"
              id="lastName"
              name="user_lastName"
              placeholder="Enter your last name"
              maxLength="30"
              required
            />
          </li>
          <li>
            <label htmlFor="email">Email address:</label>
            <input
              className="input-field"
              type="email"
              pattern="[^@\s]+@[^@\s]+"
              id="email"
              name="user_email"
              placeholder="Your email address"
              required
            />
            <small className="message" />
          </li>
          <li>
            <label htmlFor="subject">Subject:</label>
            <input
              className="input-field"
              type="text"
              id="subject"
              name="user_subject"
              placeholder="Subject of your message"
              maxLength="100"
              required
            />
          </li>
          <li>
            <label htmlFor="message">Message:</label>
            <textarea
              className="input-field text-area"
              name="user_message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter your message here"
              maxLength="500"
              required
            />
          </li>
          <li>
            <label htmlFor="phone">Phone Number:</label>
            <input
              className="input-field"
              type="tel"
              id="phone"
              name="user_phone"
              placeholder="Enter your phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              maxLength="12"
              required
            />
          </li>
          <li>
            <label htmlFor="resume">Attach a file (optional):</label>
            <input
              className="input-field"
              type="file"
              id="resume"
              name="user_resume"
              accept=".pdf,.doc,.docx"
            />
          </li>
          <li className="con-btn">
            <button type="submit">Get in touch</button>
          </li>
        </ul>
        <div className="location">
          <div className="company-location">
            <FaMapLocationDot />
            <p>
              Rosebank Office Park,
              181 Jan Smuts Ave,
              Rosebank, Randburg 2121.
            </p>
          </div>
          <div className="company-tel">
            <BsTelephoneFill />
            <p>
              Tel: (+27710833719)
                  (+27783266358)
              </p>
          </div>
          <div className="company-whatapp">
            <ImWhatsapp />
            <p>+27710833719</p>
          </div> 
          <div className="company-email">
            <MdEmail />
            <p>teamcrusaders@firstafricalife.co.za</p>
          </div>
          <div className="company-image">
           <img src={OfficeLocation} alt="Office Location" />
          </div> 
        </div>
      </form>
      <div className="bottom-footer flex items-center justify-center py-4 bg-gray-200">
        <span className="text-sm font-bold">
          &copy;
          <small>Team Crusaders First Africa Life PTY</small>
        </span>
      </div>
    </section>
  );
};

export default ContactUs;

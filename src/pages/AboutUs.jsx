import React, { useEffect } from 'react';
import AOS from 'aos';
import AboutLogo from '../assets/are.png';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    const aosScript = document.createElement('script');
    aosScript.src = 'vendor/aos/aos.js';
    aosScript.onload = () => {
      AOS.init();
    };
    document.head.appendChild(aosScript);

    return () => {
      document.head.removeChild(aosScript);
    };
  }, []);

  return (
    <section className="about-us-section" id="about">
      <div className="grid-wrapper">
        <div className="aboutus">
          <h2 className="title" data-aos="fade-right">About Us</h2>
          <p className="summary" data-aos="fade-left">
            Our Vision Statement is to increase the Life Insurance penetration
            rate from its current rate to 30% in gross written premiums and increase
            the average Life Insurance
            Face Value or Sum Assured per household to R500,000.
          </p>
          <div className="aboutlogo">
            <img src={AboutLogo} alt="Logo" className="about-logo" />
          </div>
        </div>

        <div className="skill-set">
          <hr />
          <ul>
            <li className="category value">
              Team Value
              <ul className="sublist">
                <li data-aos="fade-right">Responsibility</li>
                <li data-aos="fade-left">Coaching</li>
                <li data-aos="fade-right">Innovation</li>
                <li data-aos="fade-left">Ethics</li>
                <li data-aos="fade-right">Goals</li>
                <li data-aos="fade-left">Teamwork</li>
                <li data-aos="fade-right">Customers</li>
                <li data-aos="fade-left">Trust</li>
              </ul>
            </li>
            <li className="category culture">
              Team Culture
              <ul className="sublist">
                <li data-aos="fade-right">Self-starter</li>
                <li data-aos="fade-left">Discipline</li>
                <li data-aos="fade-right">Vision</li>
                <li data-aos="fade-left">Risk-taking</li>
                <li data-aos="fade-right">Leadership</li>
                <li data-aos="fade-left">Passion</li>
              </ul>
            </li>
            <li className="category people">
              People
              <ul className="sublist">
                <li data-aos="fade-right">Self-Motivated</li>
                <li data-aos="fade-left">Ability to Plan</li>
                <li data-aos="fade-right">Adaptability</li>
                <li data-aos="fade-left">Vision</li>
                <li data-aos="fade-right">Self-confidence</li>
                <li data-aos="fade-left">Uncertainty-Tolerant</li>
                <li data-aos="fade-right">Rule Breaking</li>
                <li data-aos="fade-left">Involved</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

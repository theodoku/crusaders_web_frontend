import React from 'react';
import CarPresentation from '../assets/Car.jpeg';
import ChequePresentation from '../assets/cheques.jpeg';
import TvPresentation from '../assets/TV.jpeg';
import LectureHall from '../assets/Lecture.jpeg';

const NewsBlog = () => (
  <section className="news-section">
    <div className="newsblog-wrapper">
      <div className="grid-container">
        <div className="grid-item">
          <img src={CarPresentation} alt="Car Presentation" />
          <p>Car presentation to a team member</p>
        </div>
        <div className="grid-item">
          <img src={ChequePresentation} alt="Cheque Presentation" />
          <p>Cheque presentation to team members</p>
        </div>
        <div className="grid-item">
          <img src={TvPresentation} alt="TV Presentation" />
          <p>TV presentation to a team member</p>
        </div>
        <div className="grid-item">
          <img src={LectureHall} alt="Lecture Hall" />
          <p>Training session for team members</p>
        </div>
      </div>
    </div>
  </section>
);

export default NewsBlog;

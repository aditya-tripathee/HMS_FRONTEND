import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>At ITM Hospital , the best of hospital of Maharajganj, we are a team of highly skilled healthcare professionals dedicated to providing exceptional medical care. With cutting-edge technology and patient-centered services, we deliver advanced treatments and compassionate support. Our mission is to enhance health and well-being, offering comprehensive care tailored to each individual’s needs in a trusted, healing environment.</p>
          <h4>Vision</h4>
          <p>To be a centre of excellence in teaching, training, research, innovation and medical care facilities by attracting best talents, brains and man power for the benefit of the society as a whole.</p>
          <h5>Mission</h5>
          <p>To provide exceptional, patient-focused healthcare through advanced technology, skilled professionals, and a commitment to compassion. We strive to enhance well-being, deliver innovative treatments, and create a healing environment that fosters trust, dignity, and excellence in every interaction.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;

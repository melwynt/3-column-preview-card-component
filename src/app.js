import React, { useState } from 'react';

const App = () => {
  return (
    <main>
      <div className="container">
        <div className="container__card container__card--1">
          <img
            className="container__card__icon"
            src={require('../images/icon-sedans.svg')}
            alt=""
          />
          <div className="container__card__details">
            <h1 className="container__card__details__title">Sedans</h1>
            <p className="container__card__details__description">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <div className="container__card__btn">
            <a href="" className="container__card__btn__link">
              Learn More
            </a>
          </div>
        </div>
        <div className="container__card container__card--2">
          <img
            className="container__card__icon"
            src={require('../images/icon-suvs.svg')}
            alt=""
          />
          <div className="container__card__details">
            <h1 className="container__card__details__title">SUVs</h1>
            <p className="container__card__details__description">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
          </div>
          <div className="container__card__btn">
            <a href="" className="container__card__btn__link">
              Learn More
            </a>
          </div>
        </div>
        <div className="container__card container__card--3">
          <img
            className="container__card__icon"
            src={require('../images/icon-luxury.svg')}
            alt=""
          />
          <div className="container__card__details">
            <h1 className="container__card__details__title">Luxury</h1>
            <p className="container__card__details__description">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
          </div>
          <div className="container__card__btn">
            <a href="" className="container__card__btn__link">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

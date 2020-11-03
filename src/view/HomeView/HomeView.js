import React, { useContext } from 'react';
import { WeatherContext } from '../../shared/api/WeatherApi';

import './HomeView.css';
import moment from 'moment';

export const HomeView = () => {
  const { data, sol } = useContext(WeatherContext);

  const dateFormat = (date) => {
    const newDate = moment(date).format('MMMM Do');
    return newDate;
  };

  const displayData = () => {
    if (data) {
      return sol.map((sol) => {
        if (
          data[sol].hasOwnProperty('AT') &&
          data[sol].AT.hasOwnProperty('mx')
        ) {
          return (
            <div className="weather__item">
              <h2 className="weather__item__title">
                <span className="weather__item__title--reading"></span>
                Sol <span className="weather__item__title--num"> {sol}</span>
              </h2>
              <p className="weather__item__date">
                {dateFormat(data[sol].Last_UTC)}
              </p>
              <div className="weather__item__temp__container">
                <div className="weather__item__temp">
                  <span className="weather__item__temp__title">High: </span>
                  <span className="weather__item__temp__num">
                    {Math.round(data[sol].AT.mx)}
                    <sup className="weather__item__temp__degree">&#8451;</sup>
                  </span>
                </div>
                <div className="weather__item__temp">
                  <span className="weather__item__temp__title">Low:</span>{' '}
                  <span className="weather__item__temp__num">
                    {Math.round(data[sol].AT.mn)}
                    <sup className="weather__item__temp__degree">&#8451;</sup>
                  </span>
                </div>
              </div>
              <div className="weather__item__temp__average">
                Average temperature is {Math.round(data[sol].AT.av)}
                <sup className="weather__item__temp__degree--normalize">
                  &#8451;
                </sup>
              </div>
            </div>
          );
        }
      });
    } else {
      return <h1>No data</h1>;
    }
  };

  return (
    <div>
      <main className="main__container">
        <section className="intro__container">
          <h1 className="intro__title"> Latest Weather at Elysium Planitia</h1>
          <p className="intro__paragraph">
            Another beautiful day at Mars. Clear skies and shitty air quality.
          </p>
        </section>
        <section className="weather__container">{displayData()}</section>
        <section className="apply__container">
          <h2 className="apply__title">Ready for an adventure?</h2>
          <p className="apply__paragraph">
            Admissions for our next mission are now open. Accommodation and food
            included. <em>Do you have what it takes?</em>
          </p>
          <a href="/apply" className="apply__button">
            Apply now, earthling
          </a>
          <div className="astronaut__container"></div>
        </section>
      </main>
      <footer className="footer__container">
        <p>
          * This page uses the{' '}
          <a
            href="https://mars.nasa.gov/insight/weather/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NASA Mars InSight Mission API
          </a>{' '}
          using Axios via the useEffect hook in React and storing the data using
          the useContext hook.
        </p>
      </footer>
    </div>
  );
};

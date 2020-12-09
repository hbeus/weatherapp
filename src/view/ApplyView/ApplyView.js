import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './ApplyView.css';

export const ApplyView = () => {
  const [applicationTotal, setApplicationTotal] = useState([]);

  const fetchApplications = async () => {
    const response = await Axios.get('http://localhost:3001/apply');
    setApplicationTotal(response.data);
  };

  /* const displayApplications = () => {
    if (applicationTotal) {
      return applicationTotal.map()
      }
    }
  } */

  const displayApplications = () => {
    if (applicationTotal) {
      return <h1>{applicationTotal.length}</h1>;
    } else {
      return <h1>0</h1>;
    }
  };

  const [application, setApplication] = useState({});

  const inputChange = (e) => {
    setApplication({
      [e.target.name]: e.target.value,
    });
    console.log(application);
  };

  const postApplication = (e) => {
    Axios.post('http://localhost:3001/apply', application)
      .then(() => console.log('Application created'))
      .catch((error) => {
        console.error(error);
      });
    alert(
      'Thank you for applying to our Mars mission. May the force be with you.',
    );
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div>
      <main className="main__container">
        <section className="intro__container">
          <h1 className="intro__title">
            Want to be one of the first men on Mars?
          </h1>
          <p className="intro__paragraph">
            Currently manning the spacecraft to take us on our next
            intergalactical adventure. Apply below.
          </p>
        </section>
        <section className="applications__container">
          <div className="application__item">
            <h2 className="application__item__title">
              <span className="application__item__title--num">
                {displayApplications()}
              </span>
              applicants so far…
            </h2>
          </div>
        </section>
        <section className="apply__container">
          <h2 className="apply__title">Send us your application</h2>
          <p className="apply__paragraph">Accommodation and food included.</p>
          <form onSubmit={postApplication} className="apply__form">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              placeholder="Full name"
              name="name"
              id="name"
              required
              onChange={inputChange}
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              placeholder="Age"
              name="age"
              id="age"
              required
              onChange={inputChange}
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              id="email"
              required
              onChange={inputChange}
            />
            <label htmlFor="message">Tell us why you should be selected</label>
            <textarea
              placeholder="Amuse us with your brilliance"
              name="message"
              id="message"
              required
              onChange={inputChange}
            ></textarea>
            <button type="submit" className="apply__button">
              Apply now, earthling
            </button>
          </form>
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
          the useContext hook. User applications are stored in MongoDB run via
          Node.js.
        </p>
      </footer>
    </div>
  );
};

export default ApplyView;

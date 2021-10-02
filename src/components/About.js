import Nav from './Nav';
import Footer from './Footer';
import './About.css';
import { useState } from 'react';

export default function About() {
  const [english, setEnglish] = useState(true);

  function printEng() {
    return (
      <p>
        After realizing I take pride in bettering the lives of others and along
        the way discovering a love for creating with code, I have decided to
        become a web developer.
        <br />
        <br />I want to create successful responsive websites and web apps that
        are efficient, convenient, and built with creativity. My main focus is
        front-end development, HTML, CSS, JS and related frameworks, building
        web apps, custom plugins, features, animations, and interactive layouts.
      </p>
    );
  }

  function printKor() {
    return <p>테스트입니다.</p>;
  }

  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <section className="myself">
            <div className="myself-left">
              <h1 className="title">About Me</h1>
              {english ? printEng() : printKor()}
              {/* <p>
                After realizing I take pride in bettering the lives of others
                and along the way discovering a love for creating with code, I
                have decided to become a web developer.
                <br />
                <br />I want to create successful responsive websites and web
                apps that are efficient, convenient, and built with creativity.
                My main focus is front-end development, HTML, CSS, JS and
                related frameworks, building web apps, custom plugins, features,
                animations, and interactive layouts.
              </p> */}
            </div>
            <div className="myself-right">
              <img
                className="myself-img"
                src={process.env.PUBLIC_URL + '/images/me.jpeg'}
                alt="wonseok choi"
              />
            </div>
          </section>
          <section id="skills">
            <h1 className="title">My Skills</h1>
            <div className="skills-wrap">
              <span>HTML</span>

              <span>CSS</span>

              <span>BootStrap</span>

              <span>SASS</span>

              <span>JavaScript</span>

              <span>React</span>

              <span>Redux</span>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

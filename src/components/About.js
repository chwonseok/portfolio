import Nav from './Nav';

import './About.css';

export default function About() {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <section className="myself">
            <div className="myself-left">
              <h1 className="title">About Me</h1>
              <p>
                After realizing I take pride in bettering the lives of others
                and along the way discovering a love for creating with code, I
                have decided to become a web developer.
                <br />
                <br />I want to create successful responsive websites and web
                apps that are efficient, convenient, and built with creativity.
                My main focus is front-end development, HTML, CSS, JS and
                related frameworks, building web apps, custom plugins, features,
                animations, and interactive layouts.
              </p>
            </div>
            <div className="myself-right">
              <img
                className="myself-img"
                src="../images/me.jpeg"
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
      {/* <Footer /> */}
    </>
  );
}

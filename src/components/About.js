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
        front-end development, HTML, CSS, JS and related frameworks, such as
        React, building web apps, custom plugins, features, animations, and
        interactive layouts.
      </p>
    );
  }

  function printKor() {
    return (
      <p>
        무엇을 만드는 것을 좋아하는 제가 프로그래밍으로 우리들의 삶을 조금 더
        낫게 바꿀 수 있다는 것을 깨닫고 웹개발자가 되기로 결심했습니다.
        <br />
        <br />
        따라서 창의적인 아이디어로 웹사이트 및 웹앱을 구축하여, 유저가 사용하기
        효율적이고, 편하고, 빠르길 희망합니다. 현재 저는 HTML, CSS, JS, React로
        프론트엔드 개발에 집중하고 있습니다.
      </p>
    );
  }

  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <section className="myself">
            <div className="myself-left">
              <img
                className="myself-img"
                src={process.env.PUBLIC_URL + '/images/me.jpeg'}
                alt="wonseok choi"
              />
            </div>

            <div className="myself-right">
              <h1 className="title">About Me</h1>

              <div className="language-wrap">
                <span className="language">Korean</span>
                <label className="switch">
                  <input
                    onClick={() => {
                      setEnglish(!english);
                    }}
                    type="checkbox"
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              {english ? printEng() : printKor()}
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

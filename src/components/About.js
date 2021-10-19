import Nav from './Nav';
import Footer from './Footer';
import './About.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [english, setEnglish] = useState(true);

  const printEng = () => (
    <p>
      After realizing I take pride in bettering the lives of others and along
      the way discovering a love for creating with code, I have decided to
      become a web developer.
      <br />
      <br />
      I want to create successful responsive websites and web apps that are
      efficient, user-focused, and built with creativity. My current focus is
      front-end development using HTML, CSS, JavaScript and related frameworks,
      such as React.
      <br />
      <br />
      I'm open to job opportunities where I can contribute, learn and grow. If
      you have a chance for me to join for a greater result, please feel free to
      <Link className="myself-txt" to="/contact">
        &nbsp;contact&nbsp;
      </Link>
      me.
    </p>
  );

  const printKor = () => (
    <p>
      무엇을 만들고 고치는 것을 좋아하는 제가 프로그래밍으로 우리들의 삶을 조금
      더 낫게 바꿀 수 있다는 것을 깨닫고 웹개발자가 되기로 결심했습니다. 특히,
      끊임없는 문제 해결을 통해 더욱 효과적인 유저 경험을 제공할 수 있는
      프론트엔드 업무에 큰 매력을 느꼈습니다.
      <br />
      <br />
      따라서 창의적인 아이디어를 바탕으로, 사용하기 효율적이고, 빠르고, 편한
      유저 친화적인 웹사이트와 웹앱을 제작하기 위해 노력합니다. 현재 HTML, CSS,
      JavaScript, React로 프론트엔드 개발에 집중하고 있습니다.
      <br />
      <br />
      현재 제가 공헌하고 동시에 배우며 성장할 수 있는 업무를 찾고 있습니다. 만약
      더 나은 성취에 제가 기여할 수 있는 기회가 있다면, 언제든 편하게 제게
      <Link className="myself-txt" to="/contact">
        &nbsp;연락&nbsp;
      </Link>
      바랍니다.
    </p>
  );

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
                <span className="language">한국어</span>
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
              <div>
                <span>HTML</span>
              </div>
              <div>
                <span>CSS</span>
              </div>
              <div>
                <span>BootStrap</span>
              </div>
              <div>
                <span>SASS</span>
              </div>
              <div>
                <span>JavaScript</span>
              </div>
              <div>
                <span>React</span>
              </div>
              <div>
                <span>Redux</span>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

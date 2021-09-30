import { useHistory } from 'react-router';
import './Main.css';

export default function Main() {
  const history = useHistory();
  function aboutHandler() {
    history.push('/about');
  }

  function contactHandler() {
    history.push('/contact');
  }

  function projectsHandler() {
    history.push('/projects');
  }

  return (
    <div className="container">
      <section className="main">
        <p>
          Hey<span className="wave">👋</span> I'm{' '}
          <span id="about" className="bridge" onClick={aboutHandler}></span> who
        </p>
        <div className="main-wrap">
          <div>
            <span>loves to</span>
          </div>
          <div>
            <span
              id="contact"
              className="bridge"
              onClick={contactHandler}
            ></span>
          </div>
          <div>
            <span>web</span>
          </div>
          <div>
            <span
              id="projects"
              className="bridge"
              onClick={projectsHandler}
            ></span>
          </div>
          <div>
            <span>better</span>
          </div>
        </div>
      </section>
    </div>
  );
}

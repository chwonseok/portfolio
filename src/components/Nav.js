import { useHistory } from 'react-router';

import './Nav.css';

export default function Nav() {
  const history = useHistory();
  const pathName = history.location.pathname;

  const navAbout = pathName === '/about' ? ' nav-active' : '';
  const navProjects = pathName === '/projects' ? ' nav-active' : '';
  const navContact = pathName === '/contact' ? ' nav-active' : '';

  function homeHandler() {
    history.push('/');
  }

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
    <nav>
      <div className="nav-left">
        <button className="btn btn-home" type="button" onClick={homeHandler}>
          Portfolio.
        </button>
      </div>
      <div className="nav-right">
        <button
          className={'btn' + navAbout}
          type="button"
          onClick={aboutHandler}
        >
          About
        </button>
        <button
          className={'btn' + navProjects}
          type="button"
          onClick={projectsHandler}
        >
          Projects
        </button>
        <button
          className={'btn' + navContact}
          type="button"
          onClick={contactHandler}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

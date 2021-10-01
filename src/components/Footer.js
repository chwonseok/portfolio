import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <h2>My Social</h2>
      </div>
      <div className="icons">
        <a href="https://github.com/chwonseok" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/wonseok-choi-234903221/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/chwonseok/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/chwonseok89/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
      <h3>
        Designed & Built by{' '}
        <a href="mailto:dev.chwonseok@gmail.com">Wonseok Choi</a>
      </h3>
    </footer>
  );
}

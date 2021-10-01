import Nav from './Nav';
import Footer from './Footer';

import './Contact.css';

export default function Contact() {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <section className="contact-greeting">
            <h1 className="title">Contact</h1>
            <p>
              Thanks for taking your time on my website. I'm currently open for
              any opportunities. Also, if you have a question or just want to
              say hi, don't hesitate to use the form below😉
            </p>
          </section>
          <section className="contact-wrap">
            <form
              className="gform"
              method="POST"
              data-email="dev.chwonseok@gmail.com"
              action="https://script.google.com/macros/s/AKfycbyZr9h2Xtf134ujLSAopXxkkFTXoXmmEWBkkPHH5PQtysSiPOYZiVSKM0CL11AFTEgiaQ/exec"
            >
              <div className="form-elements">
                <div className="form-personal">
                  <fieldset className="pure-group">
                    <input
                      className="form-value"
                      id="name"
                      name="name"
                      required
                      placeholder="Name"
                    />
                  </fieldset>

                  <fieldset className="pure-group">
                    <input
                      className="form-value"
                      id="email"
                      name="email"
                      type="email"
                      // value=""
                      required
                      placeholder="Email"
                    />
                  </fieldset>
                </div>

                <fieldset className="pure-group">
                  <textarea
                    className="form-value"
                    id="message"
                    name="message"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </fieldset>

                <button className="btn-submit">Send Message</button>
              </div>

              <div className="thankyou_message" style={{ display: 'none' }}>
                <h2>Thanks for the message! I'll get back to you soon!</h2>
              </div>
            </form>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

import './Projects.css';

import Nav from './Nav';
import Project from './Project';
import data from '../db/data.js';
import Footer from './Footer';

export default function Projects() {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <section className="projects">
            <h1 className="title">Projects</h1>
            {data.map((cur) => {
              return <Project key={cur.id} data={cur} />;
            })}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

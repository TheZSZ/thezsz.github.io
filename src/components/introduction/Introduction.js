import React from 'react';
import Scroll from '../common/Scroll';

import resume from '../../images/resume.pdf';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Hey👋🏽, I'm Z and I do Software Engineering.</h1>
      <h3>
        Blockchain Tech 📦⛓️🌐, Cybersecurity / Networking 🛡️🔒🔑, and
        Development Operations ⚙️💻🚀 <br />
      </h3>
      <p>
        Computer Science and Engineering graduate from <a href='https://www2.lehigh.edu/' target="_blank" rel="noopener noreferrer">Lehigh University</a>, minor
        in Economics. Former <a href='https://wordpress.lehigh.edu/blockchain/' target="_blank" rel="noopener noreferrer">Lehigh Blockchain Labs</a> member. Past president of
        the Lehigh Fencing Club🤺.
      </p>

      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more about me!
            </a>
          </Scroll>
        </li>
        <li>{/* extra spacing */}</li>
        <li>
          {' '}
          <a
            href={resume}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my Resume!
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Introduction;

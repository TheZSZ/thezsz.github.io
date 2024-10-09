import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Hey👋🏽, I'm Z and I do Software Engineering.</h1>
      <h3>
        Blockchain Tech 📦⛓️🌐,
        Cybersecurity / Networking 🛡️🔒🔑, and
        Development Operations ⚙️💻🚀 <br /></h3>
      <p>
        Computer Science and Engineering graduate from Lehigh University, minor in Economics.
        Former Lehigh Blockchain Labs member. Past president of the Lehigh Fencing Club🤺.
      </p>

      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more about me!
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;

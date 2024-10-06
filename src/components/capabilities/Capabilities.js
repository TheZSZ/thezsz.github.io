import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Experiences</h2>
      <p>
        Work Experiences outside of University
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      {/* <ul className="actions">
        <li>
          <Link className="button" to="/generic">
            Learn more
          </Link>
        </li>
      </ul> */}
    </div>
  </section>

export default Capabilities;

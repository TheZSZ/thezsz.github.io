import React from 'react';

import pic4 from '../images/soilsense.jpeg';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Hackathon: Soil Sense</h1>
          <p>
            A Google sponsored hackathon "Hack for Change" at Lehigh University
            that focused on designing and developing an innovative
            technology-driven solution to address key challenges within the
            realm of climate change, specifically targeting sustainability,
            ocean conservation, and disaster management. <br />Award: Most Likely to 
            Recieve Venture Capital Funding. 
          </p>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          {/* <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
            Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
            risus, commodo eget turpis at, elementum convallis elit.
            Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
          </p> */}
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;

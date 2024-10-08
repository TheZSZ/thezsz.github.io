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
            &emsp;A Google sponsored hackathon "Hack for Change" at Lehigh University
            that focused on designing and developing an innovative
            technology-driven solution to address key challenges within the
            realm of climate change, specifically targeting sustainability,
            ocean conservation, and disaster management. <br /> <br />
            &emsp;Our solution aimed at addressing soil contamination due to high
            phosphate levels, which pose a significant threat to agriculture and
            water ecosystems. Our proposed web application utilizes Google Cloud
            Platform's App Engine, integrating Google Maps API and Python's
            visualization tools like Matplotlib to monitor phosphate levels in
            soil. This application provides real-time data to farmers, enabling
            them to make informed decisions on fertilizer use, helping prevent
            soil degradation and eutrophication in nearby water bodies. By
            monitoring and visualizing phosphate contamination, the tool
            supports sustainable farming practices, enhancing crop yield while
            mitigating environmental harm.
            Award: Most Likely to Recieve Venture Capital Funding. <br /> <br />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                height: '100px' /* Optional height for alignment */,
              }}
            >
              <a
                href="https://lehighhacks2023.devpost.com/"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  left: '20%', // Aligns the first button 20% from the left
                }}
              >
                Hackathon Link
              </a>
              <a
                href="https://github.com/zek224/pest-control"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  right: '20%', // Aligns the second button 20% from the right
                }}
              >
                GitHub Page
              </a>
            </div>
          </p>
          <h2>Hackathon Team Photo (Building C, Lehigh University)</h2>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          <h4>
            [Excluding the two people on both ends] Left to Right: Bharath,
            Steven, Joseph, Zeeshan, Jordan
          </h4>
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

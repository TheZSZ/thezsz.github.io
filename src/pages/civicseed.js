import React from 'react';

import pic4 from '../images/pic04.jpg';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Hackathon: Civic Seed</h1>
          <p>
            An Amazon and Lutron sponser hackathon at Lehigh University and
            Lafayette College that focused on uniting the Lehigh Valley. Civic
            Seed is a platform designed to empower local communities in the
            Lehigh Valley by fostering collaboration between residents,
            businesses, and municipal representatives. Utilizing a MERN stack,
            our team developed key features including project proposal
            submission, community voting, and real-time funding tracking. We
            integrated Amazon DocumentDB for efficient data handling and
            deployed the application using AWS Elastic Container Registry and
            EC2. The platform facilitates civic engagement by allowing users to
            propose ideas, vote, and track project funding, aiming to cultivate
            meaningful community-driven change.
          </p>
          <p>Image coming soon...</p>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>

        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;

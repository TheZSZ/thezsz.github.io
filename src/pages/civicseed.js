import React from 'react';

import civicseedimg from '../images/civicseedimg.jpg';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { Link } from 'gatsby';


const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Hackathon: Civic Seed</h1>
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'right',
            }}
          >
            <a
              href="/"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the home page
            </a>
          </div>
          <br /> */}
          <p>
            &emsp;An Amazon and Lutron sponser hackathon at Lehigh University
            and Lafayette College that focused on uniting the Lehigh Valley.
            Civic Seed is a platform designed to empower local communities in
            the Lehigh Valley by fostering collaboration between residents,
            businesses, and municipal representatives. Utilizing a MERN stack,
            our team developed key features including project proposal
            submission, community voting, and real-time funding tracking. We
            integrated Amazon DocumentDB for efficient data handling and
            deployed the application using AWS Elastic Container Registry and
            EC2. The platform facilitates civic engagement by allowing users to
            propose ideas, vote, and track project funding, aiming to cultivate
            meaningful community-driven change. <br /> <br />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                height: '100px' /* Optional height for alignment */,
              }}
            >
              <a
                href="https://leh-laf-2023.devpost.com/"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  left: '20%', // Aligns the first button 20% from the left
                }}
              >
                Leh-Laf Hackathon
              </a>
              <a
                href="https://github.com/zek224/Civic-Seed"
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
          <br />
          <br />
          <p>
            Unfortunately this is the only image I have from this hackathon :/{' '}
          </p>
          <span className="image fit">
            <img src={civicseedimg} alt="" />
          </span>
          <p>
            This was the whiteboard drawing of our Amazon DocumentDB Database,
            and our upvotes and downvotes would be called Bloom / Wither!{' '}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link to="/" className="button primary">
              Go to the home page
            </Link>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;

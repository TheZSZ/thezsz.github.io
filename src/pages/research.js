import React from 'react';

import posterfair from '../images/researchposterfair.jpeg';
import posterpng from '../images/Global_Stellar_CBDC_Consensus_Poster.png';
import poster from '../images/Global_Stellar_CBDC_Consensus_Poster.pdf';
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
          <h1 className="major">
            Research: Stellar CBDC Hierarchical Consensus
          </h1>
          <p>
            &emsp;The Hierarchical Consensus project, advised by Professor Hank
            Korth, explores an approach to achieving consensus across multiple
            interconnected networks, building on the Stellar Consensus Protocol
            (SCP) and adapting it to a hierarchical, multi-network environment.
            The project aims to develop a consensus mechanism suitable for
            Central Bank Digital Currencies (CBDCs), with the ultimate goal of
            implementing a dynamic and scalable hierarchical consensus system.
            This system would allow multiple levels of consensus (e.g., parent,
            child, and grandchild networks) to communicate and coordinate
            efficiently. The project involves setting up contracts across
            testnets, ensuring cross-network communication, and leveraging
            Stellar’s smart contract platform, Soroban, for contract deployment
            and interaction. <br /> <br />
            &emsp;Throughout the project, we have developed smart contracts
            using Stellar's Soroban to support persistent storage and
            cross-network interactions. A major focus is on creating a
            decentralized identifier (DID) registry using Soroban, which ensures
            unique identification across multiple networks. The project also
            involves setting up a custom test environment, deploying contracts
            between independent testnets, and implementing cryptographic
            sortition and verification methods for secure messaging across
            networks. Future steps for future teams include expanding the
            hierarchical consensus model to support more complex network
            structures and ensuring secure and reliable communication between
            levels. <br /> <br />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                height: '100px' /* Optional height for alignment */,
              }}
            >
              <a
                href="https://www.linkedin.com/posts/lehigh-blockchain_blockchain-cbdc-stellar-ugcPost-7190729271001137152-kacZ?utm_source=share&utm_medium=member_desktop"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  left: '20%', // Aligns the first button 20% from the left
                }}
              >
                Read the LinkedIn Post!
              </a>
              <a
                href={poster}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  right: '20%', // Aligns the second button 20% from the right
                }}
              >
                See the Research Poster!
              </a>
            </div>
          </p>
          <h2>Research Poster</h2>
          <span className="image fit">
            <img src={posterpng} alt="" />
          </span>
          {/* <div className="pdf-container image fit">
            <embed
              src={poster}
              type="application/pdf"
              width="100%"
              height="910px"
              style={{ border: 'none' }}
            />
          </div> */}
          <h2>
            Team Photo at Lehigh I-DISC Poster Session (Building C, Lehigh
            University)
          </h2>
          <span className="image fit">
            <img src={posterfair} alt="" />
          </span>
          <h4>Left to Right: Adrian, Yiannis, Luke, Zeeshan</h4>
        </div>
      </section>
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

    <Footer />
  </Layout>
);

export default SecondPage;

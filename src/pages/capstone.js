import React from 'react';

import posterfair from '../images/cbdcposterfair.jpg';
import poster from '../images/Oracle_CBDC_Poster.pdf';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">
            Capstone: Adapting OpenCBDC to Leverage Oracle Blockchain Tables
          </h1>
          <p>
            Team member in an Oracle-sponsored capstone project focused on
            enhancing the OpenCBDC project from MITs Digital Currency Initiative
            and the Boston Federal Reserve. Our goal was to adapt the OpenCBDC
            platform to leverage Oracle's Blockchain Tables and Autonomous
            Database technologies. Over the course of a year, our team conducted
            extensive research and development, successfully integrating
            Oracle's blockchain capabilities into OpenCBDC, a system designed
            for Central Bank Digital Currencies (CBDCs). We utilized Oracle
            Cloud Infrastructure (OCI), Oracle Database Sharding, and Blockchain
            Tables to enhance the scalability, auditability, and security of
            OpenCBDC. <br /> <br />
            In this project, I contributed to building a front-end application
            for users to interact with the system, allowing them to manage
            wallets, process transactions, and visualize key metrics such as
            total users and transaction volume. I also worked on the backend,
            which involved designing a schema with Blockchain Tables and
            integrating it with OpenCBDC's 2-phase commit architecture for
            transaction processing. This project provided hands-on experience
            with blockchain technology, database management, and the intricacies
            of CBDC platforms, offering a unique opportunity to work closely
            with Oracle's cutting-edge technologies. <br /> <br />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                height: '100px' /* Optional height for alignment */,
              }}
            >
              <a
                href="https://blogs.oracle.com/blockchain/post/extending-cbdc-scalability-and-resilience-with-oracle-database-blockchain-tables"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  left: '20%', // Aligns the first button 20% from the left
                }}
              >
                Read the Oracle Blog Post!
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
                See the Capstone Poster!
              </a>
            </div>
          </p>
          <h2>Capstone Poster</h2>
          <div className="pdf-container image fit">
            <embed
              src={poster}
              type="application/pdf"
              width="100%"
              height="800px"
              style={{ border: 'none' }}
            />
          </div>
          <h2>
            Team Photo at Capstone Presentation (Building C, Lehigh University)
          </h2>
          <span className="image fit">
            <img src={posterfair} alt="" />
          </span>
          <h4>
            Left to Right: Nate, Bella, Daniel, Zeeshan
          </h4>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;

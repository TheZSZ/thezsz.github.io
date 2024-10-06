import React from 'react';

import pic1 from '../../images/pic01.jpg';
import pic2 from '../../images/pic02.jpg';
import pic3 from '../../images/pic03.jpg';
import hackforchange from '../../images/hackforchange.png';
import rivalry from '../../images/rivalry.png';
import opencbdc from '../../images/opencbdc.png';
import sss from '../../images/sss.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: hackforchange,
      heading: 'Hackathon: Soil Sense',
      description: 'A Google sponsored hackathon "Hack for Change" at Lehigh University that focused on designing and developing an innovative technology-driven solution to address key challenges within the realm of climate change, specifically targeting sustainability, ocean conservation, and disaster management.',
      //  Award: Most Likely to Recieve Venture Capital Funding.
      to: {
        href: '/soilsense',
        label: 'See more',
      },
    },
    {
      href: '/#',
      image: rivalry,
      heading: 'Hackathon: Civic Seed',
      description: 'An Amazon and Lutron sponsored hackathon "Le-Laf Hackathon" at Lehigh University and Lafayette College that focused on uniting the Lehigh Valley.',
      // The purpose of CivicSeed is to facilitate community-driven projects by providing a space for residents, local businesses, and municipal representatives to collaborate in the Lehigh Valley.
      to: {
        href: '/civicseed',
        label: 'See more',
      },
    },
    {
      href: '/#',
      image: opencbdc,
      heading: 'Capstone: Adapting OpenCBDC to Leverage Oracle Blockchain Tables',
      description: 'An Oracle sponsored capstone project aimed at adapting the OpenCBDC project by the MIT Digital Currency Initiative and the Boston Federal Reserve to leverage Oracle Blockchain Tables.',
      //  Spent a year researching and developing a system that connected OpenCBDC to Oracle\'s services and created a frontend to interact with the system.
      to: {
        href: 'https://blogs.oracle.com/blockchain/post/extending-cbdc-scalability-and-resilience-with-oracle-database-blockchain-tables',
        label: 'See more',
      },
    },
    {
      href: '/#',
      image: sss,
      heading: 'Research: Stellar CBDC Hierarchical Consensus',
      description: 'Graduate level research in Lehigh\'s Blockchain Labs on using Stellar to create a hierarchical consensus to model a global cross-CBDC payment solution.',
      // Currently employing Soroban Smart Contracts to create a proof of concept.
      to: {
        href: '/comingsoon',
        label: 'See more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;

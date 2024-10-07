import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Smart Contract Developer @ Metaiye Media - July 2024 - Present',
      description: 'Smart Contract Developer at Metaiye Media, developing iQubes layerless blockchain protocol and leading LayerZero integrations.',
      iconClass: 'fa-chain',
    },
    {
      heading: 'Engineering Intern @ Authentic8 - Summer 2023',
      description: 'Worked in-person in the Research Engineering Team to research and develop new tools and features for the Silo Browser.',
      iconClass: 'fa-code',
    },
    {
      heading: 'A8Labs Intern @ Authentic8 - December 2022 - March 2023',
      description: 'Worked online during the winter in the A8Labs Team to research and develop new toolsets and features for company applications.',
      iconClass: 'fa-cog',
    },
    {
      heading: 'Lehigh Computer Science Grader - August 2022 - December 2023',
      description: 'Grader for Software Engineering Lifecycle course at Lehigh University, CSE216. Mentoring students with their group projects through the semester.',
      iconClass: 'fa-diamond',
    },
    {
      heading: 'A8Labs Intern @ Authentic8 - Summer 2022',
      description: 'Authentic8 is a cybersecurity company that provides a secure virtual browser called Silo. Worked in-person over the summer in the A8Labs Team to research and develop new toolsets and features for company applications.',
      iconClass: 'fa-desktop',
    },
    // {
    //   heading: 'Corem ipsum amet',
    //   description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
    //   iconClass: 'fa-chain',
    // },
    // {
    //   heading: 'Norem ipsum amet',
    //   description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
    //   iconClass: 'fa-diamond',
    // },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;

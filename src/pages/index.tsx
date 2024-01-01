import * as React from "react"
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import type { HeadFC, PageProps } from "gatsby"
import resume from "./resume.pdf"

const buttonContainerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end', // Align button to the right
  flex: '0 0 auto', // Do not grow or shrink
};

const textContainerStyles: React.CSSProperties = {
  flex: '1', // Take up the remaining space
};

// Button Hover Styles
const buttonHoverStyles = {
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
  transform: 'translateY(-2px)',
};

// Button Active Click Styles
const buttonActiveStyles = {
  transform: 'translateY(1px)',
  boxShadow: '0 2px 14px rgba(0, 0, 0, 0.2)',
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 620,
}

const paragraphStyles = {
  fontSize: 18,
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  listStyleType: "none",
  marginBottom: 24,
  marginRight: 400,

}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: 'none'
}

const yellowLinkStyle = {
  color: "yellow",
  fontWeight: "bold",
  textDecoration: 'none'
}
const redLinkStyle = {
  color: "red",
  fontWeight: "bold",
  textDecoration: 'none'
}
const greenLinkStyle = {
  color: "green",
  fontWeight: "bold",
  textDecoration: 'none'
}
const brownLinkStyle = {
  color: "brown",
  fontWeight: "bold",
  textDecoration: 'none'
}
const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const docLinks = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/zeeshan-sayed-khan/",
    color: "#8954A8",
  },
  {
    text: "Personal GitHub",
    url: "https://github.com/TheZSZ/",
    color: "#8954A8",
  },
  {
    text: "University GitHub",
    url: "https://github.com/zek224/",
    color: "#8954A8",
  },
  {
    text: "Resume",
    url: resume,
    // href: {resume},
    color: "#8954A8",
  },
  {
    text: "Contact Me",
    url: "/contact",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}


const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const projects = [
  {
    text: "Hackathon: Soil Sense",
    url: "https://devpost.com/software/soil-sense",
    // https://github.com/zek224/pest-control?tab=readme-ov-file#problem-statement
    // description:
    //   "A Google sponsored hackathon at Lehigh University that focused on designing and developing an innovative technology-driven solution to address key challenges within the realm of climate change, specifically targeting sustainability, ocean conservation, and disaster management. Award: Most Likely to Recieve Venture Captial Funding.",
    descriptionHtml: () => (
      <span>
        A <a href="https://about.google/" style={brownLinkStyle} target="_blank" rel="noopener noreferrer">Google</a> sponsored hackathon <a href="https://lehighhacks2023.devpost.com/" style={brownLinkStyle} target="_blank" rel="noopener noreferrer">"Hack for Change"</a> at Lehigh University that focused on designing and developing an innovative technology-driven solution to address key challenges within the realm of climate change, specifically targeting sustainability, ocean conservation, and disaster management. <a href="https://devpost.com/software/soil-sense" style={brownLinkStyle} target="_blank" rel="noopener noreferrer">Award: Most Likely to Recieve Venture Capital Funding.</a>
      </span>
    ),
    color: "brown",
  },
  {
    text: "Hackathon: Civic Seed",
    url: "https://devpost.com/software/civicseed",
    // https://github.com/zek224/Civic-Seed
    // description:
      // "An Amazon and Lutron sponsored hackathon at Lehigh University and Lafayette College that focused on uniting the Lehigh Valley. The purpose of CivicSeed is to facilitate community-driven projects by providing a space for residents, local businesses, and municipal representatives to collaborate in the Lehigh Valley.",
      descriptionHtml: () => (
        <span>
          An <a href="https://www.amazon.com/" style={greenLinkStyle} target="_blank" rel="noopener noreferrer">Amazon</a> and <a href="https://www.lutron.com/" style={greenLinkStyle} target="_blank" rel="noopener noreferrer">Lutron</a> sponsored hackathon <a href="https://leh-laf-2023.devpost.com/" style={greenLinkStyle} target="_blank" rel="noopener noreferrer">"Le-Laf Hackathon"</a> at Lehigh University and Lafayette College that focused on uniting the Lehigh Valley. The purpose of CivicSeed is to facilitate community-driven projects by providing a space for residents, local businesses, and municipal representatives to collaborate in the Lehigh Valley.",
        </span>
      ),      
      color: "green",
  },
  {
    text: "Capstone: Adapting Project Hamilton OpenCBDC to Leverage Oracle Blockchain Tables",
    url: "https://github.com/zek224/oracle-port-opencbdc-tx",
    // description:
      // "An Oracle sponsored capstone project aimed at adapting the OpenCBDC project by the MIT Digital Currency Initiative and the Boston Federal Reserve to leverage Oracle Blockchain Tables. Spent a year researching and developing a system that connected OpenCBDC to Oracle's services and created a frontend to interact with the system.",
      descriptionHtml: () => (
        <span>
          An <a href="https://www.oracle.com/" style={redLinkStyle} target="_blank" rel="noopener noreferrer">Oracle</a> sponsored capstone project aimed at adapting the <a href="https://dci.mit.edu/project-hamilton-building-a-hypothetical-cbdc" style={redLinkStyle} target="_blank" rel="noopener noreferrer">OpenCBDC project</a> by the <a href="https://dci.mit.edu/" style={redLinkStyle} target="_blank" rel="noopener noreferrer">MIT Digital Currency Initiative</a> and the <a href="https://www.bostonfed.org/" style={redLinkStyle} target="_blank" rel="noopener noreferrer">Boston Federal Reserve</a> to leverage <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/newft/oracle-blockchain-table.html#GUID-E98A43F9-871B-4BBF-A96D-832ADC392B38" style={redLinkStyle} target="_blank" rel="noopener noreferrer">Oracle Blockchain Tables</a>. Spent a year researching and developing a system that connected OpenCBDC to Oracle's services and created a frontend to interact with the system.
        </span>
      ),
      color: "red",
  },
  {
    text: "Research: Stellar CBDC Hierarchical Consensus",
    url: "https://stellar.org/",
    // description:  
      // "Doing research in Lehigh's Blockchain Labs on using Stellar to create a hierarchical consensus to model a global cross-CBDC payment solution. Currently employing Soroban Smart Contracts to create a proof of concept.",
    descriptionHtml: () => (
      <span>
        Doing research in Lehigh's Blockchain Labs on using <a href="https://stellar.org/" style={yellowLinkStyle} target="_blank" rel="noopener noreferrer">Stellar</a> to create a hierarchical consensus to model a global cross-CBDC payment solution. Currently employing <a href="https://soroban.stellar.org/" style={yellowLinkStyle} target="_blank" rel="noopener noreferrer">Soroban Smart Contracts</a> to create a proof of concept.
      </span>
    ),  
    color: "yellow",
  },
]

const experience = [
  {
    text: "A8Labs Intern @ Authentic8 - Summer 2022, Winter 2022 - Winter 2023",
    url: "https://authentic8.com/",
    description:
      "Authentic8 is a cybersecurity company that provides a secure virtual browser called Silo. Worked in-person over the summer and online during the winter in the A8Labs Team to research and develop new toolsets and features for company applications.",
    color: "blue",
  },
  {
    text: "Engineering Intern @ Authentic8 - Summer 2023",
    url: "https://authentic8.com/",
    description:
      "Worked in-person in the Research Engineering Team to research and develop new tools and features for the Silo Browser.",
    color: "blue",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  // State to manage the current theme
  const [theme, setTheme] = useState("dark");
  // State to manage hover style
  const [isHovered, setIsHovered] = useState(false);
  // State to manage active style
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  const headingAccentStyles = {
    color: theme === 'dark' ? "#8346c1" : "#663399",
  }

  // Styles that depend on the theme state must be inside the component
  const mainStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start', // Align items at the start of the container vertically
    justifyContent: 'space-between', // Space between items
    padding: '96px', // Add your desired padding
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
    color: theme === 'dark' ? '#ffffff' : '#232129',
    backgroundColor: theme === 'dark' ? '#232129' : '#ffffff',
  };

  const projectTitleStyle: React.CSSProperties = {
    fontWeight: 'bold',
    // textDecoration: 'underline',
    fontSize: '26px',
    marginBottom: '20px',
    color: theme === 'dark' ? '#FFF' : '#232129',

  };
  

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  // Define the button styles within the component so it has access to the `theme` state
  const buttonStyles = {
    padding: "5px 15px",
    fontSize: "35px",
    color: "#FFF",
    backgroundColor: theme === "dark" ? "#8346c1" : "#663399",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
    marginTop: "20px", // Add space above the button
    ...(isHovered && { boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", transform: "translateY(-2px)" }),
    ...(isActive && { transform: "translateY(1px)", boxShadow: "0 2px 14px rgba(0, 0, 0, 0.2)" }),
  };

  const descriptionStyle: React.CSSProperties = {
    color: theme === 'dark' ? '#ffffff' : '#232129', // Dynamic color based on theme
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  };

  const logoContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center', // Aligns the image and text vertically in the center
    gap: '10px', // Adds some space between the image and the text
  };

  // Define the button styles within the component
  const toggleButtonStyles = {
    ...buttonStyles, // Spread the base styles
    backgroundColor: theme === "dark" ? "#8346c1" : "#663399", // Conditional background color
    color: theme === "dark" ? "#FFF" : "#333", // Conditional text color
  };
  return (
    <main style={mainStyles}>
      
      <div style={textContainerStyles}>

        <h1 style={headingStyles}>
          Hey👋🏽, I'm Z and I do a Software Engineering. I focus on{" "}
          <br />
          <span style={headingAccentStyles}>— Blockchain Tech 📦⛓️🌐</span>
          <br />
          <span style={headingAccentStyles}>— Cybersecurity 🛡️🔒🔑</span>
          <br />
          <span style={headingAccentStyles}>— Development Operations ⚙️💻🚀</span>
          <br />
        </h1>
        <p style={paragraphStyles}>
          Senior @ <a href="https://www2.lehigh.edu" style={linkStyle} target="_blank" rel="noopener noreferrer">Lehigh University</a> studying Computer Science and Engineering, minor in Economics. <br />
          Researcher in Lehigh's <a href="https://wordpress.lehigh.edu/blockchain/" style={linkStyle} target="_blank" rel="noopener noreferrer">Blockchain Labs</a>. President of the Lehigh Fencing Club🤺.
        </p>
        <ul style={doclistStyles}>
          {docLinks.map(doc => (
            <li key={doc.url} style={docLinkStyle}>
              <a
                style={linkStyle}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"                
              >
                {doc.text}
              </a>
            </li> 
          ))}
        </ul>

      <p style={projectTitleStyle}>
        Projects: <br />
        <ul style={listStyles}>
        {projects.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
                <br />
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              {/* <p style={descriptionStyle}>{link.description}</p> */}
              {/* <p style={descriptionStyle}>{link.descriptionHtml()}</p> */}
              {
                link.description
                  ? <p style={descriptionStyle}>{link.description}</p>
                  : <p style={descriptionStyle}>{link.descriptionHtml()}</p>
              }
            </span>
          </li>
        ))}
      </ul>
      </p>

      <p style={projectTitleStyle}>
        Experience: <br />
        <ul style={listStyles}>
          {experience.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                  <br />
                </a>
                  {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </p>

      {/* <p style={projectTitleStyle}>
        Education: <br />
        P.C. Rossin College of Engineering and Applied Science <br />
        Computer Science and Engineering <br />
        Economics Minor <br />
        Lehigh University, Class of 2024 <br />
        Bethlehem, Pennsylvania.
      </p> */}
      <div style={logoContainerStyles}>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
      <span>Website built w/ <a style={linkStyle} href='https://www.gatsbyjs.com/' target="_blank" rel="noopener noreferrer">Gatsby</a> and hosted on <a style={linkStyle} href='https://pages.github.com/' target="_blank" rel="noopener noreferrer">GitHub Pages</a>.</span>
      </div>

      </div>
      <div style={buttonContainerStyles}>
        <button
          style={toggleButtonStyles}
          onClick={toggleTheme}
          onMouseEnter={e => Object.assign(e.currentTarget.style, buttonHoverStyles)}
          onMouseLeave={e => Object.assign(e.currentTarget.style, buttonStyles)}
          onMouseDown={e => Object.assign(e.currentTarget.style, buttonActiveStyles)}
          onMouseUp={e => Object.assign(e.currentTarget.style, buttonHoverStyles)}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Z's Site</title>
    {/* Any other head elements here */}
  </Helmet>
);
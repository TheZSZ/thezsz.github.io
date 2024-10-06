import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      <li>
        <h3>Address</h3>
        <span>
          {/* 12345 Somewhere Road #654 */}
          {/* <br /> */}
            Bay Area, California
          <br />
          USA
        </span>
      </li>
      <li>
        <h3>Email</h3>
        <a href="/#">zeesayedkhan@gmail.com</a>
      </li>
      {/* <li>
        <h3>Phone</h3>
        <span>(000) 000-0000</span>
      </li> */}
      <li>
        <h3>Social</h3>
        <ul className="icons">
          {/* <li>
            <a href="/#" className="fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li> */}
          {/* <li>
            <a href="/#" className="fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li> */}
          <li>
            <a href="https://github.com/TheZSZ" className="fa-github" target="_blank" rel="noopener noreferrer">
              <span className="label">GitHub</span>
            </a>
          </li>
          {/* <li>
            <a href="/#" className="fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li> */}
          <li>
            <a href="https://www.linkedin.com/in/zeeshan-sayed-khan/" className="fa-linkedin" target="_blank" rel="noopener noreferrer">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;

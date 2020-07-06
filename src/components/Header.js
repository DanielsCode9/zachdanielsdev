import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    {/* <div className="logo">
      <span className="icon fa-laptop-code"></span>
    </div> */}
    <div className="content">
      <div className="inner">
        <h1>Zach Daniels</h1>
        <p>
          Information Systems Student at Brigham Young University
          <br />
          Currently employed with{" "}
          <a href="https://cwo.byu.edu/">BYU's Creative Works Department.</a>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              <Link to="../pages/page-2" />;
              // props.onOpenArticle("work");
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;

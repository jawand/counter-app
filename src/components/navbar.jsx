import React from "react";

// Stateless Functional Component

const NavBar = props => {
  const { totalCounters } = props; // Object Destructuring
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

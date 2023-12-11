import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Ylatunniste = (props) => {
  const { versio } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0">
      <div
        style={{
          backgroundColor: "darkblue",
          color: "white",
        }}
        className="container"
      >
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Alkuun
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lisaa" className="nav-link">
                Lisää urheilijatieto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tietoa" className="nav-link">
                Tietoa
              </Link>
            </li>
          </ul>
        </div>
        <pre>Versio {versio} </pre>
      </div>
    </nav>
  );
};
Ylatunniste.defaultProps = {
  versio: "1.0",
};
Ylatunniste.propTypes = {
  turvataso: PropTypes.string.isRequired,
};
export default Ylatunniste;

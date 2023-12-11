import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import urheilijatContext from "../context/UrheilijatContext";
import { useNavigate } from "react-router-dom";

const Urheilijatieto = (props) => {
  const UrheilijatContext = useContext(urheilijatContext); //hooks
  let history = useNavigate();
  const [naytaUrheilijatieto, setnaytaUrheilijatieto] = useState(false);

  const onDeleteClick = (id) => {
    UrheilijatContext.poistaUrheilija(id);
    //window.location.reload();
    //history("/");
  };
  const onShowClick = (e) => {
    let lippu = !naytaUrheilijatieto;
    setnaytaUrheilijatieto(lippu);
  };
  const {
    id,
    nimi,
    kutsumanimi,
    syntymaaika,
    paino,
    linkki,
    laji,
    saavutukset,
  } = props.urheilija;
  return (
    <div className="card card-body mb-3 display:flex, justifyContent: flex-end">
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h4>{nimi}</h4>
        <button className="button_left" onClick={onShowClick.bind(this)}>
          O
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className="btn-group mr-2 text-right"
          role="group"
          aria-label="Second group"
        >
          <button
            className="button_right"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>
          <Link to={`/muokkaa/${id}`}>
            <button className="button_right">Muokkaa</button>
          </Link>
        </div>
      </div>
      {naytaUrheilijatieto ? (
        <ul className="list-group">
          <li className="list-group-item">Kutsumanimi: {kutsumanimi}</li>
          <li className="list-group-item">Syntymäaika: {syntymaaika}</li>
          <li className="list-group-item">Paino: {paino}</li>
          <li className="list-group-item">Linkki: {linkki}</li>
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
        </ul>
      ) : null}
    </div>
  );
};
/*Puhelintieto.propTypes = {
yhteystieto: PropTypes.object.isRequired,
//deleteClickHandler: PropTypes.func.isRequired,//ei tarvita enää
};*/
export default Urheilijatieto;

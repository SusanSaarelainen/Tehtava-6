import React from "react";
import { useNavigate } from "react-router-dom";
import urheilijatContext from "../context/UrheilijatContext";
import { useState, useContext } from "react";
import "./components.css";

export default function LisaaUrheilija() {
  let history = useNavigate();
  const [nimi, setNimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymaaika, setSyntymaaika] = useState("");
  const [paino, setPaino] = useState("");
  const [linkki, setLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  //const [virheet, setVirheet] = useState({});
  const UrheilijatContext = useContext(urheilijatContext); //hooks

  const handleSubmit = async (e) => {
    const uusiUrheilija = {
      nimi: nimi,
      kutsumanimi: kutsumanimi,
      syntymaaika: syntymaaika,
      paino: paino,
      linkki: linkki,
      laji: laji,
      saavutukset: saavutukset,
    };
    console.log("Tarkistetaan uusiUrheilija-objekti:");
    console.log(uusiUrheilija);

    UrheilijatContext.setUrheilijat(uusiUrheilija);
    history("/");
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilija</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimitieto">Nimi</label>
            <input
              id="nimitieto"
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä etu- ja sukunimi..."
              value={nimi}
              onChange={(event) => setNimi(event.target.value)}
              //error={virheet.nimi}
            />
            <div className="invalid-feedback">Täytä etu- ja sukunimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="kutsumanimitieto">Kutsumanimi</label>
            <input
              id="kutsumanimitieto"
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={(event) => setKutsumanimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä kutsumanimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="syntymaaikatieto">Syntymäaika</label>
            <input
              id="syntymaaikatieto"
              type="text"
              name="syntymaaika"
              className="form-control form-control-lg"
              placeholder="Syötä syntymäaika muodossa VUOSI-KUUKAUSI-PÄIVÄ (esim. 2000-04-18)..."
              value={syntymaaika}
              onChange={(event) => setSyntymaaika(event.target.value)}
              //error={virheet.puhelin}
            />
            <div className="invalid-feedback">Täytä sukunimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="painotieto">Paino</label>
            <input
              id="painotieto"
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
            />
            <div className="invalid-feedback">Täytä paino</div>
          </div>
          <div className="form-group">
            <label htmlFor="linkkitieto">Linkki</label>
            <input
              id="linkkitieto"
              type="text"
              name="linkki"
              className="form-control form-control-lg"
              placeholder="Syötä linkki..."
              value={linkki}
              onChange={(event) => setLinkki(event.target.value)}
            />
            <div className="invalid-feedback">Täytä linkki</div>
          </div>
          <div className="form-group">
            <label htmlFor="lajitieto">Laji</label>
            <input
              id="lajitieto"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={(event) => setLaji(event.target.value)}
            />
            <div className="invalid-feedback">Täytä laji</div>
          </div>
          <div className="form-group">
            <label htmlFor="saavutustieto">Saavutukset</label>
            <input
              id="saavutustieto"
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>
          <input
            type="submit"
            value="Lisää urheilijatieto"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import urheilijatContext from "../context/UrheilijatContext";

const MuokkaaUrheilijatieto = () => {
  const [nimi, setNimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymaaika, setSyntymaaika] = useState("");
  const [paino, setPaino] = useState("");
  const [linkki, setLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [list, setList] = useState([]);
  const UrheilijatContext = useContext(urheilijatContext); //hooks
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    /*let mounted = true;
    if (mounted) {
      const urheilija = UrheilijatContext.getUrheilija(id).then((res) => {
        setEtunimi(res.etunimi);
        setSukunimi(res.sukunimi);
      });
    } else mounted = false;
  }, []);*/
    const haeUrheilijaData = async () => {
      try {
        const urheilijaData = await UrheilijatContext.getUrheilija(id);
        setNimi(urheilijaData.nimi);
        setKutsumanimi(urheilijaData.kutsumanimi);
        setSyntymaaika(urheilijaData.syntymaaika);
        setPaino(urheilijaData.paino);
        setLinkki(urheilijaData.linkki);
        setLaji(urheilijaData.laji);
        setSaavutukset(urheilijaData.saavutukset);
      } catch (error) {
        console.error(error);
      }
    };

    haeUrheilijaData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paivitettyUrheilijatieto = {
      nimi: nimi,
      kutsumanimi: kutsumanimi,
      syntymaaika: syntymaaika,
      paino: paino,
      linkki: linkki,
      laji: laji,
      saavutukset: saavutukset,
    };

    UrheilijatContext.setUrheilija(id, paivitettyUrheilijatieto);
    //console.log(paivitettyUrheilijatieto);
    history("/");
    //window.location.reload();
  };
  const onChangeNimi = (e) => {
    setNimi(e.target.value);
  };
  const onChangeKutsumanimi = (e) => {
    setKutsumanimi(e.target.value);
  };
  const onChangeSyntymaaika = (e) => {
    setSyntymaaika(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeLinkki = (e) => {
    setLinkki(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijatieto</div>
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
              onChange={onChangeNimi}
            />
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
              onChange={onChangeKutsumanimi}
            />
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
              onChange={onChangeSyntymaaika}
            />
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
              onChange={onChangePaino}
            />
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
              onChange={onChangeLinkki}
            />
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
              onChange={onChangeLaji}
            />
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
              onChange={onChangeSaavutukset}
            />
          </div>
          <input
            type="submit"
            value="Muokkaa urheilijatieto"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaUrheilijatieto;

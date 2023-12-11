import React, { useContext, useEffect, useState } from "react";
import Urheilijatieto from "./Urheilijatieto";
import urheilijatContext from "../context/UrheilijatContext";

const Urheilijatiedot = () => {
  const UrheilijatContext = useContext(urheilijatContext); //hooks
  const [urheilijaLista, setUrheilijaLista] = useState([]);

  //console.log(UrheilijatContext);

  useEffect(() => {
    //kun komponentti ladataan muistiin -> tapaht. useEffect
    const haeData = async () => {
      await UrheilijatContext.getUrheilijat(); //haetaan urheilijat
      setUrheilijaLista(UrheilijatContext.urheilijat || []);
      //console.log(UrheilijatContext);
    };
    haeData();
  }, [UrheilijatContext.urheilijat]); //Kun komponentti piirretään, suoritetaan kerran
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-black">Urheilijatiedot</span>
      </h1>
      <React.Fragment>
        {Array.isArray(urheilijaLista) && urheilijaLista.length
          ? urheilijaLista.map((urheilija) => (
              <Urheilijatieto key={urheilija.id} urheilija={urheilija} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default Urheilijatiedot;

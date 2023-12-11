import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import UrheilijatContext from "./UrheilijatContext";
import { GET_URHEILIJAT } from "./types";
import axios from "axios";
const GlobalState = (props) => {
  //initial state
  let initialState = {
    urheilijat: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const getUrheilijat = async () => {
    try {
      let res = await axios.get("http://localhost:3000/urheilijat");
      let { data } = res;
      dispatch({ type: GET_URHEILIJAT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3000/urheilijat/" + id;
      //alert(sql);
      let res = await axios.get(sql);
      let { data } = res;
      console.log("GET_URHEILIJA:");
      //dispatch({ type: "GET_URHEILIJA", payload: res.data });
      dispatch({ type: "GET_URHEILIJA", payload: data });
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const setUrheilijat = async (uusiUrheilija) => {
    try {
      const res = await axios
        .post(`http://localhost:3000/lisaa`, uusiUrheilija)
        .then((res) => {
          dispatch({ type: "ADD_URHEILIJA", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const setUrheilija = async (id, paivitettyUrheilija) => {
    try {
      const res = await axios
        .put(`http://localhost:3000/urheilijat/${id}`, paivitettyUrheilija)
        .then((res) => {
          dispatch({ type: "EDIT_URHEILIJA", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const poistaUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3000/urheilijat/" + id["id"];
      const res = await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_URHEILIJA", payload: id["id"] });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UrheilijatContext.Provider
      value={{
        urheilijat: state.urheilijat,
        getUrheilijat,
        setUrheilijat,
        setUrheilija,
        poistaUrheilija,
        getUrheilija,
      }}
    >
      {props.children}
    </UrheilijatContext.Provider>
  );
};
//};
export default GlobalState;

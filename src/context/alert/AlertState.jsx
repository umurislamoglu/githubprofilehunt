import React, { useReducer, useState } from "react";
import AlertReducer from "../alert/AlertReducer";
import AlertContext from "../alert/AlertContext";


const AlertState = (props) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg,type) => {
      dispatch({
          type: "SET_ALERT",
          payload:{msg,type}
      })
      setTimeout(() => {
          dispatch({type:"REMOVE_ALERT"})
      },3000)
  }
  
  
  return (
    <AlertContext.Provider
      value={{
        alert:state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

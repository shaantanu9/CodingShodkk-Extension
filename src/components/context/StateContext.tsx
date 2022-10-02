import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState: any = {
  token: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

export const StateContext = createContext(typeof initialState);
const StateContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <StateContext.Provider value={{ state, dispatch }}>
    <>{children}</>
    // </StateContext.Provider>
  );
};

export default StateContextProvider;

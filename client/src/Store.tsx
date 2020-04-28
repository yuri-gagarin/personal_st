import React from "react";


const initialState = {};
export const Store = React.createContext(initialState);
export const StoreProvider = (props: any): JSX.Element => {
  return (
    <Store.Provider value={"test"}>
      {props.children}
    </Store.Provider>
  )
};
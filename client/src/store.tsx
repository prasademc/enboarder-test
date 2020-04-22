import React from "react";
import { IState, IAction } from "./interface";

const initialState: IState = {
  capsules: [],
  landingpad: {}
};

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_CDATA":
      return { ...state, capsules: action.capload };
    case "FETCH_LPDATA":
      return { ...state, capsules: action.landingpad };
    default:
      return state;
  }
}

export const Store = React.createContext<IState | any>(initialState);

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

import React, { Dispatch } from 'react';
import {initialState, Actions} from '_modules/reducers'

const reducer = (state: any, action: any) => {
  const getAction = Actions[action.type];
  const updateAction = getAction(state, action);
  return { ...state, ...updateAction };
};
// Initialize state and dispatch with default values to prevent errors from typescript 
let state: any;
let dispatch: Dispatch<any> = function(){};
export const Store = React.createContext({state, dispatch});

export function StoreProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch }; 
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export const UserConsumer = Store.Consumer;

import { Children, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザーの状態を定義
const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

//状態をグローバルで管理する
export const AuthCotext = createContext(initialState);

export const AUthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthCotext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthCotext.Provider>
  );
};

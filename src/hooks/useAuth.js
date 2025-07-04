import { useContext } from "react";
import { AuthContext } from "../contexts/authReducer";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  return {
    ...state,
    dispatch,
  };
};

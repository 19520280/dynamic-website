import { createContext, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AccountState$,
  LoginModalState$,
  RegisterModalState$,
} from "../redux/selectors/index";
import * as actions from "../redux/actions/index";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  //#region loginModal
  const loginModal = useSelector(LoginModalState$);

  const [loginModalState, setLoginModalState] = useState(loginModal.isShow);

  const openLoginModal = useCallback(() => {
    setLoginModalState(true);
    dispatch(actions.openLoginModal());
  }, [dispatch]);

  const closeLoginModal = useCallback(() => {
    setLoginModalState(false);
    dispatch(actions.closeLoginModal());
  }, [dispatch]);
  //#endregion

  //#region registerModal
  const registerModal = useSelector(RegisterModalState$);

  const [registerModalState, setRegisterModalState] = useState(registerModal.isShow);

  const openRegisterModal = useCallback(() => {
    setRegisterModalState(true);
    dispatch(actions.openRegisterModal());
  }, [dispatch]);

  const closeRegisterModal = useCallback(() => {
    setRegisterModalState(false);
    dispatch(actions.closeRegisterModal());
  }, [dispatch]);
  //#endregion

  //#region user info
  useEffect(() => {
    dispatch(actions.getAccount());
  }, [dispatch]);

  const user = useSelector(AccountState$);

  const [userData, setUserData] = useState(user);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const login = useCallback(() => {
    setUserData({ ...userData, isLoggedin: true });
    console.log("Ok")
    dispatch(actions.login());
  }, [dispatch]);

  const logout = useCallback(() => {
    setUserData({ ...userData, isLoggedin: false });
    dispatch(actions.logout());
  }, [dispatch]);
  //#endregion

  const authContextData = {
    loginModalState,
    openLoginModal,
    closeLoginModal,
    registerModalState,
    openRegisterModal,
    closeRegisterModal,
    userData,
    setUserData,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

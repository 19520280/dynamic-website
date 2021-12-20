import { createContext, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AccountState$,
  LoginModalState$,
  OTPModalState$,
  RegisterModalState$,
  WelcomeModalState$,
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
    console.log(registerModalState);
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

  //#region OTPModal
  const OTPModal = useSelector(OTPModalState$);

  const [OTPModalState, setOTPModalState] = useState(OTPModal.isShow);

  const openOTPModal = useCallback(() => {
    setOTPModalState(true);
    dispatch(actions.openOTPModal());
  }, [dispatch]);

  const closeOTPModal = useCallback(() => {
    setOTPModalState(false);
    dispatch(actions.closeOTPModal());
  }, [dispatch]);
  //#endregion

  //#region WelcomeModal
  const welcomeModal = useSelector(WelcomeModalState$);

  const [welcomeModalState, setWelcomeModalState] = useState(welcomeModal.isShow);

  const openWelcomeModal = useCallback(() => {
    setWelcomeModalState(true);
    dispatch(actions.openWelcomeModal());
  }, [dispatch]);

  const closeWelcomeModal = useCallback(() => {
    setWelcomeModalState(false);
    dispatch(actions.closeWelcomeModal());
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
    OTPModalState,
    openOTPModal,
    closeOTPModal,
    welcomeModalState,
    openWelcomeModal,
    closeWelcomeModal,
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

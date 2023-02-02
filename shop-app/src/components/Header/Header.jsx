import { Logo } from "./Logo/Logo";
import { Search } from "./Search/Search";
import { Route, Routes } from "react-router-dom";
import "./Header.css";
import { Cart } from "./Cart/Cart";
import { LoginButton } from "./LoginButton/LoginButton";
import { UserInfoContext } from "../../contexts/UserInfoProvider";
import { useContext } from "react";

export const Header = () => {

  const { userInfo, logout } = useContext(UserInfoContext);


  return (
    <div className="Header container py-3">
      <div className="row">

        <div className="col-1 text-center">
          <Logo height="2em" width="3em" />
        </div>

        <div className="col-9 align-content-center d-flex">
          <Search />
        </div>
        <div className="col-1">
          <LoginButton loggedIn={userInfo.loggedIn} logout={logout}/>
        </div>

        <div className="col-1">
          <Cart />
        </div>
      </div>
    </div>
  );
};

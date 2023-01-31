import { Logo } from './Logo/Logo'
import { Search } from './Search/Search'
import { Route, Routes } from "react-router-dom";
import './Header.css'

export const Header = () => {
  return (
    <div className="Header container py-3">
      <div className="row">
        <div className="col-1 text-center">
          <Logo height="2em" width="3em"/>
        </div>
        <div className="col-11 align-content-center d-flex">
          <Search />
        </div>
      </div>
    </div>
  );
}

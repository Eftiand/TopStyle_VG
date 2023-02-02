import { NavLink } from "react-router-dom";


export const LoginButton = ({loggedIn, logout}) => {

    let styleButton = {
        textSize: "1em",
    };
    

  if(loggedIn){
      return (
          <>
            <a onClick={logout} style={styleButton} className="btn text-center p-1">
              <i className="bi bi-person-fill me-1"></i>
              <span>Logout</span>
            </a>
          </>
        );
  }

  return (
    <>
      <NavLink to="/Login" style={styleButton} className="btn text-center p-1">
        <i className="bi bi-person-fill me-1"></i>
        <span>Login</span>
      </NavLink>
    </>
  );
}

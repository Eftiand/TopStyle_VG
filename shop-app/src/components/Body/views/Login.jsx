import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../../contexts/UserInfoProvider";

export const Login = () => {
  const { checkLogin, userInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const styleButton = {
    textSize: "1em",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: "50%",
  };

  const handleLogin = () => {
    checkLogin({ userName: username, password: password });
  };

  useEffect(() => {
    if (userInfo.loggedIn) {
      handleRedirect();
    }

  }, [userInfo.loggedIn]);  

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="container w-50">
      <div className="row mt-5 ">
        <h3>Login</h3>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Username" value={username} onChange={event =>setUsername(event.target.value)} />
        </div>
        <h5>Password</h5>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              #
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={event =>setPassword(event.target.value)}
          />
        </div>
        <div className="col-6">
          <a
            className="btn btn-primary"
            style={styleButton}
            onClick={handleLogin}
          >
            Login
          </a>
          <NavLink to='/Register' className="mt-1">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

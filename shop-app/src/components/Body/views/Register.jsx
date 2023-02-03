import React, { useState, useContext } from "react";
import { ApiContext } from "../../../contexts/ApiProvider";
import { useNavigate } from "react-router-dom";

export const Register = () => {


    const navigate = useNavigate();
    let {addNewUser} = useContext(ApiContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = addNewUser(user);

        if(res.id) {
            navigate('/');
        }
    };


  return (
    <>
      <div className="container text-center">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="username"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

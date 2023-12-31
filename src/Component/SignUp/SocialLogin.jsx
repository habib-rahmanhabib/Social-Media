import React from 'react';
import { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';


const SocialLogin = () => {
    const {googleLogin,  updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        googleLogin()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(loggedUser.photoURL)
          const saveUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            photoURL : loggedUser.photoURL
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
                // navigate(from, { replace: true });
            });
           
        });
        
      };

    return (
        <div className="mx-auto ">
                <button onClick={handleLogin}  className="btn btn-circle  ">
                  <img
                    className="w-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                    alt=""
                  />
                </button>
              </div>
    );
};

export default SocialLogin;
import { useForm } from "react-hook-form";

import { useContext, useState } from "react";


import { Link, useNavigate } from "react-router-dom";


import Swal from "sweetalert2";


import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../Provider/AuthProviders";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [erroror, setError] = useState('')
    console.log(erroror)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data.photoURL)
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { display: data.name, email: data.email, profileURL: data.photoURL };
                       console.log(saveUser);
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(saveUser),
                        })
                            .then((res) => res.json())
                            .then((datas) => {
                                if (datas.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "success",
                                        title: "Create account succesfully",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });

                                }
                            });
                        // navigate("/");
                    })
                    .then((error) => {
                        console.log(error);

                    });
                navigate("/");
            })
            .catch((error) => {

                console.log(error)
            });
    };
    //   console.log(errors);

    const [errorPass, setErrorPass] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState("")
    console.log(password)


    const checkValidation = (e) => {
        const confPass = e.target.value;
        setConfirmPassword(confPass);
        if (password !== confPass) {
            setErrorPass("password don't match")
        }
        else {
            setErrorPass("password don't match")
        }
    }


    return (
        <div>
           
            
            <div className=" mt-11" data-aos="fade-up">
                <div className=" w-10/12 md:w-5/12 lg:w-6/12 mx-auto  ">
                    <div className="card  w-full  shadow-2xl bg-slate-600 text-black">
                        <h2 className="text-center pt-5 text-3xl text-sky-500 ">
                            Please Sign up
                        </h2>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        {...register("name", { required: true, maxLength: 80 })}
                                        className="input input-bordered text-black"
                                    />
                                    {errors.name && <p className="text-red-500">name required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        {...register("email", { required: true, maxLength: 80 })}
                                        className="input input-bordered text-black"
                                    />
                                    {erroror ? <><p className="text-red-500">already use this email</p></> : ' '}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input

                                        defaultValue={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="password"
                                        {...register("password", {
                                            required: true,
                                            maxLength: 80,
                                            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/
                                        })}
                                        className="input input-bordered text-black"
                                    />
                                    {
                                        errors.password?.type === 'required' &&
                                        <p className="text-red-500">Passwors required</p>
                                    }
                                    {
                                        errors.password?.type === 'minLength' &&
                                        <p className="text-red-500">Passwors must be 6 characters</p>
                                    }
                                    {
                                        errors.password?.type === 'maxLength' &&
                                        <p className="text-red-500">Passwors must be less than 20 characters</p>
                                    }
                                    {
                                        errors.password?.type === 'pattern' &&
                                        <p className="text-red-500">Passwors must be one uppercase one lowercase one spicial characters</p>
                                    }

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">
                                            Confirm Password
                                        </span>
                                    </label>
                                    <input
                                        defaultValue={confirmPassword}
                                        onChange={(e) => checkValidation(e)}

                                        type="password"

                                        placeholder="password"
                                        {...register("confirmPassword", {
                                            required: true,
                                            maxLength: 80,
                                            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/
                                        })}
                                        className="input input-bordered text-black"
                                    />
                                    {
                                        errors.confirmPassword?.type === 'required' &&
                                        <p className="text-red-500">Passwors required</p>
                                    }

                                    {
                                        errors.confirmPassword?.type === 'pattern' &&
                                        <p className="text-red-500">Don't match password</p>
                                    }
                                    {/* {
                                        errors.confirmPassword?.type === 'minLength' &&
                                        <p className="text-red-500">Passwors must be 6 characters</p>
                                    }
                                    {
                                        errors.confirmPassword?.type === 'maxLength' &&
                                        <p className="text-red-500">Passwors must be less than 20 characters</p>
                                    }
                                    {
                                        errors.confirmPassword?.type === 'pattern' &&
                                        <p className="text-red-500">Passwors must be one uppercase one lowercase one spicial characters</p>
                                    } */}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="photo url"
                                        {...register("photoURL", {
                                            required: true,
                                        })}
                                        className="input input-bordered text-black"
                                    />
                                    {errors.photoURL && (
                                        <p className="text-red-500">photo URL required</p>
                                    )}
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        value="Sign up"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
                            <p className="mt-3 text-white">
                                already have an acccout?{" "}
                                <Link to="/login">
                                    {" "}
                                    <span className="text-red-500">Login</span>
                                </Link>{" "}
                            </p>
                            <div className="divider text-white">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

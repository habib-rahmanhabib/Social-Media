import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const loginFormHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const formValue = { email, password };
        form.recet()
        console.log(formValue)


    }

    return (
        <div>

            <div className=" py-10 flex items-center justify-center bg-gradient-to-r bg-rose-50">
                <div className="bg-white p-8 rounded-md shadow-md w-80">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
                        Please Login!
                    </h2>
                    <form onSubmit={loginFormHandler}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-semibold"
                            >
                                Email Address:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className="w-full mt-2 p-2 border rounded-md "
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-semibold"
                            >
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                className="w-full mt-2 p-2 border rounded-md "
                                placeholder="Your Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full  bg-purple-500 text-white p-1 rounded-md"
                        >
                            Login
                        </button>
                    </form>
                    <p><small>Don't have account?  <Link className='text-green-500 underline' to="/signUp"> SignUp </Link> </small></p>
                </div>
            </div>

        </div>
    );
};

export default Login;
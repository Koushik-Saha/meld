import React, {useState} from "react"
import './Login.scss'
import {useForm} from "react-hook-form";
import axios from "axios";

const Login = () => {

    const { register, handleSubmit } = useForm();

    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const onSubmit = (data) => {

        const loginData = {
            email: data.email,
            password: data.password
        }
        setIsButtonLoading(true)
        axios.post("http://35.201.2.209:8000/login", loginData)
            .then(res => {
                setIsButtonLoading(false)
                window.localStorage.setItem("__CUSTOMER_TOKEN__", res.data)
            }).catch(err => {
                console.log(err)
                setIsButtonLoading(false)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"><img
                                    src="https://i.imgur.com/uNGdWHi.png" className="image" alt="image_value"/></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                </div>
                                <div className="row px-3"><label className="mb-1">
                                    <h6 className="mb-0 text-sm">Email Address</h6>
                                </label> <input className="mb-4" type="text" name="email" {...register("email", { required: true })}
                                                placeholder="Enter a valid email address"/></div>
                                <div className="row px-3"><label className="mb-1">
                                    <h6 className="mb-0 text-sm">Password</h6>
                                </label> <input type="password" name="password" {...register("password", { required: true })} placeholder="Enter password"/></div>
                                <div className="row mb-3 px-3">
                                    {
                                        isButtonLoading ?
                                            <button className="btn btn-primary btn-block" disabled>
                                                <span className="spinner-border spinner-border-sm mr-2"></span> Log in
                                            </button>
                                            :
                                            <button type="submit" className="btn btn-blue text-center">Login</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    );
}
export default Login

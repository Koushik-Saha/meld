import React, {useState} from "react"
import axios from "axios";
import {useForm} from "react-hook-form";
import '../Auth/Login/Login.scss'

const Notify = () => {

    const { register, handleSubmit } = useForm();

    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const loggedIn = localStorage.getItem("__CUSTOMER_TOKEN__")

    const onSubmit = (data) => {

        const formData = {
            name: data.name,
            email: data.email,
            repoUrl: data.repoUrl,
            message: data.message,
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${loggedIn}` ,
            "Access-Control-Allow-Origin": "*",
        }

        setIsButtonLoading(true)
        axios.post("http://35.201.2.209:8000/notify", formData, {
            headers: headers
        })
            .then(res => {
                setIsButtonLoading(false)
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
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Name</h6>
                                        </label>
                                        <input className="mb-4" type="text" name="name" {...register("name", { required: true })}
                                                    placeholder="Enter a name"/>
                                    </div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Email Address</h6>
                                        </label>
                                        <input className="mb-4" type="email" name="email" {...register("email", { required: true })}
                                               placeholder="Enter a valid email address"/>
                                    </div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Repo URL</h6>
                                        </label>
                                        <input className="mb-4" type="url" name="repoUrl" {...register("repoUrl", { required: true })}
                                               placeholder="Enter a repo url"/>
                                    </div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Message</h6>
                                        </label>
                                        <textarea className="mb-4" name="message" {...register("message", { required: true })}
                                               placeholder="Enter a message"/>
                                    </div>
                                    <div className="row mb-3 px-3">
                                        {
                                            isButtonLoading ?
                                                <button className="btn btn-primary btn-block" disabled>
                                                    <span className="spinner-border spinner-border-sm mr-2"></span> Log in
                                                </button>
                                                :
                                                <button type="submit" className="btn btn-blue text-center">Submit</button>
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
export default Notify

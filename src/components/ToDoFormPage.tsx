"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ToDoFormPage = () => {
    // interface IFormvalue {
    //     name: string;
    //     email: string;
    //     password: string;
    //     confirmpassword: string;
    // }
    const myState = {
        name:"",
        email: "",
        password: "",
        Confirmpassword: "",
        phone: "",
    };

    const [formValue, setFormValue] = useState(myState);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);
    const router = useRouter();

    const emailRegax = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // useEffect(() => {
    //     const isAuthenticated = localStorage.getItem("isAuthenticated");
    //     if (isAuthenticated === "true") {
    //         router.push("/dashboard-page");
    //     }
    // }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors(true);

        if (
            formValue.email.length > 0 &&
            emailRegax.test(formValue.email) &&
            formValue.password.length >= 6 &&
            formValue.Confirmpassword.length >= 6 &&
            formValue.phone.length ===10
        ) {
            setErrors(false);
            Swal.fire({
                title: "Success",
                text: "Login successful!",
                icon: "success",
                confirmButtonText: "OK",
            // }).then(() => {
            //     localStorage.setItem("isAuthenticated", "true");
            //     router.push("/dashboard-page");
            });
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center pb-10 px-4 pt-[30px]">
                <div className="container md:max-w-[600px] mx-auto">
                    <form className="pt-[31px] " onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-black text-base font-medium">FirstName</label>
                            <input type="text"
                                name="text"
                                value={formValue.name}
                                onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
                                className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                                placeholder="FirstName" />
                            <p className="text-red-500">
                                {errors && formValue.name.length === 0
                                    ? "Required"
                                    : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="text-black text-base font-medium">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formValue.email}
                                onChange={(e) =>
                                    setFormValue({ ...formValue, email: e.target.value })
                                }
                                className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                                placeholder="Email"
                            />
                            <p className="text-red-500">
                                {errors && formValue.email.length === 0
                                    ? "Email is requried and must be unique"
                                    : !emailRegax.test(formValue.email) &&
                                        formValue.email.length > 0
                                        ? "Enter a valid email"
                                        : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="text-black text-base font-medium">PhoneNumber</label>
                            <input type="number"
                                name="number"
                                value={formValue.phone}
                                onChange={(e) => setFormValue({ ...formValue, phone: e.target.value })}
                                className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                                placeholder="PhoneNumber" />
                            <p className="text-red-500">
                                {errors && formValue.phone.length === 0
                                    ? "Required"
                                    :formValue.phone.length<10 &&
                                    formValue.phone.length > 0 &&
                                    formValue.phone.length !== 10
                                        ? "Give a valid Number"
                                        : ""}
                            </p>
                        </div>
                        <div className=" mb-4">
                            <label className="text-black text-base font-medium">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formValue.password}
                                onChange={(e) =>
                                    setFormValue({ ...formValue, password: e.target.value })
                                }
                                className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                                placeholder="••••••••"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            </div>
                            <p className="text-red-500">
                                {errors && formValue.password.length === 0
                                    ? "Password is required"
                                    : formValue.password.length < 6 &&
                                        formValue.password.length > 0
                                        ? "Password must be at least 6 characters"
                                        : ""}
                        </p>
                    </div>
                    <div className=" mb-4">
                        <label className="text-black text-base font-medium">Confirm Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={formValue.Confirmpassword}
                                onChange={(e) =>
                                    setFormValue({ ...formValue, Confirmpassword: e.target.value })
                                }
                                className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                                placeholder="••••••••"
                            />
                            <span
                                onClick={toggleConfirmPasswordVisibility}
                                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                       </div>
                        <p className="text-red-500">
                            {errors && formValue.Confirmpassword.length === 0
                                ? "Confirm Your Password"
                                : formValue.Confirmpassword.length > 0 && formValue.password !== formValue.Confirmpassword
                                    ? "Passwords do not match"
                                    : ""}
                        </p>
                    </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white p-3 mt-6 rounded-lg hover:bg-slate-500 transition-all duration-700"
                        >
                            Sign In
                        </button>
                </form>
                </div>
            </div>
    );
};

export default ToDoFormPage;
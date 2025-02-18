"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ToDoFormPage = () => {
    interface IFormvalue {
        name: string;
        email: string;
        password: string;
        confirmpassword: string;
        phone: string;
    }

    const myState: IFormvalue = {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        phone: "",
    };

    const [formValue, setFormValue] = useState<IFormvalue>(myState);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState(false);
    const [duplicateEmailError, setDuplicateEmailError] = useState(false);
    const [submittedData, setSubmittedData] = useState<IFormvalue[]>([]);

    const emailRegax = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleDelete = (index: number) => {
        const newData = [...submittedData];
        newData.splice(index, 1);
        setSubmittedData(newData);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors(true);
        setDuplicateEmailError(false); 

        if (
            formValue.email.length > 0 &&
            emailRegax.test(formValue.email) &&
            formValue.password.length >= 6 &&
            formValue.confirmpassword.length >= 6 &&
            formValue.phone.length === 10
        ) {
            if (isDuplicateEmail(formValue.email)) {
                setDuplicateEmailError(true);
                setErrors(false);
                return;
            }

            setErrors(false);
            setSubmittedData([...submittedData, formValue]);
            setFormValue(myState);
            Swal.fire({
                title: "Success",
                text: "Successfully Submitted!",
                icon: "success",
                confirmButtonText: "OK",
            });
        }
    };

    const isDuplicateEmail = (email: string) => {
        return submittedData.some(data => data.email === email);
    };

    return (
       <>
            <div className="flex justify-center items-center gap-3 py-10">
                <Link href={"/test/question-1/dashboard"} className="text-white bg-black px-4 py-2 rounded-xl hover:bg-white hover:text-black border border-black transition-all duration-500 ">
                    Question-1
                </Link>
                <Link href={"/test/question-2/dashboard"} className="text-white bg-black px-4 py-2 rounded-xl hover:bg-white hover:text-black border border-black transition-all duration-500">
                    Question-2
                </Link>
            </div>
         <div className="flex justify-center items-center pb-10 px-4 pt-[30px]">
            <div className="container lg:max-w-[750px] md:max-w-[650px] mx-auto">
                <form className="pt-[31px]" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="text-black text-base font-medium">FirstName</label>
                        <input
                            type="text"
                            name="name"
                            value={formValue.name}
                            onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
                            className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                            placeholder="FirstName"
                        />
                        <p className="text-red-500">
                            {errors && formValue.name.length === 0 ? "Required" : ""}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="text-black text-base font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={formValue.email}
                            onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                            className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                            placeholder="Email"
                        />
                        <p className="text-red-500">
                            {errors && formValue.email.length === 0
                                ? "Email is required"
                                : !emailRegax.test(formValue.email) && formValue.email.length > 0
                                    ? "Enter a valid email"
                                    : ""}
                        </p>
                        {duplicateEmailError && (
                            <p className="text-red-500">This email is already registered.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="text-black text-base font-medium">Phone Number</label>
                        <input
                            type="number"
                            name="phone"
                            value={formValue.phone}
                            onChange={(e) => setFormValue({ ...formValue, phone: e.target.value })}
                            className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                            placeholder="Phone Number"
                        />
                        <p className="text-red-500">
                            {errors && formValue.phone.length === 0
                                ? "Required"
                                : formValue.phone.length !== 10 && formValue.phone.length > 0
                                    ? "Give a valid Number"
                                    : ""}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="text-black text-base font-medium">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formValue.password}
                                onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
                                className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                                placeholder="••••••••"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <p className="text-red-500">
                            {errors && formValue.password.length === 0
                                ? "Password is required"
                                : formValue.password.length < 6 && formValue.password.length > 0
                                    ? "Password must be at least 6 characters"
                                    : ""}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="text-black text-base font-medium">Confirm Password</label>
                        <div className="relative">
                            <input
                                name="confirmpassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={formValue.confirmpassword}
                                onChange={(e) => setFormValue({ ...formValue, confirmpassword: e.target.value })}
                                className="placeholder:text-gray w-full mt-[6px] text-gray border-lightGray rounded-lg border p-4"
                                placeholder="••••••••"
                            />
                            <span
                                onClick={toggleConfirmPasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <p className="text-red-500">
                            {errors && formValue.confirmpassword.length === 0
                                ? "Confirm Your Password"
                                : formValue.confirmpassword !== formValue.password && formValue.confirmpassword.length > 0
                                    ? "Passwords do not match"
                                    : ""}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white p-3 mt-6 rounded-lg hover:bg-slate-500 transition-all duration-700"
                    >
                        Submit
                    </button>
                </form>

                {submittedData.length > 0 && (
                    <div className="overflow-x-auto mt-10">
                        <table className="mt-10 w-full border-collapse border border-gray-300 ">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">First Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Email</th>
                                    <th className="border border-gray-300 px-4 py-2">Phone</th>
                                    <th className="border border-gray-300 px-4 py-2">Password</th>
                                    <th className="border border-gray-300 px-4 py-2">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submittedData.map((data, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 px-4 py-2">{data.name}</td>
                                        <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                                        <td className="border border-gray-300 px-4 py-2">{data.phone}</td>
                                        <td className="border border-gray-300 px-4 py-2">{data.password}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <button onClick={() => handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            </div>
        </>
    );
};

export default ToDoFormPage;

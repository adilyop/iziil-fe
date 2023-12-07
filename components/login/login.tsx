import React, { useState } from "react";
// import axiosInstance from "../../services/httpInterceptor";
// import { useHistory } from "react-router-dom";
// import "./Login.scss";
import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/router";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit() {
    login();
  }
  function navigateTo(url: any) {
    // history.push(url);
    Router.push(url);
  }

  function login() {
    const url = `${API_URL}/login`;
    // const url = 'http://localhost:4000/login'
    const data = { username: email, password };
    axios
      .post(url, data)
      .then((response: any) => response.data)
      .then((result: any) => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("refreshToken", result.refreshToken);
        localStorage.setItem("patientID", result.user_type.item._id);
        localStorage.setItem("userType", JSON.stringify(result.user_type));
        const kind = result.user_type.kind;
        switch (kind) {
          case "patients":
            console.log("kind ", kind);
            navigateTo("/board/dashboard");
            break;
          case "doctors":
            break;
          default:
            break;
        }
      });
  }
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={!validateForm()}
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Wollal Corp. All rights reserved.
      </p>
    </div>
  );
}

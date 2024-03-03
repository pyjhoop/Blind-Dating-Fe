import React, { useState } from 'react';
import { changeUser } from "../store";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { login, getUserList } from '../api/LoginApi';

const Login = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerUserId = (event) => {
    setId(event.target.value);
  }  

  const handlerPassword = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = async () => {
    try {
      const res = await login(id, password);
      dispatch(changeUser(res.data));
      navigate("/main");
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className="flex w-full h-screen  justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full h-screen max-w-md">
        <form className="bg-white w-full pt-28 h-full shadow-lg rounded px-8">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-center mb-2" style={{color:"#532054"}}>BLIND-DATING</h1>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-10" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder='email'
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-800">Forgot Password?</a>
            </div>
          </div>
          <div className="mb-4">
            <button onClick={handleLogin} type='button' className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-200 ease-in-out">
              CONTINUE
            </button>
          </div>
          <div className="my-4">
            <div className="border-b border-gray-300"></div>
            <div className="flex justify-center -mt-3">
              <span className="bg-white px-4 text-sm text-gray-500">Or</span>
            </div>
          </div>
          <div className="space-y-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-200 ease-in-out">Google</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-200 ease-in-out" style={{backgroundColor:"#FEE500"}}>Kakao</button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-200 ease-in-out" style={{backgroundColor:"#03C75A"}}>Naver</button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              New User? <a href="#" className="font-bold text-blue-500 hover:text-blue-800" onClick={()=> {navigate("/register")}}>SIGN UP HERE</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

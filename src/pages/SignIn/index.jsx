import React from "react";
import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";
import insta from "../../assets/images/instagram.svg";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

export const SignIn = () => {
  return (
    <div className="px-4 lg:px-10 mx-auto">
      <div className="box-shadow my-20 p-4 lg:p-10 max-w-3xl mx-auto rounded-[10px]">
        <div className=" flex flex-col items-center">
          <h2 className=" pt-20 lg:pt-0 mb-6">
            <span className="text-2xl lg:text-3xl font-semibold ">
              <span className="gradient font-black">Login </span> your Account
            </span>
          </h2>
          <p className="text-xl mb-6">With</p>
          <div className="mb-6 w-full">
            <div className="mb-10">
              <div className="grid lg:grid-cols-2 gap-3 mb-3 lg:mb-6">
                <div className="mb-3">
                  <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="flex gradient items-center justify-center gap-4 px-4 w-full lg:px-10 py-5 font-medium text-xl border border-[#F42A3E] rounded-md box-shadow2"
                      >
                        <img src={google} alt="google" /> Login With Google
                      </button>
                    )}
                    // onSuccess={responseGoogle}
                    // onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                <div className="mb-3">
                  <button className="flex gradient items-center justify-center gap-4 px-4 w-full lg:px-10 py-5 font-medium text-xl border border-[#F42A3E] rounded-md box-shadow2">
                    <img src={facebook} alt="google" /> Login With facebook
                  </button>
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-center">
                  <button className="flex gradient justify-center items-center gap-4 px-4 w-full lg:px-10 py-5 font-medium text-xl border border-[#F42A3E] rounded-md box-shadow2">
                    <img src={insta} alt="google" /> Login With instagrame
                  </button>
                </div>
              </div>
            </div>
            <button className="gradient2 p-4 w-full rounded-[10px] text-[22px] font-bold text-white">
              Login
            </button>
          </div>
          <h4 className="text-[#686868] font-xl">
            You Don't have any account?{" "}
            <span className="gradient">
              <Link to="/signup">Signup </Link>
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

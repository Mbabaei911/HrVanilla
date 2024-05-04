import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";


function ModalComponent({ modalShowing }) {
  const [signUpShowing, setSignUpShowing] = useState(false);
  const [forgetPasswordShow, setForgetPasswordShow] = useState(false);
  const [resetingPassword, setResetingPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
     
      if (window.localStorage.getItem("email")) {
        setEmail(window.localStorage.getItem("email"));
        setPassword(window.localStorage.getItem("password"));
        setRememberMe(true);
      }
    }
  }, []);

  /////////////////
  //////sign in submit function
  const handleSubmitFormOnSignIn = (e) => {
    e.preventDefault();
    const gettingFromDb = async () => {
      try {
        const response = await axios.get("http://localhost:3005/signUp");
        const finding = response.data.find((x) => {
          return x.email === email && x.password === password;
        });
        if (finding) {
          setSignInSuccess(true);
        }
      } catch (error) {
        setSignInSuccess(false);
      }
    };
    gettingFromDb();
  };
  // Handle form submission
  const handleSubmitFormOnSignUp = (e) => {
    e.preventDefault();
    if (signUpShowing) {
      if (!emailError && email.length > 0) {
        // If the user's credentials are valid, store them in the localStorage
        const sendingToDb = async () => {
          await axios.post("http://localhost:3005/signUp", {
            email: `${email}`,

            password: `${password}`,
          });
        };
        sendingToDb();
        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("rememberMe", rememberMe);
          
          setEmail("");
          setPassword("");
          setRememberMe(false);
          setSignUpShowing(false);
        } else {
          // Remove the user's credentials from the localStorage if the "Remember Me" checkbox is not selected
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          localStorage.removeItem("rememberMe");
         
        }

    
      }
    } 
   
  };
  /////////////////////
  ////handling email error
  const handleEmail = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    if (
      inputValue.length > 0 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)
    ) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  ////////////
  ////handle password input
  const handlePassword = (e) => {
    setPassword(e.target.value);

    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      const passwordIsValid = passwordRegex.test(password);

      // Set the error message based on the validation result
      if (!password || password.length < 1) {
        setPasswordError("Please enter a valid password");
      } else if (!passwordIsValid) {
        setPasswordError(
          "The password must be at least 8 characters long, containing at least one lowercase, one uppercase, and one number."
        );
      } else {
        setPasswordError("");
      }

      return passwordIsValid;
    };

    setIsValidPassword(validatePassword(password));
  };

  return (
    <section className="bg-black/80 absolute w-screen h-screen z-50">
      <div
        className="w-full h-full absolute top-0 left-0 z-10"
        onClick={() => {
          modalShowing(false);
        }}
      ></div>
      {signInSuccess ? (
        <div className="bg-white w-96 flex items-center rounded-lg justify-center mt-[20%] mx-auto">
          <div
            class="px-2 py-5 w-full text-lg text-blue-800 rounded-lg  text-center "
            role="alert"
          >
            ✌ dear <span class="font-bold">{email} </span> welcome to VanillaHR
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div className="w-full z-20  bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="px-6 pt-4 flex items-center justify-center ">
              <Link
                href="/"
                className="flex items-center justify-between text-2xl font-semibold  w-full "
                onClick={() => {
                  modalShowing(false);
                }}
              >
                <div className="flex items-center ps-[20%] lg:ps-[26%]">
                  <Image
                    className="rounded mr-2"
                    src="/images/logo.jfif"
                    alt="logo"
                    height={45}
                    width={45}
                  />
                  <p>VanillaHR</p>
                </div>
                <AiFillCloseCircle
                  size={40}
                  className="fill-blue-700 hover:fill-blue-800"
                  onClick={() => {
                    modalShowing(false);
                  }}
                />
              </Link>
            </div>

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 z-20">
              {forgetPasswordShow ? (
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  {resetingPassword
                    ? "new password sent to your email"
                    : "Reseting your password"}
                </h1>
              ) : (
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  {signUpShowing ? "Sign up" : " Sign in to your account"}
                </h1>
              )}

              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your email:
                  </label>
                  {resetingPassword ? (
                    <p className="text-blue-300 text-center">{email}</p>
                  ) : (
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmail}
                      className={`bg-gray-50 border sm:text-sm rounded-lg  block w-full p-2.5 ${
                        forgetPasswordShow
                          ? "outline-red-300 text-red-600 border-red-300 "
                          : "text-blue-800 outline-blue-300  border-blue-300"
                      }`}
                      placeholder="name@company.com"
                      required=""
                    />
                  )}

                  {emailError && (
                    <p className="text-red-500 ps-3 pt-2 text-sm ">
                      {"Please enter a valid email address."}
                    </p>
                  )}
                </div>
                <div className={`${forgetPasswordShow ? "hidden" : ""}`}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    type="password"
                    // name="password"
                    // id="password"
                    value={password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-blue-800 sm:text-sm rounded-lg  block w-full p-2.5  outline-blue-300"
                    required=""
                    onChange={handlePassword}
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                  />
                  {passwordError.length > 0 ? (
                    <span className="text-red-500">{passwordError}</span>
                  ) : (
                    ""
                  )}
                </div>
              </form>
              {forgetPasswordShow ? (
                ""
              ) : (
                <div
                  className={`flex items-center justify-between ${
                    signUpShowing && ""
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-700">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button
                    className="text-sm font-medium text-primary-600 hover:underline "
                    onClick={() => {
                      setForgetPasswordShow(true);
                    }}
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              {forgetPasswordShow ? (
                <button
                  onClick={() => {
                    if (emailError || email.length === 0) {
                      setResetingPassword(false);
                    } else if (!emailError || email.length > 0) {
                      setResetingPassword(true);
                    }
                  }}
                  className={`w-full bg-red-600 hover:bg-red-700 text-white focus:ring-4 focus:outline-none focus:ring-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    resetingPassword && "hidden"
                  }`}
                >
                  Reset my password
                </button>
              ) : (
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={(e) => {
                    if (signUpShowing) {
                      handleSubmitFormOnSignUp(e);
                    } else {
                      handleSubmitFormOnSignIn(e);
                    }
                  }}
                >
                  {signUpShowing ? "Sign-up " : "Sign-in "}
                </button>
              )}
              {forgetPasswordShow ? (
                <button
                  className="font-medium text-gray-400 flex  items-center"
                  onClick={() => {
                    setForgetPasswordShow(false);
                    setResetingPassword(false);
                    setEmail("");
                  }}
                >
                  {resetingPassword ? (
                    <p className="bg-red-500 text-white rounded px-3 py-2 hover:bg-red-600 shadow">
                      Go to sign-in page
                    </p>
                  ) : (
                    <p className=" hover:underline">I Remember my password.</p>
                  )}
                </button>
              ) : (
                <p className="text-sm font-light text-gray-500">
                  {signUpShowing
                    ? "already have an account! "
                    : " Don’t have an account yet?"}

                  <button
                    className="font-medium text-primary-600 hover:underline "
                    onClick={() => {
                      if (signUpShowing) {
                        setSignUpShowing(false);
                      } else {
                        setSignUpShowing(true);
                      }
                    }}
                  >
                    {signUpShowing ? "  Sign-in  " : " Sign-up "}
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ModalComponent;

import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";

function ContactComponent() {
  ////////////
  ////state for colored inputs
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedTel, setIsFocusedTel] = useState(false);

  ///////////
  ////const for inputs state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [tel, setTel] = useState("");

  ///////////////
  ////state for showing paragraph
  const [showThanks, setShowThanks] = useState(false);
  const [showFillCorrectly, setShowFillCorrectly] = useState(false);

  /////////////////
  /////form data

  const [formData, setFormData] = useState([]);

  //////////////
  //////handling submit button and save in JSON database
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailError) {
      setFormData((prevData) => [
        ...prevData,
        {
          name,
          email,
          message,
          tel,
        },
      ]);
      const sendingToDb = async () => {
        await axios.post("http://localhost:3005/posts", {
          name: `${name}`,
          email: `${email}`,
          tel: `${tel}`,
          message: `${message}`,
        });
      };

      sendingToDb();
      setName("");
      setEmail("");
      setTel("");
      setMessage("");
      setShowThanks(true);
      setShowFillCorrectly(false);
      setTimeout(() => {
        setShowThanks(false);
      }, 3000);
    } else if (emailError) {
      setShowFillCorrectly(true);
      setTimeout(() => {
        setShowFillCorrectly(false);
      }, 3000);
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
  // console.log(formData);

  ////////////////
  ////handling tel phone number function
  const handleTelInput = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9\b]+/g, "");

    if (numericValue.length >= 10) {
      const formatted = `(${numericValue.slice(0, 3)}) ${numericValue.slice(
        3,
        6
      )} ${numericValue.slice(6, 10)}`;
      setTel(formatted);
    } else {
      setTel(numericValue);
    }
  };

  /////////////////
  //////info for contact page
  const AllInfo = [
    {
      logo: <MdLocationPin size={25} className="fill-white" />,
      title: "Address",
      description: "Your Address Here",
    },
    {
      logo: <BsFillTelephoneFill size={25} className="fill-white" />,
      title: "Phone",
      description: "+1-000-000-000",
    },
    {
      logo: <MdAlternateEmail size={25} className="fill-white" />,
      title: "Email",
      description: "example@xyz.com",
    },
    {
      logo: <BiWorld size={25} className="fill-white" />,
      title: "Website",
      description: "www.yourCompany.com",
    },
  ];

  ////////////////
  ////JSX
  return (
    <div className=" w-[80%] mx-auto">
      <div className="text-center pt-9 pb-5">
        <p className="text-3xl roboto-bold">Get in Touch</p>
      </div>
      <div className="mb-10  mt-5 grid grid-cols-1 bg-red-00 lg:grid-cols-2 lg:gap-5 gap-8">
        <div
          className="
           order-first rounded   bgImage  h-full w-full shadow-xl"
        >
          <div className="w-full h-full  space-y-5 bgBlur bg-black/70 py-10 rounded">
            <div>
              <p className="text-center text-white tracking-tight text-2xl">
                Contact Us
              </p>
            </div>
            {AllInfo.map((info) => {
              return (
                <div
                  key={info.title}
                  className="px-10 flex justify-start items-center space-x-2 "
                >
                  {info.logo}
                  <p className="text-sm lg:text-md text-white xl:text-base">
                    <span className="roboto-bold">{info.title}: </span>
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" ">
          <p className="text-center text-xl text-gray-500 py-7 roboto-bold">
            Write Us
          </p>
          <form
            className="flex flex-col space-y-5  rounded bg-white "
            onSubmit={handleSubmit}
          >
            <div className=" ">
              <div class="relative inputForm">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaUserAlt
                    size={20}
                    className={`mx-1  ${
                      isFocusedName ? "text-blue-300" : "text-gray-400"
                    }`}
                  />
                  <div
                    className={`w-[2px] h-6 ml-1  ${
                      isFocusedName ? "bg-blue-300" : "bg-gray-400"
                    }`}
                  ></div>
                </div>

                <input
                  type="text"
                  id="full name"
                  className="block w-full px-12 py-3 text-sm text-blue-800 border border-gray-300 rounded-lg bg-gray-50    focus-within:outline-blue-300"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsFocusedName(true)}
                  onBlur={() => setIsFocusedName(false)}
                />
              </div>
            </div>
            <div className=" ">
              <div class="relative inputForm">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <MdEmail
                    size={20}
                    className={`mx-1  ${
                      isFocusedEmail ? "text-blue-300" : "text-gray-400"
                    }`}
                  />
                  <div
                    className={`w-[2px] h-6 ml-1  ${
                      isFocusedEmail ? "bg-blue-300" : "bg-gray-400"
                    }`}
                  ></div>
                </div>

                <input
                  className={`block w-full px-12 py-3 text-sm text-blue-800 border border-gray-300 rounded-lg bg-gray-50    focus-within:outline-blue-300 ${
                    emailError ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Email"
                  required
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  onFocus={() => setIsFocusedEmail(true)}
                  onBlur={() => setIsFocusedEmail(false)}
                />
              </div>
              {emailError && (
                <p className="text-red-500 ps-3 pt-2 text-sm ">
                  {"Please enter a valid email address."}
                </p>
              )}
            </div>
            <div className=" ">
              <div className="relative inputForm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <BsFillTelephoneFill
                    size={20}
                    className={`mx-1  ${
                      isFocusedTel ? "text-blue-300" : "text-gray-400"
                    }`}
                  />
                  <div
                    className={`w-[2px] h-6 ml-1  ${
                      isFocusedTel ? "bg-blue-300" : "bg-gray-400"
                    }`}
                  ></div>
                </div>

                <input
                  type="tel"
                  id="tel"
                  className="block w-full px-12 py-3 text-sm text-blue-800 border border-gray-300 rounded-lg bg-gray-50    focus-within:outline-blue-300"
                  placeholder="Tel:XXX XXX XXXX"
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  required
                  onFocus={() => setIsFocusedTel(true)}
                  onBlur={() => setIsFocusedTel(false)}
                  onChange={handleTelInput}
                  value={tel}
                  maxLength={14}
                />
              </div>
            </div>

            <textarea
              rows={5}
              cols={35}
              className="border-2 bg-gray-50 rounded outline-none px-3 py-2  focus-within:placeholder:text-blue-300 focus-within:border-blue-200 focus-within:border-2 text-blue-800"
              placeholder="Your Message Here..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div className="flex items-center space-x-8">
              <button
                type="submit"
                className="text-center text-white bg-blue-600 w-full xl:w-[30%]  py-2  hover:bg-blue-500 hover:ring-2 text-md rounded "
                onClick={handleSubmit}
              >
                Send
              </button>
              {showThanks && (
                <p className="text-blue-700  text-md">
                  Thanks for contacting us. 🙏
                </p>
              )}
              {showFillCorrectly && (
                <p className="text-red-700  text-md">
                  please fill the inputs correctly.👆
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;

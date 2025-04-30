import React, { Fragment, useState } from "react";
import { TiMessage } from "react-icons/ti";
import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { useDarkMode } from "../../context/ThemeContext";

function Contact() {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEndpoint = "https://formspree.io/f/xgvayebr";
    fetch(formEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });
  };

  return (
    <Fragment>
      <div
        className={` contact flex items-start justify-between max-w-[900px] my-[100px] mx-[auto] py-[20px] px-[0]  [@media(max-width:1199px)]:flex-col [@media(max-width:1199px)]:items-center`}
        id="contact"
      >
        <div className="discuss flex justify-start flex-col [@media(max-width:1199px)]:items-center">
          <h2 className=" [@media(max-width:1199px)]:text-[28px]">
            Do you have a project to discuss?
          </h2>
          <p
            className={`message ${
              !isDarkMode ? "text-[#4c4c4c]" : ""
            } flex items-center flex-row text-[26px] my-[40px] mx-[0] uppercase  [@media(max-width:1199px)]:text-[24px]  [@media(max-width:576px)]:text-[20px]`}
          >
            Get in touch
            <span className="my-[0] mx-[10px]">
              <TiMessage
                className={` ${!isDarkMode ? "text-[#4c4c4c]" : "text-[#fff]"}`}
              />
            </span>
          </p>
          <div className="bottom flex items-center justify-between my-[20px] mx-[0]  [@media(max-width:992px)]:flex-col  [@media(max-width:992px)]:items-center">
            <div className="email">
              <h3
                className={`
               ${
                 !isDarkMode ? "text-[#4c4c4c]" : ""
               } text-[30px]  uppercase   [@media(max-width:992px)]:text-[26px] [@media(max-width:992px)]:text-center  [@media(max-width:576px)]:text-[24px] `}
              >
                contact
              </h3>
              <p className="text-[#33a5e4]">abdo.ashraf645@yahoo.com</p>
            </div>
            <div
              className={`icons my-[0] mx-[20px]  ${
                !isDarkMode ? "text-[#4c4c4c]" : ""
              }`}
            >
              <h3 className="text-[30px] uppercase  [@media(max-width:992px)]:text-[26px] [@media(max-width:576px)]:text-[24px] ">
                social media
              </h3>
              <ul className="flex  [@media(max-width:992px)]:items-center">
                <li className="list-none m-[10px] text-[20px] hover:text-[#0A66C2] hover:scale-[1.2] transition-all duration-400 ease-in-out [@media(max-width:992px)]:text-[18px] [@media(max-width:576px)]:text-[16px]">
                  <a
                    aria-label="linkedin-profile"
                    href="https://www.linkedin.com/in/abdelrahman-ashraf-/"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className="list-none m-[10px] text-[20px] hover:text-[#1877F2] hover:scale-[1.2] transition-all duration-400 ease-in-out [@media(max-width:992px)]:text-[18px] [@media(max-width:576px)]:text-[16px]">
                  <a
                    aria-label="facebook-profile"
                    href="https://www.facebook.com/AbdoAshraf1252000/"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li className="list-none hover:text-[#1769FF] hover:scale-[1.2] transition-all duration-400 ease-in-out m-[10px] text-[20px]  [@media(max-width:992px)]:text-[18px] [@media(max-width:576px)]:text-[16px]">
                  <a
                    aria-label="behance-profile"
                    href="https://www.behance.net/abdoashraf20"
                  >
                    <FaBehanceSquare />
                  </a>
                </li>
                <li className="list-none hover:text-[#8d8d8d] hover:scale-[1.2] transition-all duration-400 ease-in-out m-[10px] text-[20px]  [@media(max-width:992px)]:text-[18px] [@media(max-width:576px)]:text-[16px]">
                  <a
                    aria-label="github-profile"
                    href="https://github.com/Abdelrahman-Ashraf22"
                  >
                    <FaGithubSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-form [@media(max-width:1199px)]:w-[90%]">
          <h3
            className={`text-[30px] uppercase [@media(max-width:1199px)]:text-[28px]  [@media(max-width:576px)]:text-[24px]  ${
              !isDarkMode ? "text-[#4c4c4c]" : ""
            }`}
          >
            contact form
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col content-start w-[400px] my-[30px] mx-[auto] p-[20px] [@media(max-width:1199px)]:w-[100%] [@media(max-width:768px)]:p-[15px] [@media(max-width:576px)]:w-[100%]"
          >
            <label
              htmlFor="name"
              className={`my-[5px] mx-[0]  ${
                !isDarkMode ? "text-[#4c4c4c]" : ""
              }`}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`border-[1px] border-solid ${
                !isDarkMode
                  ? "border-[#9a9a9a] text-[#4c4c4c]"
                  : "border-[#ffffffa2]"
              } my-[5px] mx-[0] rounded-[12px] p-[5px]  [@media(max-width:768px)]:text-[14px]`}
            />
            <label
              htmlFor="email"
              className={`my-[5px] mx-[0] ${
                !isDarkMode ? "text-[#4c4c4c]" : ""
              }`}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`border-[1px] border-solid 
                       ${
                         !isDarkMode
                           ? "border-[#9a9a9a] text-[#4c4c4c]"
                           : "border-[#ffffffa2]"
                       }
              my-[5px] mx-[0] rounded-[12px] p-[5px]  [@media(max-width:768px)]:text-[14px]`}
            />
            <label
              htmlFor="msg"
              className={`my-[5px] mx-[0] ${
                !isDarkMode ? "text-[#4c4c4c]" : ""
              }`}
            >
              Message
            </label>
            <textarea
              id="msg"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`border-[1px] border-solid ${
                !isDarkMode
                  ? "border-[#9a9a9a] text-[#4c4c4c]"
                  : "border-[#ffffffa2]"
              } my-[5px] mx-[0] rounded-[12px] p-[5px]  [@media(max-width:768px)]:text-[14px]`}
            />
            <button
              type="submit"
              className={`border-[1.5px] border-solid border-[#33a5e4] text-center cursor-pointer uppercase outline-0 overflow-hidden relative                
              font-bold text-[15px] bg-transparent py-[15px] px-[60px] my-[10px] mx-[auto] shadow-2xl  [@media(max-width:768px)]:py-[10px]  [@media(max-width:768px)]:px-[40px] z-10`}
            >
              <span
                className={`relative z-[99] ${
                  !isDarkMode ? "text-[#4c4c4c]" : "text-[#fff]"
                } z-99`}
              >
                Send
              </span>
            </button>
          </form>
        </div>
      </div>
      <hr className={`${isDarkMode ? "" : "text-[#4c4c4c]"}`} />
    </Fragment>
  );
}

export default Contact;

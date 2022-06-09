import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import { BsMessenger } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";


const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3nr1n6",
        "template_njlmgtf",
        formRef.current,
        "EzpxUas5Mo-q2XW2Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <ImWhatsapp className="whatsappIcon" />
              <p>
                +91 977 501 8416
                <span><a href="https://wa.me/9775018416?text=hii" target="_blank">Send a message</a></span>
              </p>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <p>
                amitsaha018@gmail.com
                <span><a href="mailto:amitsaha018@gmail.com" target="_blank">Send a message</a></span>
              </p>
            </div>
            <div className="c-info-item">
              <BsMessenger className="messengerIcon"/>
              <p>
                <span><a href="https://m.me/amit.saha.7777019" target="_blank">Send a message</a></span>
              </p>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              <p>
                Boralia Road, Hijalpukur,Habra,743271
              </p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch</b> 
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333", resize: "none" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you for Contacting..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

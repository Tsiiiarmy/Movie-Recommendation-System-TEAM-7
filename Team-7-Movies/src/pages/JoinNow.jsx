import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "../assets/JoinNow.css";

const JoinNow = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_t8mbttl", "template_jsxog8r", form.current, {
        publicKey: "EXynl9aOfQSlOYgB0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="title-container">
        <img src="/images/movie.svg" alt="movie" />
        <h1>TEAM7MOVIES</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h1>JOIN OUR COMMUNITY</h1>
        <input
          type="text"
          id="firstName"
          placeholder="Name"
          name="name"
          required
        />
        <br />
        <input
          type="email"
          id="email"
          placeholder="Email address"
          name="email"
          required
        />
        <input type="submit" value="JOIN NOW" id="button" />
      </form>
    </div>
  );
}


export default JoinNow;

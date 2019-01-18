import React from "react";
import './css/contact.css';

const Contact = () => {
  let handleSubmit = e => {
    e.preventDefault();
    let name = document.getElementById("contact-name").value;
    let email = document.getElementById("contact-email").value;
    let body = document.getElementById("contact-text-area").value;
    let data = {
      name: name,
      email: email,
      body: body
    };
    fetch("https://hooks.zapier.com/hooks/catch/3956551/egszxh/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        alert("Submit was successful");
      });
  };



  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Have a question?</h2>
        <h5>Please fill out the quick form and we will be in touch!</h5>
        <form id="contact-form">
          <input
            type="text"
            name="name"
            id="contact-name"
            placeholder="  Name"
          />
          <br />
          <input
            type="email"
            name="email"
            id="contact-email"
            placeholder="  Your Email Address"
          />
          <br />
          <textarea
            rows="5"
            name="body"
            id="contact-text-area"
            placeholder="How can we help?"
          />
          <br />
          <button type="submit" className="btn" onClick={e => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
      <div className="bottom">
        <p>
          Our number one goal is to provide you with an amazing vacation
          experience at the best possible price. We want you to be satisfied and
          hope you will book your future vacations with us! We believe in
          complete transparancy, we will not hide any fees unlike those big name
          companies.
        </p>
      </div>
    </div>
  );
};

export default Contact;

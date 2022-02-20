import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      
      {/* <div className="right">
        <h2>&#60; Contact &#47;&#62;</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div> */}
<div className="right">
      <section className="get-in-touch">
   <h1 className="title">Get in touch</h1>
   <form className="contact-form row">
      <div className="form-field col x-100">
         <input id="name" className="input-text js-input" type="text" required/>
         <label className="label" for="name">Name</label>
      </div>
      <div className="form-field col x-100">
         <input id="email" className="input-text js-input" type="email" required/>
         <label className="label" for="email">E-mail</label>
      </div>
      <div className="form-field col x-100">
         <input id="message" className="input-text js-input" type="text" required/>
         <label className="label" for="message">Message</label>
      </div>
      <div className="form-field col x-100 align-center">
         <input className="submit-btn" type="submit" value="Submit"/>
         {message && <span>Thanks, I'll reply ASAP :)</span>}
      </div>
   </form>
</section>
</div>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
    </div>
  );
}

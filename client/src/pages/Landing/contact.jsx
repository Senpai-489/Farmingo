import React, { useState } from "react";
import { apiClient } from "../../lib/api-client.js"; // Assuming you have an API client setup
import { SAVE_QUERY } from "@/utils/constants"; // This should be the API endpoint

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendQuery = async (e) => {
    e.preventDefault(); 

   
    if (!fname || !lname || !email || !message) {
      alert("All fields are required");
      return;
    }

    const payload = { fname, lname, email, message };

    try {
      const response = await apiClient.post(SAVE_QUERY, payload, {
        withCredentials: true,
      });

      if (response.status === 201) {
        console.log("Query submitted successfully:", response.data);
        alert("Query submitted successfully!");
        // Optionally reset the form
        setFname("");
        setLname("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("There was an issue submitting your query. Please try again later.");
    }
  };

  return (
    <div className="relative text-center h-92 right-[25vw] translate-y-[260vh]">
      <h1 id="Contact" className="text-6xl font-serif text-sky-800">Contact Us</h1>
      <div className="translate-y-16 bg-sky-800 h-[70vh] relative font-mono translate-x-[25vw] text-left">
        <form className="-translate-x-32 translate-y-12" onSubmit={sendQuery}>
          <label htmlFor="fname" className="inline text-2xl text-white">First name:</label><br />
          <input 
            type="text" 
            name="fname" 
            className="inline rounded-lg w-[20vw] h-[5vh] bg-sky-200" 
            placeholder="John" 
            value={fname} 
            onChange={(e) => setFname(e.target.value)} 
          /><br />
          <label htmlFor="lname" className="text-2xl inline text-white">Last name:</label><br />
          <input 
            type="text" 
            name="lname" 
            className="inline rounded-lg w-[20vw] h-[5vh] bg-sky-200" 
            placeholder="Doe" 
            value={lname} 
            onChange={(e) => setLname(e.target.value)} 
          /><br />
          <label htmlFor="email" className="text-2xl inline text-white">Email:</label><br />
          <input 
            type="email" 
            name="email" 
            className="inline rounded-lg w-[20vw] h-[5vh] bg-sky-200" 
            placeholder="example@gmail.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          /><br /><br />
          <textarea 
            rows="5" 
            className="rounded-lg translate-x-[50vw]" 
            cols="33" 
            name="message" 
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input 
            type="submit" 
            className="inline bg-sky-800 text-white text-lg translate-y-12 translate-x-[37vw] drop-shadow-[0_0px_5px_rgba(255,255,255,1)] rounded-full h-12 w-24 hover:text-stone-800 hover:bg-sky-300" 
            onClick={sendQuery}
            value="Submit" 
          />
        </form>
      </div>
      <div className="relative -translate-y-72 -translate-x-28">
        <h1 className="font-serif text-white text-4xl">Have a Query?</h1><br />
        <h1 className="font-mono text-white text-xl">Fill up this form and connect with us</h1>
        <h1 className="font-mono text-white text-xl">
          or just give us some Suggestions about <br /> how can we be better?
        </h1>
      </div>
      <div className="relative w-60 -translate-y-[60vh] translate-x-[90vw]">
        <h1 className="font-serif text-white text-4xl">
          Or Email us at <br /><br />
          businessfarmingo@gmail.com
        </h1>
      </div>
    </div>
  );
}

export default Contact;

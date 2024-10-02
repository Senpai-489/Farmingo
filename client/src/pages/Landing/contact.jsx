import react from "react";

function Contact(){
    return <div className="relative text-center h-92 right-[25vw] translate-y-[260vh]">
    <h1 id="Contact" className="text-6xl font-serif text-sky-800">Contact Us</h1>
    <div className="translate-y-16 bg-sky-800 h-[70vh] relative font-mono translate-x-[25vw] text-left">

    <form className="-translate-x-32 translate-y-12">
  <label for="fname" className="inline text-2xl text-white">First name:</label><br/>
  <input type="text" id="fname" className="inline rounded-lg w-[20vw] h-[5vh] bg-sky-200 "  placeholder=" John"/><br/>
  <label for="lname" className="text-2xl inline text-white">Last name:</label><br/>
  <input type="text" id="lname" className="inline rounded-lg w-[20vw] h-[5vh] bg-sky-200 " placeholder=" Doe"/><br/>
  <label for="lname" className="text-2xl inline text-white">Last name:</label><br/>
  <input type="email" id="email" className="inline rounded-lg w-[20vw] h-[5vh] bg-sky-200 " placeholder=" example@gmail.com"/><br/><br/>
  <textarea rows="5" className="rounded-lg translate-x-[50vw]" cols="33" name="text" placeholder=" Enter your message"></textarea>
  <input type="submit" className="inline bg-sky-800 text-white text-lg translate-y-12 translate-x-[37vw] drop-shadow-[0_0px_5px_rgba(255,255,255,1)] rounded-full h-12 w-24 hover:text-stone-800 hover:bg-sky-300" value="Submit"/>
  </form>
    </div>
    <div className="relative  -translate-y-72 -translate-x-28" >
    <h1 className="font-serif text-white text-4xl" >Have a Query?</h1><br/>
    <h1 className="font-mono text-white text-xl" >Fill up this form and connect with us</h1>
    <h1 className="font-mono text-white text-xl" >or just give us some Suggestions about <br/>how can we be better?</h1>
    </div>
    <div className="relative w-60 -translate-y-[60vh] translate-x-[90vw]">

   <h1 className="font-serif text-white text-4xl"> Or Email us at <br/><br/>businessfarmingo@gmail.com </h1>
    </div>
    </div>
}
export default Contact;
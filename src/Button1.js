import React from "react";
import html from "../src/images/html.jpg";

const Button1 = () => {
return(

	<>
		<div className="image-1" style={{
			background :`linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${html})`, 
		    height: "20rem",
			width: "50rem",

		}}>

		</div>
		<div className="para">
		<h5>HTML, in full hypertext markup language, <br></br> a formatting system for displaying material retrieved over the Internet.<br></br>This is on me</h5>
		</div>
	</>

	);

};

export default Button1;
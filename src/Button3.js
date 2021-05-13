import React from "react";
import javascript from "../src/images/javascript.png";

const Button3 = () => {
return(

	<>
		<div className="image-1" style={{
			background :`linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${javascript})`,
			height: "20rem",
			width: "50rem",

		}}>

		</div>	
		<div className="para">
		<h5>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — <br></br>every time a web page does more than just sit there and display static information for you to look at — <br></br> displaying timely content updates, interactive maps, animated 2D/3D graphics</h5></div>
	</>

	);

};

export default Button3;
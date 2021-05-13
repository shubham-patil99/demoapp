import React from "react";
import css from "../src/images/css.png";

const Button2 = () => {
return(

	<>
		<div className="image-1" style={{
			background :`linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${css})`,
			height: "20rem",
			width: "50rem",

		}}>

		</div>	
		<div className="para">
		<h5>Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS<br></br> standard used in the styling and formatting of Web pages. <br></br>CSS3 incorporates the CSS2 standard with some changes and improvements.</h5>
		</div>
	</>

	);

};

export default Button2;
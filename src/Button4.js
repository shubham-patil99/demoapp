import React from "react";
import react from "../src/images/react.jpg";

const Button4 = () => {
return(

	<>
		<div className="image-1" style={{
			background :`linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${react})`,
			height: "20rem",
			width: "50rem",

		}}>

		</div>	
		<div className="para">
				<h5>
					intransitive verb. 1 : to exert a reciprocal or counteracting force or influence —often used with on or upon.<br></br> 2 : to change in response to a stimulus.<br></br> 3 : to act in opposition to a force or influence —usually used with against.
				</h5>	
		</div>
	</>

	);

};

export default Button4;
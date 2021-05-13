import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Buttons = () => {

	

		return (
			<>
			<div className="align-btn">
			<div className="row">
			<div className="col-8 mx-auto">

				<Link className="btn" to="/Button1">
				<button className="btn-1">1</button>
				<h6 className="html">HTML5</h6>
				</Link>

				<Link className="btn" to="/Button2">
				<button className="btn-2">2</button>
				<h6 className="css">CSS3</h6>
				</Link>

				<Link className="btn" to="/Button3">
				<button className="btn-3">3</button>
				<h6 className="js">Javascript</h6>
				</Link>

				<Link className="btn" to="/Button4">
				<button className="btn-4">4</button>
				<h6 className="react">ReactJS</h6>
				</Link>
			</div>
			</div>
			</div>	
			</>

			);	

};

export default Buttons;
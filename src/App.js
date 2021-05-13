import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";  
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button4";
import Buttons from "./Buttons";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => { 
  return(
    <>
      <div className="body">
        <Switch>
          <Route exact path="/Button1" component={Button1} />
          <Route exact path="/Button2" component={Button2} />
          <Route exact path="/Button3" component={Button3} />
          <Route exact path="/Button4" component={Button4} />  
          <Redirect to="/" />
        </Switch> 
        <Buttons />
      </div>
    </>
    );
};

export default App;

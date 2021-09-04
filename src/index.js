import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import App2 from "./App2";
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  <div>{props.children}</div>
  if (isLoggedIn) {
    return <App />;
  }else{
    return <App2 />
  }
  
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import Usercard from "./Usercard";
import React, { useState } from "react";

function user() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  return (
    <>
      <img
      id="user"
        src={require("../Image/user.png").default}
        alt="user"
        width="55px" height="55px"
        className=" mt-4"
        onClick={() => setShow(!show)}
      />
      <div style={{ display: show ? "block" : "none" }} >
        <Usercard />
      </div>
      {window.addEventListener("click", (e) => {
          if (e.target.id === 'user'){
              setShow(true)
          }
          else{
              e.path.forEach((element,index)=>{
                  if (element.id ==='ucard'){
                      return;
                  }else if(index===e.path.length-1){
                    setShow(false)
                  }
              })
          }


      })}
    </>
  );
}
export default user;

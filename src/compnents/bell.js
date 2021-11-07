import Notifycard from "./Notifycard";
import React, { useState } from "react";
let isOpenBell=false;
function bell() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  return (
    <>
      <img
      id="bell"
        src={require("../Image/bell.png").default}
        alt="bell"
        width="25px"
        height="25px"
        className="mt-2"
        onClick={() => setShow(!show)}
      />
      <div style={{ display: show ? "block" : "none" }} >
        <Notifycard />
      </div>
      {window.addEventListener("click", (e) => {
          if (e.target.id === 'bell'){
              setShow(true)
          }
          else{
              e.path.forEach((element,index)=>{
                  if (element.id ==='notify'){
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
export default bell;

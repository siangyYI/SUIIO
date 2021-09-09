import Usercard from "./Usercard";
import React, { useState } from "react";

function user() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  return (
    <>
      <img
        src={require("../Image/user.png").default}
        alt="user"
        width="55px" height="55px"
        className=" mt-4"
        onClick={() => setShow(!show)}
      />
      <div style={{ display: (show ? 'block' : 'none') }}>
        <Usercard />
      </div>
    </>
  );
}
export default user;

import Notifycard from "./Notifycard";
import React, { useState } from "react";

function bell() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);
    return (
        <>
            <img
                src={require("../Image/bell.png").default}
                alt="bell"
                width="25px" height="25px"
                className="mt-2"
                onClick={() => setShow(!show)}
            />
            <div style={{ display: (show ? 'block' : 'none') }}>
                <Notifycard />
            </div>
        </>
    );
}
export default bell;

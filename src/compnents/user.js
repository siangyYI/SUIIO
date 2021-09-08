import Usercard from "./Usercard";
import React,{ useState,useEffect } from "react";

function user() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);
    // setShow(() => {
    //     // 使用瀏覽器 API 更新文件標題
    //     // document.title = `You clicked ${show} times`;
    //   });
    return (
        <>
            <img
              src={require("../Image/user.png").default}
              alt="user"
              width="55px" height="55px"
              className=" mt-4"
              onClick={() => setShow(!show)}
            />
            <div style={{display:(show?'block':'none')}}>
              <Usercard />
            </div>
        </>
    );
}
export default user;

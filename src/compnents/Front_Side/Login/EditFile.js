import React from "react";
import { Input } from "reactstrap";
import { Button } from "react-bootstrap";
import "../../../App.css";

function EditSubmit() {
  alert("修改成功");
}

function EditFile() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>

        <div className="login">
          <h2 className="text-center loginfont">修改個人資料</h2>
          <div className="row">
            <h4 className="col-4 mt-3">姓名</h4>
            <Input className="col" />
          </div>
          <div className="row">
            <h4 className="col-4 mt-3">暱稱</h4>
            <Input className="col" />
          </div>
          <div className="row">
            <h4 className="col-4 mt-3">性別</h4>
            <div className="col">
              <div className="row mt-2">
                <input
                  className="radio col "
                  type="radio"
                  name="sex"
                  value="male"
                />
                <h4 className="mt-2 ">男</h4>
                <input
                  className="radio col"
                  type="radio"
                  name="sex"
                  value="male"
                />
                <h4 className="mt-2">女</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <h4 className="col-4 mt-3">聯絡電話</h4>
            <Input className="col" />
          </div>
          <div className="row">
            <h4 className="col-4 mt-3">輸入密碼</h4>
            <Input className="col" />
          </div>
          <div className="text-center row">
            <a href="/account" style={{ backgroundColor: "#d8936c", borderColor: "#6B7A8F" ,borderRadius:"5px"}}
              className="col m-1"><Button
              style={{ backgroundColor: "#d8936c", borderColor: "#d8936c" }}
              >
                取消
              </Button></a>
            <Button
              variant="dark"
              type="submit"
              style={{ color: "white" }}
              className="col m-1"
              onClick={EditSubmit}
            >
              確定
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFile;

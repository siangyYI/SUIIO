import React from "react";

import user from "../../../Image/user.png";
import styled from "styled-components";

const MessageContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 10px 10px 10px 30px;
  margin:15px;
  border-radius: 4px;
  background-color:#546d8b;
  color: white;
  & + & {
    margin-top: 8px;
  }
`;
const MessageAuthor = styled.div`
  font-weight: bold;
  color: #dcae1d;
`;
const MessageBody = styled.div`
  margin-top: 8px;
  word-break: break-all;
  white-space: pre-line;
`;
const MessageTime = styled.div`
  margin-right: 12px;
`;

export default function MessageFile() {
  return (
    <MessageContainer>
      <div className="d-flex flex-row py-2">
        <div className="d-flex flex-column mr-4">
          <img
            src={user}
            alt="member"
            width="30pt"
            height="30pt"
            class="d-flex align-items-center"
          ></img>
          <MessageAuthor>小詹</MessageAuthor>
        </div>
        <div className="col-8">
          <MessageBody>為甚麼大迎新要有紅包</MessageBody>
        </div>
        <div className="col-3" align="right">
          <MessageTime>2020/09/13 下午3:18</MessageTime>
        </div>
      </div>
    </MessageContainer>
  );
}

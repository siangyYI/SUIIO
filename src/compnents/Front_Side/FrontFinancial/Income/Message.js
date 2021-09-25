import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import user from "../../../../Image/1144760.png";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import { Input } from "reactstrap";

// Comments API
const API_ENDPOINT =
  "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

const SubmitButton = styled.button`
  margin-top: 8px;
  color: #ddd;
  background-color: #343a40;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 12px;
`;

const MessageList = styled.div`
  margin-top: 5px;
  border-radius: 15px;
  padding: 10px;
  height: 400px;
  overflow: auto;
  background-color: white;
`;
const MessageContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 16px;
  border-radius: 4px;
  background-color: #4c5865;
  color: white;
  & + & {
    margin-top: 8px;
  }
`;

const MessageBorder = styled.div`
  background-color: white;
  border-radius: 15px;
`;
const MessageAuthor = styled.div`
  font-weight: bold;
  color: #dcae1d;
`;

const MessageTime = styled.div`
  margin-right: 12px;
`;

const MessageBody = styled.div`
  margin-top: 8px;
  word-break: break-all;
  white-space: pre-line;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: #db4c3f;
`;

function Message({ author, time, children}) {
  return (
    <>
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
            <MessageAuthor>{author}</MessageAuthor>
          </div>
            <div className="col-8">
              <MessageBody>{children}</MessageBody>
            </div>
            <div className="col-3" align="right">
              <MessageTime>{time}</MessageTime>
            </div>
          </div>
      </MessageContainer>
    </>
  );
}

Message.propTypes = {
  author: PropTypes.string,
  time: PropTypes.string,
  // 可 render 的參數型別是 node
  children: PropTypes.node,
 
};

function MessageTable() {
  const [messages, setMessages] = useState(null);
  const [messageApiError, setMessageApiError] = useState(null);
  const [value, setValue] = useState();
  const [postMessageError, setPostMessageError] = useState();
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false);

  const fetchMessages = () => {
    return fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => {
        setMessageApiError(err.message);
      });
  };

  const handleTextareaChange = (e) => {
    setValue(e.target.value);
  };

  const handleTextareaFocus = () => {
    setPostMessageError(null);
  };

  const handleFormSubmit = (e) => {
    // 阻止預設的表單發送行為
    e.preventDefault();
    // 若為 true 就直接返回
    if (isLoadingPostMessage) {
      return;
    }
    // 要發送 API 之前設成 true
    setIsLoadingPostMessage(true);
    fetch("https://student-json-api.lidemy.me/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nickname: "Heidi",
        body: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // 收到結果後設成 false
        setIsLoadingPostMessage(false);
        // 在顯示訊息前可進行錯誤處理
        if (data.ok === 0) {
          setPostMessageError(data.message);
          return;
        }
        setValue("");
        fetchMessages();
      })
      .catch((err) => {
        setIsLoadingPostMessage(false);
        setPostMessageError(err.message);
      });
  };

  const handleDeleteMessage = (id) => {
    fetch("https://student-json-api.lidemy.me/comments/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setMessages(messages.filter((message) => message.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 第二個參數傳入 [] 代表只在 componet mount 後執行
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <TableContainer component={Paper}>
      {messageApiError && (
        <ErrorMessage>
          {/* 直接 render object 會出錯，因此需轉成 string */}
          Something went wrong. {messageApiError.toString()}
        </ErrorMessage>
      )}
      {/* 確認裡面有東西才會執行這一行 */}
      {messages && messages.length === 0 && <div>No Message</div>}
      <MessageBorder>
        <MessageList>
          {/* 確認裡面有東西才會執行這一行 */}
          {messages &&
            messages.map((message) => (
              <Message
                key={message.id}
                author={message.nickname}
                time={new Date(message.createdAt).toLocaleString()}
                handleDeleteMessage={handleDeleteMessage}
                message={message}
              >
                {message.body}
              </Message>
            ))}
        </MessageList>
        <div onSubmit={handleFormSubmit}>
          <div
            className="col row pt-2"
            style={{
              borderTop: "1px solid black",
              borderRadius: "0 0 5px 5px",
              backgroundColor: "lightgray",
            }}
          >
            <div className="d-flex flex-column mr-4">
              <img
                src={user}
                alt="member"
                width="30pt"
                height="30pt"
                class="d-flex align-items-center"
              ></img>
              <select style={{ height: "fit-content" }}>
                <option>小周</option>
                <option>周大大</option>
              </select>{" "}
            </div>

            <Input
              type="text"
              className="col-10 mr-1"
              value={value}
              onChange={handleTextareaChange}
              onFocus={handleTextareaFocus}
              rows={8}
            />
            <SubmitButton className="col" style={{ height: "fit-content" }}>
              送出
            </SubmitButton>
          </div>
        </div>
      </MessageBorder>
    </TableContainer>
  );
}

export default MessageTable;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import user from "../../../../Image/1144760.png";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Box from "@material-ui/core/Box";
import NativeSelect from "@material-ui/core/NativeSelect";
import { Input } from "reactstrap";
import message from "../../../../TestData/db.json";

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
  background-color: #927e51;
  color: white;
  & + & {
    margin-top: 8px;
  }
  padding-left:35px
`;

const MessageBorder = styled.div`
  background-color: white;
  border-radius: 15px;
`;
const MessageAuthor = styled.div`
  font-weight: bold;
  color: #000000;
  font-size: 16px;
`;

const MessageTime = styled.div`
  margin-right: 12px;
  font-size: 16px;
`;

const MessageBody = styled.div`
  margin-top: 5px;
  word-break: break-all;
  white-space: pre-line;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: #db4c3f;
`;

function Message({ author, time, children }) {
  return (
    <>
      <MessageContainer>
        <div className="row ml-2">
          <img
            src={user}
            alt="member"
            width="40px"
            height="40px"
            className="mt-2 mr-3"
          ></img>
          <div className="d-flex flex-column bd-highlight">
            <MessageAuthor className="bd-highlight">{author}</MessageAuthor>

            <MessageBody className=" bd-highlight">{children}</MessageBody>
          </div>
          <div className="col" align="right">
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
    // Test Version
    return fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        // console.log(`msg: ${JSON.stringify( message)}`)
        // console.log(`data: ${JSON.stringify(data)}`)
        setMessages(message);
      })
      .catch((err) => {
        setMessageApiError(err.message);
      });
    // return fetch(API_ENDPOINT)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMessages(data);
    //   })
    //   .catch((err) => {
    //     setMessageApiError(err.message);
    //   });
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
        name: "xul4u0",
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
                author={message.name}
                time={new Date(message.createdAt).toLocaleString()}
                message={message}
              >
                {message.body}
              </Message>
            ))}
        </MessageList>
        <form onSubmit={handleFormSubmit}>
          <div
            className="col row pt-2"
            style={{
              borderRadius: "0 0 5px 5px",
              backgroundColor: "lightgray",
            }}
          >
            <div className="d-flex flex-column mr-4 ">
              <img
                src={user}
                alt="member"
                width="30pt"
                height="30pt"
                class="ml-3"
              ></img>
              <Box sx={{ minWidth: 20 }}>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "name",
                    id: "uncontrolled-native",
                  }}
                  className="my-2"
                  style={{ color: "#dcae1d", fontWeight: "bold" }}
                >
                  <option value={10}>小周</option>
                  <option value={20}>周大大</option>
                </NativeSelect>
              </Box>
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
            {/* {postMessageError && <ErrorMessage>{postMessageError}</ErrorMessage>} */}
          </div>
        </form>{" "}
      </MessageBorder>
    </TableContainer>
  );
}

export default MessageTable;

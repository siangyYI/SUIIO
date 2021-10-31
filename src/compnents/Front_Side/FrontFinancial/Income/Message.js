import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import user from "../../../../Image/1144760.png";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Box from "@material-ui/core/Box";
import { Input } from "reactstrap";
// import message from "../../../../TestData/db.json";
import "./Income.css";
// Comments API
const API_ENDPOINT =
  "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

const SubmitButton = styled.button`
  margin-top: 8px;

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
  padding-left: 35px;
`;

const MessageBorder = styled.div`
  background-color: white;
  border-radius: 15px;
`;
const MessageAuthor = styled.div`
  font-weight: bold;
  color: #fffa49;
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
            width="50px"
            height="50px"
            className="mt-1 mr-3"
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

function MessageTable(props) {
  // const [data, setdate] = useState(null);
  const [Hidename, setHidename] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageApiError, setMessageApiError] = useState(null);
  const [value, setValue] = useState();
  // eslint-disable-next-line no-unused-vars
  const [postMessageError, setPostMessageError] = useState();
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false);

  const fetchMessages = async (tables, tableID) => {
    console.log("2");
    await fetch(`http://localhost:4000/api/comment/fetch/${tables}/${tableID}`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data[tableID]);
      })
      .catch((err) => {
        setMessageApiError(err.message);
      });
  };
  const handleTextareaChange = (e) => {
    setValue(e.target.value.trim());
  };

  const handleTextareaFocus = () => {
    setPostMessageError(null);
  };
  const getHide = (e) => {
    setHidename(e.target.value === "true");
  };
  const handleFormSubmit = () => {
    if (value.trim()) {
      fetch(`http://localhost:4000/api/comment/add/${props.table}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          tableID: props.dataid,
          content: value,
          isHide: Hidename,
          sID: "1110634006",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setValue("");
          fetchMessages(props.table, props.dataid);
        });
    }
  };
  // 第二個參數傳入 [] 代表只在 componet mount 後執行
  useEffect(async () => {
    await fetchMessages(props.table, props.dataid);
  }, [props]);
  return (
    <TableContainer component={Paper}>
      {/* 確認裡面有東西才會執行這一行 */}

      <MessageBorder>
        {messages?.length ? (
          <MessageList>
            {/* 確認裡面有東西才會執行這一行 */}
            {messages.map((message) => (
              <>
                <Message
                  key={message.ID}
                  author={message.name}
                  time={message.date}
                  message={message}
                >
                  {message.content}
                </Message>
                {/* {console.log(message.ID)} */}
              </>
            ))}
          </MessageList>
        ) : (
          <div style={{fontSize:"20px"}} className="m-5">尚無留言</div>
        )}
        <div>
          {console.log(messages)}
          <div
            className="row p-2 pl-4"
            style={{
              borderRadius: "0 0 5px 5px",
              backgroundColor: "#866f39",
            }}
          >
            <div className="">
              <img
                src={user}
                alt="member"
                width="50px"
                height="50px"
                className="mt-3 mr-3"
              ></img>
            </div>
            <div className="d-flex flex-column col">
              <Box sx={{ minWidth: 20 }} className="bd-highlight">
                <select
                  onChange={getHide}
                  defaultValue={30}
                  className="DropdownMess"
                  style={{
                    backgroundColor: "#483939",
                    fontWeight: "bold",
                    color: "#eff349",
                  }}
                >
                  <option value={false}>黃子瑜</option>
                  <option value={true}>yyyyyu</option>
                </select>
              </Box>
              <div className=" bd-highlight d-flex">
                <Input
                  type="text"
                  value={value}
                  onChange={handleTextareaChange}
                  onFocus={handleTextareaFocus}
                  rows={8}
                  style={{ marginRight: "5px", width: "93%" }}
                />
                <SubmitButton
                  onClick={handleFormSubmit}
                  className="btn-warning"
                  style={{ height: "36px", paddingTop: "4px" }}
                >
                  送出
                </SubmitButton>
              </div>
            </div>

            {/* {postMessageError && <ErrorMessage>{postMessageError}</ErrorMessage>} */}
          </div>
        </div>{" "}
      </MessageBorder>
    </TableContainer>
  );
}

export default MessageTable;

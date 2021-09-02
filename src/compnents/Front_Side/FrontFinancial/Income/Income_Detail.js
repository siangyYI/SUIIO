import React from "react";
import { Container } from "react-bootstrap";
import '../Financial/Financial.css'
const Financial_Detail = () => {
    return (
        <>
            <Container>
                <div className="row mt-5">
                    <div className="col-3">
                        <div
                            style={{
                                background: "white",
                                borderRadius: "10px",
                                border: "2px solid gray",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    background: "black",
                                    borderRadius: "10px 10px 0 0",
                                }}
                            ></div>
                            <div>
                                <div>大迎新</div>
                                <div>文具用品</div>
                                <div>筆 彩色筆 紅包袋</div>
                                <div>申請人：公關長</div>
                                <div>支出 $260</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="pt-4">
                            <div>
                                <table style={{ border: "1px solid black" }}>
                                    <tr className="title">
                                        <td colSpan="2">109大迎新 </td>
                                        <td>
                                            申請人：
                                            <span>公關長</span>{" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="green">收支項目 </td>
                                        <td className="green">收入</td>
                                        <td>支出</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text"></input>
                                        </td>
                                        <td>
                                            <input type="text"></input>
                                        </td>
                                        <td>
                                            <input type="text"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text"></input>
                                        </td>
                                        <td>
                                            <input type="text"></input>
                                        </td>
                                        <td>
                                            <input type="text"></input>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="h1 ml-5">提問</div><hr className="line"></hr>
            <form>
                <div class="form-group">
                    <div className="ml-5 mb-2">針對此財務報表進行提問</div>
                    <textarea class="form-control fcontent" rows="15"></textarea>
                </div>
                <div className="mx-auto d-flex justify-content-center pb-2">
                    <button type="button" class="py-2 px-3 fbutton mx-5">送出</button>
                </div>
            </form>
        </>
    );
}
export default Financial_Detail;

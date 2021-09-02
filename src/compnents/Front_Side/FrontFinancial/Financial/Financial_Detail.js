import React from "react";
import { Container } from "react-bootstrap";
import './Financial.css'
const Financial_Detail = () => {
    return (
        <>
            <Container>
                <table style={{ background: "white" }} className="mt-5 mx-auto">
                    <tr>
                        <td colSpan="2">109年</td>
                        <td rowSpan="2" style={{ width: "50px" }}>
                            活動名稱
                        </td>
                        <td rowSpan="2">收據編號</td>
                        <td rowSpan="2">申請單位</td>
                        <td rowSpan="2">收支項目</td>
                        <td colSpan="5">收入</td>
                        <td colSpan="5">支出</td>
                    </tr>
                    <tr>
                        <td>月</td>
                        <td>日</td>
                        <td>萬</td>
                        <td>仟</td>
                        <td>佰</td>
                        <td>拾</td>
                        <td>元</td>
                        <td>萬</td>
                        <td>仟</td>
                        <td>佰</td>
                        <td>拾</td>
                        <td>元</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>109大迎新</td>
                        <td>10089780</td>
                        <td>活動</td>
                        <td>廠商贊助</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>16</td>
                        <td>109大迎新</td>
                        <td>346548</td>
                        <td>活動</td>
                        <td>文具用品</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>4</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <table style={{ background: "white" }} className="mx-auto">
                    <tr>
                        <td>本期淨利(損)</td>
                        <td colSpan="2">(4,102)</td>
                    </tr>
                    <tr>
                        <td>本期餘額</td>
                        <td colSpan="2">113,909</td>
                    </tr>
                    <tr>
                        <td>製表人：XXX</td>
                        <td>會長：XXX</td>
                        <td>財務：XXX</td>
                    </tr>
                </table>
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

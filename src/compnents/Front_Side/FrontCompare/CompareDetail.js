const CompareDetail = () => {
    return (
        <>
        <div className="mx-auto mt-5">
             <table style={{ background: "white" ,textAlign:"center"}}>
                <tr>
                    <td colSpan="2">109年</td>
                    <td rowSpan="2">收支項目</td>
                    <td colSpan="3" rowSpan="2">收入</td>
                    <td colSpan="3" rowSpan="2">支出</td>
                </tr>
                <tr>
                    <td>月</td>
                    <td>日</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>廠商贊助</td>
                    <td colSpan="3"></td>
                    <td colSpan="3">1000</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>16</td>
                    <td>文具用品</td>
                    <td colSpan="3"></td>
                    <td colSpan="3">4100</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>合計</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
           
        </>
    );
}
export default CompareDetail;
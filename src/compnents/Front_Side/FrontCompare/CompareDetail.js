const CompareDetail = () => {
    return (
        <>
        <div className="mx-auto mt-4">
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
                    <td>10</td>
                    <td>7</td>
                    <td>水</td>
                    <td colSpan="3"></td>
                    <td colSpan="3">3100</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>9</td>
                    <td>場勘入園費</td>
                    <td colSpan="3"></td>
                    <td colSpan="3">1300</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>14</td>
                    <td>生活組用品和食材用品</td>
                    <td colSpan="3"></td>
                    <td colSpan="3">6138</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>14</td>
                    <td>值星帶</td>
                    <td colSpan="3"></td>
                    <td colSpan="3">240</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>16</td>
                    <td>場地費尾款</td>
                    <td colSpan="3"></td>
                    <td colSpan="3">54730</td>
                </tr>
                <tr>
                    <td colSpan="2">合計</td>
                    <td colSpan="3">65508</td>
                    <td></td>
                    <td></td>
                    
                </tr>
            </table>
        </div>
           
        </>
    );
}
export default CompareDetail;
import React from "react";
import { Container } from "react-bootstrap";
import './CompareIndex.css'
import { Bar, Pie } from "react-chartjs-2";
import CompareFilter from './CompareFilter'
import CompareDetail from "./CompareDetail";
import CompareDetailTwo from "./CompareDetailTwo";
const PieData1 = {
    labels: ["收益", "折損"], //顯示區間名稱
    datasets: [{
        label: '108學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: [
            '#667A9D',
            '#448599',
        ],
        borderColor: [
            '#667A9D',
            '#448599',
        ],
        borderWidth: 1,
        data: [37000, 20000], // 資料
        fill: false, // 是否填滿色彩
    },]
};
const Pieoptions1 = {
    type: 'line', // 型態
    options: {
        responsive: true,
        legend: { //是否要顯示圖示
            position: 'bottom',
        },
        tooltips: { //是否要顯示 tooltip
            enabled: true
        },
        scales: {  //是否要顯示 x、y 軸
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: true
            }]
        },
    }
}
const PieData = {
    labels: ["收益", "折損"], //顯示區間名稱
    datasets: [{
        label: '109學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: [
            '#5197D5',
            '#222D43',
        ],
        borderColor: [
            '#5197D5',
            '#222D43',
        ],
        borderWidth: 1,
        
        data: [20000, 38000], // 資料
        fill: false, // 是否填滿色彩
    },]

};
const Pieoptions = {
    type: 'pie', // 型態
    
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            labels: {
                fontSize: 12,
                boxWidth: 12,
                usePointStyle: true,
            }
        }
    }
}
const HorizontalData1 = {
    labels: ["水", "場勘入園費", "生活組用品和食材用品", "值星帶", "場地費尾款", "紅包"], //顯示區間名稱
    datasets: [{
        label: '108學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#07889b",
        borderColor: "#07889b",
        borderWidth: 1,
        data: [4100, 2300, 7138, 1240, 60430, 3300], // 資料
        fill: false, // 是否填滿色彩
    }, {
        label: '109學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#e37222",
        borderColor: "#e37222",
        borderWidth: 1,
        data: [3200, 1400, 6238, 240, 57430], // 資料
        fill: false, // 是否填滿色彩
    },]
};
const Horizontaloptions1 = {
    indexAxis: 'y',
    type: 'line', // 型態
    options: {
        responsive: true,
        legend: { //是否要顯示圖示
            display: true,
        },
        tooltips: { //是否要顯示 tooltip
            enabled: true
        },
        scales: {  //是否要顯示 x、y 軸
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: true
            }]
        },
    }
}


const CompareIndex = () => {
    return (
        <Container>
            <CompareFilter />
            <div className="ititle">
                淨利/損
            </div>
            <div className="row">
                <CompareDetail />
                <CompareDetailTwo />
            </div>
            <div className="ititle">
                比較圖表
                <div className="size d-flex align-items-end">
                    單位：元
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="ibtn ">
                    9月圖表

                </div>
            </div>

            <div className="row mt-4">
                <div className="mx-auto barstyle">
                    <Bar data={HorizontalData1} options={Horizontaloptions1} />
                </div>
            </div>
            <div className="ititle">
                淨利/損圓餅圖比較
            </div>
            <div className="row mt-5">
                <div className="mx-auto" style={{ position: 'relative', width: '45%' }}>
                    <Pie data={PieData} options={Pieoptions} />
                </div>
                <div className="mx-auto" style={{ position: 'relative', width: '45%' }} >
                    <Pie data={PieData1} options={Pieoptions1} />
                </div>
            </div>
            <div className="row mt-4">

            </div>
        </Container>
    );
};
export default CompareIndex;
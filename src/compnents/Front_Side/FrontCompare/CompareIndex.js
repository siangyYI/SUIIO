import React from "react";
import './CompareIndex.css'
import { Bar } from "react-chartjs-2";
import CompareFilter from './CompareFilter'
import CompareDetail from "./CompareDetail";
const lineChartData = {
    labels: ["廠商贊助","廠商贊助"], //顯示區間名稱
    datasets: [{
        label: '109學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#FFDA83",
        borderColor: "#FFDA83",
        borderWidth: 1,
        data: [2400,1800], // 資料
        fill: false, // 是否填滿色彩
    }, {
        label: '108學年度',
        lineTension: 0,
        fill: false,
        backgroundColor: "#FF8373",
        borderColor: "#FF8373",
        borderWidth: 1,
        data: [1800],
    },]
};
const lineChartoptions = {
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
const HorizontalData = {
    labels: ["廠商贊助", "文具用品"], //顯示區間名稱
    datasets: [{
        label: '109學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#6798E7",
        borderColor: "#6798E7",
        borderWidth: 1,
        data: [1000, 1400], // 資料
        fill: false, // 是否填滿色彩
    }, {
        label: '108學年度',
        lineTension: 0,
        fill: false,
        backgroundColor: "#3B86FF",
        borderColor: "#3B86FF",
        borderWidth: 1,
        data: [800, 1000],
    },]
};
const Horizontaloptions = {
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
        <>
            <CompareFilter />
            <div className="row">
                <CompareDetail />
                <CompareDetail />
            </div>
            <div className="row mt-4">
                <div className="col-6">
                    <Bar data={HorizontalData} options={Horizontaloptions} />
                </div>
                <div className="col-6">
                    <Bar data={lineChartData} options={lineChartoptions} />
                </div>
            </div>
        </>
    );
};
export default CompareIndex;
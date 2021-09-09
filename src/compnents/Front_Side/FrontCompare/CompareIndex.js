import React from "react";
import './CompareIndex.css'
import { Bar } from "react-chartjs-2";
import CompareFilter from './CompareFilter'
import CompareDetail from "./CompareDetail";
import CompareDetailTwo from "./CompareDetailTwo";
const lineChartData1 = {
    labels: ["水", "場勘入園費", "生活組用品和食材用品", "值星帶", "場地費尾款"], //顯示區間名稱
    datasets: [{
        label: '108學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#FFDA83",
        borderColor: "#FFDA83",
        borderWidth: 1,
        data: [3100, 1300,6138,240,57430], // 資料
        fill: false, // 是否填滿色彩
    },]
};
const lineChartoptions1 = {
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
const lineChartData = {
    labels: ["水", "場勘入園費", "生活組用品和食材用品", "值星帶", "場地費尾款"], //顯示區間名稱
    datasets: [{
        label: '109學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#e37222",
        borderColor: "#e37222",
        borderWidth: 1,
        data: [3200, 1400,6238,240,60430], // 資料
        fill: false, // 是否填滿色彩
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
const HorizontalData1 = {
    labels: ["水", "場勘入園費", "生活組用品和食材用品", "值星帶", "場地費尾款"], //顯示區間名稱
    datasets: [{
        label: '108學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#07889b",
        borderColor: "#07889b",
        borderWidth: 1,
        data: [4100, 2300,7138,240,60430], // 資料
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
const HorizontalData = {
    labels: ["水", "場勘入園費", "生活組用品和食材用品", "值星帶", "場地費尾款"], //顯示區間名稱
    datasets: [{
        label: '109學年度', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#6798E7",
        borderColor: "#6798E7",
        borderWidth: 1,
        data: [3100, 1300,6138,240,57430], // 資料
        fill: false, // 是否填滿色彩
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
                <CompareDetailTwo />
            </div>
            <div className="row mt-4">
                <div className="col-6">
                    <Bar data={HorizontalData} options={Horizontaloptions} />
                </div>
                <div className="col-6">
                    <Bar data={HorizontalData1} options={Horizontaloptions1} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-6">
                    <Bar data={lineChartData} options={lineChartoptions} />
                </div>
                <div className="col-6">

                    <Bar data={lineChartData1} options={lineChartoptions1} />
                </div>
            </div>
        </>
    );
};
export default CompareIndex;
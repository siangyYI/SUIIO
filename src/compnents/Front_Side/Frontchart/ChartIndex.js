import React from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.piecelabel.js';
import './ChartIndex.css'
const Doughnutdata1 = {
  labels: ['資管週', '大迎新', '送舊', '聖誕晚會', '民歌'],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 50, 20, 10, 30],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(75, 192, 30)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 30, 1)',
      ],
      borderWidth: 1,

    },
  ],
};
const Doughnutoptions1 = {
  type: 'pie',

  options: {

    responsive: true,
    plugins: {
      legend: {
        display: true,
         position: 'bottom',
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    },
    pieceLabel: {
      render: 'value'
    }
  },

}
const Doughnutdata = {
  labels: ['資管週', '大迎新', '送舊', '聖誕晚會', '科費'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 50],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(75, 192, 12)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 12, 1)',
      ],
      borderWidth: 1,

    },
  ],
};
const Doughnutoptions = {
  type: 'pie',
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    }
  },
}
const labels = ['二月', '三月', '四月', '五月'];
const Horizontaldata = {
  labels: labels,
  datasets: [
    {
      label: '收入',
      data: [65, 59, 80, 11],
      fill: true,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: '支出',
      data: [75, 49, 75, 15],
      fill: true,
      backgroundColor: '#FF6424',
      borderColor: '#FF6424',
      tension: 0.1
    },]
};

const Horizontaloptions = {
  type: 'bar',
  data: 'data',
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
};

const LineData = {
  labels: labels,
  datasets: [
    {
      label: '淨支出',
      data: [65, 59, 80, 61],
      fill: false,
      borderColor: '#00BFA0',
      tension: 0.1
    },{
      label: '淨收入',
      data: [55, 49, 40, 41],
      fill: false,
      borderColor: '#6798E7',
      tension: 0.1
    },
    {
      label: '平均收入',
      data: [75, 49, 70, 31],
      fill: false,
      borderColor: '#FF6424',
      tension: 0.1
    },
    {
      label: '平均支出',
      data: [45, 49, 42, 38],
      fill: false,
      borderColor: '#5F2FF3',
      tension: 0.1
    },
  ]

};
const Lineoptions = {
  type: 'line',
  data: 'data',
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
};

const Chart_Index = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-7 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">本月收支折線圖(單位:元)</div>
          </div>
          <Line data={LineData} options={Lineoptions} />
        </div>
        <div className="col-3  mx-auto chartback">

          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">收入占比圓餅圖</div>
            <div className="charttext">$1300</div>
          </div>

          <Pie data={Doughnutdata} options={Doughnutoptions} />
        </div>
      </div>
      <div className="row my-5 ">
        <div className="col-7 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">本月收支直方圖(單位:元)</div>
          </div>
          <Bar data={Horizontaldata} options={Horizontaloptions} />
        </div>
        <div className="col-3 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">支出占比圓餅圖</div>
            <div className="charttext1">$1300</div>
          </div>
          <Pie data={Doughnutdata1} options={Doughnutoptions1} />
        </div>
      </div>
    </>
  );
};
export default Chart_Index;

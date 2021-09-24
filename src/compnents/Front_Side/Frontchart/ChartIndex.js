import React from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import './ChartIndex.css'
const Doughnutdata1 = {
  type: 'pie',
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
const Doughnutdata = {
  type: 'pie',
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
const Horizontaldata = {
  type: 'bar',
  labels: ['二月', '三月', '四月', '五月'],
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
const LineData = {
  type: 'line',
  labels: ['二月', '三月', '四月', '五月'],
  datasets: [
    {
      label: '支出',
      data: [65, 59, 80, 61],
      fill: false,
      borderColor: '#00BFA0',
      tension: 0.1,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBorderColor: '#00BFA0',
      backgroundColor: '#00BFA0'
    }, {
      label: '收入',
      data: [55, 49, 40, 41],
      fill: false,
      borderColor: '#6798E7',
      tension: 0.1,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBorderColor: '#6798E7',
      backgroundColor: '#6798E7'
    },
    {
      label: '平均淨利損',
      data: [56, 57, 58, 59],
      fill: false,
      borderColor: '#FF6424',
      tension: 0.1,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBorderColor: '#FF6424',
      backgroundColor: '#FF6424'
    },
  ],
};


const Chart_Index = () => {
  return (
    <>

      <div className="row mt-5">
        <div className="col-7 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">本月收支折線圖(單位:元)</div>
          </div>
          <Line data={LineData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: 'bottom',

                },
              }
            }}
          />
        </div>
        <div className="col-3  mx-auto chartback">

          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">收入占比圓餅圖</div>
            <div className="charttext">$1300</div>
          </div>

          <Pie data={Doughnutdata}
            options={{

              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                tooltip: {
                  enabled: true,
                  callbacks: {
                    label: function (tooltipItem) {
                      return tooltipItem.parsed + '元';
                  },
                    footer: (ttItem) => {
                      let sum = 0;
                      let dataArr = ttItem[0].dataset.data;
                      dataArr.map(data => {
                        sum += Number(data);
                      });

                      let percentage = (ttItem[0].parsed * 100 / sum).toFixed(2) + '%';
                      return `占比: ${percentage}`;
                    }
                  },
                },
                legend: {
                  display: true,
                  position: 'bottom'
                },
              },
            }} />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-7 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">本月收支直方圖(單位:元)</div>
          </div>
          <Bar data={Horizontaldata} options={{
            plugins: {
              legend: {
                display: true,
                position: 'bottom'
              },
            }
          }} />
        </div>
        <div className="col-3 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">支出占比圓餅圖</div>
            <div className="charttext1">$1300</div>
          </div>
          <Pie data={Doughnutdata1} options={{
            plugins: {
              tooltip: {
                titleFontSize: 12,
                bodyFontSize: 12,
                enabled: true,
                callbacks: {
                  label: function (tooltipItem) {
                    return tooltipItem.parsed + '元';
                },
                  footer: (ttItem) => {
                    let sum = 0;
                    let dataArr = ttItem[0].dataset.data;
                    dataArr.map(data => {
                      sum += Number(data);
                    });

                    let percentage = (ttItem[0].parsed * 100 / sum).toFixed(2) + '%';
                    return `占比: ${percentage}`;
                  }
                },
              },
              legend: {
                display: true,
                position: 'bottom',
              },
            }
          }} />
        </div>
      </div>
    </>
  );
};
export default Chart_Index;

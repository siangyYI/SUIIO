import React from "react";
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
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
  plugins: {
    legend: {
      position: 'bottom',
    },

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
  plugins: {
    legend: {
      position: 'bottom',
    },

  },
}
const Horizontaldata = {
  labels: ['上期餘額', '本期餘額', '本期淨利(損)'],
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',

      ],
      borderWidth: 1,
    },
  ],
};

const Horizontaloptions = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    },

  },
};
const LineData = () => ({
  labels: ['大資盃報名費', '比賽住宿費', '材料費', '資管週收入', '退科費'],
  datasets: [
    {

      data: [-30, -20, -10, 10, -50, -70],

      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },{

      data: [-30, -20, -10, 10, -50, -70],

      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

const Lineoptions = {
  type: 'bar',
  data: 'data',
  plugins: {
    legend: {
    },
    title: {
      display: true,
      text: '2-4 月  收支報表',
      font:{style:'bold'},
    },

  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month',
          color: '#911',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
          color: '#191',
          font: {
            size: 20,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: { top: 30, left: 0, right: 0, bottom: 0 }
        }
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
            <div className="ml-2 charttitle">
            </div>
          </div>
          <Bar data={LineData} options={Lineoptions} />
        </div>
        <div className="col-3  mx-auto chartback">

          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">收入總金額</div>
            <div className="charttext">$1300</div>
          </div>

          <Doughnut data={Doughnutdata} options={Doughnutoptions} />
        </div>
      </div>
      <div className="row my-5 ">
        <div className="col-7 mx-auto chartback">
          <Bar data={Horizontaldata} options={Horizontaloptions} />
        </div>
        <div className="col-3 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">支出總金額</div>
            <div className="charttext">$1300</div>
          </div>
          <Doughnut data={Doughnutdata1} options={Doughnutoptions1} />
        </div>
      </div>
    </>
  );
};
export default Chart_Index;

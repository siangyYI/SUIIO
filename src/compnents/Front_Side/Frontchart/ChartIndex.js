import React from "react";
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import './ChartIndex.css'
const Doughnutdata = {
  labels: ['資管週', '大迎新', '送舊', '聖誕晚會','科費'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5,50],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(75, 192, 192)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
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
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
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
    },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart_Index = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-7 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">
              2-4 月  收支報表
            </div>
          </div>
          <Bar data={LineData} options={options} />
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
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">支出總金額</div>
          </div>
          <Bar data={Horizontaldata} options={Horizontaloptions} />
        </div>
        <div className="col-3 mx-auto chartback">
          <div className="my-3 d-flex justify-content-between">
            <div className="ml-2 charttitle">支出總金額</div>
            <div className="charttext">$1300</div>
          </div>
          <Doughnut data={Doughnutdata} options={Doughnutoptions} />
        </div>
      </div>
    </>
  );
};
export default Chart_Index;

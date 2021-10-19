import React from "react";
import { Container } from "react-bootstrap";
import "./CompareIndex.css";
import { Bar, Pie, Line } from "react-chartjs-2";
import CompareFilter from "./CompareFilter";
import CompareDetail from "./CompareDetail";
import CompareDetailTwo from "./CompareDetailTwo";
const expendData = {
  type: "line",
  labels: ["七月", "八月", "九月", "十月"],
  datasets: [
    {
      label: "109大迎新收入",
      data: [65, 59, 80, 61],
      fill: false,
      borderColor: "#00BFA0",
      tension: 0.1,
      pointStyle: "circle",
      pointRadius: 5,
      pointBorderColor: "#00BFA0",
      backgroundColor: "#00BFA0",
    },
    {
      label: "108大迎新收入",
      data: [60, 51, 75, 61],
      fill: false,
      borderColor: "#6798E7",
      tension: 0.1,
      pointStyle: "circle",
      pointRadius: 5,
      pointBorderColor: "#6798E7",
      backgroundColor: "#6798E7",
    },
  ],
};
const incomeData = {
  type: "line",
  labels: ["七月", "八月", "九月", "十月"],
  datasets: [
    {
      label: "109大迎新支出",
      data: [80, 70, 75, 85],
      fill: false,
      borderColor: "#0089C0",
      tension: 0.1,
      pointStyle: "circle",
      pointRadius: 5,
      pointBorderColor: "#0089C0",
      backgroundColor: "#0089C0",
    },
    {
      label: "108大迎新支出",
      data: [60, 51, 75, 61],
      fill: false,
      borderColor: "#51425F",
      tension: 0.1,
      pointStyle: "circle",
      pointRadius: 5,
      pointBorderColor: "#51425F",
      backgroundColor: "#51425F",
    },
  ],
};
const PieData1 = {
  labels: ["收益", "折損"], //顯示區間名稱
  datasets: [
    {
      label: "108學年度", // tootip 出現的名稱
      lineTension: 0, // 曲線的彎度，設0 表示直線
      backgroundColor: ["#CCBE98", "#448599"],
      borderColor: ["#CCBE98", "#448599"],
      borderWidth: 1,
      data: [37000, 20000], // 資料
      fill: false, // 是否填滿色彩
    },
  ],
};
const PieData = {
  labels: ["收益", "折損"], //顯示區間名稱
  datasets: [
    {
      label: "109學年度", // tootip 出現的名稱
      lineTension: 0, // 曲線的彎度，設0 表示直線
      backgroundColor: ["#5197D5", "#222D43"],
      borderColor: ["#5197D5", "#222D43"],
      borderWidth: 1,

      data: [20000, 38000], // 資料
      fill: false, // 是否填滿色彩
    },
  ],
};
const HorizontalData1 = {
  labels: [
    "水",
    "場勘入園費",
    "生活組用品和食材用品",
    "值星帶",
    "場地費尾款",
    "紅包",
  ], //顯示區間名稱
  datasets: [
    {
      label: "108學年度", // tootip 出現的名稱
      lineTension: 0, // 曲線的彎度，設0 表示直線
      backgroundColor: "#07889b",
      borderColor: "#07889b",
      borderWidth: 1,
      data: [-4100, -2300, -7138, -1240, -60430, -3300], // 資料
      fill: false, // 是否填滿色彩
    },
    {
      label: "109學年度", // tootip 出現的名稱
      lineTension: 0, // 曲線的彎度，設0 表示直線
      backgroundColor: "#e37222",
      borderColor: "#e37222",
      borderWidth: 1,
      data: [-3200, -1400, -6238, -240, -57430], // 資料
      fill: false, // 是否填滿色彩
    },
  ],
};
const name = document.getElementById("activity1");
const scrollToAnchor = (name) => {
  if (name) {
    // 找到錨點
    let anchorElement = document.getElementById(name);
    // 如果對應id的錨點存在，就跳轉到錨點
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};

const CompareIndex = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <div
          className="d-flex flex-column  Comparenav"
          style={{ marginTop: "50px" }}
        >
          <div className="Comparecon my-2 px-2">
            <a onClick={() => scrollToAnchor("activity1")}>比較圖表</a>
          </div>
          <div className="Comparecon my-2 px-2">
            <a onClick={() => scrollToAnchor("activity2")}>淨利/損</a>
          </div>
          <div className="Comparecon my-2 px-2">
            <a onClick={() => scrollToAnchor("activity3")}>淨利/損圓餅圖</a>
          </div>
        </div>
      </div>

      <Container>
        {" "}
        <CompareFilter />
        <div id="activity1" className=""></div>
        <div className="Comtitle mt-5">比較圖表</div>
        <div className="d-flex justify-content-center">
          <div className="mr-5 align-self-center">
            <select className="cDropdown">
              <option>九月</option>
              <option>九~十二月</option>
              <option>六個月</option>
              <option>一學期</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="mx-auto barstyle chartback">
            <div className="my-3 d-flex justify-content-between">
              <div className="ml-2 charttitle">九月比較長條圖(單位:元)</div>
            </div>
            <Bar
              data={HorizontalData1}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                },
              }}
              style={{ position: "relative", width: "50%", height: "50%" }}
            />
          </div>
        </div>
        <div id="activity2" className="my-5">
          <div className="Comtitle">
            <div className="mt-5">淨利/損</div>
          </div>
          <div className="row">
            <CompareDetailTwo />
            <CompareDetail />
          </div>
        </div>
        <div id="activity3" style={{ paddingtop: "0.25%" }}>
          <div className="Comtitle  ">
            <div className="mt-5">淨利/損圓餅圖</div>
          </div>
          <div className="row my-5">
            <div
              className="mx-auto"
              style={{ position: "relative", width: "40%" }}
            >
              <Pie
                data={PieData}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    labels: {
                      fontSize: 12,
                      boxWidth: 12,
                      usePointStyle: true,
                    },
                    tooltip: {
                      enabled: true,
                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.parsed + "元";
                        },
                        footer: (ttItem) => {
                          let sum = 0;
                          let dataArr = ttItem[0].dataset.data;
                          dataArr.map((data) => {
                            sum += Number(data);
                          });

                          let percentage =
                            ((ttItem[0].parsed * 100) / sum).toFixed(2) + "%";
                          return `占比: ${percentage}`;
                        },
                      },
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
            <div
              className="mx-auto"
              style={{ position: "relative", width: "40%" }}
            >
              <Pie
                data={PieData1}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    tooltip: {
                      enabled: true,
                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.parsed + "元";
                        },
                        footer: (ttItem) => {
                          let sum = 0;
                          let dataArr = ttItem[0].dataset.data;
                          dataArr.map((data) => {
                            sum += Number(data);
                          });

                          let percentage =
                            ((ttItem[0].parsed * 100) / sum).toFixed(2) + "%";
                          return `占比: ${percentage}`;
                        },
                      },
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="ititle" id="activity4">
          活動圖表
        </div>
        <div className="row my-4 mx-auto">
          <div className=" align-self-center">
            <select className="cDropdown">
              <option>大迎新</option>
              <option>送舊</option>
              <option>民歌</option>
              <option>資管周</option>
            </select>
          </div>
        </div>
        <div className="row mx-auto my-5">
          <div
            className="mx-auto chartback"
            style={{ position: "relative", width: "45%" }}
          >
            <Line
              data={incomeData}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                },
              }}
            />
          </div>
          <div
            className="mx-auto chartback"
            style={{ position: "relative", width: "45%" }}
          >
            <Line
              data={expendData}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                },
              }}
            />
          </div>
        </div>
      </Container>
    </>
  );
};
export default CompareIndex;

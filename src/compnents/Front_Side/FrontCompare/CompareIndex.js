import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./CompareIndex.css";
import { Bar, Pie, Line } from "react-chartjs-2";
import CompareFilter from "./CompareFilter";
import { CompareDetail } from "./CompareDetail";
import { CompareDetailTwo } from "./CompareDetailTwo";
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

export class CompareIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      date: "",
      category: [],
    };
  }
  fetchContent = async () => {
    await fetch(`http://localhost:4000/api/statement/fetch/all`)
      .then((res) => res.json())
      .then((data) => this.setState({ accounts: data }));
  };
  async componentWillMount() {
    await this.fetchContent();
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-end">
          <div
            className="d-flex flex-column  Comparenav"
            style={{ marginTop: "50px" }}
          >
            <a
              onClick={() => scrollToAnchor("activity2")}
              className="Comparecon my-2 px-3 py-1"
            >
              淨利/損
            </a>
            <a
              onClick={() => scrollToAnchor("activity4")}
              className="Comparecon my-2 px-3 py-1"
            >
              活動圖表
            </a>{" "}
            <a
              onClick={() => scrollToAnchor("activity1")}
              className="Comparecon my-2 px-3 py-1"
            >
              比較圖表
            </a>
          </div>
        </div>
        <Container>
          {" "}
          <div id="activity2">
            <CompareFilter />
          </div>
          <div className="my-2">
            <div className="Comtitle">
              <div className="">淨利/損</div>
            </div>
            <div className="row">
              <CompareDetailTwo accounts={this.state.accounts} />
              <CompareDetail accounts={this.state.accounts} />
            </div>
          </div>
          <div id="activity3" style={{ paddingtop: "0.25%" }}>
            <div className="Comtitle  ">
              <div className="">圓餅圖</div>
            </div>
            <div className="row my-2">
              <div
                className="mx-auto"
                style={{ position: "relative", width: "32%" }}
              >
                <div className="row m-2">
                  <div className="pieText col" style={{ color: "green" }}>
                    收入&nbsp; NT38,000
                  </div>
                  <div
                    className="pieText col text-right"
                    style={{ color: "red" }}
                  >
                    支出&nbsp; NT20,000
                  </div>
                </div>
                <Pie
                  data={{
                    labels: ["收益", "折損"], //顯示區間名稱
                    datasets: [
                      {
                        label: "108學年度", // tootip 出現的名稱
                        lineTension: 0, // 曲線的彎度，設0 表示直線
                        backgroundColor: ["#1abc9c", "#f39c12"],
                        borderColor: ["#1abc9c", "#f39c12"],
                        borderWidth: 1,
                        data: [37000, 20000], // 資料
                        fill: false, // 是否填滿色彩
                      },
                    ],
                  }}
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
                style={{ position: "relative", width: "32%" }}
              >
                <div className="row m-2">
                  <div className="pieText col" style={{ color: "green" }}>
                    收入&nbsp; NT37,000
                  </div>
                  <div
                    className="pieText col text-right"
                    style={{ color: "red" }}
                  >
                    支出&nbsp; NT20,000
                  </div>
                </div>
                <Pie
                  data={{
                    labels: ["收益", "折損"], //顯示區間名稱
                    datasets: [
                      {
                        label: "108學年度", // tootip 出現的名稱
                        lineTension: 0, // 曲線的彎度，設0 表示直線
                        backgroundColor: ["#1abc9c", "#f39c12"],
                        borderColor: ["#1abc9c", "#f39c12"],
                        borderWidth: 1,
                        data: [37000, 20000], // 資料
                        fill: false, // 是否填滿色彩
                      },
                    ],
                  }}
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
          <div id="activity4" className="mt-5 p-2"></div>
          <div className="row" style={{ borderBottom: " 1px solid #a7a7a7" }}>
            <div className="Comtitle2 my-3">活動圖表</div>

            <div className="ml-5 text-center  my-3">
              <select className="cDropdown">
                <option>大迎新</option>
                <option>送舊</option>
                <option>民歌</option>
                <option>資管周</option>
              </select>
            </div>
          </div>
  
          <div className="mx-auto" style={{ width: "100%" }}>
            <div className="chartback mt-3">
              <div className="p-3">
                <div className="m-2 charttitle">活動圖表直方圖</div>
              </div>
              <div className="px-5 pb-2">
                <Bar
                  data={{
                    type: "bar",

                    labels: ["收入", "支出", "淨損"],
                    datasets: [
                      {
                        label: "109",
                        data: ["10000", "54464", "89799"],
                        backgroundColor: [
                          "#227093",                        
                        ],
                        borderColor: [
                          "#227093",
                        ],
                        borderWidth: 1,
                      }, {
                        label: "108",
                        data: ["14561", "56489", "76799"],
                        backgroundColor: [
                          "#ffb142",
                        ],
                        borderColor: [
                          "#ffb142",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    indexAxis: "y",
                    elements: {
                      bar: {
                        borderWidth: 2,
                      },
                    },
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "right",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div id="activity1" className=""></div>
          <div className="Comtitle my-5">比較圖表</div>
          <div className="row mt-4">
            <div className="mx-auto barstyle chartback">
              <div className="my-3 d-flex justify-content-between">
                <div className="ml-2 charttitle">九月比較長條圖(單位:元)</div>
              </div>
              <Bar
                data={{
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
                      data: [4100, 2300, 7138, 1240, 60430, 3300], // 資料
                      fill: false, // 是否填滿色彩
                    },
                    {
                      label: "109學年度", // tootip 出現的名稱
                      lineTension: 0, // 曲線的彎度，設0 表示直線
                      backgroundColor: "#e37222",
                      borderColor: "#e37222",
                      borderWidth: 1,
                      data: [3200, 1400, 6238, 240, 57430], // 資料
                      fill: false, // 是否填滿色彩
                    },
                  ],
                }}
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
        </Container>
      </>
    );
  }
}

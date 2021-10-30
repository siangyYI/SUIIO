import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./CompareIndex.css";
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
      categoryyear1: 109,
      categoryyear2: 109,
      catchar1: [],
      catchar2: [],
      accounts1: [],
      accounts2: [],
      pie_data1: [],
      pie_data2: [],
      category1: [],
      category2: [],
      date: "",
      categoryAll: [],
      year: 109,
      yearChart1: [],
      yearChart2: [],
      catvalue: "",
      result: [],
      years: [109, 108, 107, 106, 105],
    };
  }
  fetchContent1 = async (year) => {
    await fetch(
      `http://localhost:4000/api/account/fetch/diagram/compare/${year}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ accounts1: data }));
  };
  fetchContent2 = async (year) => {
    await fetch(
      `http://localhost:4000/api/account/fetch/diagram/compare/${year}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ accounts2: data }));
  };
  fetchCategory1 = async (category1) => {
    await fetch(
      `http://localhost:4000/api/account/fetch/diagram/category/${category1}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ category1: data }));
  };
  fetchCategory2 = async (category2) => {
    await fetch(
      `http://localhost:4000/api/account/fetch/diagram/category/${category2}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ category2: data }));
  };
  async componentWillMount() {
    await this.fetchContent1(this.state.year);
    this.state.pie_data1.push(this.state.accounts1.income);
    this.state.pie_data1.push(Math.abs(this.state.accounts1.cost));
    await this.fetchContent2(this.state.year);
    this.state.pie_data2.push(this.state.accounts1.income);
    this.state.pie_data2.push(Math.abs(this.state.accounts1.cost));
    await this.fetchCategory1(this.state.year);
    await this.fetchCategory2(this.state.year);
  }
  getValue1 = async (event) => {
    await this.fetchCategory1(event.target.value);
    await this.fetchContent1(event.target.value);
    const arr = [
      this.state.accounts1.income,
      Math.abs(this.state.accounts1.cost),
    ];
    this.setState({
      year: event.target.value,
      pie_data1: arr,
      catchar1: [],
      categoryAll: [],
    });
    this.state.categoryyear1 = event.target.value;
  };

  getValue2 = async (event) => {
    await this.fetchContent2(event.target.value);
    await this.fetchCategory2(event.target.value);

    const arr = [
      this.state.accounts2.income,
      Math.abs(this.state.accounts2.cost),
    ];

    await this.setState({
      year: event.target.value,
      pie_data2: arr,
      catchar2: [],
      categoryAll: [],
    });
    this.state.categoryyear2 = event.target.value;
  };

  setCategory = async (event) => {
    this.state.catvalue = event.target.value; //select
    const arr = Object.keys(this.state.category1);
    await this.setState({ catchar1: arr });
    Object.keys(this.state.category1).map((x) => {
      if (this.state.catvalue === x) {
        this.setState({ catchar1: this.state.category1[this.state.catvalue] });
      }
    });
    const arr_2 = Object.keys(this.state.category2);
    await this.setState({ catchar2: arr_2 });
    Object.keys(this.state.category2).map((x) => {
      if (this.state.catvalue === x) {
        this.setState({ catchar2: this.state.category2[this.state.catvalue] });
      }
    });
    const arrincome = [this.state.catchar1.income, this.state.catchar2.income];
    const arrcost = [
      Math.abs(this.state.catchar1.cost),
      Math.abs(this.state.catchar2.cost),
    ];
    await this.setState({
      yearChart1: arrincome,
      yearChart2: arrcost,
      arr: [],
    });

    // console.log("1",this.state.yearChart1,"2",this.state.yearChart2)
  };

  render() {
    return (
      <>
        {console.log("1", this.state.yearChart1, "2", this.state.yearChart2)}
        <Container>
          <div className="cfilter">
            <div className="row text-center">
              <div className="col my-4 text-center">
                <select
                  onChange={(e) => this.getValue1(e)}
                  defaultValue={109}
                  className="bDropdown"
                >
                  {this.state.years.map((ele, index) => {
                    return <option key={index}>{ele}</option>;
                  })}
                </select>
              </div>

              <div className="col my-4 text-center">
                <select
                  onChange={(e) => this.getValue2(e)}
                  // defaultValue={108}
                  className="bDropdown"
                >
                  {this.state.years.map((elem, index) => {
                    return <option key={index}>{elem}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="row mt-5">
              <CompareDetailTwo accounts1={this.state.accounts1} />
              <CompareDetail accounts2={this.state.accounts2} />
            </div>
          </div>
          <div style={{ paddingtop: "0.25%" }}>
            <div className="row my-2">
              <div
                className="mx-auto"
                style={{ position: "relative", width: "35%" }}
              >
                <Pie
                plugins={[ChartDataLabels]}
                  data={{
                    labels: ["收益", "折損"], //顯示區間名稱
                    datasets: [
                      {
                        lineTension: 0, // 曲線的彎度，設0 表示直線
                        backgroundColor: [ "rgb(69, 185, 69)","rgb(196, 68, 68)"],
                        borderWidth: 1,
                        data: this.state.pie_data1, // 資料
                        fill: false, // 是否填滿色彩
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      datalabels: {
                        display: 'auto',
                        formatter: function (value) {
                          return Number(
                            parseFloat(Math.abs(value)).toFixed(3)
                          ).toLocaleString("en", {
                            minimumFractionDigits: 0,
                          }) + '元';
                        },
                        font: {
                          size: 16,
                        },
                        labels: {
                          value: {
                            color: '#ffffff',
                            size: "40px"
                          }
                        }
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
                style={{ position: "relative", width: "35%",color:"white" }}
              >
                <Pie
                plugins={[ChartDataLabels]}
                  data={{
                    labels: ["收益", "折損"], //顯示區間名稱
                    datasets: [
                      {
                        lineTension: 0, // 曲線的彎度，設0 表示直線
                        backgroundColor:[ "rgb(69, 185, 69)","rgb(196, 68, 68)"],
                        borderWidth: 1,
                        data: this.state.pie_data2, // 資料
                        fill: false, // 是否填滿色彩
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      datalabels: {
                        display: 'auto',
                        formatter: function (value) {
                          return Number(
                            parseFloat(Math.abs(value)).toFixed(3)
                          ).toLocaleString("en", {
                            minimumFractionDigits: 0,
                          }) + '元';
                        },
                        font: {
                          size: 16,
                        },
                        labels: {
                          value: {
                            color: '#ffffff',
                            size: "40px"
                          }
                        }
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
            </div>
          </div>
          <div id="activity4" className="mt-5 p-2"></div>
          <div className="row" style={{ borderBottom: " 1px solid #a7a7a7" }}>
            <div className="Comtitle2 my-3">活動圖表</div>

            <div className="ml-5 text-center  my-3">
              {
                ((this.state.categoryAll = this.state.categoryAll.concat(
                  Object.keys(this.state.category1),
                  Object.keys(this.state.category2)
                )),
                (this.state.result = Array.from(
                  new Set(this.state.categoryAll)
                )),
                //  this.state.categoryAll=new Set(this.state.categoryAll),
                //  this.state.categoryAll=Object.keys(this.state.category2),
                console.log(this.state.result))
              }
              <select
                onChange={(e) => this.setCategory(e)}
                className="cDropdown"
              >
                <option>{"---"}</option>
                {console.log(this.state.result)}
                {/* {Object.keys(this.state.category1).length === 0 ? (
                  <option>{"---"}</option>
                ) :  */}
                {this.state.result.map((category, index) => {
                  return (
                    <>
                      <option key={index}>{category}</option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mx-auto" style={{ width: "100%" }}>
            <div className="chartback mt-3 my-4">
              <div className="p-3">
                <div className="m-2 charttitle">活動圖表直方圖</div>
              </div>
              <div className="px-5 pb-2">
                <Bar
                  data={{
                    type: "bar",

                    labels: [
                      this.state.categoryyear1,
                      this.state.categoryyear2,
                    ],
                    datasets: [
                      {
                        label: "收入",
                        data: this.state.yearChart1,
                        backgroundColor:[ "rgb(69, 185, 69)"],
                        borderWidth: 1,
                      },
                      {
                        label: "支出",
                        data: this.state.yearChart2,
                        backgroundColor: ["rgb(196, 68, 68)"],
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
        </Container>
      </>
    );
  }
}

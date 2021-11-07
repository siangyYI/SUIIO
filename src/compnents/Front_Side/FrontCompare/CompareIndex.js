import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./CompareIndex.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Pie } from "react-chartjs-2";
import { CompareDetail } from "./CompareDetail";
import { CompareDetailTwo } from "./CompareDetailTwo";


export class CompareIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catearr: [],
      categoryyear1: 0,
      categoryyear2: 0,
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
      year: [],

      yearChart1: [],
      yearChart2: [],
      catvalue: "0",
      result: [],
      yeardata: []
    };
  }
  fetchyear = async () => {
    await fetch(
      `http://suiio.nutc.edu.tw:2541/api/account/fetch/diagram/year`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          year: data,
          categoryyear1: data[0],
          categoryyear2: data[1]
        }
        ));
  };
  fetchContent1 = async (year) => {
    await fetch(
      `http://suiio.nutc.edu.tw:2541/api/account/fetch/diagram/compare/${year}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ accounts1: data }));
  };
  fetchContent2 = async (year) => {
    await fetch(
      `http://suiio.nutc.edu.tw:2541/api/account/fetch/diagram/compare/${year}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ accounts2: data }));
  };
  fetchCategory1 = async (category1) => {
    await fetch(
      `http://suiio.nutc.edu.tw:2541/api/account/fetch/diagram/category/${category1}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ category1: data }));
  };
  fetchCategory2 = async (category2) => {
    await fetch(
      `http://suiio.nutc.edu.tw:2541/api/account/fetch/diagram/category/${category2}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ category2: data }));
  };

  async componentWillMount() {
    // await this.setCategory("一般項目")
    await this.fetchyear();

    await this.fetchContent1(this.state.categoryyear1);
    this.state.pie_data1.push(this.state.accounts1.income);
    this.state.pie_data1.push(Math.abs(this.state.accounts1.cost));

    await this.fetchContent2(this.state.categoryyear2);
    this.state.pie_data2.push(this.state.accounts2.income);
    this.state.pie_data2.push(Math.abs(this.state.accounts2.cost));

    await this.fetchCategory1(this.state.categoryyear1);

    await this.fetchCategory2(this.state.categoryyear2);

    const arr = Object.keys(this.state.category1);
    // ---------------------------------
    await this.setState({ catchar1: arr });
    // ---------------------------------
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
    const arrincome_start = [
      this.state.catchar1.income ?? 0,
      this.state.catchar2.income ?? 0];

    const arrcost_start = [
      Math.abs(this.state.catchar1.cost ?? 0),
      Math.abs(this.state.catchar2.cost ?? 0),
    ];
    await this.setState({
      yearChart1: arrincome_start,
      yearChart2: arrcost_start,
      arr: [],
    });
  }
  f = () => {
    const arrincome_category = [
      this.state.catchar1.income ?? 0,
      this.state.catchar2.income ?? 0];

    const arrcost_category = [
      Math.abs(this.state.catchar1.cost ?? 0),
      Math.abs(this.state.catchar2.cost ?? 0),
    ];
    this.setState({
      yearChart1: arrincome_category,
      yearChart2: arrcost_category,
      arr: [],
    });
  }

  getValue1 = async (event) => {
    this.state.yeardata = this.state.year
    await this.fetchCategory1(event.target.value);
    await this.fetchContent1(event.target.value);
    const arr = [
      this.state.accounts1.income,
      Math.abs(this.state.accounts1.cost),
    ];
    this.setState({
      year: this.state.yeardata,
      pie_data1: arr,
      catchar1: [],
      categoryAll: [],
    });

    this.state.categoryyear1 = event.target.value;
    const arr_category = Object.keys(this.state.category1);
    // -----------------------------
    await this.setState({ catchar1: arr_category });
    // -----------------------------
    Object.keys(this.state.category1).map((x) => {
      if (this.state.catvalue === x) {
        this.setState({ catchar1: this.state.category1[this.state.catvalue] });
      }
    });

    this.f()
  };
  getValue2 = async (event) => {
    this.state.yeardata = this.state.year
    this.state.categoryyear2 = event.target.value;
    await this.fetchContent2(event.target.value);
    await this.fetchCategory2(event.target.value);
    console.log(event.target.value);
    const arr = [
      this.state.accounts2.income ?? 0,
      Math.abs(this.state.accounts2.cost ?? 0),
    ];

    await this.setState({
      year: this.state.yeardata,
      pie_data2: arr,
      catchar2: [],
      categoryAll: [],
    });
    console.log(this.state.categoryyear2)
    const arr_2 = Object.keys(this.state.category2);
    await this.setState({ catchar2: arr_2 });
    Object.keys(this.state.category2).map((x) => {
      if (this.state.catvalue === x) {
        this.setState({ catchar2: this.state.category2[this.state.catvalue] });
      }
    });
    const arrincome_category_2 = [
      this.state.catchar1.income ?? 0,
      this.state.catchar2.income ?? 0];

    const arrcost_category_2 = [
      Math.abs(this.state.catchar1.cost ?? 0),
      Math.abs(this.state.catchar2.cost ?? 0),
    ];
    await this.setState({
      yearChart1: arrincome_category_2,
      yearChart2: arrcost_category_2,
      arr: [],
    });
  };

  setCategory = async (event) => {
    console.log(event.target.value)
    this.setState({ catvalue: event.target.value }) //select
    const arr = Object.keys(this.state.category1);
    // ----------------------------
    await this.setState({ catchar1: arr });
    // ----------------------------
    Object.keys(this.state.category1).forEach((x) => {
      if (this.state.catvalue === x) {
        this.setState({ catchar1: this.state.category1[event.target.value] });
      }
    });
    const arr_2 = Object.keys(this.state.category2);
    await this.setState({ catchar2: arr_2 });
    Object.keys(this.state.category2).forEach((x) => {
      if (this.state.catvalue === x) {
        this.setState({ catchar2: this.state.category2[this.state.catvalue] });
      }
    });
    const arrincome = [this.state.catchar1.income ?? 0, this.state.catchar2.income ?? 0];
    const arrcost = [
      Math.abs(this.state.catchar1.cost ?? 0),
      Math.abs(this.state.catchar2.cost ?? 0),
    ];
    await this.setState({
      yearChart1: arrincome,
      yearChart2: arrcost,
      arr: [],
    });
  };
  render() {
    return (
      <>
        <Container>
          <div className="cfilter">
            <div className="row text-center">
              <div className="col my-4 text-center">
                <select
                  onChange={(e) => this.getValue1(e)}
                  className="bDropdown"
                >
                  {this.state.year.map((ele, index) =>
                    <option
                      value={ele}
                      selected={ele === this.state.categoryyear1}
                    >{ele}</option>
                  )}
                </select>
              </div>

              <div className="col my-4 text-center">
                <select
                  onChange={(e) => this.getValue2(e)}
                  className="bDropdown"
                >
                  {this.state.year.map((ele, index) =>
                    <option
                      value={ele}
                      selected={ele === this.state.categoryyear2}
                    >{ele}</option>
                  )}
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
                {console.log(this.state.pie_data1)}
                <Pie
                  plugins={[ChartDataLabels]}
                  data={{
                    labels: ["收入", "支出"], //顯示區間名稱
                    datasets: [
                      {
                        lineTension: 0, // 曲線的彎度，設0 表示直線
                        backgroundColor: ["rgb(69, 185, 69)", "rgb(196, 68, 68)"],
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
                        display: "auto",
                        formatter: function (value) {
                          return Number(
                            parseFloat(Math.abs(value)).toFixed(3)
                          ).toLocaleString("en", {
                            minimumFractionDigits: 0,
                          });
                        },
                        font: {
                          size: 30,
                        },
                        labels: {
                          value: {
                            color: "#ffffff",
                            size: "40px",
                          },
                        },
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
                        labels: {
                          font: {
                            size: 20,
                          },
                          color: "black",
                        },
                      },
                    },
                  }}
                />
              </div>
              <div
                className="mx-auto"
                style={{ position: "relative", width: "35%", color: "white" }}
              >
                <Pie
                  plugins={[ChartDataLabels]}
                  data={{
                    labels: ["收入", "支出"], //顯示區間名稱
                    datasets: [
                      {
                        lineTension: 0, // 曲線的彎度，設0 表示直線

                        backgroundColor: [
                          "rgb(69, 185, 69)",
                          "rgb(196, 68, 68)",
                        ],
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
                        display: "auto",
                        formatter: function (value) {
                          return Number(
                            parseFloat(Math.abs(value)).toFixed(3)
                          ).toLocaleString("en", {
                            minimumFractionDigits: 0,
                          });
                        },
                        font: {
                          size: 30,
                        },
                        labels: {
                          value: {
                            color: "#ffffff",
                            size: "40px",
                          },
                        },
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
                        labels: {
                          font: {
                            size: 20,
                          },
                          color: "black",
                        },
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
                this.state.category1.forEach((item) => {
                  this.state.catearr.push(item.category)
                }),
                this.state.category2.forEach((item) => {
                  this.state.catearr.push(item.category)
                }),
                this.state.categoryAll = Array.from(
                  new Set(this.state.catearr)
                ),console.log(this.state.categoryAll)
              }
              <select
                onChange={(e) => this.setCategory(e)}
                className="cDropdown"
              >
                {this.state.categoryAll.map((category, index) => {
                  return (
                    <>
                      <option value={index}>{category}</option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mx-auto" style={{ width: "100%" }}>
            <div className="chartback mt-3 my-4">
              <div className="p-3"></div>
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
                        backgroundColor: ["rgb(69, 185, 69)"],
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
                  plugins={[ChartDataLabels]}
                  options={{
                    plugins: {
                      datalabels: {
                        anchor: 'end',
                        align: 'right',
                        offset: -60,
                        color: 'white',
                        font: {
                          size: 16
                        }
                      },
                      legend: {
                        align: 'end',
                        position: "top",

                      },
                    },
                    indexAxis: "y",
                    elements: {
                      bar: {
                        borderWidth: 2,
                      },
                    },
                    responsive: true,
                    legend: {
                      position: "top",
                    },

                    scales: {
                      y: {
                        ticks: {
                          font: {
                            color: "black",
                            size: 16,
                            weight: "bold",
                          },
                        },
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

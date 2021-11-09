import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";

import "./ChartIndex.css";

export class Chart_Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 12,
      upload: [],
      result_cadre: {},
      income_kind_cadre: [],
      income_amount_cadre: [],
      cost_kind_cadre: [],
      cost_amount_cadre: [],
      count_diagrams: [],
      income_name: [],
      income_amount_name: [],
      Incomeamo: [],
      diagrams: {},
      year: 2019,
      income: [],
      cost: [],
      cost_kind: [],
      cost_amount: [],
      income_kind: [],
      income_amount: [],
      costAll: 0,
      incomeAll: 0,
    };
  }
  diagram = async (year, month) => {
    await fetch(
      `http://suiio.nutc.edu.tw:2541/api/account/fetch/diagram/${year}/${month}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ diagrams: data });
      });
  };
  async componentWillMount() {
    await this.diagram(this.state.year, this.state.month);

    let months = [],
      result = {},
      total = [],
      inc = [],
      cos = [];
    months = Object.keys(this.state.diagrams);
    // eslint-disable-next-line array-callback-return
    months.map((month) => {
      const total = { cost: 0, income: 0 };
      if (!this.state.diagrams[month].length) {
        result[month] = total;
        this.state.count_diagrams.push(0);
      } else {
        // eslint-disable-next-line array-callback-return
        this.state.diagrams[month].map((detail) => {
          const amount = detail.amount;
          if (detail == null) {
            total.income = 0;
            total.cost = 0;
          }
          amount > 0 ? (total.income += amount) : (total.cost += amount * -1);
          result[month] = total;
        });
        this.state.count_diagrams.push(
          Object.keys(this.state.diagrams[month]).length
        );
      }
    });
    let cadre = [];
    // eslint-disable-next-line array-callback-return
    this.state.diagrams[this.state.month].map((x) => {
      cadre[x.uploadBy] = cadre[x.uploadBy] || [];
      cadre[x.uploadBy].push(x);
    });
    let Cost_Name = [];
    console.log(cadre);
    let Costamount_cadre = Object.keys(cadre);

    Costamount_cadre.forEach((element) => {
      let Costcount_cadre = 0;
      cadre[element].forEach((item) => {
        if (item.amount < 0) {
          Costcount_cadre += item.amount;
        } else {
          Cost_Name[item.name] = Cost_Name[item.name] || [];
          Cost_Name[item.name].push(item);
          this.state.Incomeamo = Object.keys(Cost_Name);
        }
      });
      this.state.cost_kind_cadre.push(element.replace("長", ""));
      this.state.cost_amount_cadre.push(Math.abs(Costcount_cadre));
    });
    this.state.Incomeamo.forEach((element) => {
      let count = 0;
      Cost_Name[element].forEach((item) => {
        count += item.amount;
      });
      this.state.income_amount_name.push(count);
    });

    let Costcategory = [];
    let Incomecategory = [];
    // eslint-disable-next-line array-callback-return
    this.state.diagrams[this.state.month].map((x) => {
      if (x.amount > 0) {
        Incomecategory[x.category] = Incomecategory[x.category] || [];
        Incomecategory[x.category].push(x);
      } else {
        Costcategory[x.category] = Costcategory[x.category] || [];
        Costcategory[x.category].push(x);
      }
    });
    let Incomeamount = Object.keys(Incomecategory);
    let Costamount = Object.keys(Costcategory);
    Incomeamount.forEach((element) => {
      let Incomecount = 0;
      Incomecategory[element].forEach((item) => {
        Incomecount += item.amount;
      });
      this.state.income_kind.push(element);
      this.state.income_amount.push(Incomecount);
    });

    Costamount.forEach((element) => {
      let Costcount = 0;
      Costcategory[element].forEach((item) => {
        Costcount += item.amount;
      });
      this.state.cost_kind.push(element);
      this.state.cost_amount.push(Costcount);
    });

    this.state.cost_amount.forEach((x) => {
      this.state.costAll += x;
    });

    this.state.income_amount.forEach((x) => {
      this.state.incomeAll += x;
    });
    // eslint-disable-next-line array-callback-return
    Object.values(result).map((value) => {
      total = value;
      inc.push(total.income);
      cos.push(total.cost);
    });
    this.setState({
      income: inc,
      cost: cos,
    });
  }
  setmonth = async (event) => {
    this.setState({
      incomeAll: 0,
      month: event.target.value,
      costAll: 0,
      income_amount: [],
      income_kind: [],
      cost_amount: [],
      cost_kind: [],
      cost: [],
      income: [],
      diagrams: {},
      income_amount_name: [],
      income_name: [],
      count_diagrams: [],
      cost_amount_cadre: [],
      cost_kind_cadre: [],
      income_amount_cadre: [],
      income_kind_cadre: [],
      result_cadre: {},
      upload: [],
      Incomeamo: [],
    });
    await this.diagram(this.state.year, event.target.value);
    let months = [],
      result = {},
      total = [],
      inc = [],
      cos = [];
    months = Object.keys(this.state.diagrams);

    // eslint-disable-next-line array-callback-return
    months.map((month) => {
      const total = { cost: 0, income: 0 };
      if (!this.state.diagrams[month].length) {
        result[month] = total;
        this.state.count_diagrams.push(0);
      } else {
        // eslint-disable-next-line array-callback-return
        this.state.diagrams[month].map((detail) => {
          const amount = detail.amount;
          if (detail == null) {
            total.income = 0;
            total.cost = 0;
          }
          amount > 0 ? (total.income += amount) : (total.cost += amount * -1);
          result[month] = total;
          console.log(result);
        });
        this.state.count_diagrams.push(
          Object.keys(this.state.diagrams[month]).length
        );
      }
    });
    let cadre = [];
    // eslint-disable-next-line array-callback-return
    this.state.diagrams[event.target.value].map((x) => {
      console.log(cadre);
      cadre[x.uploadBy] = cadre[x.uploadBy] || [];
      cadre[x.uploadBy].push(x);
    });
    let Cost_Name = [];
    let Costamount_cadre = Object.keys(cadre);
    Costamount_cadre.forEach((element) => {
      let Costcount_cadre = 0;
      cadre[element].forEach((item) => {
        if (item.amount < 0) {
          Costcount_cadre += item.amount;
        } else {
          Cost_Name[item.name] = Cost_Name[item.name] || [];
          Cost_Name[item.name].push(item);
          this.state.Incomeamo = Object.keys(Cost_Name);
        }
      });
      if (element === "會長") {
        this.state.cost_kind_cadre.push(element);
      } else {
        this.state.cost_kind_cadre.push(element.replace("長", ""));
      }
      this.state.cost_amount_cadre.push(Math.abs(Costcount_cadre));
    });
    this.state.Incomeamo.forEach((element) => {
      let count = 0;
      Cost_Name[element].forEach((item) => {
        count += item.amount;
      });
      this.state.income_amount_name.push(count);
    });

    let Costcategory = [];
    let Incomecategory = [];
    // eslint-disable-next-line array-callback-return
    this.state.diagrams[event.target.value].map((x) => {
      if (x.amount > 0) {
        Incomecategory[x.category] = Incomecategory[x.category] || [];
        Incomecategory[x.category].push(x);
      } else {
        Costcategory[x.category] = Costcategory[x.category] || [];
        Costcategory[x.category].push(x);
      }
    });
    let Incomeamount = Object.keys(Incomecategory);
    let Costamount = Object.keys(Costcategory);
    Incomeamount.forEach((element) => {
      let Incomecount = 0;
      Incomecategory[element].forEach((item) => {
        Incomecount += item.amount;
      });
      this.state.income_kind.push(element);
      this.state.income_amount.push(Incomecount);
    });

    Costamount.forEach((element) => {
      let Costcount = 0;
      Costcategory[element].forEach((item) => {
        Costcount += item.amount;
      });
      this.state.cost_kind.push(element);
      this.state.cost_amount.push(Costcount);
    });

    this.state.cost_amount.forEach((x) => {
      this.state.costAll += x;
    });

    this.state.income_amount.forEach((x) => {
      this.state.incomeAll += x;
    });
    // eslint-disable-next-line array-callback-return
    Object.values(result).map((value) => {
      total = value;
      inc.push(total.income);
      cos.push(total.cost);
    });
    this.setState({
      income: inc,
      cost: cos,
    });
  };

  render() {
    return (
      <>
        <select
          onChange={(e) => this.setmonth(e)}
          defaultValue={this.state.month}
          className="my-md-4 ml-3 px-2 mx-auto cDropdown d-flex"
          style={{
            borderRadius: "10px",
          }}
        >
          <option value={7}>7月</option>
          <option value={8}>8月</option>
          <option value={9}>9月</option>
          <option value={10}>10月</option>
          <option value={11}>11月</option>
          <option value={12}>12月</option>
          <option value={1}>1月</option>
          <option value={2}>2月</option>
          <option value={3}>3月</option>
          <option value={4}>4月</option>
          <option value={5}>5月</option>
          <option value={6}>6月</option>
        </select>
        <div>
          <div className="row">
            <div className="col-md-8 my-4 mx-3  chartback">
              <div className="p-3">
                <div className="m-2  charttitle">本月收支折線圖(單位:元)</div>
              </div>

              <Line
                data={{
                  labels: Object.keys(this.state.diagrams),
                  datasets: [
                    {
                      label: "支出",
                      data: this.state.cost,
                      fill: false,
                      borderColor: "rgb(196, 68, 68)",
                      tension: 0.1,
                      pointStyle: "circle",
                      pointRadius: 5,
                      pointBorderColor: "rgb(196, 68, 68)",
                      backgroundColor: "rgb(196, 68, 68)",
                    },
                    {
                      label: "收入",
                      data: this.state.income,
                      fill: false,
                      borderColor: "rgb(69, 185, 69)",
                      tension: 0.1,
                      pointStyle: "circle",
                      pointRadius: 5,
                      pointBorderColor: "rgb(69, 185, 69)",
                      backgroundColor: "rgb(69, 185, 69)",
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      align: "end",
                      padding: 20,
                      display: true,
                      position: "top",
                    },
                  },
                }}
              />
            </div>
            <div className="col my-4 mx-3 chartback">
              <div className="py-3">
                <div
                  className="row"
                  style={{ marginBottom: "16%", marginTop: "5%" }}
                >
                  <div className="col charttitle">收入占比圓餅圖</div>
                  <div className="mr-3 charttext">
                    NT$&nbsp;
                    {Number(
                      parseFloat(Math.abs(this.state.incomeAll)).toFixed(3)
                    ).toLocaleString("en", {
                      minimumFractionDigits: 0,
                    })}
                  </div>
                </div>
                {/* {Chart.Legend.prototype.afterFit = function () {
                  this.height = this.height + 50;
                }
                } */}
                <Pie
                  plugins={[ChartDataLabels]}
                  data={{
                    //支出圓餅圖
                    type: "pie",
                    labels: this.state.Incomeamo,
                    datasets: [
                      {
                        data: this.state.income_amount_name,
                        backgroundColor: [
                          "#1abc9c",
                          "#6078cf",
                          "#06344c",
                          "#60a3bc",
                          "#284492",
                        ],
                        borderColor: [
                          "#1abc9c",
                          "#6078cf",
                          "#06344c",
                          "#60a3bc",
                          "#284492",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      beforeInit: function (chart, options) {
                        const originalFit = chart.legend.fit;
                        // Override the fit function
                        chart.legend.fit = function fit() {
                          // Call original function and bind scope in order to use `this` correctly inside it
                          originalFit.bind(chart.legend)();
                          // Change the height as suggested in another answers
                          this.height += 150;
                        };
                      },
                      datalabels: {
                        display: "auto",
                        formatter: function (value, ctx) {
                          let sum = 0;
                          let dataArr = ctx.chart.data.datasets[0].data;
                          // eslint-disable-next-line array-callback-return
                          dataArr.map((data) => {
                            sum += data;
                          });
                          let percentage = (value.toFixed(2) / sum) * 100;

                          if (percentage > 100) {
                            percentage = 100;
                          }

                          if (percentage < 15) {
                            return "";
                          }

                          if (ctx.width <= 500) {
                            return "";
                          }
                          return Number(
                            parseFloat(Math.abs(value)).toFixed(3)
                          ).toLocaleString("en", {
                            minimumFractionDigits: 0,
                          });
                        },
                        font: {
                          size: 20,
                        },
                        labels: {
                          value: {
                            color: "#ffffff",
                          },
                        },
                      },
                      tooltip: {
                        enabled: true,
                        callbacks: {
                          label: function (tooltipItem) {
                            return Math.abs(tooltipItem.parsed);
                          },
                          footer: (ttItem) => {
                            let sum = 0;
                            let dataArr = ttItem[0].dataset.data;
                            // eslint-disable-next-line array-callback-return
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
                            size: 16,
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-8 mx-3 chartback">
              <div className="p-3">
                <div className="m-2 charttitle">各幹部支出直方圖(單位:元)</div>
              </div>
              <Bar
                plugins={[ChartDataLabels]}
                data={{
                  type: "bar",
                  labels: this.state.cost_kind_cadre,
                  datasets: [
                    {
                      label: "支出",
                      data: this.state.cost_amount_cadre,
                      fill: true,
                      backgroundColor: "#b7170f",
                      borderColor: "#b7170f",
                      tension: 0.1,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    datalabels: {
                      anchor: "end",
                      align: "end",
                      offset: 4,
                      color: "black",
                      formatter: function (value) {
                        return Number(
                          parseFloat(Math.abs(value)).toFixed(3)
                        ).toLocaleString("en", {
                          minimumFractionDigits: 0,
                        });
                      },
                    },
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
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
            <div className="col mx-3 chartback">
              <div className="py-3">
                <div
                  className="row"
                  style={{ marginBottom: "16%", marginTop: "5%" }}
                >
                  <div className="col charttitle">收入占比圓餅圖</div>
                  <div className="mr-3 charttext1">
                    NT$&nbsp;
                    {Number(
                      parseFloat(Math.abs(this.state.costAll)).toFixed(3)
                    ).toLocaleString("en", {
                      minimumFractionDigits: 0,
                    })}
                  </div>
                </div>
                <Pie
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  plugins={[
                    {
                      beforeInit: (chart, options) => {
                        chart.legend.afterFit = () => {
                          if (chart.legend.margins) {
                            // Put some padding around the legend/labels
                            chart.legend.options.labels.padding = 30;
                            // Because you added 20px of padding around the whole legend,
                            // you will need to increase the height of the chart to fit it
                            chart.height += 40;
                          }
                        };
                      },
                    },
                    ChartDataLabels,
                  ]}
                  data={{
                    //支出圓餅圖
                    type: "pie",
                    labels: this.state.cost_kind,
                    datasets: [
                      {
                        data: this.state.cost_amount,
                        backgroundColor: [
                          "#ff6b81",
                          "#6e252a",
                          "#d4b86a",
                          "#ee734b",
                          "#e3b841",
                          "#e1c823",
                        ],
                        borderColor: [
                          "#ff6b81",
                          "#6e252a",
                          "#d4b86a",
                          "#ee734b",
                          "#e3b841",
                          "#e1c823",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      datalabels: {
                        display: "auto",
                        formatter: function (value, ctx) {
                          let sum = 0;
                          let dataArr = ctx.chart.data.datasets[0].data;
                          // eslint-disable-next-line array-callback-return
                          dataArr.map((data) => {
                            sum += data;
                          });
                          let percentage = (value.toFixed(2) / sum) * 100;
                          if (percentage > 100) {
                            percentage = 100;
                          }
                          if (percentage < 10) {
                            return "";
                          }
                          if (ctx.width <= 100) {
                            return "";
                          }
                          return Number(
                            parseFloat(Math.abs(value)).toFixed(3)
                          ).toLocaleString("en", {
                            minimumFractionDigits: 0,
                          });
                        },
                        font: {
                          size: 20,
                        },
                        labels: {
                          value: {
                            color: "#ffffff",
                            size: "40px",
                          },
                        },
                      },
                      tooltip: {
                        callbacks: {
                          label: function (tooltipItem) {
                            return Math.abs(tooltipItem.parsed) + "元";
                          },
                          footer: (ttItem) => {
                            let sum = 0;
                            let dataArr = ttItem[0].dataset.data;
                            // eslint-disable-next-line array-callback-return
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
                            size: 16,
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

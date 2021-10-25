import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import "./ChartIndex.css";

export class Chart_Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 6,
      accounts: [],
      acc: [],
      upload: [],
      result_cadre: {},
      income_kind_cadre: [],
      income_amount_cadre: [],
      cost_kind_cadre: [],
      cost_amount_cadre: [],
      count_diagrams: [],
      income_name: [],
      income_amount_name: [],
      diagrams: {},
      year: 2019,
      cities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      month: 12,
      income: [],
      cost: [],
      cost_kind: [],
      cost_amount: [],
      income_kind: [],
      income_amount: [],
      costAll: 0,
      incomeAll: 0,
    }
  }

  fetchContent = async (id) => {
    await fetch(`http://localhost:4000/api/statement/fetch/id/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ accounts: data }));
  };
  diagram = async (year, month) => {
    // console.log(year, month);
    await fetch(
      `http://localhost:4000/api/account/fetch/diagram/${year}/${month}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ diagrams: data });
      });
  };


  async componentWillMount() {
    await this.fetchContent(this.state.id);
    this.setState({ acc: this.state.accounts.accounts });
    this.setState({ accounts: this.state.accounts });

    // eslint-disable-next-line array-callback-return
    this.state.acc.map((x) => {
      this.state.upload.push(x.uploadBy);
    });
    const upload = this.state.upload.map((x) => x);
    // eslint-disable-next-line array-callback-return
    upload.map((item) => {
      this.state.result_cadre[item] = this.state.result_cadre[item]
        ? this.state.result_cadre[item] + 1
        : 1;
    });

    let cadre = [];
    // eslint-disable-next-line array-callback-return
    this.state.acc.map((x) => {
      cadre[x.uploadBy] = cadre[x.uploadBy] || [];
      cadre[x.uploadBy].push(x);
    });

    let Costamount_cadre = Object.keys(cadre);
    Costamount_cadre.forEach((element) => {
      let Costcount_cadre = 0;
      cadre[element].forEach((item) => {
        if (item.amount < 0) {
          Costcount_cadre += item.amount;
        } else {
          this.state.income_name.push(item.name);
          this.state.income_amount_name.push(item.amount)
        }
      });
      this.state.cost_kind_cadre.push(element.replace("長", ""));
      this.state.cost_amount_cadre.push(Math.abs(Costcount_cadre));
    });
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
  getValue = async (event) => {
    this.setState({ incomeAll: 0 })
    this.setState({ costAll: 0 })
    this.setState({ income_amount: [] })
    this.setState({ income_kind: [] })
    this.setState({ cost_amount: [] })
    this.setState({ cost_kind: [] })
    this.setState({ cost: [] })
    this.setState({ income: [] })
    this.setState({ diagrams: {} })
    this.setState({ income_amount_name: [] })
    this.setState({ income_name: [] })
    this.setState({ count_diagrams: [] })
    this.setState({ cost_amount_cadre: [] })
    this.setState({ cost_kind_cadre: [] })
    this.setState({ income_amount_cadre: [] })
    this.setState({ income_kind_cadre: [] })
    this.setState({ result_cadre: {} })
    this.setState({ upload: [] })
    this.setState({ acc: [] })
    this.setState({ accounts: [] })
    this.setState({ month: event.target.value })
    this.setState({ id: 4 })
    await this.diagram(this.state.year, event.target.value);
    await this.fetchContent(this.state.id);
    this.setState({ acc: this.state.accounts.accounts });
    this.setState({ accounts: this.state.accounts });

    // eslint-disable-next-line array-callback-return
    this.state.acc.map((x) => {
      this.state.upload.push(x.uploadBy);
    });
    const upload = this.state.upload.map((x) => x);
   
    // eslint-disable-next-line array-callback-return
    upload.map((item) => {
      this.state.result_cadre[item] = this.state.result_cadre[item]
        ? this.state.result_cadre[item] + 1
        : 1;
         console.log(this.state.result_cadre)
    });

    let cadre = [];
    // eslint-disable-next-line array-callback-return
    this.state.acc.map((x) => {
      cadre[x.uploadBy] = cadre[x.uploadBy] || [];
      cadre[x.uploadBy].push(x);
    });

    let Costamount_cadre = Object.keys(cadre);
    Costamount_cadre.forEach((element) => {
      let Costcount_cadre = 0;
      cadre[element].forEach((item) => {
        if (item.amount < 0) {
          Costcount_cadre += item.amount;
        } else {
          // Costcategory[x.category] = Costcategory[x.category] || [];
          // Costcategory[x.category].push(x);
          this.state.income_name.push(item.name);
          this.state.income_amount_name.push(item.amount)
          console.log(this.state.income_name);
          console.log(this.state.income_amount_name);
        }
      });
      this.state.cost_kind_cadre.push(element.replace("長", ""));
      this.state.cost_amount_cadre.push(Math.abs(Costcount_cadre));
    });
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
      console.log(Incomecount);
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
  render() {
    return (
      <>
        <select
          onChange={(e) => this.getValue(e)}
          defaultValue={this.state.month}
          className="mt-1 ml-3 px-2"
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          {
            this.state.cities.map((ele, index) => {
              return (
                <option key={index}>{ele}</option>
              )
            })
          }

        </select>
        <div>
          <div className="row">
            <div className="col-8 my-5 mx-3  chartback">
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
                      borderColor: "#b21b45",
                      tension: 0.1,
                      pointStyle: "circle",
                      pointRadius: 5,
                      pointBorderColor: "#b21b45",
                      backgroundColor: "#b21b45",
                    },
                    {
                      label: "收入",
                      data: this.state.income,
                      fill: false,
                      borderColor: "#2fc3a3",
                      tension: 0.1,
                      pointStyle: "circle",
                      pointRadius: 5,
                      pointBorderColor: "#2fc3a3",
                      backgroundColor: "#2fc3a3",
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
              />
            </div>
            <div className="col my-5 mx-3 chartback">
              <div className="py-3">
                <div className="row">
                  <div className="col charttitle">收入占比圓餅圖</div>
                  <div className="charttext">
                    NT$&nbsp;
                    {Number(
                      parseFloat(Math.abs(this.state.incomeAll)).toFixed(3)
                    ).toLocaleString("en", {
                      minimumFractionDigits: 0,
                    })}
                  </div>
                </div>
                <Pie
                  plugins={[ChartDataLabels]}
                  data={{
                    //支出圓餅圖
                    type: "pie",
                    labels: this.state.income_name,
                    datasets: [
                      {
                        label: "# of Votes",
                        data: this.state.income_amount_name,
                        backgroundColor: [
                          "#2980b9",
                          "#9b59b6",
                          "#e74c3c",
                          "#e67e22",
                          "#16a085",
                          "#f1c40f",
                          "#7f8c8d",
                          "#34ace0",
                          "#ffda79",
                          "#2c2c54",
                        ],
                        borderColor: [
                          "#2980b9",
                          "#9b59b6",
                          "#e74c3c",
                          "#e67e22",
                          "#16a085",
                          "#f1c40f",
                          "#7f8c8d",
                          "#34ace0",
                          "#ffda79",
                          "#2c2c54",
                        ],
                        borderWidth: 1,
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
                              ((ttItem[0].parsed * 100) / sum).toFixed(2) +
                              "%";
                            return `占比: ${percentage}`;
                          },
                        },
                        datalabels: {
                          display: true,
                          padding: { top: 10 },
                          color: "black",
                          labels: {
                            value: {
                              color: "green",
                            },
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
          <div className="row mb-5">
            <div className="col-8 mx-3 chartback">
              <div className="p-3">
                <div className="m-2 charttitle">各幹部支出直方圖(單位:元)</div>
              </div>
              <Bar
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
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
            <div className="col mx-3 chartback ">
              <div className="py-3">
                <div className="row">
                  <div className="col charttitle">支出占比圓餅圖</div>
                  <div className="charttext1">
                    NT$&nbsp;
                    {Number(
                      parseFloat(Math.abs(this.state.costAll)).toFixed(3)
                    ).toLocaleString("en", {
                      minimumFractionDigits: 0,
                    })}
                  </div>
                </div>

                <div className="mt-5" style={{ height: "255px" }}>
                  <Pie
                    plugins={[ChartDataLabels]}
                    data={{
                      //支出圓餅圖
                      type: "pie",
                      labels: this.state.cost_kind,
                      datasets: [
                        {
                          label: "# of Votes",
                          data: this.state.cost_amount,
                          backgroundColor: [
                            "rgba(255, 99, 132)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(75, 192, 192)",
                            "rgba(75, 192, 30)",
                          ],
                          borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(75, 192, 30, 1)",
                          ],
                          borderWidth: 1,
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
                                ((ttItem[0].parsed * 100) / sum).toFixed(2) +
                                "%";
                              return `占比: ${percentage}`;
                            },
                          },
                          datalabels: {
                            display: true,
                            padding: { top: 10 },
                            color: "black",
                            labels: {
                              value: {
                                color: "green",
                              },
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
          </div>
        </div>
      </>
    );
  }
}

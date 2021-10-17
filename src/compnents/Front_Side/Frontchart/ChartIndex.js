import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "./ChartIndex.css";

export class Chart_Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diagrams: {},
      year: 2019,
      month: 12,
      accounts: [],
      review: false,
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
  update = () => {
    fetch('http://localhost:4000/api/account/fetch/all')
      .then((res) => res.json())
      .then((data) => this.setState({ account: data }))
  }
  diagram = async (year, month) => {
    console.log(year, month);
    await fetch(
      `http://localhost:4000/api/account/fetch/diagram/${year}/${month}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
    months.map((month) => {
      // console.log(this.state.diagrams[month]);
      const total = { cost: 0, income: 0 };
      if (!this.state.diagrams[month].length) {
        result[month] = total
      } else {
        this.state.diagrams[month].map((detail) => {
          // console.log(detail);
          const amount = detail.amount;
          if (detail == null) {
            total.income = 0;
            total.cost = 0;
          }
          amount > 0 ? (total.income += amount) : (total.cost += amount * -1);
          result[month] = total;
        });
      }
    });
    

    let Costcategory = [];
    let Incomecategory = [];
    this.state.diagrams[12].map((x) => {
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
    console.log(this.state.costAll);

    this.state.income_amount.forEach((x) => {
      this.state.incomeAll += x;
    });
    console.log(this.state.incomeAll);


    Object.values(result).map((value) => {
      total = value;
      inc.push(total.income);
      cos.push(total.cost);
    });
    console.log(result[12].income)
    this.setState({
      income: inc,
      cost: cos,
    });
    let sum = 0;
    inc.forEach(function (element) {
      sum += element;
    });
    // console.log(sum);
  }

  render() {
    return (
      <>
        <div className="row mt-5">
          <div className="col-7 mx-auto chartback">
            <div className="my-3 d-flex justify-content-between">
              <div className="ml-2 charttitle">本月收支折線圖(單位:元)</div>
              {/* <select
                className="mt-1 ml-3 px-2"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
              >
                <option value="none">--請選擇月分--</option>
                <option value="Jan">一月</option>
                <option value="Feb">二月</option>
                <option value="Mar">三月</option>
                <option value="Apr">四月</option>
                <option value="May">五月</option>
                <option value="Jun">六月</option>
                <option value="Jul">七月</option>
                <option value="Aug">八月</option>
                <option value="Sep">九月</option>
                <option value="Oct">十月</option>
                <option value="Nov">十一月</option>
                <option value="Dec">十二月</option>
              </select> */}
            </div>

            <Line
              data={{
                labels: Object.keys(this.state.diagrams),
                datasets: [
                  {
                    label: "支出",

                    data: this.state.cost.reverse(),
                    fill: false,
                    borderColor: "#00BFA0",
                    tension: 0.1,
                    pointStyle: "circle",
                    pointRadius: 5,
                    pointBorderColor: "#00BFA0",
                    backgroundColor: "#00BFA0",
                  },
                  {
                    label: "收入",

                    data: this.state.income.reverse(),
                    fill: false,
                    borderColor: "#6798E7",
                    tension: 0.1,
                    pointStyle: "circle",
                    pointRadius: 5,
                    pointBorderColor: "#6798E7",
                    backgroundColor: "#6798E7",
                  },

                  // {
                  //   label: '平均淨利損',
                  //   data: [10, 20, 30, 40],
                  //   fill: false,
                  //   borderColor: '#FF6424',
                  //   tension: 0.1,
                  //   pointStyle: 'circle',
                  //   pointRadius: 5,
                  //   pointBorderColor: '#FF6424',
                  //   backgroundColor: '#FF6424'
                  // },
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
          <div className="col-3  mx-auto chartback">
            <div className="my-3 d-flex justify-content-between">
              <div className="ml-2 charttitle">收入占比圓餅圖</div>
              <div className="charttext">NT$&nbsp;{this.state.incomeAll}</div>
            </div>
            <Pie
              data={{
                //支出圓餅圖
                type: "pie",
                labels: this.state.income_kind,
                datasets: [
                  {
                    label: "# of Votes",
                    data: this.state.income_amount,
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
        <div className="row my-5">
          <div className="col-7 mx-auto chartback">
            <div className="my-3 d-flex justify-content-between">
              <div className="ml-2 charttitle">本月收支直方圖(單位:元)</div>
            </div>
            <Bar
              data={{
                type: "bar",
                labels: Object.keys(this.state.diagrams),
                datasets: [
                  {
                    label: "收入",
                    data: this.state.income.reverse(),
                    fill: true,
                    backgroundColor: "rgb(75, 192, 192)",
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                  },
                  {
                    label: "支出",
                    data: this.state.cost.reverse(),
                    fill: true,
                    backgroundColor: "#FF6424",
                    borderColor: "#FF6424",
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
          <div className="col-3 mx-auto chartback">
            <div className="my-3 d-flex justify-content-between">
              <div className="ml-2 charttitle">支出占比圓餅圖</div>
              <div className="charttext1">NT$&nbsp;{Math.abs(this.state.costAll)}</div>
            </div>
            <Pie
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
      </>
    );
  }
}

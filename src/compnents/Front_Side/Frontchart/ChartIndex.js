import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
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
      diagrams: {},
      year: 2019,
      month: 12,
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
        // console.log(data);
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
    })
    const upload = this.state.upload.map(x => x);
    // eslint-disable-next-line array-callback-return
    upload.map((item) => {
      console.log(this.state.id);
      console.log(this.state.result_cadre)
      this.state.result_cadre[item] = this.state.result_cadre[item] ? this.state.result_cadre[item] + 1 : 1;
      console.log(Object.keys(this.state.result_cadre));
    });


    let Costcadre = [];
    let Incomecadre = [];
    // eslint-disable-next-line array-callback-return
    this.state.acc.map((x) => {

      if (x.amount > 0) {
        Incomecadre[x.uploadBy] = Incomecadre[x.uploadBy] || [];
        Incomecadre[x.uploadBy].push(x);
      } else {
        Costcadre[x.uploadBy] = Costcadre[x.uploadBy] || [];
        Costcadre[x.uploadBy].push(x);
      }
    });
    
    console.log(Costcadre);
    let Incomeamount_cadre = Object.keys(Incomecadre);
    let Costamount_cadre = Object.keys(Costcadre);
    Incomeamount_cadre.forEach((element) => {

      // eslint-disable-next-line no-unused-vars
      let Incomecount_cadre = 0;
      Incomecadre[element].forEach((item) => {
        Incomecount_cadre += item.amount;

      });
      this.state.income_kind.push(element);
      this.state.income_amount.push(this.state.income_kind);
    });


    Costamount_cadre.forEach((element) => {
      let Costcount_cadre = 0;
      Costcadre[element].forEach((item) => {
        Costcount_cadre += item.amount;
        console.log(Costcount_cadre)
      });
      this.state.cost_kind_cadre.push(element);
      this.state.cost_amount_cadre.push(Costcount_cadre);
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
      // console.log(this.state.diagrams[month]);
      const total = { cost: 0, income: 0 };
      if (!this.state.diagrams[month].length) {
        result[month] = total
      } else {
        // eslint-disable-next-line array-callback-return
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
    // eslint-disable-next-line array-callback-return
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
    // console.log(Costamount)
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
        // console.log(Costcount)
      });
      this.state.cost_kind.push(element);
      this.state.cost_amount.push(Costcount);
    });
    // console.log(this.state.cost_kind);
    this.state.cost_amount.forEach((x) => {
      this.state.costAll += x;
    });
    // console.log(this.state.costAll);

    this.state.income_amount.forEach((x) => {
      this.state.incomeAll += x;
    });
    // console.log(this.state.incomeAll);


    // eslint-disable-next-line array-callback-return
    Object.values(result).map((value) => {
      total = value;
      inc.push(total.income);
      cos.push(total.cost);
    });
    // console.log(result[12].income)
    this.setState({
      income: inc,
      cost: cos,
    });
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
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-7 mx-auto chartback">
            <div className="my-3 d-flex justify-content-between">
              <div className="ml-2 charttitle">各幹部收支直方圖(單位:元)</div>
            </div>
            <Bar
              data={{
                type: "bar",
                labels: Object.keys(this.state.result_cadre),
                datasets: [
                  {
                    label: "收入",
                    data: this.state.income_amount,
                    fill: true,
                    backgroundColor: "rgb(75, 192, 192)",
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                  },
                  {
                    label: "支出",
                    data: this.state.cost_amount,
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

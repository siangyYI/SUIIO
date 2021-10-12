import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class Financial_Card extends Component {

    render() {

        let { statements } = this.props;
        let category;
        console.log(statements.category)
        if (statements.category == "其他項目") {
            statements.category = "一般報表";
            console.log(statements.category)
            category = (
                <div
                    className="host badge badge-secondary"
                    style={{ backgroundColor: "#ae714f", color: "#e6ddd8" }}
                >
                    {statements.category}
                </div>
            );
        } else {
            category = (
                <div
                    className="host badge badge-secondary"
                    style={{ backgroundColor: "#59420a", color: "white" }}
                >
                    {statements.category}
                </div>
            );
        }
        return (
            <div className="col-sm-12 col-md-3  IncomeCard">
                <a href={`/financial/detail?id=${statements.ID}`}>
                    <Card
                        style={{ border: "2px solid #9e9e9e", backgroundColor: "#ffd679" }}
                        className="mt-5"
                    >
                        <div className="row">
                            <div className="col text-left date py-3">
                                {category}
                            </div>
                            <div className="text-right mx-3 date py-3">{statements.date}</div>
                        </div>
                        <Card.Body className="meeting col">
                            <Card.Title className="title px-4 pb-2">
                                {statements.name}
                            </Card.Title>
                            <Card.Subtitle className="mb-4 ">
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </a>
            </div>
        )
    }

}

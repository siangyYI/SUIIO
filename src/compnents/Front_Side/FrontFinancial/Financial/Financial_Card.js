import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class Financial_Card extends Component {

    render() {

        let { statements } = this.props;
        let category;
        if (statements.category == "其他項目") {
            statements.category = "一般報表";
            category = (
                <div
                    className="host badge badge-secondary"
                    style={{ backgroundColor: "#b6b6b6", color: "white" }}
                >
                    {statements.category}
                </div>
            );
        }
        else {
            category = (
                <div
                    className="host badge badge-secondary"
                    style={{ backgroundColor: "#59420a", color: '#ffd679'  }}
                >
                    {statements.category}
                </div>
            );
        }
        return (
            <div className="col-sm-12 col-md-3  IncomeCard">
                <a href={`/detail?id=${statements.ID}&name=${statements.name}`}>
                    <Card
                        style={{ border: "2px solid #9e9e9e", backgroundColor: "#ffd679" }}
                        className="mt-5"
                    >
                        <div className="row">
                            <div className="col text-left date py-3">
                                {category}</div>
                            <div className="text-right mx-3 date py-3">{statements.date}</div>
                        </div>
                        <Card.Body className="meeting col">
                            <Card.Title className="title px-4 pb-2">
                                {statements.name}
                            </Card.Title>
                            <Card.Subtitle className="mb-2  ">

                                <h5 style={{textAlign:"right",marginRight:'10px',color:'#01597f'}}>上傳者:{statements.uploadBy}</h5>
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </a>
            </div>
        )
    }

}

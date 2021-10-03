import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class Financial_Card extends Component {

    render() {
        let { statements } = this.props;
        return (
            <div className="col-sm-12 col-md-3 pb-2">
                <a href="#/detail">
                    <Card style={{height:'11rem', border: "2px solid black", backgroundColor: "#d8936c" }} className="my-4">
                        <Card.Body className="meeting">
                            <Card.Title className="title px-4 pt-4">
                                {statements.name}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 d">
                                <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date">
                                {statements.date}
                                </div>
                            </Card.Subtitle>
                            <Card.Text>
                                <div className=" ml-4 host badge badge-secondary">
                                {statements.category}
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>
        )
    }

}

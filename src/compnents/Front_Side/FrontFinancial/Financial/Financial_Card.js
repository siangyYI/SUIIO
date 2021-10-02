import React from "react";
import { Card } from "react-bootstrap";
function Financial_Card() {
    return (
        <div className="col-sm-12 col-md-3 pb-2">
            <a href="#/detail">
                <Card  className="my-4">
                    <Card.Body className="meeting">
                        <Card.Title className="title px-4 pt-4">大迎新財報</Card.Title>
                        <Card.Subtitle className="mb-2 d">
                            <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date">
                                2021-06-21
                            </div>
                        </Card.Subtitle>
                        <Card.Text>

                            <div className="mr-md-3 mx-4 pb-4 pt-2 pt-md-0 align-self-center host">
                                活動:大迎新
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
}

export default Financial_Card;

import React, { Component } from 'react'
import "../../Meeting/Management/css/Index.css";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Search } from 'semantic-ui-react';

export class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            conferences: [],
            selected: {},
            content: {},
            ContentShow: false,
            AddShow: false,
            review: false,
        }
        this.update()
    }
    update = () => {
        fetch('http://localhost:4000/api/conference/fetch/all')
            .then((res) => res.json())
            .then((data) => this.setState({ conferences: data }))
    }

    fetchContent = async (id) => {
        await fetch(`http://localhost:4000/api/conference/fetch/content/${id}`)
            .then((res) => res.json())
            .then((data) => this.setState({ content: data[0] }))
    }
    render() {
        return (
            <>

                <div className="my-3 mx-5 d-flex mt-5">
                    <div>
                        <select
                            className="Dropdown ml-3 px-2"
                            style={{
                                borderRadius: "10px",
                                height: "2em",
                                backgroundColor: "white",
                            }}
                        >
                            <option value="none">--請選擇活動類別--</option>
                            <option value="grapefruit">大迎新</option>
                            <option value="lime">民歌</option>
                            <option value="coconut">送舊</option>
                            <option value="mango">資管周</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-2 px-5">

                    {this.state.conferences.map((x) => (

                        <div className="col-sm-12 col-md-3 pb-2">
                            <Link to={`/Meeting/reconder?id=${x.ID}&name=${x.name}&host=${x.host}&date=${x.date}`}
                                onClick={async () => {
                                    await this.fetchContent(x.ID)
                                    this.setState({
                                        selected: x,
                                    })
                                }}>
                                <Card style={{ border: "2px solid black", backgroundColor: "#d8936c" }} className="my-4">
                                    <Card.Body className="meeting">
                                        <Card.Title className="title px-4 pt-4">{x.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 d">
                                            <div className="my-2 mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date">
                                                {x.date}
                                            </div>
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <div className="mr-md-3 mx-4 pb-4 pt-2 pt-md-0 align-self-center host">
                                                <div className="host badge badge-secondary" style={{ backgroundColor: "#135990" }}>
                                                    {x.category}
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>

                    ))}


                </div>
            </>
        )
    }
}
import React, { Component } from 'react'
import Flter from "./Filter";
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

                <Flter />{/*篩選器*/}
                <div className="row mt-2 px-5">

                    {this.state.conferences.map((x) => (

                        <div className="col-sm-12 col-md-3 pb-2">
                            <Link to={`/Meeting/reconder?id=${x.ID}&name=${x.name}`}
                                onClick={async () => {
                                    await this.fetchContent(x.ID)
                                    this.setState({
                                        selected: x,
                                    })
                                }}>

                                <Card style={{ width: '19rem' }} className="mx-auto mt-3">
                                    <Card.Body className="meeting">
                                        <Card.Title className="title px-4 pt-4">{x.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 d">
                                            <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date">
                                                {x.date}
                                            </div>
                                        </Card.Subtitle>
                                        <Card.Text>

                                            <div className="mr-md-3 mx-4 pb-4 pt-2 pt-md-0 align-self-center host">
                                                活動:{x.category}
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                            {console.log(this.state.content)}
                        </div>

                    ))}


                </div>
            </>
        )
    }
}
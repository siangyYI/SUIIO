import { Card } from "react-bootstrap";
import { Messagearea } from "./Messagearea";
import { useState } from 'react';
const Report = () => {
    const [MessageShow, setMessageShow] = useState(false);
    return (
        <>
            <div className="col-sm-12 col-md-3 pb-2 " onClick={() => { setMessageShow(true) }}>
                <Card style={{ width: '18rem' }} className="mx-5 mt-3 ">
                    <Card.Body className="meeting">
                        <Card.Title className="title px-4 pt-4 pb-1">七月財報</Card.Title>
                        <Card.Subtitle className="mb-2">
                            <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date">
                                2021-06-21
                            </div>
                        </Card.Subtitle>
                        <Card.Text>
                            <div className="mr-md-3 mx-4 mb-4 pt-md-0 align-self-center host">
                                類別:一般財報
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Messagearea show={MessageShow} onHide={() => setMessageShow(false)} />
        </>
    )
};
export default Report;
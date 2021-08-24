import "../css/Meeting.css";

import { Card } from "react-bootstrap";
const Meeting = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="mx-auto mt-3">
                <Card.Body className="meeting">
                    <Card.Title className="title">大迎新會議</Card.Title>
                    <Card.Subtitle className="mb-2">
                        <div className="mr-md-3 mx-3 pt-2 pt-md-0 align-self-center date">
                            2021-06-21
                        </div>
                    </Card.Subtitle>
                    <Card.Text>
                        
                        <div className="mr-md-3 mx-3 pt-2 pt-md-0 align-self-center host">
                            活動:大迎新
                        </div>
                    </Card.Text>
                    <div className="pt-2 d-flex justify-content-center ">
                        <div className="Audit d-flex justify-content-center">
                            <div className="align-self-center audittext">組織</div>
                        </div>
                        <div className="Audit2 d-flex justify-content-center">
                            <div className="align-self-center audittext">財務</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
        // <div className="meeting ml-md-5 mt-3 d-md-flex justify-content-around" >

        //     <div className="mx-md-3 mx-3 pt-2 pt-md-0 align-self-center date" >
        //         2021-06-21
        //     </div>
        //     <div className="mx-md-3 mx-3 pt-2 pt-md-0 align-self-center host">
        //         大迎新
        //     </div>

        // </div>
    )
};
export default Meeting;
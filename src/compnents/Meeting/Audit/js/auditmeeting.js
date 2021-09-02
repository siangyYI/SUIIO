import "../css/Auditmeeting.css";
import { Card } from "react-bootstrap";
const AuditMeeting = () => {
    return (
        <>
            <Card style={{ width: '19rem' }} className="mx-auto mt-3">
                <Card.Body className="meeting">
                    <Card.Title className="title px-4 pt-4 pb-1">大迎新會議</Card.Title>
                    <Card.Subtitle className="mb-2 ">
                        <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date">
                            2021-06-21
                        </div>
                    </Card.Subtitle>
                    <Card.Text>
                        <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center host">
                            活動:大迎新
                        </div>
                    </Card.Text>
                    <div className="my-3 d-flex justify-content-center ">
                        <div className="Auditmeeting d-flex justify-content-center">
                            <div className="align-self-center audittext">組織</div>
                        </div>
                        <div className="Auditmeeting2 d-flex justify-content-center">
                            <div className="align-self-center audittext">財務</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
};
export default AuditMeeting;
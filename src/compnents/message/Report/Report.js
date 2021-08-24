import { Card } from "react-bootstrap";
const Report = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="mx-auto mt-3">
                <Card.Body className="meeting">
                    <Card.Title className="title">七月財報</Card.Title>
                    <Card.Subtitle className="mb-2">
                        <div className="mr-md-3 mx-3 pt-2 pt-md-0 align-self-center date">
                            2021-06-21
                        </div>
                    </Card.Subtitle>
                    <Card.Text>
                        <div className="mr-md-3 mx-3 pt-2 pt-md-0 align-self-center host">
                            類別:一般財報
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
};
export default Report;
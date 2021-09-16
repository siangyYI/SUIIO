import { Card } from "react-bootstrap";
// import { Messagearea } from "../Report/Messagearea";
import { UncontrolledCollapse } from 'reactstrap';
const Income = () => {

    return (
        <>
            <div className="col-sm-12 col-md-5 pb-2" id="toggler">
                <Card style={{ width: '18rem' }} className="mx-5 mt-3 ">
                    <Card.Body className="meeting">
                        <Card.Title className="title px-4 pt-4 pb-1">大迎新收支</Card.Title>
                        <Card.Subtitle className="mb-2">
                            <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date">
                                2021-06-21
                            </div>
                        </Card.Subtitle>
                        <Card.Text>
                            <div className="mr-md-3 mx-4 mb-2 pt-md-0 align-self-center host">
                                類別:大迎新
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-md-6 ">
                <UncontrolledCollapse toggler="#toggler">
                    {/* <Messagearea /> */}
                </UncontrolledCollapse>
            </div>

        </>
    )
};
export default Income;
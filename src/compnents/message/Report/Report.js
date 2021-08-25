import { useState } from "react";
import { Collapse, Button, Card } from "react-bootstrap";
import { CardBody } from 'reactstrap';
const Report = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Button color="primary" onClick={toggle}>Toggle</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                    </CardBody>
                </Card>
            </Collapse>
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
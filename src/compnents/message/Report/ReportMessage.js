import NavigationBar from "../../Meeting/NavigationBar";
import Sidebar from "../../Meeting/Sidebar";
import MessageNavtab from "../MessageNavtab";
import Reportfilter from "../Reportfilter";
import Report from "./Report";
import { useState } from "react";
import { Collapse, Card } from "react-bootstrap";
const ReportMessage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <NavigationBar />
            <div className="row overflow-auto">
                <Sidebar />{/*電腦版導覽列*/}
                <div className="col recordcontent overflow-auto">
                    <MessageNavtab />
                    <Reportfilter />{/*篩選器*/}
                    <div className="row">   {/*會議記錄*/}
                        <div className="col-sm-12 col-md-12 pb-2" onClick={toggle}><div><Report /></div></div>
                        <div className="col-sm-12 col-md-12 pb-2"><div><Report /></div></div>
                        <div className="col-sm-12 col-md-12 pb-2"><div><Report /></div></div>
                        <div className="col-sm-12 col-md-12 pb-2"><div><Report /></div></div>
                        <Collapse isOpen={isOpen}>
                            <Card>
                                <div>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                </div>
                            </Card>
                        </Collapse>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportMessage;
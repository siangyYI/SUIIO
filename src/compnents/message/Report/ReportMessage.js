import NavigationBar from "../../Meeting/NavigationBar";
import Sidebar from "../../Meeting/Sidebar";
import MessageNavtab from "../MessageNavtab";
import Reportfilter from "../Reportfilter";
import Report from "./Report";

const ReportMessage = () => {
    
    return (
        <>
            <NavigationBar />
            <div className="row overflow-auto">
                <Sidebar />{/*電腦版導覽列*/}
                <div className="col recordcontent overflow-auto">
                    <MessageNavtab />
                    <Reportfilter />{/*篩選器*/}
                    <div className="row">   {/*會議記錄*/}
                        <div className="col-sm-12 col-md-12 pb-2"><Report /></div>
                        <div className="col-sm-12 col-md-12 pb-2"><Report /></div>
                        <div className="col-sm-12 col-md-12 pb-2"><Report /></div>
                        <div className="col-sm-12 col-md-12 pb-2"><Report /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportMessage;
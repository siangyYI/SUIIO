import MessageNavtab from "../MessageNavtab";
import Reportfilter from "../Reportfilter";
import Report from "./Report";

const ReportMessage = () => {

    return (
        <>
            <MessageNavtab />
            <Reportfilter />{/*篩選器*/}
            <div className="row">   {/*會議記錄*/}
                <div className="col-sm-12 col-md-12 pb-2"><Report /></div>
                <div className="col-sm-12 col-md-12 pb-2"><Report /></div>
                <div className="col-sm-12 col-md-12 pb-2"><Report /></div>
                <div className="col-sm-12 col-md-12 pb-2"><Report /></div>
            </div>
        </>
    )
}

export default ReportMessage;
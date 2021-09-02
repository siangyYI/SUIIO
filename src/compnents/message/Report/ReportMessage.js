import MessageNavtab from "../MessageNavtab";
import Reportfilter from "../Reportfilter";
import Report from "./Report";



const ReportMessage = () => {
    return (
        <>
            <MessageNavtab />
            <Reportfilter />{/*篩選器*/}
            <div className="row overflow-auto px-5">   {/*會議記錄*/}
                <Report />
                <Report />
                <Report />
                <Report />
            </div>
            
        </>
    )
}

export default ReportMessage;
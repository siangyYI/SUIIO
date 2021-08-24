import Flter from '../../Management/js/Flter'
import AuditMeeting from './auditmeeting';
import NavigationBar from '../../NavigationBar';
import Sidebar from '../../Sidebar';
import Navtab from '../../Nav_tab'
import { Link } from "react-router-dom";
const AuditList = () => {
    return (
        <>
            <NavigationBar />
            <div className="row overflow-auto">
                <Sidebar />{/*電腦版導覽列*/}
                <div className="col recordcontent overflow-auto">
                    <Navtab />
                    <Flter />{/*篩選器*/}
                    <div className="row">                      {/*審核會議 */}
                        <div className="col-sm-12 col-md-3 pb-2"><Link to="/Audit" style={{ textDecoration: 'none' }}><AuditMeeting /></Link></div>
                        <div className="col-sm-12 col-md-3 pb-2"><Link to="/Audit" style={{ textDecoration: 'none' }}><AuditMeeting /></Link></div>
                        <div className="col-sm-12 col-md-3 pb-2"><Link to="/Audit" style={{ textDecoration: 'none' }}><AuditMeeting /></Link></div>
                        <div className="col-sm-12 col-md-3 pb-2"><Link to="/Audit" style={{ textDecoration: 'none' }}><AuditMeeting /></Link></div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default AuditList;
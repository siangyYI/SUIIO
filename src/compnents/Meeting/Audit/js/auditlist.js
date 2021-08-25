import Flter from '../../Management/js/Flter'
import AuditMeeting from './auditmeeting';
import Navtab from '../../Nav_tab'
import { Link } from "react-router-dom";
const AuditList = () => {
    return (
        <>
            <Navtab />
            <Flter />{/*篩選器*/}
            <div className="row">                      {/*審核會議 */}
                <div className="col-sm-12 col-md-3 pb-2"><Link to="/Audit" style={{ textDecoration: 'none' }}><AuditMeeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-2"><Link to="/Audit" style={{ textDecoration: 'none' }}><AuditMeeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-2"><Link to="/Audit" style={{ textDecoration: 'none' }}><AuditMeeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-2"><Link to="/Audit" style={{ textDecoration: 'none' }}><AuditMeeting /></Link></div>
            </div>
        </>
    )
};
export default AuditList;
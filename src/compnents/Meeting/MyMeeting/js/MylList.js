import Flter from '../../Management/js/Flter'
import MyMeet from '../../MyMeeting/js/MyMeet';
import Navtab from '../../Nav_tab'
import { Link } from "react-router-dom";
const MyList = () => {
    return (
        <>
            <Navtab />
            <Flter />{/*篩選器*/}
            <div className="row px-5">                      {/*審核會議 */}
                <div className="col-sm-12 col-md-3 pb-4"><Link to="/Myreconder" style={{ textDecoration: 'none' }}><MyMeet /></Link></div>
                <div className="col-sm-12 col-md-3 pb-4"><Link to="/Myreconder" style={{ textDecoration: 'none' }}><MyMeet /></Link></div>
                <div className="col-sm-12 col-md-3 pb-4"><Link to="/Myreconder" style={{ textDecoration: 'none' }}><MyMeet /></Link></div>
                <div className="col-sm-12 col-md-3 pb-4"><Link to="/Myreconder" style={{ textDecoration: 'none' }}><MyMeet /></Link></div>
            </div>
        </>
    )
};
export default MyList;
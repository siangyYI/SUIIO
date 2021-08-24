import Flter from '../../Management/js/Flter'
import MyMeet from '../../MyMeeting/js/MyMeet';
import NavigationBar from '../../NavigationBar';
import Sidebar from '../../Sidebar';
import Navtab from '../../Nav_tab'
import { Link } from "react-router-dom";
const MyList = () => {
    return (
        <>
            <NavigationBar />
            <div className="row overflow-auto">
                <Sidebar />{/*電腦版導覽列*/}
                <div className="col recordcontent overflow-auto">
                    <Navtab />
                    <Flter />{/*篩選器*/}
                    <div className="row">                      {/*審核會議 */}
                        <div className="col-sm-12 col-md-3 pb-2"><Link to="/Myreconder" style={{ textDecoration: 'none' }}><MyMeet /></Link></div>
                        <div className="col-sm-12 col-md-3 pb-2"><Link to="/Myreconder" style={{ textDecoration: 'none' }}><MyMeet /></Link></div>
                        <div className="col-sm-12 col-md-3 pb-2"><Link to="/Myreconder" style={{ textDecoration: 'none' }}><MyMeet /></Link></div>
                        <div className="col-sm-12 col-md-3 pb-2"><Link to="/Myreconder" style={{ textDecoration: 'none' }}><MyMeet /></Link></div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default MyList;
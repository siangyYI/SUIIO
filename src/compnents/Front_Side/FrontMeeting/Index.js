import Flter from "./Filter";
import Meeting from "./Meeting";
import "../../Meeting/Management/css/Index.css";

import { Link } from 'react-router-dom';
const Index = () => {
    return (
        <>
            <Flter />{/*篩選器*/}
            <div className="row px-5 ">{/*會議記錄*/}
                <div className="col-sm-12 col-md-3 pb-4"><Link to="/Meeting/reconder" style={{ textDecoration: 'none' }}><Meeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-4"><Link to="/reconder" style={{ textDecoration: 'none' }}><Meeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-4"><Link to="/reconder" style={{ textDecoration: 'none' }}><Meeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-4"><Link to="/reconder" style={{ textDecoration: 'none' }}><Meeting /></Link></div>
                
            </div>
        </>
    )
};
export default Index;
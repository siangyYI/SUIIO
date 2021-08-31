import Flter from "./Flter";
import Meeting from "./Meeting";
import "../css/Index.css";
import Navtab from '../../Nav_tab';
import { Link } from 'react-router-dom';
const Index = () => {
    return (
        <>
            <Navtab />
            <Flter />{/*篩選器*/}
            <div className="row mx-auto">{/*會議記錄*/}
                   
                <div className="col-sm-12 col-md-3 pb-2"><Link to="/reconder" style={{ textDecoration: 'none' }}><Meeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-2"><Link to="/reconder" style={{ textDecoration: 'none' }}><Meeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-2"><Link to="/reconder" style={{ textDecoration: 'none' }}><Meeting /></Link></div>
                <div className="col-sm-12 col-md-3 pb-2"><Link to="/reconder" style={{ textDecoration: 'none' }}><Meeting /></Link></div>
            </div>
        </>
    )
};
export default Index;
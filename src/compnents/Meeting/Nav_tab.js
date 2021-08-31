import { Link } from 'react-router-dom';
import "./Nav_tab.css"
const Navtab = () => {    /*電腦版導覽列 */
    return (
        <div className="d-flex d-sm-none  pt-2 d-md-flex flex-md-column d-md-flex d-none bar">
            <ul class="nav py-3 px-5 h4 " role="tablist">
                <li class="nav-item">
                    <Link to="/" class="nav-link text-reset navfont" data-toggle="tab">
                        會議記錄
                        <div className="d-flex justify-content-center">
                            <img
                                src={require("../../Image/remove.png").default}
                                alt="cancel"
                                style={{ width: "12pt", height: "15pt" }}
                            />
                        </div>
                    </Link>

                </li>
                <li class="nav-item">
                    <Link to="/Uploadmeet" class="nav-link text-reset navfont" data-toggle="tab">
                        上傳記錄
                        <div className="d-flex justify-content-center">
                            <img
                                src={require("../../Image/remove.png").default}
                                alt="cancel"
                                style={{ width: "12pt", height: "15pt" }}
                            />
                        </div>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/AuditList" class="nav-link text-reset navfont" data-toggle="tab">
                        審核會議
                        <div className="d-flex justify-content-center">
                            <img
                                src={require("../../Image/remove.png").default}
                                alt="cancel"
                                style={{ width: "12pt", height: "15pt" }}
                            />
                        </div>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/MyList" class="nav-link text-reset navfont" data-toggle="tab">
                        我的上傳
                        <div className="d-flex justify-content-center">
                            <img
                                src={require("../../Image/remove.png").default}
                                alt="cancel"
                                style={{ width: "12pt", height: "15pt" }}
                            />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
};
export default Navtab;
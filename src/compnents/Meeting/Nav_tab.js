import { Link } from 'react-router-dom';
import "./Nav_tab.css"
const Navtab = () => {    /*電腦版導覽列 */
    return (
            <div className="flex-md-column d-md-flex d-none">
                <div className="d-flex d-sm-none  py-2 d-md-flex">
                    <ul class="nav py-3 px-5 h4 " role="tablist">
                        <li class="nav-item">
                            <Link to="/" class="nav-link text-reset navfont" data-toggle="tab">
                                會議記錄
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Uploadmeet" class="nav-link text-reset navfont" data-toggle="tab">
                                上傳記錄
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/AuditList" class="nav-link text-reset navfont" data-toggle="tab">
                                審核會議
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/MyList" class="nav-link text-reset navfont" data-toggle="tab">
                                我的上傳
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
};
export default Navtab;
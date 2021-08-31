import { Link } from 'react-router-dom';
import "../Meeting/Nav_tab.css"
const MessageNavtab = () => {    /*電腦版導覽列 */
    return (
                <div className="d-flex d-sm-none  pt-2 d-md-flex flex-md-column d-md-flex d-none">
                    <ul class="nav py-3 px-5 h4 " role="tablist">
                        <li class="nav-item">
                            <Link to="/ReportMessage" class="nav-link text-reset navfont" data-toggle="tab">
                                報表留言
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="" class="nav-link text-reset navfont" data-toggle="tab">
                                收支留言
                            </Link>
                        </li>
                    </ul>
                </div>
    )
};
export default MessageNavtab;
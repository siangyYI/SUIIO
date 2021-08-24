import React from 'react'
import { useState } from 'react';
import "../css/Auditreconder.css";
import NavigationBar from '../../NavigationBar';
import Sidebar from '../../Sidebar';
import Navtab from '../../Nav_tab';
import { ModalAdd } from './ModalAdd'
import { ModalDel } from './ModalDel'
import { Link } from 'react-router-dom';
import arrow_icon from "../../Management/Image/arrow_icon.png";

const auditReconder = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [AddShow, setAddShow] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [DeleteShow, setDeleteShow] = useState(false);
    return (
        <>
            <NavigationBar />
            <div className="row overflow-auto">
                <Sidebar />{/*電腦版導覽列*/}
                <div className="col recordcontent overflow-auto">
                    <Navtab />
                    <Link to="/AuditList">
                        <img src={arrow_icon} alt="arrow_icon" width="20pt" height="20pt" />
                    </Link>       {/* Back Arrow*/}
                    <div className="mx-auto d-flex justify-content-end pb-2">

                        <button type="button" class="cancel mx-3" onClick={() => {setDeleteShow(true)}}>駁回</button>
                        <button type="button" class="accept mx-3" onClick={() => setAddShow(true)}>通過</button>
                    </div>
                    <div className="meetingcontent mt-3 mx-auto col-md-8">
                    <div className="row">
                            <div className="col-12">
                                <div className="my-2 recondertitle">大迎新會議記錄</div>
                                <div className="my-2 date">2020/06/19</div>
                            </div>
                            <div className="row col-12 my-3 d-flex align-items-center">
                                <div className="my-2 col-md-4 text">活動：<div>大迎新</div></div>
                                <div className="my-2 col-md-4 text">出席者：<div>王曉明</div></div>
                                <div className="my-2 col-md-4 text">缺席者：<div>王曉明</div></div>
                            </div>
                        </div>
                    </div>                                               {/*會議內容*/}
                    <div className="auditcontent my-3 mx-md-auto overflow-auto col-md-8">
                        <div class="overflow-auto py-3 col-8 contenttext" >Ambitioni dedisse scripsisse iudicaretur.
                            Cras mattis iudicium purus sit amet fermentum.
                            Donec sed odio operae, eu vulputate felis rhoncus.
                            Praeterea iter est quasdam res quas ex communi.
                            At nos hinc posthac, sitientis piros Afros.
                            Petierunt uti sibi concilium totius Galliae in diem certam indicere.
                            Cras mattis iudicium purus sit amet fermentum.
                        </div>
                    </div>
                </div>
            </div>
            <ModalAdd show={AddShow} onHide={() => setAddShow(false)} />
            <ModalDel show={DeleteShow} onHide={() => setDeleteShow(false)}
            />
        </>
    )
};
export default auditReconder;
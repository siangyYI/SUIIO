import "../css/upload.css";
import Navtab from '../../Nav_tab'
const Uploadmeet = () => {
    return (
        <>
            <Navtab />
            <div className="row">
                {/*收起 */} <div className="col-md-4 mx-auto">
                    <div className="content mx-auto my-3 d-flex justify-content-center row">
                        <form class="d-flex align-items-center">
                            <div class="form-row">
                                <div class="col-10 mx-auto py-md-3 form-row">
                                    <div className="my-2 col-md-4">
                                        會議名稱：
                                    </div>
                                    <input type="text" class="form-control col-md-8">
                                    </input>
                                </div>
                                <div class="col-10 mx-auto py-md-3 form-row">
                                    <div className="my-2 col-md-4">
                                        會議日期：
                                    </div>
                                    <input type="date" class="form-control col-md-8">
                                    </input>
                                </div>
                                <div class="col-10 mx-auto py-md-3 form-row">
                                    <div className="my-2 col-md-4">
                                        活動類別：
                                    </div>
                                    <select class="custom-select col-md-8">
                                        <option value="大迎新">大迎新</option>
                                        <option value="民歌">民歌</option>
                                        <option value="送舊">送舊</option>
                                        <option value="資管周">資管周</option>
                                        <option value="例行會議">例行會議</option>
                                    </select>
                                </div>
                                <div class="col-10 mx-auto py-md-3 form-row">
                                    <div className="my-2 col-md-4">
                                        會議主席：
                                    </div>
                                    <select class="custom-select col-md-8">
                                        <option value="會長">會長</option>
                                        <option value="副會長">副會長</option>
                                        <option value="財務長">財務長</option>
                                        <option value="活動長">活動長</option>
                                        <option value="生活長">生活長</option>
                                        <option value="器材長">器材長</option>
                                    </select>
                                </div>
                                <div class="form-check col-10 mx-auto pb-2 form-row">
                                    <div className="my-2 col-md-4">
                                        出席者：
                                    </div>
                                    <div className="row col-md-11">
                                        <div class="form-check col-4">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <div class="label" >
                                                會長
                                            </div>
                                        </div>
                                        <div class="form-check col-4 ">
                                            <input class="form-check-input" type="checkbox" ></input>
                                            <div class="label">
                                                副會長
                                            </div>
                                        </div>
                                        <div class="form-check col-4">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <div class="label">
                                                財務長
                                            </div>
                                        </div>
                                        <div class="form-check col-4">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <div class="label">
                                                活動長
                                            </div>
                                        </div>
                                        <div class="form-check col-4">
                                            <input class="form-check-input" type="checkbox"></input>
                                            <div class="label">
                                                器材長
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="custom-file mx-auto mt-4 d-flex justify-content-center">
                        <input type="file" class="custom-file-input" ></input>
                        <label class="custom-file-label" for="customFile">上傳會議檔案  </label>
                    </div>
                    <div class="custom-file mx-auto mt-2  d-flex justify-content-center">
                        <div type="file" class="custom-file-input"></div>
                        <div class="custom-file-label" >上傳附加檔案</div>
                    </div>
                </div>
                <div className="col-md-6 mx-auto">
                    <div class="form-group content  mt-3 d-flex justify-content-center">
                        <textarea class="form-control" rows="17"></textarea>
                    </div>
                    <div className="mx-auto d-flex justify-content-center py-4">
                        <button type="button" class="cancel mx-3">取消</button>
                        <button type="button" class="accept mx-3" exact href="#/">確定</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Uploadmeet;
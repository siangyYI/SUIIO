import MessageNavtab from "../MessageNavtab";
import Incomefilter from "./IncomeFilter";
import Income from "./Income";

const IncomeMessage = () => {

    return (
        <>
            <MessageNavtab />
            <Incomefilter />{/*篩選器*/}
            <div className="row overflow-auto">   {/*會議記錄*/}
                <Income />
            </div>

        </>
    )
}

export default IncomeMessage;
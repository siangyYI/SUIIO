const CompareDetail = () => {
    return (
        <>
            <div className="mx-auto mt-2 ">
                <div className="dtext d-flex">
                    <div className="size1 d-flex justify-content-start mx-2">
                        淨損  
                    </div>
                    <div className="ml-3" style={{color:"rgb(196, 68, 68)"}}>
                    {Number(
                  parseFloat(Math.abs(18000)).toFixed(3)
                ).toLocaleString("en", {
                  minimumFractionDigits: 0,
                })} 
                    </div>
                     
                    <div className="size d-flex mx-2">
                        元
                    </div>
                </div>
            </div>


        </>
    );
}
export default CompareDetail;
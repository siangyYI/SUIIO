const CompareDetailTwo = () => {
    return (
        <>
            <div className="mx-auto mt-2 ">
                <div className="dtext d-flex">
                    <div className="size2 d-flex justify-content-start mx-2 ">
                        淨利  
                        
                    </div>
                    <div className="ml-3"style={{color:"rgb(69, 185, 69)"}}>
                    {Number(
                  parseFloat(Math.abs(16000)).toFixed(3)
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
export default CompareDetailTwo;
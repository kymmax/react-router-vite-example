import { useMemo, useState } from "react";


let updateComponent = 0;
let updateTotal = 0;
let updateUseMemoTotal = 0;

const ReactUseMemo = () => {

    console.log("Update: ReactUseMemo");
    updateComponent++;
    
    const [, setUpdate] = useState(1);
    const [price, ] = useState(100);
    const [qty, setQty] = useState(1);

    const total = () => {
        updateTotal++;        
        return price * qty;
    }

    const totalUseMemo = useMemo(() => {
        updateUseMemoTotal++;        
        return price * qty;
    },[price, qty])

    return (
        <>
            <div className="d-flex fa-center">
                <div className="w-50%">
                    <p className="fw-bold color-red">無使用 useMemo</p>
                    <p>{"Update: ReactUseMemo = " + updateComponent}</p>
                    <p>{"Update: Total function = " + updateTotal}</p>
                    
                    <p>Total: {total()}</p>
                </div>

                <div className="w-50%">
                    <p className="fw-bold color-green">使用 useMemo</p>
                    <p>{"Update: ReactUseMemo = " + updateComponent}</p>
                    <p>{"Update: Total useMemo function = " + updateUseMemoTotal}</p>
                    
                    <p>Total: {totalUseMemo}</p>
                </div>
            </div>

            <div className="fa-center">
                <label htmlFor="qty">qty</label>
                <input className="fa-center" type="number" name="qty" id="qty" defaultValue={qty} onChange={(v) => {                
                    setQty(v.target.value)
                }} />
            </div>

            <hr />

            <button className="d-block mx-auto" onClick={() => setUpdate((v) => v+1)}>setUpdate</button>
        </>
    )
}

export default ReactUseMemo;
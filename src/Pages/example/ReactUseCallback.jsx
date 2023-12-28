import { useCallback, useState } from "react";

// 


// 

let updateComponent = 0;
let updateUseCallback = 0;

const ReactUseCallback = () => {

    updateComponent++;
    
    const [count, setCount] = useState(0);
    const [qty, setQty] = useState(1);


    const handleCheck = useCallback((e) => {
        updateUseCallback++;
        setCount(count + 1);
    }, [count]);

    return (
        <>
            <div className="d-flex fa-center">
                <div className="w-100%">
                    <p className="fw-bold color-green">使用 useCallback (w/ count)</p>
                    <p>{"Update: updateComponent = " + updateComponent}</p>
                    <p>{"Update: useCallback = " + updateUseCallback}</p>
                    <button className="d-block mx-auto" onClick={handleCheck}>setCount</button>

                    <hr />

                    <div className="fa-center">
                        <label htmlFor="qty">qty</label>
                        <input className="fa-center" type="number" name="qty" id="qty" defaultValue={qty} onChange={(v) => {                
                            setQty(v.target.value)
                        }} />
                    </div>
                </div>
            </div>


        </>
    )
}

export default ReactUseCallback;
import { memo, useState } from "react";

// 

let updateComponentA = 0;

const ComponentA = ({ qty }) => {
    updateComponentA++;
    
    return (
        <>
            <p>ComponentA: 更新次數 = {updateComponentA}</p>
        </>
    )
}

// 

let updateComponentMemo = 0;

const ComponentMemo = memo(({ qty }) => {
    updateComponentMemo++;
    return (
        <>
            <p>ComponentMemo: 更新次數 = {updateComponentMemo}</p>
        </>
    )
})

// 

let updateComponent = 0;

const ReactMemo = () => {

    updateComponent++;
    
    const [, setUpdate] = useState(1);
    const [qty, setQty] = useState(1);

    return (
        <>
            <div className="d-flex fa-center">
                <div className="w-50%">
                    <p className="fw-bold color-red">無使用 memo</p>
                    <p>{"Update: ReactMemo = " + updateComponent}</p>
                    <ComponentA qty={qty} />
                </div>
                <div className="w-50%">
                    <p className="fw-bold color-green">使用 memo (w/ qty)</p>
                    <p>{"Update: ReactMemo = " + updateComponent}</p>
                    <ComponentMemo qty={qty} />
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

export default ReactMemo;
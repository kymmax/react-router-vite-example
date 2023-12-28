import { useSearchParams } from "react-router-dom";

// 



const ReactUseSearchParams = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const color = searchParams.get('color');

    return (
        <>
            <div className="wh-300px" style={{
                background: color || 'white'
            }}>
                
            </div>

            <hr />

            <button className="bg-red" onClick={()=>{
                setSearchParams({color: 'red'}, {replace: true})
            }}>
                RED
            </button>
            <button className="bg-green" onClick={()=>{
                setSearchParams({color: 'green'}, {replace: true})
            }}>
                GREEN
            </button>
            <button className="bg-blue" onClick={()=>{
                setSearchParams({color: 'blue'}, {replace: true})
            }}>
                BLUE
            </button>
        </>
    )
}

export default ReactUseSearchParams;
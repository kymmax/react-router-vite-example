import { useMousePosition } from "../../component/CustomHook";

function ReactCustomHook(){

    const mouse = useMousePosition();

    return (
        <>
            {`滑鼠位置 (useMousePosition): x = ${mouse.x}, y = ${mouse.y}`}
        </>
    )
}

export default ReactCustomHook;
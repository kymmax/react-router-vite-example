import { useDebugValue, useEffect, useState } from "react";

export const useMousePosition = () => {

    const [mouse, setMouse] = useState({x:0, y:0});

    useDebugValue(`x = ${mouse.x}, y = ${mouse.y}`)

    useEffect(() => {
        const getMousePosition = (e) => {
            setMouse({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", getMousePosition);
        return () => window.removeEventListener("mousemove", getMousePosition);
    },[])

    return mouse;
}
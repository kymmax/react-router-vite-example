import { useEffect, useRef } from 'react';
import styled from 'styled-components';


const StyledMouse = styled.div`
    --before-content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    pointer-events: none;
    background-color: rgba(255,255,255,1);
    mix-blend-mode: difference;
    z-index: 999999999999;
    opacity: 0;
    overflow: hidden;
    &.init {
        width: 20px;
        height: 20px;
        opacity: 1;
        &::before{
            content: var(--before-content);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 12px;
            color: black;
        }
    }
    &.active {
        width: 60px;
        height: 60px;
        mix-blend-mode: initial;
    }
`;


const HandleMouseCursor = () => {

    const ref = useRef();
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // 
    
    useEffect(() => {

        if(isMobile) return;

        let moveTrigger = false;
        let content = '';
        let delayTime = 0;
        let observeGroup = [];
        const excludedTags = /^(head|meta|link|title|option|script|noscript|style)$/i;

        // Move
        const mousemove = (e) => {

            let px = e.clientX;
            let py = e.clientY;

            requestAnimationFrame(() => {
                ref.current.style.cssText = `
                    --before-content: '${content}';
                    transition: transform ${delayTime}s ease-out, width 0.5s, height 0.5s, opacity 0.5s, background-color 0.5s;
                    transform: translate3d(${px}px, ${py}px, 0) translate(-50%, -50%);
                `;

                if (!moveTrigger) {
                    moveTrigger = true;
                    delayTime = 0.2;
                    ref.current.classList.add("init");
                }
            });
        }

        const mouseenter = (e) => {
            let cursorContent = e.target.getAttribute('data-cursor');
            ref.current.classList.add("active");
            content = cursorContent ? cursorContent : "CLICK";
        }

        const mouseleave = () => {
            ref.current.classList.remove("active");
            content = '';
        }


        const MouseEnterLeaveEvent = (element, method) => {
            element[`${method}EventListener`]("mouseenter", mouseenter);
            element[`${method}EventListener`]("mouseleave", mouseleave);
        }
        window.addEventListener("mousemove", mousemove);
        document.querySelectorAll("a, button").forEach((element) => {
            MouseEnterLeaveEvent(element, "add");
        })

        // 

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList') {
                    // check new element added?
                    for (let addedNode of mutation.addedNodes) {
                        if (addedNode.nodeType === Node.ELEMENT_NODE && !excludedTags.test(addedNode.tagName)) {

                            if (['A', 'BUTTON'].includes(addedNode.tagName)) {
                                MouseEnterLeaveEvent(addedNode, "add");
                                observeGroup.push(addedNode)
                            }

                            addedNode.querySelectorAll("a, button").forEach((childNode) => {
                                MouseEnterLeaveEvent(childNode, "add");
                                observeGroup.push(childNode)
                            })
                        }
                    }
                }
            });
        });

        // detect start
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", mousemove);
            document.querySelectorAll("a, button").forEach((element) => {
                MouseEnterLeaveEvent(element, "remove");
            })
            // 
            observeGroup.forEach((element) => {
                MouseEnterLeaveEvent(element, "remove");
            })
            observer.disconnect();
        }
    },[ref, isMobile])

    return (
        <>
            {!isMobile && <StyledMouse ref={ref}></StyledMouse>}

            <a href="#!">HOVER</a>

            <hr />

            <button>HOVER</button>

            <hr />

            <a href="#!" data-cursor="LINK">LINK</a>

            <hr />

            <button data-cursor="PLAY">PLAY</button>
        </>
    )
}

export default HandleMouseCursor;
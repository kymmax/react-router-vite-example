import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


function ReactGSAP(){

    const refBlock = useRef(null);

    useEffect(() => {

        gsap.to(".to", { x: 200, duration: 5 })
        // 
        gsap.from(".from", { x: 200, duration: 5 })
        // 
        gsap.from(".repeat", { x: 200, repeat: -1, yoyo: true, duration: 2 })
        // 
        gsap.to(".stagger", 1, {
            scale: 0.5,
            stagger: {
                each: 0.3,
            }
        });
        // 
        gsap.timeline()
            .to(".timeline", 4, { rotate: 360 })
            .to(".timeline", { x: 200});
        // 
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({
            // markers: true,
            scrub: 1,
            invalidateOnRefresh: true // Value Resize
        })
        gsap.to('.scrollTrigger', {
			scrollTrigger: {
				trigger: '.scrollTrigger',
				start: 'top bottom',
				end: 'bottom center',
				invalidateOnRefresh: false,
			},
			x: 500
		});
        // 限制在 特定父元素中的區塊
        gsap.context(() => {
            gsap.to(".ref", { x: 500, duration: 5 })
        }, refBlock)
        
    
    }, [])


    return (
        <>
            <p className="text-danger">npm install gsap</p>

            <hr />

            <div className="test-block to">.to</div>

            <hr />

            <div className="test-block from">.from</div>

            <hr />

            <div className="test-block repeat">.repeat yoyo</div>

            <hr />

            <div className="test-block stagger">.stagger</div>
            <div className="test-block stagger">.stagger</div>
            <div className="test-block stagger">.stagger</div>

            <hr />

            <div className="test-block timeline">.timeline</div>

            <hr />

            <div className="test-block scrollTrigger">.scrollTrigger</div>

            <hr />
            
            <div ref={refBlock}>
                <div className="test-block ref">.ref-child</div>
            </div>
            <div className="test-block ref">.ref-not-child</div>

            <hr />

            <div style={{width: '100%',height:"150vh"}}></div>

        </>
    )
}

export default ReactGSAP;
import { motion, useScroll } from "framer-motion"
import { useRef } from "react";


function ReactFramerMotion(){

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    });
    

    const animateType = {
        initial: {
            opacity: 0
        },
        fadeInLeft: {
            opacity: [0,1],
            x: ["-50%", "0%"],
        }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            // staggerDirection: -1 // 前後順序
          }
        }
    }
    const staggerItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <>
            <div>
                <p className="text-danger">npm install framer-motion</p>

                {/* Animate */}
                <motion.div 
                    className="test-block"
                    // initial={{ x: 50 }}
                    animate={{ x: 100 }}
                    // animate={{ x: [0, 100, 0] }}
                    exit="hidden"
                    transition={{ 
                        // ease: "linear",
                        type: "spring", // tween, spring, inertia
                        stiffness: 100
                    }}
                >
                    framer motion
                </motion.div>

                {/* Stagger */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div 
                        className="test-block"
                        variants={staggerItem}
                    >
                        Stagger
                    </motion.div>
                    <motion.div 
                        className="test-block"
                        variants={staggerItem}
                    >
                        Stagger
                    </motion.div>
                </motion.div>

                {/* Gustures */}
                <motion.div
                    className="test-block"
                    whileHover={{
                        x: 100,
                        background: "red",
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    Guesture
                </motion.div>

                <div style={{width: '100%',height:"100vh"}}></div>

                {/* Scroll-triggered animations */}
                <motion.div
                    className="test-block"
                    variants={animateType}
                    initial="initial"
                    whileInView="fadeInLeft"
                    // viewport={{ once: true, amount: 1.0 }}
                    transition={{ 
                        // type: "spring",
                        ease: "easeOut",
                        // stiffness: 50,
                        // damping: 30,
                        duration: .5,
                        // delay: 1,
                        // x: { duration: 1 },
                    }}
                >
                    Scroll-triggered
                </motion.div>

                {/* Scroll-triggered w/ scroll % */}
                <motion.div
                    className="test-block"
                    ref={ref}
                    style={{
                        opacity: scrollYProgress
                    }}
                >
                    scrollYProgress
                </motion.div>

                <div style={{width: '100%',height:"100vh"}}></div>
            </div>
        </>
    )
}

export default ReactFramerMotion;
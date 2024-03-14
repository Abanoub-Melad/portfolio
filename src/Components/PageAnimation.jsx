import { motion } from 'framer-motion'
const widthAnimation = {
    initial: {
        width: "100%",
        overflow: "hidden",
        opacity: 0.1,
        scale: 1,



    },
    animate: {

        width: "100%",
        // rotate: 360,
        overflow: "hidden",

        opacity: 1,
        // x: 500,
        // scale: 1,
    },
    exit: {

        x: "100%",
        scale: 0.98,
        width: "100%",
        overflow: "hidden",
        opacity: 0.1,

        x: -window.innerWidth,
        // transition: { stiffness: 60,
        //     damping: 100,
        //     ease: "easeInOut",
        //     duration: .3,  }
    }
    // transition: {
    //     width: "100%",
    //     duration: 0.4,
    //     overflow: "hidden",
    //     scale: 1,

    //     type: "spring",
    //     stiffness: 10,
    //     damping: 10,

    // }
}
function PageAnimation({ children }) {
    return (
        <motion.div
            className='App'
            transition={{
                stiffness: 60,
                damping: 100,
                ease: "easeInOut",
                duration: .7 ,
            }}
            variants={widthAnimation}

            initial='initial'
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    )
}

export default PageAnimation

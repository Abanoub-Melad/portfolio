import { motion } from 'framer-motion'
const widthAnimation = {
    initial: {
        width: 0,
        // scale: 0.7,
        opacity: 1,
        overflow: "hidden",
        // height: "100% ",
        // y: "0",

    },
    animate: {
        width: "100%",
        // scale: 1,

        overflow: "hidden",
        // y: "60",
        // height: "100% ",


        opacity: 1,
        // x: "fit-content",
    },
    exit: {
        // y: "0",

        width: "100%",
        overflow: "hidden",
        // scale: .7,
        opacity: 0,
        // y: window.innerWidth,
        x: -window.innerWidth,
    }
}
function PageAnimation({ children }) {
    return (
        <motion.div
            className='App'
            transition={{
                ease: "easeInOut",
                duration: .8
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

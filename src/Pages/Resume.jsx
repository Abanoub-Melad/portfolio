import { motion } from 'framer-motion'
import PageAnimation from '../Components/PageAnimation'
const widthAnimation = {
    initial: {
        width: 0,
    },
    animate: {
        width: "100%",
    },
    exit: {
        width: "100%",
        x: window.innerWidth,
    }
}
function Resume() {
    return (
        <>
            {/* <motion.div
                id="resume"
               
            // initial={{
            //     opacity: 0,
            //     scale: 0,
            // }}
            // animate={{
            //     opacity: 1,
            //     scale: 1,
            // }}
            // transition={{ duration: 0.2 }}
            // exit={{
            //     opacity: 0,
            //     scale: 0,
            // }}


            > */}
            <PageAnimation>

                <section className="sectionAll   " id="resume">
                    <div className="container">
                        <div className="allContent  d-flex justify-content-between ">
                            <h1 className="allTitle">My Resume.</h1>
                            <svg className="allIcon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
                                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                                <g><g><g><path d="M39.4,45.4L10,76.1v79.3c0,77,0,79.3,0.9,81.1c1.1,2.1,2.7,3.7,4.5,4.3c1,0.4,26,0.5,82,0.5c67.4,0,80.9-0.1,82.2-0.7c1.9-0.8,3.9-2.9,4.6-4.7c0.3-0.9,0.5-11.1,0.5-30.7v-29.4l7.8-5.7c20.5-15.1,35.8-27.6,44.1-35.9c7.5-7.5,8.9-9.8,9.4-14.6c0.5-6.3-1.7-10.6-6.8-13c-2.8-1.4-3.7-1.6-6.8-1.6c-3.3,0-3.9,0.1-7.9,2.1c-6.2,3.1-15.3,9.3-27.1,18.7c-5.7,4.5-10.9,8.6-11.5,9.1l-1.1,0.9V78.5c0-39.2-0.1-57.5-0.5-58.4c-0.6-1.6-2.6-3.8-4.3-4.7c-1.1-0.6-9.8-0.7-56.2-0.6l-54.9,0L39.4,45.4z M178.2,18.5c0.7,0.2,1.7,1.1,2.2,2c1,1.6,1,2.4,0.9,59.9v58.3l-5.8,4.8c-25.1,20.8-45.2,41.2-50.1,51c-3.2,6.4-1.1,11.3,5,11.3c6.9,0,25.2-9.6,45.6-23.9c2.7-1.9,5-3.4,5.1-3.4c0.1,0,0.2,12.4,0.2,27.6c0,30.3,0,29.7-2.9,31.2c-1.2,0.6-10.8,0.7-81.1,0.7c-88.4,0-81.9,0.2-83.3-3.1c-0.6-1.4-0.7-13.2-0.7-79V78.5h26.4H66l1.6-1.1c2.1-1.4,3.3-3.1,3.8-5.4c0.2-1,0.5-13.6,0.5-27.9V18h52.5C157.4,18,177.4,18.2,178.2,18.5z M67.3,73.1c-0.4,0.6-1.3,1.3-2,1.6c-0.8,0.2-10.7,0.4-25.3,0.3L16,74.9L41.9,48l25.9-27L68,46.5C68.1,68.9,68,72.1,67.3,73.1z M236.9,109.2c5.7,2,7.5,9.6,3.8,15.2c-2,2.9-8.7,9.7-15.2,15.3l-5.1,4.4l-6.5-8.2c-3.6-4.5-7.1-9-7.9-9.9l-1.3-1.8l4.3-3.1c5.9-4.3,12.6-8.7,16-10.5C230.3,108,232.5,107.7,236.9,109.2z M209.3,135.9c4.1,5.2,7.6,9.7,7.9,9.9c0.8,1-30.9,24.9-49.2,37.2c-20.8,13.8-37,21.4-39.8,18.6c-1.8-1.8,0.2-6.5,6-13.8c7.8-9.9,30.8-31.4,52.6-49.1c5.5-4.5,11-9,12.3-10.1c1.3-1.1,2.5-2,2.6-2C201.8,126.6,205.2,130.8,209.3,135.9z" /><path d="M105.2,42.2c-2,1.1-3.3,2.8-3.8,5.1c-0.6,2.4-0.6,47.5,0,49.9c0.5,2.3,1.8,4,3.8,5.2c1.4,0.8,3,0.9,23.8,0.9c21.3,0,22.4,0,23.9-1c2.2-1.3,3.6-3.6,3.9-6.5c0.1-1.4,0.2-13,0.1-25.8c-0.1-25.8,0-25.1-3.3-27.5l-1.6-1.1l-22.6-0.1C108.1,41.4,106.8,41.4,105.2,42.2z M151.9,46.1l1.4,1.4v25v24.9l-1.2,1.3l-1.3,1.2H129h-21.8l-1.3-1.2l-1.2-1.3V72.4v-25l1.4-1.4l1.4-1.4H129h21.5L151.9,46.1z" /><path d="M125.8,49.6c-2.8,0.9-4.7,2.5-6.1,5.1c-1.1,2-1.3,2.8-1.1,5.6c0.1,2.8,0.4,3.7,1.7,5.4l1.5,2.1l-2.1,0.2c-1.4,0.1-2.6,0.6-3.5,1.6c-2.5,2.4-2.6,3.4-0.7,13.8c1.9,10.3,2.2,11.2,5.5,12.1c2.7,0.7,15,0.6,16.9-0.2c2.9-1.2,3.2-2.2,5-12.6l1.6-9.6l-1-1.8c-1-2-3.5-3.5-5.7-3.5h-1.6l1.5-2.1c1.3-1.8,1.6-2.7,1.7-5.4c0.1-2.6,0-3.6-0.9-5.3c-1.4-2.8-3.6-4.7-6.4-5.5C129.3,48.8,128.4,48.8,125.8,49.6z M132.8,53.9c4.4,2.9,4.3,8.6-0.2,11.9c-4.1,3-10.8-0.8-10.8-6.1C121.8,54.3,128.3,50.8,132.8,53.9z M139.7,72.5c0.7,0.7,1.1,1.6,1,2c-0.1,0.4-0.8,4.1-1.5,8.2c-0.7,4-1.4,7.9-1.7,8.4c-0.4,1.1-0.6,1.1-8.6,1.1s-8.1,0-8.6-1.1c-0.2-0.6-1-4.4-1.7-8.4c-0.7-4-1.4-7.8-1.5-8.2c-0.1-0.5,0.2-1.3,1-2l1.2-1.2h9.6h9.6L139.7,72.5z" /><path d="M38.1,121.3v1.9l59.4-0.1l59.4-0.1v-1.7v-1.7l-59.4-0.1l-59.4-0.1V121.3L38.1,121.3z" /><path d="M38.1,163.4v1.7h47.8h47.8v-1.7v-1.7H85.9H38.1V163.4z" /><path d="M38.1,205.3v1.7h36.6h36.6v-1.7v-1.7H74.7H38.1V205.3z" /><path d="M215.9,153.6c-11.5,9.1-21.1,16.8-21.4,17.1c-0.5,0.5-0.3,0.9,0.6,1.8l1.2,1.2l21.4-16.9c11.8-9.3,21.5-17.1,21.6-17.4c0.2-0.6-1.3-2.3-2-2.3C237,137.1,227.4,144.5,215.9,153.6z" /></g></g></g>
                            </svg>
                        </div>
                        <div className="row mt-5">
                            {/* Experience  */}
                            <div className="col-lg-6 experience ">
                                <div className='d-flex'>
                                    <h3 className="titleServices ms-auto ">EXPERIENCE</h3>
                                </div>
                                <ul className='containerUl mt-5' >
                                    <li className='lineDecEx'>
                                        <div className='contentExperience ps-3'>
                                            <h5>Technical training</h5>
                                            <span className='titleContentEx'>
                                                <a
                                                    target='blank'
                                                    href='https://www.neoneg.com/'>NEON Company</a></span>
                                            <p >I underwent technical training at NEON Company where I gained hands-on experience in various aspects of web development.</p>
                                        </div>
                                        <span className='yearEx'>
                                            <span className='toEx'>2024</span>
                                            <span className='fromEx'>2024</span>
                                        </span>
                                    </li>
                                </ul>

                            </div>
                            {/* Eduction  */}
                            <div className="col-lg-6 eduction">
                                <div className='d-flex'>
                                    <h3 className="titleServices ms-auto">EDUCATION</h3>
                                </div>
                                <ul className='containerUl mt-5' >
                                    <li className='lineDec'>
                                        <div className='contentResume ps-3'>
                                            <h5>Modern React with Redux  </h5>
                                            <span className='titleContent'> Codevolution - Youtube</span>
                                            <p className='prgContent'>Completed the 'Modern React with Redux' course by Codevolution on YouTube, mastering React.js and Redux concepts. Built dynamic web applications with state management and data flow control, ready to utilize these skills in professional projects.</p>
                                        </div>
                                        <span className='year'>
                                            <span className='to'>2024</span>
                                            <span className='from'>2023</span>
                                        </span>
                                    </li>
                                    <li className='lineDec'>
                                        <div className='contentResume ps-3'>
                                            <h5>Front-End Developer - Course </h5>
                                            <span className='titleContent'>mahara tech </span>
                                            <p className='prgContent'>Completed a comprehensive Front-End Developer course online, gaining proficiency in HTML, CSS, and JavaScript. Developed responsive and interactive web applications, eager to apply newly acquired skills in real-world projects.</p>
                                        </div>
                                        <span className='year'>
                                            <span className='to'>2023</span>
                                            <span className='from'>2022</span>
                                        </span>
                                    </li>
                                    <li className='lineDec'>
                                        <div className='contentResume ps-3'>
                                            <h5>Bachelor Of Civil Engineering </h5>
                                            <span className='titleContent'>New Cairo Academy</span>
                                            <p className='prgContent'>Holder of a Bachelor's degree in Civil Engineering from New Cairo Academy. Skilled in structural design, project management, and advanced engineering software.</p>
                                        </div>
                                        <span className='year'>
                                            <span className='to'>2023</span>
                                            <span className='from'>2019</span>
                                        </span>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </PageAnimation>

            {/* </motion.div > */}
        </>
    )
}

export default Resume

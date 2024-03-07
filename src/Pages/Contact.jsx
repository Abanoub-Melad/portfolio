import { useState } from "react";
import toast from "react-hot-toast";
// import { motion } from 'framer-motion'
import PageAnimation from "../Components/PageAnimation";


function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d9f22cf4-c218-4699-a9ed-a8caad573477");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(toast.success("Form Submitted Successfully"));
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(toast.error(data.message));

        }
    };
    return (
        <>
            {/* <motion.div
                id="contact"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                exit={
                    {
                        opacity: 0
                    }
                }
            > */}
            <PageAnimation>


                <section className="sectionAll" id="contact">
                    <div className="container">
                        <div className="allContent  d-flex justify-content-between   ">
                            <h1 className="allTitle">Contact Me.</h1>
                            <svg
                                className="allIcon"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 256 256"
                                enable-background="new 0 0 256 256"
                                xml:space="preserve"
                            >
                                <metadata>
                                    Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
                                </metadata>
                                <g>
                                    <g>
                                        <g>
                                            <path d="M21.3,40c-2.2,0.6-6.1,2.9-7.4,4.3c-0.6,0.8-1.7,2.4-2.4,3.7c-1.2,2.2-1.2,2.8-1.4,10L10,65.6l59,30.9l59,31l59-31l59-30.9l-0.1-7.6l-0.1-7.6l-1.6-2.9c-1.8-3.2-3.2-4.6-6.7-6.5l-2.3-1.2l-106.2-0.1C70.5,39.7,22.1,39.8,21.3,40z" />
                                            <path d="M10.1,152.1l0.1,53.6l1.2,2.4c1.8,3.5,3.2,4.9,6.5,6.7l2.9,1.6H128h107.1l2.4-1.2c3.5-1.8,4.9-3.2,6.7-6.5l1.6-2.9l0.1-53.6l0.1-53.6l-4.7,2.5c-10,5.3-94,49.2-98.8,51.7c-6.5,3.2-11.3,4.9-14.4,4.9c-3.1,0-7.9-1.7-14.4-4.9c-4.9-2.5-88.8-46.3-98.8-51.7L10,98.5L10.1,152.1z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="d-flex  my-4">
                            <h3 className="titleServices ">LET'S TALK</h3>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="col-md-8  m-auto mt-3 ">
                                <div className="row m-auto  align-items-center   justify-content-evenly mt-5  ">
                                    <div className="col-md-6  mb-md-5  ">
                                        <div className="inputGroup  ">
                                            <input
                                                required
                                                type="name" name="name" className="inputText  " />
                                            <label className="labelText">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6  mb-md-5  ">
                                        <div className="inputGroup  ">

                                            <input
                                                required
                                                type="email" name="email" className="inputText  " />
                                            <label className="labelText">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12  ">
                                        <div className="inputGroup  h-auto">
                                            <textarea
                                                type="message"
                                                name="message"
                                                className="inputText "
                                            />
                                            <label className="labelText">How can we help you?</label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btnMain d-flex m-auto my-4 px-3   fw-bold"
                                >
                                    send message
                                </button>
                            </div>
                        </form>
                        {/* <div className="d-flex p-2 w-50  m-auto ">
                        <span className="massageForm text-success  m-auto ">{result}</span>
                    </div> */}
                        <div className="row m-auto  text-center mt-5 aboutPrg ">
                            <div className="col-md-4 ">
                                <span>
                                    <svg
                                        className="iconContact"
                                        version="1.1"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M21,11c0,6.7-4.3,6.4-4.8,6.4c-0.6,0-1.1-0.1-1.6-0.4c-0.4-0.3-0.8-0.6-1-1.1c-0.4,0.5-0.8,0.9-1.3,1.1
	c-0.5,0.3-1,0.4-1.6,0.4c-0.5,0-1-0.1-1.4-0.3c-0.4-0.2-0.8-0.6-1-1c-0.3-0.4-0.5-0.9-0.6-1.5c-0.1-0.6-0.1-1.3-0.1-2
	c0.1-0.9,0.3-1.7,0.6-2.5c0.3-0.7,0.7-1.4,1.1-1.9c0.4-0.5,0.9-0.9,1.5-1.2c0.6-0.3,1.2-0.4,1.8-0.4c2,0,3.1,1,3.3,1.2L15.4,14
	c0,0.4-0.2,1.8,1.1,1.8c0.4,0,2.4-0.5,2.4-4.7c0-0.1,0.9-7-6.6-7C6.3,4,5,9.9,5,12c0,8.4,5.3,8,7,8c2,0,3.1-0.4,3.3-0.5l0.4,1.8
	C15.5,21.5,14.5,22,12,22c-3.1,0-9-0.1-9-10c0-1.4,0.8-10,9.5-10C20.8,2,21,9.6,21,11z M10.1,12.6c-0.1,0.9,0,1.7,0.2,2.2
	c0.2,0.5,0.6,0.7,1.2,0.7c1.1,0,1.7-1.4,1.8-1.8l0.5-5.1c-0.1,0-0.7-0.1-0.9-0.1c-0.8,0-1.5,0.4-1.9,1.1
	C10.5,10.2,10.2,11.2,10.1,12.6z"
                                        />
                                    </svg>
                                </span>
                                <h5>
                                    <a>Abanoubmelad@gmail.com</a>
                                </h5>
                            </div>
                            <div className="col-md-4 ">
                                <span>
                                    <svg
                                        className="iconContact"
                                        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 494.914 494.914" xml:space="preserve">
                                        <g>
                                            <path d="M285.813,266.034v36.483c91.16,9.032,145.408,40.674,145.408,64.427c0,27.993-75.088,67.024-197.362,67.024
		S36.514,394.937,36.514,366.944c0-23.93,54.996-55.856,147.32-64.635v-36.466C87.701,274.843,0,309.59,0,366.944
		c0,67.247,120.488,103.54,233.858,103.54c113.369,0,233.877-36.293,233.877-103.54
		C467.735,309.972,381.194,275.321,285.813,266.034z"/>
                                            <path d="M486.869,40.363c-2.789-1.752-5.959-2.63-9.145-2.63c-2.551,0-5.098,0.558-7.472,1.704l-30.271,14.689
		c-14.084,6.836-29.346,10.245-44.593,10.245c-16.123,0-32.214-3.808-46.919-11.392c-14.673-7.568-30.699-11.327-46.695-11.327
		c-16.728,0-33.441,4.095-48.592,12.252V42.8c0-10.149-8.236-18.37-18.369-18.37c-10.133,0-18.354,8.221-18.354,18.37v328.94
		c0,10.133,8.221,18.354,18.354,18.354c10.133,0,18.369-8.221,18.369-18.354V203.853c15.15-8.157,31.88-12.268,48.607-12.268
		c15.996,0,32.007,3.76,46.68,11.326c14.705,7.584,30.796,11.393,46.902,11.393c15.247,0,30.51-3.41,44.609-10.244l45.245-21.953
		c5.927-2.868,9.686-8.859,9.686-15.438V54.908C494.914,48.981,491.855,43.485,486.869,40.363z"/>
                                        </g>
                                    </svg>                          </span>
                                <h5>15 Ezbet El Nakhl</h5>
                            </div>
                            <div className="col-md-4 ">
                                <span>
                                    <svg
                                        className="iconContact"
                                        viewBox="0 0 32 32"
                                    >
                                        <path
                                            d="M26.146,0.745c-0.203-0.231-0.483-0.346-0.763-0.346c-0.283,0-0.566,0.119-0.765,0.358
	l-5.904,7.084c-0.264,0.317-0.309,0.758-0.109,1.12c0.59,1.066,1.758,3.306,1.788,4.361c0.038,1.309-5.654,7.064-7.071,7.071
	c-0.003,0-0.005,0-0.007,0c-1.058,0-3.287-1.18-4.352-1.78c-0.153-0.086-0.32-0.128-0.486-0.128c-0.229,0-0.456,0.079-0.64,0.233
	L0.743,24.63c-0.457,0.381-0.489,1.083-0.055,1.49C3.961,29.187,7.279,31,11.201,31C15.444,31,31,15.444,31,11.201
	C31,7.285,29.193,4.213,26.146,0.745z M25.396,2.948c0.412,0.498,0.771,0.973,1.105,1.438l-5.277,5.277
	c-0.158-0.326-0.336-0.678-0.539-1.062L25.396,2.948z M8.592,20.693c0.382,0.206,0.733,0.385,1.058,0.544l-5.312,5.312
	c-0.471-0.34-0.945-0.704-1.429-1.121L8.592,20.693z M21.277,21.277c-5.174,5.174-9.076,7.667-10.076,7.723
	c-2.075,0-4.016-0.599-6.024-1.875l5.443-5.443c1.655,0.705,2.391,0.712,2.707,0.712c0.002,0,0.004,0,0.007,0
	c0.492-0.003,1.988-0.01,5.828-3.983c3.282-3.396,3.248-4.578,3.232-5.145c-0.008-0.29-0.031-0.999-0.725-2.63l5.413-5.413
	C28.431,7.312,29,9.152,29,11.193C28.944,12.202,26.451,16.104,21.277,21.277z"
                                        />
                                    </svg>
                                </span>
                                <h5>01207525680</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </PageAnimation>

            {/* </motion.div> */}
        </>
    );
}

export default Contact;

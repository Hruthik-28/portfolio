import { MdArrowOutward } from "react-icons/md"
import { LuCode2 } from "react-icons/lu";
import { Link } from "react-router-dom"

function Footer() {
    const currentYear = new Date(Date.now()).getFullYear();
    return (
        <>
            <div className="w-full bg-[#010101] flex flex-col justify-center items-center mt-40 relative overflow-hidden">
                <div className="footer-big-in relative py-[100px] flex flex-col justify-center items-center">
                    <img src="https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6e95cbcbb99_planet-earth.png" className="max-w-sm absolute bottom-0 -left-full" />
                    <img src="https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a60a31bcbbdf_space-men.png" className="sm:max-w-md max-w-lg absolute -top-8 bottom-0 sm:-right-[412px] -right-[360px] " />

                    <h5 className="text-white text-xl font-HedvigLettersSans">Have an idea ?</h5>
                    <h1 className="text-white font-bold text-center sm:text-5xl text-3xl font-SpaceGrotesk">Let's talk about it</h1>
                    <div className="mt-3">
                        <Link to={'/contact'}>
                            <button className=" group relative font-thin text-white text-lg font-HedvigLettersSans rounded-full bg-[#222222] px-6 py-2 transition-all duration-1000 hover:left-3 hover:top-3 text-center gap-3 flex items-center ">
                                Contact
                                <MdArrowOutward className="vibrate-1 opacity-50 group-hover:scale-150 group-hover:opacity-100"/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full text-white py-4 sm:px-44 flex flex-col md:flex-row justify-center md:gap-44 gap-6 items-center font-SpaceGrotesk">
                <div className=" flex gap-2 text-sm items-center font-semibold hover:underline cursor-pointer">
                <LuCode2 className={`text-3xl`} />
                Copyright ©{currentYear} - Hruthik
                </div>
                <div className=" opacity-90 hover:underline">
                    <Link>
                        Side Projects
                    </Link>
                </div>
                <div className=" flex gap-5 justify-center py-5">
                    <p className="opacity-50 hover:opacity-100 cursor-pointer">justBlogIt</p>
                    <p className="opacity-50 hover:opacity-100 cursor-pointer">todoBreeze</p>
                </div>
            </div>
            

        </>
    )
}

export default Footer

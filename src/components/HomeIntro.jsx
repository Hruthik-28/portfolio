import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import {animateLeftToRight} from "../Helpers/gsap";

function HomeIntro() {
    animateLeftToRight(".HomeOne")

    return (
        <div className="max-w-full sm:space-y-6 space-y-3 px-4 flex flex-col sm:items-center items-start justify-start">
            <div className="HomeOne max-w-4xl sm:mt-6 text-start font-bold overflow-hidden py-1 sm:py-3">
                <h1 className="text-white font-SpaceGrotesk sm:text-7xl text-4xl ">
                    Fullstack Web Developer from 
                    <span className="text-[#C9BB94] pl-4 font-HedvigLettersSans">
                        Banglore
                    </span>
                </h1>
            </div>
            <div className="HomeOne max-w-4xl font-SpaceGrotesk">
                <p className="text-[#C7C7C7]">I create websites and applications that not only look fantastic but also function seamlessly. Whether it's developing innovative apps, or diving into the latest web technologies, I'm all in. Let's connect and turn your ideas into digital reality!</p>
            </div>
            <div className=" text-white md:w-[46rem] lg:w-[56rem] flex justify-start gap-5 pt-6">
                <Link to={'/about'}>
                <button className="relative group text-lg font-HedvigLettersSans rounded-full bg-[#222222] px-3 py-2 transition-all duration-500 hover:left-3 hover:bottom-3 text-center flex items-center gap-3">
                    Read more
                    <MdArrowOutward className="text-gray opacity-50 group-hover:scale-150 group-hover:opacity-100"/>
                </button>
                </Link>
                
                <Link to={'/contact'}>
                <button className="relative text-lg font-HedvigLettersSans rounded-full bg-black border-2 px-4 py-2 text-center flex items-center shadow-2xl">
                    Contact
                </button>
                </Link>
            </div>
        </div>
    )
    



    
}

export default HomeIntro

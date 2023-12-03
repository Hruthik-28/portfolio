import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function Cardlg({icon, title, keyword, image, bgColor, link}) {

    return (
        <>
        <Link to={link}>
        <div className='max-w-full mt-8 bg-[#1F1F1F] flex flex-col-reverse sm:flex-row rounded-lg cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 drop-shadow-2xl'>
            {/* left or down part*/}
            <div className='md:w-1/2 w-full text-white p-5 flex sm:flex-col flex-row justify-center gap-5 items-center sm:items-start'>
                <div className='text-purple-500 text-5xl border-none rounded-lg flex justify-center items-center'>
                    <img src={icon}  />
                </div>
                <div className=''>
                    <h1 className='font-HedvigLettersSans text-xl font-semibold flex items-center gap-2'>
                        {title} 
                        <MdArrowOutward className='invisible group-hover:visible'/>
                    </h1>
                    <p className=' opacity-50 text-sm font-extralight font-SpaceGrotesk mt-1'>{keyword}</p>
                </div>
            </div>
            
            {/* right or up part*/}
            <div className='md:w-1/2 w-full'>
                <div className="w-full h-full rounded-r-lg rounded-l-lg sm:rounded-l-none" style={{ backgroundColor: bgColor }}>
                    <div className="max-w-md flex justify-center rounded-t-lg items-center mx-auto sm:px-14 px-4 sm:pt-8 pt-4">
                        <img src={image} className="rounded-t-lg" />
                    </div>
                </div>
            </div>
        </div>
        </Link>
        </>
    )
}

export default Cardlg

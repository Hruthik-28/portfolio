import { useForm } from "react-hook-form"
import {animateLeftToRight, animateToTop} from "../Helpers/gsap"

function ContactSection() {
    const {register, handleSubmit, getValues, formState:{errors},} = useForm();

    animateLeftToRight('.contact');
    animateToTop('.top')
    const submit = () => {

    }
    return (
        <>
            <div className="w-full text-white lg:px-32 xl:px-80 px-5">
                <h1 className="contact text-3xl sm:text-6xl font-SpaceGrotesk font-bold py-5">Contact</h1>
                <p className="contact font-SpaceGrotesk text-[#898989]">Please fill out the following form and we will get back to you within the next 24 hours to help you become even greater at what you do.</p>

                <form onSubmit={handleSubmit(submit)} className="top space-y-16 pt-6">

                    <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                        <div className="space-y-1 sm:w-1/2 w-full">
                            <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">1</p>
                            <h2 className="font-semibold">What&apos;s your name?</h2>
                            <p className="opacity-50 font-medium text-xs ">REQUIRED</p>
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <input 
                                type="text" 
                                className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]" 
                                placeholder="Type your full name"
                                {...register('name', {required: true})}
                            />
                            {errors.name && <span className="text-red-500 pl-5 font-SpaceGrotesk">name is required</span>}
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center ">
                        <div className="space-y-1 sm:w-1/2 w-full">
                            <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">2</p>
                            <h2 className="font-semibold">What is your email address?</h2>
                            <p className="opacity-50 font-medium text-xs ">REQUIRED</p>
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <input 
                            type="email" 
                            className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]" 
                            placeholder="example@domain.com"
                            {...register('email', {required: true})}
                            />
                            {errors.email && <span className="text-red-500 pl-5 font-SpaceGrotesk">email is required</span>}

                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center ">
                        <div className="space-y-1 sm:w-1/2 w-full ">
                            <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">3</p>
                            <h2 className="font-semibold">Can you tell me about your project / product / company in a few words?</h2>
                            <p className="opacity-50 font-medium text-xs ">REQUIRED</p>
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <textarea 
                            type="text" 
                            className="w-full bg-[#171717] rounded-xl  px-4 py-2 outline-none hover:bg-[##2B2B2B]" 
                            placeholder="Type your answer here..." rows="8"
                            {...register('projectDetail', {required: true})}
                            />
                            {errors.name && <span className="text-red-500 pl-5 font-SpaceGrotesk">this field is required</span>}

                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <button type="submit" className="bg-[#38E492] rounded-full text-black font-medium text-lg font-SpaceGrotesk px-4 py-2 w-full sm:w-max">Send Message</button>
                    </div>
                </form>
                
            </div>
        
        </>
    )
}

export default ContactSection

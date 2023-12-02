
import { ProjectListing } from '../components'
import { animateLeftToRight } from '../Helpers/gsap'

function Work() {
    animateLeftToRight('.workPage')
    window.scrollTo(0, 0)
    return (
        <>
        <div className='max-w-full flex flex-col justify-center items-center gap-10 sm:pt-10 '>
            <div className='max-w-4xl text-white px-4'>
                <h1 className='workPage sm:text-6xl text-4xl font-SpaceGrotesk font-bold sm:py-4'>Work</h1>
                <p className='workPage opacity-50 text-gray-300 font-SpaceGrotesk sm:py-6'>Below you can find projects which showcase what I can bring to the table. Within these projects, I dive into my process of how I solve real problems in today's world through the power of development.</p>
            </div>
            <div className='sm:mt-14'>
                <ProjectListing />
            </div>

        </div>
        </>
    )
}

export default Work

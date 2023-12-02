import { animateImagesRightToLeft } from '../Helpers/gsap'

function InfiniteCards() {
    animateImagesRightToLeft('aniImg')
    return (
        <>
            <div className='max-w-full flex gap-3 sm:mt-24 mt-10 justify-center cursor-pointer overflow-x-hidden'>
                <img src="../../public/astronaut.jpg" className='aniImg sm:max-w-md rounded-t-lg relative hover:bottom-2 z-9' />
                <img src="../../public/astronaut.jpg" className='aniImg sm:max-w-md rounded-t-lg relative hover:bottom-2 z-9' />
                <img src="../../public/astronaut.jpg" className='aniImg sm:max-w-md rounded-t-lg relative hover:bottom-2 z-9' />
                <img src="../../public/astronaut.jpg" className='aniImg sm:max-w-md rounded-t-lg relative hover:bottom-2 z-9' />
                <img src="../../public/astronaut.jpg" className='aniImg sm:max-w-md rounded-t-lg relative hover:bottom-2 z-9' />
            </div>
            <div className='w-full h-7 relative bottom-5 gradient-div '>

            </div>
        </>
    )
}

export default InfiniteCards

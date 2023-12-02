import {HomeIntro, InfiniteCards, ProjectListing} from '../components/index'
import { animateImagesRightToLeft } from '../Helpers/gsap'

function Home() {

    animateImagesRightToLeft('homeTwo')

    return (
        <>
        <HomeIntro />
        <InfiniteCards />
        <main className='flex flex-col '>
            <h1 className='text-3xl font-SpaceGrotesk text-white flex font-bold mt-10 md:mx-80 mx-8'>Projects</h1>
            <ProjectListing />
        </main>
        
        </>
    )
}

export default Home

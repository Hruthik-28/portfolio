import { animateLeftToRight } from "../Helpers/gsap"

function AboutSection() {
    const age = new Date().getFullYear() - 2003
    animateLeftToRight('.about')
    return (
        <>
            <div className="w-full flex flex-col mb-5 items-center justify-center text-white">
                <div className="about max-w-4xl flex sm:flex-row flex-col-reverse gap-3 mt-10 mx-5">
                    <img src="/hruthik.png" alt="hruthik" className="sm:w-28 w-14 rounded-full cursor-pointer" />
                    <div>
                        <h1 className="about sm:text-6xl text-3xl font-mono font-extrabold">From passion to a developer</h1>
                    </div>
                </div>

                <div className="max-w-4xl space-y-5 mt-5 mx-5">
                    <p className="about text-lg font-SpaceGrotesk text-[#ADADAD]">My name is <span className="text-orange-500">Hruthik</span>, a passionate <span className="text-purple-500">FullStack Web developer</span> who is (currently) based in banglore. I am {age} years old, but have at least 1 year of experience in building projects and developing.</p>
                    <p className="about text-lg font-SpaceGrotesk text-[#ADADAD]">I hold a passion for developing things and believe that great things are often invisible. With an impactful thoughts and job, you can convey your story or the story of your business to a wider audience. I want to help you build an online brand and or strengthening your online brand.</p>
                    <p className="about text-lg font-SpaceGrotesk text-[#ADADAD]">I’m a also a person with an entrepreneurial mindset. Due to my entrepreneurial mindset, I’m really flexible when it comes to achieving certain objectives. Think about developing top-notch web(apps) and website, but also there is competiton.  When I start with a certain task, I do want to know what you’re exactly in need of.</p>
                    <p className="about text-lg font-SpaceGrotesk text-[#ADADAD] font-bold">Reason why I spend time in learning more skills is because of the fact that it makes me a more valuable person(developer). I am a big believer in focus on a specific area and getting really good at it.</p>

                    <h1 className="about text-2xl font-SpaceGrotesk font-extrabold">How I got started</h1>
                    <p className="text-lg font-SpaceGrotesk">I’ve been involved in trying to get into development since my 1st year of college and when you decide to learn something it is obvious you face difficulties. I would like to thank Hitesh Choudhary. His javascript (Chai aur javascript) and react (Chai aur react) helped me learning most of the things i work with now</p>

                    <h1 className="text-2xl font-SpaceGrotesk font-extrabold">Work policy</h1>
                    <p className="text-lg font-SpaceGrotesk ">I spend most of my time in front of laptop developing and learning. Working remotely is that I love, because it saves (a lot of) commuting time. However, this does not mean I am unwilling to work in other locations.</p>

                </div>
            </div>
        </>
    )
}

export default AboutSection

import {Cardlg} from './index'

function ProjectListing() {
    const cardItems = [
        {
            icon: "https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a66d02bcbb81_thumbnial-shoppop.svg",
            title: "Just Blog It", 
            keyword: "React, Redux, Appwrite, Authentication, File Management ", 
            image: "../../public/astronaut.jpg",
            bgColor: "#0084FF"
        },
        {
            icon: "https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6125fbcbb83_thumbnial-byteleaders.svg", 
            title: "Todo Breeze", 
            keyword: "React, ContextApi, Local Storage, Tailwind", 
            image: "../../public/astronaut.jpg",
            bgColor: "#f1c40f" 
        },
        {
            icon: "https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6168bbcbb82_thumbnial-kortinq.svg", 
            title: "Todo Breeze", 
            keyword: "React, ContextApi, Local Storage, Tailwind", 
            image: "../../public/astronaut.jpg",
            bgColor: "#501028" 
        },
    ]
    return (
        <>
        <div className='w-full flex justify-center px-3'>
            <div className='max-w-4xl'>
            {
                cardItems.map((item) => {
                    return (
                        <Cardlg 
                            icon={item.icon} 
                            title={item.title} 
                            keyword={item.keyword} 
                            image={item.image} 
                            bgColor={item.bgColor}
                            key={item.title}
                        />
                    )
                })
            }
            </div>
        </div>
        </>
    )
}

export default ProjectListing

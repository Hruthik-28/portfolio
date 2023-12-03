import {Cardlg} from './index'

function ProjectListing() {
    const cardItems = [
        {
            icon: "https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a66d02bcbb81_thumbnial-shoppop.svg",
            title: "Just Blog It", 
            keyword: "React, Redux, Appwrite, Authentication, File Management ", 
            image: "https://images.pexels.com/photos/19359843/pexels-photo-19359843/free-photo-of-blog.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            bgColor: "#0084FF",
            link: "https://justblogit.netlify.app/"
        },
        {
            icon: "https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6125fbcbb83_thumbnial-byteleaders.svg", 
            title: "Todo Breeze", 
            keyword: "React, ContextApi, Local Storage, Tailwind", 
            image: "https://images.pexels.com/photos/19359924/pexels-photo-19359924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            bgColor: "#f1c40f" ,
            link:"https://todobreeze.netlify.app/"
        },
        {
            icon: "https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6168bbcbb82_thumbnial-kortinq.svg", 
            title: "Youtube + Twitter", 
            keyword: "Coming Soon", 
            image: "/youtube.png",
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
                            link={item.link? item.link: null}
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

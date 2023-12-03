import StackCard from "./StackCard"

function StacksListing() {

    const stackItemsFrontend = [
        {
            icon: "/stacks/js.png", 
            title: "Javascript", 
            keyword: "development"
        },
        {
            icon: "stacks/reactjs.png", 
            title: "ReactJS", 
            keyword: "Framework"
        },
        {
            icon: "stacks/redux.png", 
            title: "Redux", 
            keyword: "Library"
        },
        {
            icon: "stacks/react-router.png", 
            title: "ReactRouter", 
            keyword: "Routing"
        },
        {
            icon: "stacks/tailwind.png", 
            title: "Tailwind", 
            keyword: "CSSFramework"
        },
        {
            icon: "stacks/html5.png", 
            title: "Html", 
            keyword: ""
        },
        {
            icon: "stacks/css.png", 
            title: "CSS", 
            keyword: ""
        },
        
    ]
    const stackItemsBackend = [
        {
            icon: "/stacks/nodejs.png", 
            title: "NodeJS", 
            keyword: "development"
        },
        {
            icon: "/stacks/js.png", 
            title: "Express", 
            keyword: "NodejsFramework"
        },
        {
            icon: "/stacks/postman.png", 
            title: "Postman", 
            keyword: ""
        },
        {
            icon: "/stacks/cloudinary.png", 
            title: "Cloudinary", 
            keyword: ""
        },
        
    ]
    const stackItemsDatabase = [
        {
            icon: "/stacks/mongodb.png", 
            title: "MongoDB", 
            keyword: ""
        },
        {
            icon: "/stacks/mysql.png", 
            title: "MySql", 
            keyword: ""
        },

        
    ]
    const tools = [
        {
            icon: "/stacks/git.png", 
            title: "Git", 
            keyword: "VersionControl"
        },
        {
            icon: "/stacks/vs.png", 
            title: "VsCode", 
            keyword: "Editor"
        },

        
    ]


    return (
        <>
        {/* frontend stacks */}
        <div className="max-w-full">
            <h1 className="sm:text-5xl text-4xl font-SpaceGrotesk font-bold sm:py-4 text-white px-5 xl:px-52 lg:px-40 md:px-32">Tech Stacks</h1>
            <h2 className="sm:text-3xl text-2xl font-HedvigLettersSans font-bold text-white px-5 xl:px-52 lg:px-40 md:px-32 opacity-60">Frontend</h2>
            <div className='max-w-full my-5 flex justify-center items-center mx-3'>
                <div className="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {stackItemsFrontend.map((item) => (
                    <StackCard title={item.title} icon={item.icon} keyword={item.keyword} key={item.title}/>
                ))}
                </div>
            </div>
        </div>
        {/* Backend stacks */}
        <div className="max-w-full">
            <h2 className="sm:text-3xl text-2xl font-HedvigLettersSans font-bold text-white px-5 xl:px-52 lg:px-40 md:px-32 opacity-60">Backend</h2>
            <div className='max-w-full my-5 flex justify-center items-center mx-3'>
                <div className="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {stackItemsBackend.map((item) => (
                    <StackCard title={item.title} icon={item.icon} keyword={item.keyword} key={item.title}/>
                ))}
                </div>
            </div>
        </div>
        {/* DB stacks */}
        <div className="max-w-full">
            <h2 className="sm:text-3xl text-2xl font-HedvigLettersSans font-bold text-white px-5 xl:px-52 lg:px-40 md:px-32 opacity-60">Database</h2>
            <div className='max-w-full my-5 flex justify-center items-center mx-3'>
                <div className="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {stackItemsDatabase.map((item) => (
                    <StackCard title={item.title} icon={item.icon} keyword={item.keyword} key={item.title}/>
                ))}
                </div>
            </div>
        </div>
        {/* Tools */}
        <div className="max-w-full">
            <h2 className="sm:text-3xl text-2xl font-HedvigLettersSans font-bold text-white px-5 xl:px-52 lg:px-40 md:px-32 opacity-60">Tools</h2>
            <div className='max-w-full my-5 flex justify-center items-center mx-3'>
                <div className="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {tools.map((item) => (
                    <StackCard title={item.title} icon={item.icon} keyword={item.keyword} key={item.title}/>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default StacksListing



function StackCard({icon, title, keyword}) {
    return (
        <>
            <div className='max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5'>
                <img src={icon} className='w-16' />
                <div className="flex flex-col w-full ">
                    <h1 className='text-white text-md font-HedvigLettersSans font-normal'>{title}</h1>
                    <p className="text-white font-mono opacity-50 font-extralight">{keyword}</p>
                </div>
            </div>
        </>
    )
}

export default StackCard

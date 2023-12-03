

function InfiniteCards() {

    return (
        <>

            <div className='scroller max-w-full sm:mt-24 mt-10 overflow-hidden relative cursor-pointer will-change-auto'>
                <div className='scroller-inner w-7xl flex gap-5 animate-scroll'>
                    <img src="https://images.pexels.com/photos/19359843/pexels-photo-19359843/free-photo-of-blog.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    className='sm:w-[350px] w-[250px] rounded-t-lg relative hover:bottom-1 ' 
                    />
                    <img src="https://images.pexels.com/photos/19359924/pexels-photo-19359924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    className='sm:w-[350px] w-[250px] rounded-t-lg relative hover:bottom-1' 
                    />
                    <img src="/miranda.png" className='sm:w-[350px] w-[250px] rounded-t-lg relative hover:bottom-1' />
                    <img src="/cc.png" className='sm:w-[350px] w-[250px] rounded-t-lg relative hover:bottom-1 ' />

                    <img src="https://images.pexels.com/photos/19359843/pexels-photo-19359843/free-photo-of-blog.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    className='sm:w-[350px] w-[250px] rounded-t-lg relative hover:bottom-1 ' 
                    />
                    <img src="https://images.pexels.com/photos/19359924/pexels-photo-19359924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    className='sm:w-[350px] w-[250px] rounded-t-lg relative hover:bottom-1' 
                    />
                    <img src="/miranda.png" className='sm:w-[350px] w-[250px] rounded-t-lg relative hover:bottom-1' />
                    <img src="/cc.png" className='sm:w-[350px] w-[250px] rounded-t-lg relative hover:bottom-1 ' />
                </div>
                {/* fade */}
                <div className='sm:w-20 w-7 h-full absolute top-0 left-0 bg-gradient-to-r from-black to-transparent'></div>
                <div className='sm:w-20 w-7 h-full absolute top-0 right-0 bg-gradient-to-l from-black to-transparent'></div>
                <div className='w-full h-8 absolute bottom-0 left-0 gradient-div'></div>
            </div>
        </>
    )
}

export default InfiniteCards

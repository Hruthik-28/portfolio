import { LuCode2 } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { BiLogoLinkedin, BiLogoInstagramAlt, BiLogoTwitter } from "react-icons/bi";
import { useEffect, useState } from "react";

function Header() {
    const [color, setColor] = useState("#000000")

    const navItems = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Work',
            url: '/work'
        },
        {
            title: 'About',
            url: '/about'
        },
        {
            title: 'Contact',
            url: '/contact'
        },
    ]
    const socialIcons = [
        {
            title: "linkedin",
            logo: <BiLogoLinkedin />,
            url: "https://www.linkedin.com/in/hruthik-ks-a90112253/"
        },
        {
            title: "insta",
            logo: <BiLogoInstagramAlt />,
            url: "https://www.instagram.com/hruthik__28/"
        },
        {
            title: "twitter",
            logo: <BiLogoTwitter />,
            url: "https://twitter.com/hruthik_28"
        }
    ]

    function generateRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
      
    useEffect(() => {
    const interval = setInterval(() => {
        setColor(generateRandomColor()); // Update color every 1 second
        }, 1000);
    
        return () => clearInterval(interval);
    }, [color]) 

    return (
        <div className='max-w-full scroll-smooth bg-transparent backdrop-blur-sm flex sm:flex-row flex-col font-SpaceGrotesk justify-between items-center sm:py-7 sm:px-8 text-white sticky top-0 z-10'> 
            {/* Logo + name */}
            <div className='flex items-center justify-center sm:justify-start py-2 sm:w-1/4 w-full text-center sm:text-start'>
                <LuCode2 className={`text-3xl sm:mr-4 mr-2`} style={{ color: generateRandomColor() }}/>
                <div className='flex flex-col sm:hidden md:block'>
                    <h1 className='font-bold text-md'>Hruthik ks</h1>
                    <p className='text-xs text-gray-300 font-light hidden md:block'>Fullstack Web Developer</p>
                </div>
            </div>

            {/* Nav items */}
            <nav className="relative border-none rounded-full sm:gap-3 gap-0 flex justify-between items-center bg-[#222222] p-0.5">
                {navItems.map((item, index) => (
                    <NavLink
                        to={item.url}
                        key={item.title}
                        className={({ isActive }) => {
                            const activeClass = isActive ? "bg-black" : "bg-[#222222]";
                            const previousActive = index < navItems.findIndex((i) => i.isActive);
                            return `${activeClass} rounded-full transition-all duration-500 ease-in-out ${
                            previousActive ? "animate-expand-active" : ""
                            }`;
                        }}
                    >
                    <button
                        className={`relative sm:text-lg text-md font-semibold rounded-full sm:px-4 px-3 py-2`}
                    >
                        {item.title}
                    </button>
                    </NavLink>
                ))}
            </nav>
            
            {/* social icons */}
            <div className='w-1/4 flex flex-row items-center justify-center md:justify-end gap-5 invisible md:visible'>
                <div className="flex items-center space-x-2 ">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>     

                    <p className="text-green-500 text-sm">Available</p>
                </div>

                {
                    socialIcons.map((icon) => (
                        <NavLink to={icon.url} key={icon.title} className='bg-[#222222] rounded-full hover:scale-75 transition-all duration-200 p-2 hidden lg:block'>
                            <span 
                            className="text-2xl hover:text-pink-500 " 
                            >
                            {icon.logo}
                            </span>
                        </NavLink>
                        
                    ))
                }
            </div>
            
        </div>
    )
}

export default Header

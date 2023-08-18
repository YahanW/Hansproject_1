import React, { useState } from 'react'
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../asset/yw.png'
import { Link } from 'react-scroll'
import SnowFlake from '../asset/snowflake-png.webp'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../redux/sickoMode'


const Navbar = () => {

    const { value } = useSelector((state) => state.sicko)
    // const state = useSelector((state)=>state.sicko.state)
    const dispatch = useDispatch()
    const [nav, setNav] = useState(false) // for the hamburger to show/hide

    const handleClick = () => setNav(!nav)

    const handleSickoChange = () => {

        dispatch(change())
        // console.log(value)
    }

    const social = [
        {
            url: "/",
            text: "Facebook",
            icon: <FaFacebook size={30} />,
            bg: "bg-blue-600"
        }, {
            url: "https://www.linkedin.com/in/yahan-hans-wang/",
            text: "LinkedIn",
            icon: <FaLinkedin size={30} />,
            bg: "bg-[#344d8c]"
        }, {
            url: "https://github.com/YahanW",
            text: "Github",
            icon: <FaGithub size={30} />,
            bg: "bg-[#333333]"
        }, {
            url: "https://universitytasmania-my.sharepoint.com/:b:/g/personal/yahanw_utas_edu_au/EQjNMJYrEipHqjYs5Qbi5ioB79ZbHGLC0kbaWhm8q6LBXw?e=xcD8Eb",
            text: "Resume",
            icon: <BsFillPersonLinesFill size={30} />,
            bg: "bg-[#565f69]"
        }
    ]


    return (
        <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 ${value ? 'bg-[#82bfee] text-black-50' : 'bg-[#16162c] text-gray-50' }`}
>
            <div>
                <img src={Logo} alt="Logo Img" style={{ width: '120px' }} />
            </div>
            <div className='flex justify-center '>
                <input
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none 
                    rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 
                    before:rounded-full before:bg-transparent before:content-[''] 
                    after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none 
                    after:bg-gray-500 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
                    after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
                    checked:bg-blue-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={handleSickoChange} />
                <a>Let it snow</a>

            </div>


            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>

                {/* <li>
                    <Link to="galant" smooth={true} duration={500}>
                        Acupuncture
                    </Link>
                </li> */}
            </ul>

            {/* Hamburger */}

            <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer scale-150' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : `absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center ${value ? 'bg-[#82bfee]':'bg-[#16162c]'}`} >
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li> */}
                    {
                        social.map((item) => <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${item.bg}`}>
                            <a className={`flex justify-between items-center w-full text-gray-300 `}
                                href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.text} {item.icon}
                        </a>
                        </li>)
                    }


                </ul>
            </div>



        </div>
    )
}

export default Navbar

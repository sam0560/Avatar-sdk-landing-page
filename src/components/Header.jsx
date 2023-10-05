import MainLogo from "../assets/images/main-logo.png"
import DiscordLogo from "../assets/images/discord-logo.png"
import BurgerMenu from "../assets/images/burgerMenu.svg"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "@mui/material"
import { Close, MenuOutlined } from "@mui/icons-material"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <div className="
            container
            mt-6
            flex 
            flex-row
            justify-between
            items-center
            px-10
            max-md:px-4
            overflow-hidden
            mx-auto
            ">
                <img src={MainLogo} alt="Main page logo" className="max-w-[8rem] lg:max-w-[12rem] w-full z-[1000]"/>
                <div>
                    <ul className={
                        `flex
                        gap-8
                        flex-col
                        lg:flex-row
                        items-center
                        justify-center
                        py-20
                        transition-all
                        duration-1000
                        lg:py-0
                        absolute
                        lg:static
                        max-lg:bg-gradient-to-br
                        from-[#F5841B]
                        to-[#FF4B38]
                        ${isOpen? 'left-0': '-left-[100%]'}
                        top-0
                        w-full
                        z-[999]`
                    }>
                        <li className="capitalize max-md:font-[cursive] max-md:text-2xl">
                            <a href="#">
                                products
                            </a>
                        </li>
                        <li className="capitalize max-md:font-[cursive] max-md:text-2xl">
                            <a href="#">
                                pricing
                            </a>
                        </li>
                        <li className="capitalize max-md:font-[cursive] max-md:text-2xl">
                            <a href="#">
                                FAQ
                            </a>
                        </li>
                        <li className="capitalize max-md:font-[cursive] max-md:text-2xl">
                            <a href="#">
                                Company
                            </a>
                        </li>
                        <li className="capitalize max-md:font-[cursive] max-md:text-2xl">
                            <a href="#" className="inline-flex gap-1 items-center">
                                <img src={DiscordLogo} alt="discord logo" />
                                <span>discord</span>
                            </a>
                        </li>

                        {/* small screen */}
                        <li className="capitalize hidden max-lg:block max-md:font-[cursive] max-md:text-2xl">
                            <a href="#">sign in</a>
                        </li>
                        <li className="hidden max-lg:block">
                            <button className="capitalize py-2 w-36 rounded-full bg-[#101E74] hover:bg-[#494d68] max-md:font-[cursive] max-md:text-2xl">sign up</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="
                    inline-flex 
                    items-center
                    gap-4
                    ">
                    <li className="capitalize max-lg:hidden">
                        <a href="#">sign in</a>
                    </li>
                    <li>
                        <button className="capitalize py-2 px-4 max-w-[6rem] w-full rounded-full max-lg:hidden bg-[#ffffff33]">sign up</button>
                    </li>
                    <li>
                        <button className="capitalize border border-[#ffffff33] py-2 px-4 max-w-[6rem] w-full rounded-full">en <span id="text"> 漢語</span></button>
                    </li>
                </ul>
                </div>


                {/* mobile */}

                <motion.div className="block lg:hidden z-[1000]" onClick={()=> setIsOpen(!isOpen)} whileTap={{rotate: 180}}>
                    {
                        !isOpen ? <MenuOutlined sx={{fontSize: 40}}/> : <Close sx={{fontSize: 40}}/>                  
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Header;
import MainLogo from "../assets/images/main-logo.png"
import DiscordLogo from "../assets/images/discord-logo.png"
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
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
            ">
                <img src={MainLogo} alt="Main page logo" className="max-w-full"/>
                <div className="">
                    <ul className="
                        flex
                        gap-8
                        max-lg:flex-col
                        items-center
                        justify-center
                        max-lg:text-xl
                        max-lg:fixed
                        max-lg:top-0
                        max-lg:left-[20%]
                        max-lg:right-0
                        max-lg:bottom-0
                        max-lg:bg-gradient-to-br
                        from-[#F5841B]
                        to-[#FF4B38]
                        z-[999]
                    ">
                        <li className="capitalize">
                            <a href="#">
                                {/* products <span><KeyboardArrowDownIcon/></span> */}
                                products
                            </a>
                        </li>
                        <li className="capitalize">
                            <a href="#">
                                pricing
                            </a>
                        </li>
                        <li className="capitalize">
                            <a href="#">
                                FAQ
                            </a>
                        </li>
                        <li className="capitalize">
                            <a href="#">
                                Company
                            </a>
                        </li>
                        <li className="capitalize">
                            <a href="#" className="inline-flex gap-1">
                                <img src={DiscordLogo} alt="discord logo" />
                                <span>discord</span>
                            </a>
                        </li>

                        {/* small screen */}
                        <li className="capitalize hidden max-lg:block">
                            <a href="#">sign in</a>
                        </li>
                        <li className="hidden max-lg:block">
                            <button className="capitalize py-2 w-36 rounded-full bg-[#494d68] hover:bg-[#101E74]">sign up</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="
                    inline-flex 
                    items-center
                    gap-4
                    ">
                        <li className="capitalize">
                            <a href="#">sign in</a>
                        </li>
                        <li>
                            <button className="capitalize py-2 w-20 rounded-full" id="background">sign up</button>
                        </li>
                        <li>
                            <button className="capitalize border border-[ffffff33] py-2 w-20 rounded-full">en</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
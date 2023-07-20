import MainLogo from "../assets/images/main-logo.png"
import DiscordLogo from "../assets/images/discord-logo.png"
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    return(
        <div className="mt-6 px-8 w-full flex flex-row justify-center flex-wrap items-center gap-x-40">
            <img src={MainLogo} alt="Main page logo"/>
            <div>
                <ul className="inline-flex gap-8">
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
                        <a href="#" className="inline-flex gap-4">
                            <img src={DiscordLogo} alt="discord logo" />
                            <span>discord</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="inline-flex gap-4 items-center">
                    <li className="capitalize">
                        <a href="#">sign in</a>
                    </li>
                    <li>
                        <button className="capitalize py-2 w-24 rounded-full" id="background">sign up</button>
                    </li>
                    <li>
                        <button className="capitalize border border-[ffffff33] py-2 w-20 rounded-full">en</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
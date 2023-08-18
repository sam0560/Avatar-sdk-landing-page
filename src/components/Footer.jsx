import Facebook from '../assets/images/Social-logo/facebook.svg'
import Twitter from '../assets/images/Social-logo/twitter.svg'
import Youtube from '../assets/images/Social-logo/youtube.svg'
import Sketckfab from '../assets/images/Social-logo/sketchfab.png'

const Footer = () => {
    return(
        <div className='max-w-[55rem] w-full my-16 mx-auto flex max-sm:flex-col gap-y-8 justify-center items-center px-8 lg:px-0'>
            <ul className='flex-1 inline-flex gap-8 items-center'>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li id='text'>2023 &copy; itSeez3D</li>
            </ul>

            <ul className='inline-flex gap-8 items-center'>
                <li>
                    <a href="#">
                        <img src={Facebook} alt="facebook logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Twitter} alt="twitter logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Youtube} alt="youtube logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Sketckfab} alt="sketchfab logo" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;
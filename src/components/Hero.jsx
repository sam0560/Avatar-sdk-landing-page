import HeroImage from '../assets/images/hero-image.png'
import DevSign from '../assets/images/dev-sign-up.svg'
// Import sponsors logo
import AttLogo from '../assets/images/sponsorsLogo/att-logo.png'
import VmwareLogo from '../assets/images/sponsorsLogo/vmware-logo.png'
import NttLogo from '../assets/images/sponsorsLogo/NTT_company_logo.png'
import SplunkLogo from '../assets/images/sponsorsLogo/Splunk-logo.png'
import MicrosoftLogo from '../assets/images/sponsorsLogo/Microsoft_logo.png'

const Hero = () => {
    return(
        <div className='flex flex-col justify-center items-center mx-auto max-w-[66rem] max-md:px-8'>
            <div>
                <h1 className="max-w-[32rem] w-full text-center mx-auto mt-8">
                    Recognizable MetaPerson avatars built from selfies
                </h1>
                <p className='my-8 max-w-[36rem] w-full max-sm:text-center' id='text'>Elevate your product to new heights by seamlessly integrating lifelike avatars. With MetaPerson, you can offer your users an immersive and personalized experience like never before
                </p>
            </div>
            <img src={HeroImage} alt="hero image"/>

            <div className='md:inline-flex items-center gap-8 mt-8 sm:block'>
                <button className='
                rounded-xl
                bg-gradient-to-br 
                from-[#F5841B] 
                to-[#FF4B38] 
                py-3
                px-5
                max-sm:w-full
                '>Create an avatar</button>
                
                <a href="#" className='inline-flex gap-2 max-sm:w-full max-sm:bg-[#ffffff33] max-sm:rounded-xl max-sm:py-3 max-sm:mt-4 max-sm:justify-center'>
                    <img src={DevSign} alt="sign up by developer" />
                    <span>Developer sign-up</span>
                </a>
            </div>

            <div>
                <ul className='inline-flex gap-8 items-center my-12'>
                    <li>
                        <img src={AttLogo} alt="Att company logo" />
                    </li>
                    <li>
                        <img src={VmwareLogo} alt="Vm ware company logo" />
                    </li>
                    <li>
                        <img src={NttLogo} alt="Ntt company logo" />
                    </li>
                    <li>
                        <img src={SplunkLogo} alt="Splunk company logo" />
                    </li>
                    <li>
                        <img src={MicrosoftLogo} alt="Microsoft company logo" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Hero;
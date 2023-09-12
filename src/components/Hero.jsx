import HeroImage from '../assets/images/hero-image.webp'
import DevSign from '../assets/images/dev-sign-up.svg'
// Import sponsors logo
import AttLogo from '../assets/images/sponsorsLogo/att-logo.png'
import VmwareLogo from '../assets/images/sponsorsLogo/vmware-logo.png'
import NttLogo from '../assets/images/sponsorsLogo/NTT_company_logo.png'
import SplunkLogo from '../assets/images/sponsorsLogo/Splunk-logo.png'
import MicrosoftLogo from '../assets/images/sponsorsLogo/Microsoft_logo.png'

import { motion } from 'framer-motion'

const Hero = () => {
    const divVariant = {
        hidden: {
            opacity: 0, 
            x: -100
        },
        show: {
            opacity:1, 
            x:0,
            transition: {
                duration: 0.5
            }
        }
    }

    const paragraphChildren = {
        hidden: {
            opacity: 0,
            x: -100
        },
        show: {
            opacity: 1,
            x:0,
            transition:{duration: 0.5, delay: 0.5}
        }
    }
    return(
        <div className='
        flex 
        flex-col 
        justify-center 
        items-center 
        mx-auto 
        max-w-[66rem] 
        max-md:px-8'>
            <div>
                <motion.h1 className="
                max-w-[32rem] 
                w-full 
                text-center 
                mx-auto 
                mt-8 
                font-semibold 
                tracking-wider 
                text-2xl 
                md:text-4xl
                "

                variants={divVariant}
                initial="hidden"
                whileInView="show"
                >
                    Recognizable MetaPerson avatars built from selfies
                </motion.h1>
                <motion.p className='
                my-8 
                max-w-[36rem] 
                w-full 
                max-sm:text-center' 
                id='text'

                variants={paragraphChildren}
                initial="hidden"
                whileInView="show"
                >
                    Elevate your product to new heights by seamlessly integrating lifelike avatars. With MetaPerson, you can offer your users an immersive and personalized experience like never before
                </motion.p>
            </div>
            <img src={HeroImage} alt="hero image" width={2248} height={1410}/>

            <div className='md:inline-flex items-center gap-8 mt-8 sm:block'>
                <motion.button className='
                rounded-xl
                bg-gradient-to-br 
                from-[#F5841B] 
                to-[#FF4B38] 
                py-3
                px-5
                max-sm:w-full
                '
                whileTap={{
                    scale: 0.9
                }}
                whileHover={{
                    y: -3,
                    transition: {duration: 0.3}
                }}
                >Create an avatar</motion.button>
                
                <motion.a href="#" className='
                inline-flex 
                gap-2 
                max-sm:w-full 
                max-sm:bg-[#ffffff33] 
                max-sm:rounded-xl 
                max-sm:py-3 
                max-sm:mt-4 
                max-sm:justify-center'
                whileTap={{
                    scale: 0.9
                }}
                whileHover={{
                    y: -3,
                    transition: {duration: 0.3}
                }}
                >
                    <img src={DevSign} alt="sign up by developer" />
                    <span>Developer sign-up</span>
                </motion.a>
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
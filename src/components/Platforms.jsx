import Web from '../assets/images/platforms/web.png'
import Ios from '../assets/images/platforms/ios.png'
import Unity from '../assets/images/platforms/unity.png'
import Unreal from '../assets/images/platforms/unreal.png'
import ReadDocs from '../assets/images/platforms/read-docs.svg'
import { motion } from 'framer-motion'

const Platforms = () => {

    // Variant for Listed patform
    const variantContainer = {
        hidden : {
            opacity: 0
        },
        show : {
            opacity: 1,
            transition:{
                staggerChildren: 0.5,
                duration: 2
            }
        }
    }

    const list = {
        hidden : {
            y: 50,
            opacity: 0
        },
        show : {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    // Variant for text value
    const divVariant = {
        hidden: {
            opacity: 0, 
            y: 50
        },
        show: {
            opacity:1, 
            y:0,
            transition: {
                duration: 0.5
            },
        }
    }

    const paragraphChildren = {
        hidden: {
            opacity: 0,
            y: 50
        },
        show: {
            opacity: 1,
            y:0,
            transition:{duration: 0.5, delay: 0.5},
        }
    }

    return(
            <div className='
            md:flex 
            md:flex-row
            flex-wrap 
            items-center
            gap-20
            sm:flex-col 
            sm:justify-center 
            sm:items-center 
            max-w-[66rem] 
            w-full
            mx-auto 
            mb-12
            px-8
            '>
            <div className='flex-1'>
                <motion.ul className='
                grid 
                md:grid-cols-2 
                md:grid-rows-2 
                gap-8' 
                variants={variantContainer}
                initial="hidden"
                whileInView="show"
                >
                    <motion.li className=' 
                    platform-list 
                    max-sm:gap-8'
                    variants={list}
                    >
                        <img src={Web} alt="Closing tag for logo" className='md:mb-8 max:sm:flex-1'/>
                        <p className='max:sm:flex-1 text-xl'>Web</p>
                    </motion.li> 
                    <motion.li className='
                    platform-list 
                    max-sm:gap-16'
                    variants={list}
                    >
                        <img src={Ios} alt="apple logo" className='md:mb-8 max:sm:flex-1'/>
                        <p className='max:sm:flex-1 text-xl'>IOS</p>
                    </motion.li> 
                    <motion.li className='
                    platform-list 
                    max-sm:gap-14'
                    variants={list}
                    >
                        <img src={Unity} alt="unity logo" className='md:mb-8'/>
                        <p className='text-xl'>Unity</p>
                    </motion.li> 
                    <motion.li className='
                    platform-list 
                    max-sm:gap-14'
                    variants={list}
                    >
                        <img src={Unreal} alt="unreal logo" className='md:mb-8'/>
                        <p className='text-xl'>Unreal Engine</p>
                    </motion.li> 
                </motion.ul>
            </div>

            <div className='max-md:text-center flex-1'>
                <motion.h2 className='
                md:max-w-[20rem] 
                max-sm:mt-8 
                font-semibold 
                tracking-wider 
                text-2xl 
                md:text-3xl'

                variants={divVariant}
                initial="hidden"
                whileInView="show"
                >Easy integration to your apps</motion.h2>
                <motion.p className='mt-2 
                mb-12 
                max-w-[23rem] 
                w-full
                leading-tight 
                max-md:mx-auto
                ' 

                variants={paragraphChildren}
                initial="hidden"
                whileInView="show"
                id='text'>
                    We provide ready sample projects for popular target platforms
                </motion.p>

                <div className='md:inline-flex items-center gap-8 max-sm:block'>
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
                    >Sign up as Developer</motion.button>
                    
                    <motion.a href="#" className='
                    inline-flex 
                    gap-2 
                    max-sm:w-full 
                    max-sm:bg-[#ffffff33] 
                    max-sm:rounded-xl 
                    max-sm:py-3 
                    max-sm:justify-center 
                    max-sm:mt-4'
                    whileTap={{
                        scale: 0.9
                    }}
                    whileHover={{
                        y: -3,
                        transition: {duration: 0.3}
                    }}
                    whileFocus={{
                        scale: 3
                    }}
                    >
                        <img src={ReadDocs} alt="read documentation" />
                        <span>Read the Docs</span>
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Platforms;
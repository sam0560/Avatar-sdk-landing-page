import LadyImage from '../assets/images/Offers/lady.png'
import LadyImage2 from '../assets/images/Offers/lady2.png'
import GuyImage from '../assets/images/Offers/guy.png'

// Framer motion
import { motion } from 'framer-motion'

const Offers = () => {
    const para = {
        hidden: {
            opacity: 0, 
            y: 50
        },
        show: {
            opacity:1, 
            y:0,
            transition: {
                duration: 1
            },
        }
    }
    const imageLeft = {
        hidden: {
            opacity: 0, 
            x: -100
        },
        show: {
            opacity:1, 
            x:0,
            transition: {
                duration: 1
            },
        }
    }
    const easeVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity:1, 
            transition: {
                duration: 1,
            },
        }
    }
    return(
        <div className='max-w-[66rem] w-full my-12 relative mx-auto'>
            <div className="flex max-sm:flex-col max-sm:px-8 md:px-8 gap-y-4 max-sm:text-center items-center justify-between">
                <motion.div className='flex-1'
                    variants={para}
                    initial="hidden"
                    whileInView="show"
                >
                    <h2 className='font-semibold tracking-wider text-2xl md:text-3xl'>Personalization</h2>
                    <p id="text" className='max-w-[25rem] w-full mt-4'>Users can customize avatars and be different from who they are in the real world</p>
                </motion.div>
                <motion.img 
                    src={LadyImage} 
                    alt="image of an anvatar lady" 
                    className='flex-1 
                    max-w-[25rem] 
                    w-full 
                    z-10'

                    variants={easeVariant}
                    initial="hidden"
                    whileInView="show"
                />
            </div>

            
            <div className="my-12 flex max-sm:flex-col-reverse max-sm:px-8 md:px-8 gap-y-4 max-sm:text-center items-center justify-between md:absolute top-[22rem] w-full gap-x-16">
                <motion.img 
                    src={GuyImage} 
                    alt="image of an anvatar guy" 
                    className='flex-1'
                    
                    variants={imageLeft}
                    initial="hidden"
                    whileInView="show"
                />
                <motion.div className='flex-1'
                    variants={para}
                    initial="hidden"
                    whileInView="show"
                >
                    <h2 className='font-semibold tracking-wider text-2xl md:text-3xl'>Immersion</h2>
                    <p id="text" className='max-w-[23rem] w-full mt-4'>
                    Realistic avatars create emotional connection to your 3D experience and drive user engagement
                    </p>
                </motion.div>
            </div>

            <div className="flex max-sm:flex-col max-sm:px-8 md:px-8 gap-y-4 max-sm:text-center items-center justify-between md:absolute top-[45rem] w-full">
                <motion.div className='flex-1'
                    variants={para}
                    initial="hidden"
                    whileInView="show"
                >
                    <h2 className='font-semibold tracking-wider text-2xl md:text-3xl'>Marketing</h2>
                    <p id="text" className='max-w-[25rem] w-full mt-4'>
                        You can offer custom assets and promote your own products or those of your partners
                    </p>
                </motion.div>
                <motion.img 
                    src={LadyImage2} 
                    alt="image of an anvatar lady" 
                    className='
                    flex-1 
                    max-w-[25rem] 
                    w-full'

                    variants={easeVariant}
                    initial="hidden"
                    whileInView="show"
                />
            </div>
        </div>
    )
}

export default Offers;
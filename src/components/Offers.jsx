import LadyImage from '../assets/images/Offers/lady.png'
import LadyImage2 from '../assets/images/Offers/lady2.png'
import GuyImage from '../assets/images/Offers/guy.png'

const Offers = () => {
    return(
        <div className='max-w-[66rem] w-full my-12 relative mx-auto'>
            <div className="flex max-sm:flex-col max-sm:px-8 md:px-8 gap-y-4 max-sm:text-center items-center justify-between">
                <div className='flex-1'>
                    <h2>Personalization</h2>
                    <p id="text" className='max-w-[25rem] w-full mt-4'>Users can customize avatars and be different from who they are in the real world</p>
                </div>
                <img src={LadyImage} alt="image of an anvatar lady" className='flex-1 max-w-[25rem] w-full z-10'/>
            </div>

            
            <div className="my-12 flex max-sm:flex-col-reverse max-sm:px-8 md:px-8 gap-y-4 max-sm:text-center items-center justify-between md:absolute top-[22rem] w-full gap-x-16">
                <img src={GuyImage} alt="image of an anvatar guy" className='flex-1'/>
                <div className='flex-1'>
                    <h2>Immersion</h2>
                    <p id="text" className='max-w-[23rem] w-full mt-4'>
                    Realistic avatars create emotional connection to your 3D experience and drive user engagement
                    </p>
                </div>
            </div>

            <div className="flex max-sm:flex-col max-sm:px-8 md:px-8 gap-y-4 max-sm:text-center items-center justify-between md:absolute top-[45rem] w-full">
                <div className='flex-1'>
                    <h2>Marketing</h2>
                    <p id="text" className='max-w-[25rem] w-full mt-4'>
                        You can offer custom assets and promote your own products or those of your partners
                    </p>
                </div>
                <img src={LadyImage2} alt="image of an anvatar lady" className='flex-1 max-w-[25rem] w-full'/>
            </div>
        </div>
    )
}

export default Offers;
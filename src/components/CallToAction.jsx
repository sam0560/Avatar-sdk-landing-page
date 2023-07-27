import GuyLadyImage from '../assets/images/Offers/guy_lady.png'
import DevSign from '../assets/images/dev-sign-up.svg'

const CallToAction = () => {
    return(
            <div className='max-w-[66rem] w-full mx-auto bg-gradient-to-br from-[#F5841B] to-[#FF4B38] md:rounded-xl sm:rounded-none md:mt-[45rem] max-md:pt-8'>
                <div className="flex max-sm:flex-col max-sm:px-8 md:px-8 gap-y-4 max-sm:text-center items-center justify-between">
                    <div className='flex-1'>
                        <h2 className='font-semibold tracking-wider'>
                            Integrate MetaPerson avatars
                        </h2>
                        <p id="text" className='max-w-[25rem] w-full mt-4'>
                            Discover the power of personalized avatars as we bring your 
                            unique features to life with stunning accuracy. Get 
                            started today and witness the future of avatar customization
                        </p>

                        <div className='md:inline-flex items-center gap-8 mt-8 sm:block'>
                            <button className='
                            rounded-xl
                            py-3
                            px-5
                            max-sm:w-full
                            '
                            id='background'
                            >Create an avatar</button>
                            
                            <a href="#" className='inline-flex gap-2 max-sm:w-full max-sm:rounded-xl max-sm:py-3 max-sm:mt-4 max-sm:justify-center'>
                                <img src={DevSign} alt="sign up by developer" />
                                <span>Developer sign-up</span>
                            </a>
                        </div>
                    </div>
                    <img src={GuyLadyImage} alt="image of an avatar lady and guy" className='flex-1 max-w-[25rem] w-full z-10'/>
                </div>
            </div>
    )
}

export default CallToAction;
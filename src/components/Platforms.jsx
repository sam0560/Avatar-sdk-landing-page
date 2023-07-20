import Web from '../assets/images/platforms/web.png'
import Ios from '../assets/images/platforms/ios.png'
import Unity from '../assets/images/platforms/unity.png'
import Unreal from '../assets/images/platforms/unreal.png'
import ReadDocs from '../assets/images/platforms/read-docs.svg'

const Platforms = () => {
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
                <ul className='grid md:grid-cols-2 md:grid-rows-2 gap-8'>
                    <li className=' bg-[#ffffff33] pl-4 pr-20 py-6 rounded-2xl max-sm:flex max-sm:flex-row max-sm:items-center max-sm:gap-8'>
                        <img src={Web} alt="Closing tag for logo" className='md:mb-8 max:sm:flex-1'/>
                        <p className='max:sm:flex-1'>Web</p>
                    </li> 
                    <li className='bg-[#ffffff33] pl-4 pr-20 py-6 rounded-2xl max-sm:flex max-sm:flex-row max-sm:items-center max-sm:gap-16'>
                        <img src={Ios} alt="apple logo" className='md:mb-8 max:sm:flex-1'/>
                        <p className='max:sm:flex-1'>IOS</p>
                    </li> 
                    <li className='bg-[#ffffff33] pl-4 pr-20 py-6 rounded-2xl max-sm:flex max-sm:flex-row max-sm:items-center max-sm:gap-14'>
                        <img src={Unity} alt="unity logo" className='md:mb-8'/>
                        <p>Unity</p>
                    </li> 
                    <li className='bg-[#ffffff33] pl-4 pr-20 py-6 rounded-2xl max-sm:flex max-sm:flex-row max-sm:items-center max-sm:gap-14'>
                        <img src={Unreal} alt="unreal logo" className='md:mb-8'/>
                        <p>Unreal Engine</p>
                    </li> 
                </ul>
            </div>

            <div className='max-md:text-center flex-1'>
                <h2 className='md:max-w-[20rem] max-sm:mt-8'>Easy integration to your apps</h2>
                <p className='mt-2 
                mb-12 
                max-w-[23rem] 
                w-full
                leading-tight 
                max-md:mx-auto
                
                ' 
                id='text'>
                    We provide ready sample projects for popular target platforms
                </p>

                <div className='md:inline-flex items-center gap-8 max-sm:block'>
                    <button className='
                    rounded-xl
                    bg-gradient-to-br
                    from-[#F5841B]
                    to-[#FF4B38]
                    py-3
                    px-5
                    max-sm:w-full
                    '>Sign up as Developer</button>
                    
                    <a href="#" className='inline-flex gap-2 max-sm:w-full max-sm:bg-[#ffffff33] max-sm:rounded-xl max-sm:py-3 max-sm:justify-center max-sm:mt-4'>
                        <img src={ReadDocs} alt="read documentation" />
                        <span>Read the Docs</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Platforms;
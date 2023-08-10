import CustomiseAvatar from '../assets/images/PersonCreator/avatar-creator.png';
// Import icons
import PhoneIcon from '../assets/images/PersonCreator/take-selfie-icon.png';
import SettingIcon from '../assets/images/PersonCreator/setting-icon.png';
import CheckIcon from '../assets/images/PersonCreator/correct-check-icon.png';

const PersonCreator = () => {
    return(
        <div className="max-w-[66rem] w-full mx-auto ">
            <h2 className='text-center md:max-w-[38rem] mx-auto max-md:px-8 max-sm:text-center font-semibold tracking-wider text-2xl md:text-3xl'>
                Integrate MetaPerson Creator to any place
                </h2>
            <p className='mt-3 
                mb-12 
                max-w-[38rem]
                leading-tight
                md:text-left
                max-sm:text-center
                md:mx-auto
                max-md:px-8
                '
                id='text'>
                    Stand out from the competition and create a product that 
                    truly captivates your audience with lifelike MetaPerson avatars
                </p>


                {/* Avatar creator */}
                <div className='flex flex-col max-sm:flex-col-reverse items-center mx-auto md:gap-8 max-sm:gap-20 md:bg-[#ffffff33] sm:bg-none py-12 rounded-2xl'>
                    <div className='flex flex-row max-sm:flex-col justify-between items-start max-sm:items-center'>
                        <div className='flex flex-col items-center'>
                            <img src={PhoneIcon} alt="phone icon" className='py-4 px-4 bg-[#464646] rounded-full'/>
                            <p className='text-center max-w-[15rem] mt-4 mb-8' id='text'>
                                Or pick from a selection of pre-made avatars
                            </p>
                        </div>
                        {/* <div className='w-48 h-[0.98px] max-sm:w-[1px] max-sm:h-6 max-sm:mb-8 bg-slate-300 mt-4'></div> */}
                        <div className='flex flex-col items-center'>
                            <img src={SettingIcon} alt="setting icon" className='py-4 px-4 bg-[#464646] rounded-full'/>
                            <p className='text-center max-w-[15rem] mt-4 mb-8' id='text'>
                                Tune face and body to your ideal avatar
                            </p>
                        </div>
                        {/* <div className='w-48 h-[0.98px] max-sm:w-[1px] max-sm:h-6 max-sm:mb-8 bg-slate-300 mt-4'></div> */}
                        <div className='flex flex-col items-center'>
                            <img src={CheckIcon} alt="correct check icon" className='py-4 px-4 bg-[#464646] rounded-full'/>
                            <p className='text-center max-w-[15rem] mt-4 mb-8' id='text'>
                                Show your 3d avatar to the world
                            </p>
                        </div>
                    </div>

                    <img src={CustomiseAvatar} alt="avatar customising" />
                </div>
        </div>
    )
}

export default PersonCreator;
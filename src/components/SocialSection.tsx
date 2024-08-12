import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import React from 'react'

const SocialSection = () => {
  return (
    <div className='flex-col md:flex md:flex-row items-center justify-center mb-12'>
        <span className='mb-0 md:mr-7 flex font-bold items-center justify-center text-4xl text-violet-900'>Volg ons op</span>
        <div className='pt-10  pb-7'>
            <ul className='flex items-center justify-center'>
                <li className='flex items-center justify-center mx-1 w-12 h-12 bg-yellow-400 rounded-full overflow-hidden text-white text-2xl'>
                    <a href="" className='flex items-center justify-center w-full h-full text-inherit'><FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>

                <li className='flex items-center justify-center mx-1 w-12 h-12 bg-yellow-400 rounded-full overflow-hidden text-white text-2xl'>
                    <a href="" className='flex items-center justify-center w-full h-full text-inherit'><FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>

                <li className='flex items-center justify-center mx-1 w-12 h-12 bg-yellow-400 rounded-full overflow-hidden text-white text-2xl'>
                    <a href="" className='flex items-center justify-center w-full h-full text-inherit'><FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SocialSection
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed top-0 left-0 right-0 w-full z-50 bg-yellow-400'>
      <div className='relative px-7 box-content flex justify-between items-center flex-col mx-auto max-w-7xl z-10'>
        <div className='md:items-end py-6 flex justify-between w-full '>
          <div className='max-w-64 flex text-white pointer-events-auto'>
            <a href="/">
              <img className='max-w-full h-full' src="https://www.mynobi.com/images/logo.png" alt="Logo" />
            </a>
          </div>
       
       <div className='block md:hidden'>
          <button onClick={toggleMenu} className='text-violet-900 focus:outline-none'>
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden '} md:block absolute md:relative top-full left-0 h-screen md:h-auto bg-yellow-400 md:bg-transparent  md:mt-0`}>
          <ul className='flex flex-col md:flex-row justify-start w-full md:w-auto'>
            <li className='text-violet-900 text-left text-xl'>
              <a className='block px-6 py-2 text-left' href="">
                <span className='inline-block border-solid pb-1 hover:border-b-2 border-violet-900'>about us</span>
              </a>
            </li>
            <li className='text-violet-900 text-left text-xl'>
              <a className='block px-6 py-2 text-left' href="">
                <span className='inline-block border-solid pb-1 hover:border-b-2 border-violet-900'>menu & order online</span>
              </a>
            </li>
            <li className='text-violet-900 text-left text-xl'>
              <a className='block px-6 py-2 text-left' href="">
                <span className='inline-block border-solid pb-1 hover:border-b-2 border-violet-900'>jobs</span>
              </a>
            </li>
            <li className='text-violet-900 text-left text-xl'>
              <a className='block px-6 py-2 text-left' href="">
                <span className='inline-block border-solid pb-1 hover:border-b-2 border-violet-900'>franchising</span>
              </a>
            </li>
            <li className='text-violet-900 text-left text-xl'>
              <a className='block px-6 py-2 text-left' href="">
                <span className='inline-block border-solid pb-1 hover:border-b-2 border-violet-900'>nobi inspiration</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </div>
  );
}

export default Header;

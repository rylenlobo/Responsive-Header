import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { cn } from '../../utils/utils';

const DropdownItem = ({ children , items }) => {
  const [hover,setHover] = useState(false);


 const handleEnter = () => {
    setHover(true)
  };

  const handleLeave = () => {
    setHover(!hover)
  };

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}  className="relative flex flex-col  items-start lg:w-32 lg:flex-row lg:items-center lg:justify-center h-full font-semibold  cursor-pointer  transition-all duration-200">
      
      {/* dropdown items */}
      <div className="flex items-center justify-center  ">
        <p>{children}</p>
        <div className='p-2'>
          <ChevronDown size={10} />
       </div>
      </div>
      
      {/* dropdown menu  mobile*/}
      <div className={`lg:hidden w-full transition-all duration-300 overflow-hidden ${hover ? 'max-h-96' : 'max-h-0'}`}><DropdownMenu items={items} /></div>
      
      {/* dropdown menu  desktop*/}
      {hover && <div onMouseEnter={handleEnter} className='hidden lg:border-t-2 lg:block absolute overflow-hidden top-full left-0 right-0 border-x border-b border-gray-300 rounded-b-lg transition-all duration-300'> <DropdownMenu items={items} /></div>}
   
    </div>
  );
};

export default DropdownItem;
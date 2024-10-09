import React, { useState } from 'react';
import logo from '../../public/logoipsum-286.svg';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import DropdownItem from './DropdownItem';
import { cn } from '../../utils/utils';

const dropdownItems = ["About Us", "Services", "Contact", "Blog"];
const dropdownMenuItems = {
  "About Us": ["Our Team", "Our Story"],
  "Services": ["Consulting", "Development"],
  "Contact": ["Email", "Phone"],
  "Blog": ["Latest Posts", "Categories"]
};


const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='flex flex-col h-auto justify-between w-screen border-b-2 px-5 py-4  lg:h-20 lg:flex-row lg:py-0  '>
       
      <div className='flex items-center justify-between'>
        {/* logo */}
        <img className='w-44' src={logo} alt='logo' />

        {/* menu */}
        <div onClick={handleToggleMenu} className='lg:hidden'>
         {menu ? <X /> : <Menu  />}
        </div>
      </div>

      {/* dropdownItems */}
      <div className='hidden gap-6 lg:flex'>
        {dropdownItems.map((item, index) => (
          <DropdownItem key={index} items={dropdownMenuItems[item]}>{item}</DropdownItem>))}
      </div>

      {/* buttons */}
      <div className='hidden items-center gap-3 lg:flex'>
        <Button>Sign Up</Button>
        <Button className='bg-black text-white'>Sign In</Button>
      </div>
       
      {/* mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-max-height duration-300 lg:hidden',
          menu ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className='flex flex-col gap-6 w-full py-4'>
         {dropdownItems.map((item, index) => (
          <DropdownItem key={index} items={dropdownMenuItems[item]}>{item}</DropdownItem>))}
        </div>
        <div className='flex gap-3 py-2'>
          <Button className='w-full'>Sign Up</Button>
          <Button className='bg-black text-white w-full'>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

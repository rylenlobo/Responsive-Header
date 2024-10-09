import React from 'react';

const DropdownMenu = ({ items }) => {
  return (
    <div className="w-full bg-white transition-all duration-150 ">
      {items?.map((item, index) => (
        <div key={index} className="px-4 font-thin py-2 hover:bg-gray-100">
          {item}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
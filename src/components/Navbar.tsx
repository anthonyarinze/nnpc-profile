import { Link } from 'react-router-dom';

import { navItems } from '../constants';

const Navbar = () => {

  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-bold text-slate-700">
      
      {navItems.map(({ text, href }, index) => (
        <Link
          to={href}
          key={index}
          className="block md:inline-block px-3 mx-20 py-2 rounded-m focus:text-black focus:border-b-4 focus:border-blue-500"
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;

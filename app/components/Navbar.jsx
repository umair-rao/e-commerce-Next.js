
import Link from "next/link";
import React from 'react';

const Navbar = (props) => {
  return (
    <div className="text-xl bg-pink-300 h-12 pt-1.5">
      <div className="products">
        <ul className="text-right">
          <li className="mr-6">
          <Link href='/Cart'>Click to view Cart Item</Link>
            {/* {console.log(props.count, 'count with umair')} */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

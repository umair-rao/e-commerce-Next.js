
import Link from "next/link";
import React from 'react';

const Navbar = (props) => {
  return (
    <div className="flex justify-end pr-8 text-xl bg-pink-300 h-12 pt-1.5 sticky top-0">
      <div className="bg-green-300">
      {<p>{props.message}</p>}
        </div>
      <div className="products">
      <Link href='/Cart'>Click to view Cart Item [{props.count}]</Link>
      </div>
    </div>
  );
};

export default Navbar;

// import Link from "next/link"

const Navbar = () => {
  return (
    <div className="text-xl bg-pink-300 h-12 pt-1.5">
      <div className="products">
        <ul className="text-right">
          <li className="mr-6">
            <p>Cart Items</p>
            {/* <Link className="text-black hover:text-white" to="/cart">Cart Item [{props.count}]</Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

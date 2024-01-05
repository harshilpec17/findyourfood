import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

import Switcher from "./Switcher";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const cartItemsAdded = useSelector((store) => store.cart.cartItems);

  console.log(cartItemsAdded);

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white ">
        <div className="NavWrapper flex flex-row justify-between items-center px-2 md:px-10 py-2 shadow-[0_15px_12px_-8px_rgba(0,0,0,0.3)] md:shadow-[0_35px_25px_-15px_rgba(0,0,0,0.3)] ">
          <div className="logo ">
            <img
              src={LOGO_URL}
              alt="logo"
              className="CompanyLogo w-[80px] p-2.5"
            />
          </div>
          <div className="md:flex md:justify-between items-center gap-24">
            <div className="NavItems ">
              <ul className="flex text-[12px] md:text-[20px] justify-between px-3 md:gap-8 items-center">
                <li>
                  <Switcher />
                </li>
                <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/offers">Offers</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="">
                  <Link to="/cart">
                    {cartItemsAdded.length === 0 ? (
                      <AiOutlineShoppingCart />
                    ) : (
                      <BsFillCartCheckFill />
                    )}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Buttons flex justify-between">
              <button className="btn w-36 dark:bg-gray-500">Sign Up</button>
              <button className="btn w-36 dark:bg-gray-500">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

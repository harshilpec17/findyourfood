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

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <div className="flex flex-row justify-between items-center px-2 md:px-10 py-2 shadow-[0_15px_12px_-8px_rgba(0,0,0,0.3)] md:shadow-[0_35px_25px_-15px_rgba(0,0,0,0.3)] ">
          <div className="logo ">
            <img
              src={LOGO_URL}
              alt="logo"
              className="CompanyLogo w-[80px] p-2.5"
            />
          </div>

          <div className="md:flex md:justify-between items-center">
            <div>
              <ul className="flex flex-wrap text-[18px] md:text-[20px] font-semibold justify-between px-3 md:gap-8 items-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Switcher />
                </li>
                <div className="flex items-center gap-1">
                  <li className="text-2xl">
                    <Link to="/cart">
                      {cartItemsAdded.length === 0 ? (
                        <AiOutlineShoppingCart />
                      ) : (
                        <BsFillCartCheckFill />
                      )}
                    </Link>
                  </li>
                  <li className="text-sm">
                    {cartItemsAdded.length > 0 ? cartItemsAdded.length : null}
                  </li>
                </div>
                <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

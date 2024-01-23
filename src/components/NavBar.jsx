import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';
import { logoutUser } from '../redux/userReducer';
import Logo from '../assets/logo 2.jpeg';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser())
      .then(() => {
        navigate('/register');
      });
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="p-4 w-full bg-base-200 shadow">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="p-4 w-full flex flex-col items-center">
        <NavLink to="/" className="p-3 text-xl rounded-none shadow-sm hover:bg-[#97bf0f]">
          HOME
        </NavLink>
        <NavLink to="/about-us" className="p-3 text-xl rounded-none hover:bg-[#97bf0f]">
          ABOUT US
        </NavLink>
        <NavLink to="/our-products" className="p-3 text-xl rounded-none hover:bg-[#97bf0f]">
          OUR PRODUCTS
        </NavLink>
        <NavLink to="/news-blog" className="p-3 text-xl rounded-none hover:bg-[#97bf0f]">
          NEWS & BLOG
        </NavLink>
        <NavLink to="/contact-us" className="p-3 text-xl rounded-none hover:bg-[#97bf0f]">
          CONTACT US
        </NavLink>
      </div>

      <div className="p-4">
        <Link to="/register">
          <button
            type="button"
            onClick={handleLogout}
            className="btn flex items-center p-1 gap-2 hover:border-xl hover:text-white hover:bg-red-500 shadow bg-red-100 text-red-500"
          >
            Logout
            <BiLogOutCircle className="text-3xl" />
          </button>
        </Link>
      </div>

      <div className="grid gap-4">
        <span className="flex gap-4">
          <BsTwitter className="text-x1" />
          <FaFacebookF className="text-x1" />
          <BsWhatsapp className="text-x1" />
        </span>
        <span className="text-sm font-bold">
          &copy;
          {' '}
          <small>Team Crusaders</small>
        </span>
      </div>
    </div>
  );
};

export default NavBar;

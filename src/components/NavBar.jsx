import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { logoutUser } from '../redux/userReducer';
import Logo from '../assets/logo 2.jpeg';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="modal-content">
        <button type="button" aria-label="Close Modal">
          <AiOutlineClose onClick={onClose} />
        </button>
      </div>
    </div>
  );
};

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser())
      .then(() => {
        navigate('/register');
      });
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <div className={`flex flex-col nav ${isMenuOpen ? 'show-nav' : ''}`} id="navbar">
      <button
        type="button"
        className="burger-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        {isMenuOpen ? (
          <AiOutlineClose />
        ) : (
          <FiMenu />
        )}
      </button>

      <Modal isOpen={isModalOpen} onClose={toggleModal} />
      <div id="logoNavContainer">
        <div className="header-wrapper justify-center">
          <div className="p-4 logo flex-grow">
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo-small" />
            </Link>
          </div>

          <div className="p-5 flex items-center">
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
            <div className="p-1 ml-10">
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
            <div className="flex items-center ml-12">
              <div className="flex gap-4" id="social">
                <BsTwitter className="text-x1" />
                <FaFacebookF className="text-x1" />
                <BsWhatsapp className="text-x1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavBar;

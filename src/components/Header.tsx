import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BasketIcon, ProfileIcon, SearchIcon, MenuIcon, CloseIcon } from "./ui/Icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white ">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Логотип */}
          <h1 className="text-xl font-bold mr-1">SHOP.CO</h1>

          {/* Меню для великих екранів */}
          <nav className="hidden w-[320px] md:flex space-x-1 md:space-x-2">
            <NavLink to={"/"} className="hover:text-gray-700">Shop</NavLink>
            <NavLink to={"/"} className="hover:text-gray-700">On Sale</NavLink>
            <NavLink to={"/about"} className="hover:text-gray-700">About</NavLink>
            <NavLink to={"/contact"} className="hover:text-gray-700">Contact</NavLink>
          </nav>

          {/* Пошук */}
          <div className=" md:flex w-[50%] mx-2 ">
            <form className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="search"
                className="block w-full pl-10 pr-4 py-2 rounded-[62px] bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for products..."
              />
            </form>
          </div>

          {/* Іконки та бургер-кнопка */}
          <div className="flex items-center space-x-4">
            <BasketIcon />
            <ProfileIcon />

            {/* Кнопка бургер-меню */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобільне меню */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 shadow-lg">
          <NavLink to={"/"} className="text-lg" onClick={() => setIsOpen(false)}>Shop</NavLink>
          <NavLink to={"/"} className="text-lg" onClick={() => setIsOpen(false)}>On Sale</NavLink>
          <NavLink to={"/"} className="text-lg" onClick={() => setIsOpen(false)}>New Arrivals</NavLink>
          <NavLink to={"/"} className="text-lg" onClick={() => setIsOpen(false)}>Brands</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;

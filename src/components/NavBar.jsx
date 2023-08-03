import React from 'react';


const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="container mx-auto px-4 py-3">
          <ul className="flex justify-center space-x-6 relative overflow-hidden">
            <li className="menu-item">
              <a href="#about">About</a>
            </li>
            <li className="menu-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="menu-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

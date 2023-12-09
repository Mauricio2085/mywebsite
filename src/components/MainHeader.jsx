import React from "react";
import menu from '../assets/images/menu-hamburguesa.png';

const MainHeader = () => {
    return (
        <header className="fixed w-full bg-[#161b22] flex flex-row-reverse items-center justify-between h-16 font-semibold italic text-2xl font-[ubuntu] px-20 z-10 text-gray-300">
        <div className="logo hidden">
            <img src={menu} alt=""/>
        </div>
        <nav>
        <ul className="text-sm flex w-full justify-end">
            <li id="resume" className="mr-11"><a href="cv-web-developer.html">Resume</a></li>
            <li className="mr-11">Portfolio</li>
            <li className="mr-11">Blog</li>
            <li className="mr-11">Settings</li>
        </ul>
        </nav>  
    </header>
    );
};

export { MainHeader };
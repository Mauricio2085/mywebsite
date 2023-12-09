import React from "react";
import linkedin  from '../assets/images/linkedin.png'
import github  from '../assets/images/github.png';
import whatsapp  from '../assets/images/whatsapp.png';


const MainFooter = () => {
    return (
        <footer className="text-[--secundary-color] w-full flex justify-between items-center font-[ubuntu] h-40 bg-[#161b22]">
            <div className="ml-3 w-1/2 flex-col">
                <a className="text-md mt-1" >Cel: +57 310 678 9371</a>
                <p className="mt-1">Pereira - Risaralda - Colombia</p>
            </div>
            <div className="flex m-8">
                <div className="w-8 mr-2 bg-white">
                    <picture>
                        <img src={github} alt=""/>
                    </picture>
                </div>
            <div className="w-11 ml-2 bg-white">
                <picture>
                    <img src={whatsapp} alt=""/>
                </picture>
            </div>
            <div className="w-11 ml-2 bg-white">
                <picture>
                    <img src={linkedin} alt=""/>
                </picture>
            </div>
            </div>
        </footer>
    );
};

export { MainFooter };
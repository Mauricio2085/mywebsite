import React from "react";
import perfilPhoto from '../assets/images/IMG_2751.jpg';

const MainJumbo = () => {
    return (
        <section className=" py-8 md:py-0 md:flex md:justify-center md:items-center md:justify-items-center md:w-full md:h-[500px] px-5 md:px-60">  
                <div className="md:w-full flex flex-col md:flex md:flex-row justify-center md:justify-center items-center md:items-center md:justify-items-center">
                        <img className="w-60 h-60 object-cover rounded-[50%] p-3" src={perfilPhoto} alt="perfil"/>
                        <p className="text-white text-center md:text-left text-xl w-full md:w-3/4 font-[ubuntu] drop-shadow-2xl txt-shadow md:pl-20"> Hi! My name is Mauricio Ocampo and I am Electronic engineer and Fullstack developer. I Work with passion and excellent actitude and always I give the best from me to others
                        </p>
                </div>
        </section>
    );
};

export { MainJumbo };
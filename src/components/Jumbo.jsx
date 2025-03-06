import React from "react";
import perfilPhoto from "../assets/images/IMG_2751.jpg";

const Jumbo = () => {
  return (
    <section className="w-full py-8 md:py-0 md:flex md:justify-center md:items-center md:justify-items-center  md:h-[600px] px-5 lg:px-24 xl:px-40">
      <div className="w-full flex flex-col md:flex-row justify-center xl:justify-center items-center xl:items-center md:justify-items-center">
        <img
          className="w-60 h-60 xl:w-80 xl:h-80 object-cover rounded-[50%] p-5"
          src={perfilPhoto}
          alt="perfil"
        />
        <p className="w-full my-5 md:pl-5 text-white text-center md:text-left text-xl md:w-3/4 font-[ubuntu] drop-shadow-2xl txt-shadow xl:px-20">
          Hi! My name is Mauricio Ocampo and I am Electronic engineer and
          Fullstack developer. I Work with passion and excellent actitude and
          always I give the best from me to others
        </p>
      </div>
    </section>
  );
};

export { Jumbo };

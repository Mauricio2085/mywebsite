import React from "react";
import perfilPhoto from '../assets/images/IMG_2751.jpg';

const MainJumbo = () => {
    return (
        <section>
            <img className="w-full h-[500px] object-cover opacity-40" src="../assets/images/jumbo.jpg" />
            <div className="flex justify-center items-center w-full relative top-[-370px]">   
                <div className="w-3/4 flex justify-center items-center">
                    <div>
                        <img className="w-52 h-52 object-cover rounded-[50%] p-3" src={perfilPhoto} alt="perfil"/>
                    </div>
                    <div>
                        <p className="text-gray-300 text-xl w-3/4 font-[ubuntu]"> Hi! My name is Mauricio Ocampo and I am Electronic engineer and Fullstack developer.<br />I Work with passion and excellent actitude and always I give the best from me to others
                        </p>
                    </div>
                </div>
            </div>
            </section>
    );
};

export { MainJumbo };
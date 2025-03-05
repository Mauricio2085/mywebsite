import React from "react";
import { BiSolidLike } from "react-icons/bi";

const MainProject = ({projectName, image, description, avatar, skills}) => {

    return (
        <div className=" flex flex-col rounded-lg bg-slate-50 items-center w-80 h-auto mb-8 md:mb-0 shadow-xl">
            <div className=" w-full flex flex-row p-2 bg-slate-50">
                <div className=" w-1/5 py-2 px-8">{avatar}</div>
                <h4 className=" w-4/5 text-md font-semibold py-2 px-8">{projectName}</h4>
            </div>
            <img className=" w-full h-40 object-fill rounded-3xl px-8 " src={image}  alt="Portfolio"/>
            <p className=" py-6 px-8 text-sm bg-slate-50">{description}</p>
            <div className="w-full px-8 flex flex-row justify-start items-center">
                <div className="text-md font-[ubuntu] mr-2 font-semibold">Skills: </div>
                {
                    skills.map(skill => {
                        return(
                            <div key={skill.id} className="flex flex-row mr-1">{skill.icon}</div>
                        )
                    })
                }
                
                
            </div>
            <div className=" flex flex-row p-8 w-full h-full bg-slate-50">
                <div className=" w-28 bg-slate-600 text-slate-50 mr-16">Conoce más...</div>
                <div className=" "><BiSolidLike size={24} /></div>
            </div>
        </div>
    );
};

export { MainProject };
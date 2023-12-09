import { dataProjects } from '../utils/data';
import React from 'react';


const MainPortfolio = () => {
    let choiceapp;
    const projectPortfolio = dataProjects.map(project => {
        return {...project,}
})
return (
    <>
        <main className=" w-auto px-60 pb-20 items-center relative top-[-260px]">
            <div className=" flex flex-col w-full items-center bg-gray-200 shadow-xl rounded-md">
                <h1 id="portfolio" className="font-semibold italic text-4xl text-black font-[ubuntu] pt-8 pb-8">PORTFOLIO</h1>
                <p className='text-xl w-full px-3 font-[ubuntu]'>Here you can see and teaste a little of my work...<br/> Enjoy it!!
                </p>
                <section className="grid grid-cols-2 grid-flow-row gap-4 justify-center px-3 w-full">
                    {projectPortfolio.map(project => {
                        return(
                            <div key={project.id}>
                                <h4>{project.name}</h4>
                                <img src="../assets/images/IMG_3686.jpg"  alt="" />
                            </div>                                      
                            );
                        })
                    }
                </section>
            </div>
        </main>
        </>
        )
}

export { MainPortfolio };
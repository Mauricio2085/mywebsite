import linkedin  from '../assets/images/linkedin.png'
import github  from '../assets/images/github.png';
import whatsapp  from '../assets/images/whatsapp.png';
import perfilPhoto from '../assets/images/IMG_2751.jpg';
import menu from '../assets/images/menu-hamburguesa.png';

const template = async () => {
    const view = `<header class=" bg-white flex flex-row-reverse items-center justify-between h-16 font-semibold italic text-2xl text-zinc-800 font-[ubuntu] px-20">
    <div class="logo">
        <img src=${menu} alt="">
    </div>
    <nav>
    <ul class="text-sm flex w-full justify-end">
        <li class="mr-11"><a href="cv-web-developer.html">Resume</a></li>
        <li class="mr-11">Portafolio</li>
        <li class="mr-11">Blog</li>
        <li class="mr-11">Settings</li>
    </ul>
    </nav>  
</header>
<span class="w-full">
    <img class="w-full h-[450px] object-cover opacity-40" src="../assets/images/jumbo.jpg" />
    <section class="flex justify-center items-center w-full h-full relative top-[-370px]">   
        <div class="w-3/4 flex justify-center items-center">
            <div>
                <img class="w-52 h-52 object-cover rounded-[50%] p-3" src=${perfilPhoto} alt="perfil">
            </div>
            <p class="text-slate-900 text-3xl w-3/4 font-[ubuntu]">Hi! My name is Mauricio Ocampo and I am Electronic engineer and Fullstack developer.<br>I Work with passion and excellent actitude and always I give the best from me to others </p>
        </div>
    </section>
</span>
<main class=" flex flex-col w-full px-20 items-center">
    <h1 id="portfolio" class="font-semibold italic text-6xl text-black font-[ubuntu] pb-8">MI PORTAFOLIO</h1>
    <section class="grid grid-cols-3 grid-rows-2 gap-4 px-60 justify-center">
        <div class="flex flex-col items-center">
            <h2>Proyecto 1</h2>
            <img src="../assets/images/Perfil_CV.jpg" class="w-3/4" />
        </div>
        <div class="flex flex-col items-center">
            <h2>Proyecto 1</h2>
            <img src="../assets/images/Perfil_CV.jpg" class="w-3/4" />
        </div>
        <div class="flex flex-col items-center">
            <h2>Proyecto 1</h2>
            <img src="../assets/images/Perfil_CV.jpg" class="w-3/4" />
        </div>
        <div class="flex flex-col items-center">
            <h2>Proyecto 1</h2>
            <img src="../assets/images/Perfil_CV.jpg" class="w-3/4" />
        </div>
        <div class="flex flex-col items-center">
            <h2>Proyecto 1</h2>
            <img src="../assets/images/Perfil_CV.jpg" class="w-3/4" />
        </div>
        <div class="flex flex-col items-center">
            <h2>Proyecto 1</h2>
            <img src="../assets/images/Perfil_CV.jpg" class="w-3/4" />
        </div>
    </section> 
</main>
<footer class="text-[--secundary-color] w-full flex justify-between items-center font-[ubuntu]">
<div class="ml-3 w-1/2 flex-col>
    <a class="text-md mt-1">Cel: +57 310 678 9371</a>
    <p class="mt-1">Pereira - Risaralda - Colombia</p>
</div>
<div class="flex m-8">
    <div class="w-8 mr-2">
        <picture>
            <img src=${github} alt="">
        </picture>
    </div>
    <div class="w-11 ml-2">
        <picture>
            <img src=${whatsapp} alt="">
        </picture>
    </div>
    <div class="w-11 ml-2">
        <picture>
            <img src=${linkedin} alt="">
        </picture>
    </div>
</div>
</footer>`;
    return view;
};

export {template};
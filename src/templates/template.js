import linkedin  from '../assets/images/linkedin.png'
import github  from '../assets/images/github.png';
import whatsapp  from '../assets/images/whatsapp.png';
import perfilPhoto from '../assets/images/IMG_2751.jpg';
import menu from '../assets/images/menu-hamburguesa.png';

const template = async () => {
    const view = `<header class=" bg-violet-600 flex flex-row-reverse items-center justify-between h-[150px] font-semibold italic text-2xl text-stone-50 font-[ubuntu]">
    <div class="logo">
        <img src=${menu} alt="">
    </div>
    <nav>
    <ul>
        <li>Resume</li>
        <li>Portafolio</li>
        <li>Blog</li>
        <li>Settings</li>
    </ul>
    </nav>  
</header>
<main>
    <article class="principal">   
        <div class="perfil-frame">
            <div class="perfil-image">
                <img class="imagePerfil" src=${perfilPhoto} alt="perfil">
            </div>
            <div class="text-frame">
                <p class="para">Hi! My name is Mauricio Ocampo and I am Electronic engineer and Fullstack developer.
                <br>I Work with passion and excellent actitude and always I give the best of me to others </p>
            </div>
        </div>
    </article>
<section class="aside-right">
    <div class="icons-aside-github">
        <picture>
            <img src=${github} alt="">
        </picture>
    </div>
    <div class="icons-aside-whatsapp">
        <picture>
            <img src=${linkedin} alt="">
        </picture>
    </div>
    <div class="icons-aside-linkedin">
        <picture>
            <img src=${whatsapp} alt="">
        </picture>
    </div>
</section>
</main>
<footer>
<div class="info-personal">
    <a>Cel: +57 310 678 9371</a>
    <p>Pereira - Risaralda - Colombia</p>
</div>
<div class="main-footer-icons">
<div class="icons-footer-github">
    <picture>
        <img src=${github} alt="">
    </picture>
</div>
<div class="icons-footer-whatsapp">
    <picture>
        <img src=${whatsapp} alt="">
    </picture>
</div>
<div class="icons-footer-linkedin">
    <picture>
        <img src=${linkedin} alt="">
    </picture>
</div>
</div>
</footer>`;
    return view;
};

export {template};
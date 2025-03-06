function lightM() {
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const rightAside = document.querySelector(".aside-right");
  const github = document.querySelector(".icons-aside-github");
  const whatsapp = document.querySelector(".icons-aside-whatsapp");
  const linkedin = document.querySelector(".icons-aside-linkedin");
  const textFrame = document.querySelector(".para");
  const imgPerfil = document.querySelector(".imagePerfil");
  const footer = document.querySelector("footer");
  const githubFooter = document.querySelector(".icons-footer-github");
  const whatsappFooter = document.querySelector(".icons-footer-whatsapp");
  const linkedinFooter = document.querySelector(".icons-footer-linkedin");
  const logo = document.querySelector(".logo");

  header.addEventListener("click", light);

  function light() {
    imgPerfil.setAttribute("src", "./assets/IMG_3688.jpg");
    textFrame.classList.toggle("light-mode");
    github.classList.toggle("light-mode");
    whatsapp.classList.toggle("light-mode");
    linkedin.classList.toggle("light-mode");
    body.classList.toggle("light-mode");
    header.classList.toggle("light-mode");
    footer.classList.toggle("light-mode");
    githubFooter.classList.toggle("light-mode");
    whatsappFooter.classList.toggle("light-mode");
    linkedinFooter.classList.toggle("light-mode");
    logo.classList.toggle("light-mode");
  }
}
module.exports = { lightM };

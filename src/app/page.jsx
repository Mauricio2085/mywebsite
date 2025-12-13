import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Jumbo } from "../components/Jumbo";
import { Skills } from "../components/Skills";

export default function Page() {
  return (
    <>
      <Header />
      <Jumbo />
      <Portfolio />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export { Page };

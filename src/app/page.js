import Hero from "./components/hero";
import Projetos from "./components/projetos";
import Sobre from "./components/sobre";
import Contatos from "./components/contato";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projetos />
            <Sobre />
            <Contatos />
            <Footer />
        </>
    );
}

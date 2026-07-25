import projetos from "../data/projetos";
import CardProjeto from "./CardProjeto";

export default function Projetos() {
    return (
        <section id="projetos" className="main">
            <h2>Projetos</h2>
            <p className="projetos-intro">
                Nesta seção estão alguns dos projetos que desenvolvi para
                colocar meus conhecimentos em prática e aprender novas
                tecnologias.
            </p>
            <div className="projetos-container">
                {projetos.map((projeto) => (
                    <CardProjeto key={projeto.titulo} {...projeto} />
                ))}
            </div>
        </section>
    );
}

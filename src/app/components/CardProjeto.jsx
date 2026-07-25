import Image from "next/image";

export default function CardProjeto({
    titulo,
    imagem,
    descricao,
    tecnologias,
    site,
    github,
}) {
    return (
        <article className="card">
            <Image src={imagem} alt={titulo} width={350} height={200} className="img" />
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p className="tecnologias">{tecnologias}</p>
            <a href={site} target="_blank" rel="noopener noreferrer">
                <button>Ver projeto</button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
            </a>
        </article>
    );
}

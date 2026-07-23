import Image from "next/image";
import Link from "next/link";

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
            <Image src={imagem} alt={titulo} width={350} height={200} />
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p>{tecnologias}</p>
            <Link href={site} target="_blank" rel="noopener noreferrer">
                <button>Ver projeto</button>
            </Link>
            <Link href={github} target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
            </Link>
        </article>
    );
}

import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href={"/#hero"}>Igor Dias</Link>
            <Link href={"/#projetos"}>Projetos</Link>
            <Link href={"/#sobre"}>Sobre</Link>
            <Link href={"/#contatos"}>Contato</Link>
        </nav>
    );
}

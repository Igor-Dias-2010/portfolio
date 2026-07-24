import Link from "next/link"

export default function Navbar(){
    return(
        <nav>
            <Link href={"/#hero"}>Igor Dias</Link>

            <ul>
                <li>
                    <Link href={"/#projetos"}>Projetos</Link>
                </li>
                <li>
                    <Link href={"/#sobre"}>Sobre</Link>
                </li>
                <li>
                    <Link href={"/#contatos"}>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}
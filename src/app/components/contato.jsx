import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contatos() {
    return (
        <section id="contatos" className="main">
            <h2>Contato</h2>
            <p>Confira minhas redes e formas de contato:</p>
            <a
                href={"https://github.com/Igor-Dias-2010"}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub />
                GitHub
            </a>
            <a
                href={"https://www.linkedin.com/in/igor-dias-4a0791356/"}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin />
                LinkedIn
            </a>
            <a href={"mailto:rogigor1712@gmail.com"}>
                <FaEnvelope />
                Email
            </a>
        </section>
    );
}

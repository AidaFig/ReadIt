import { Nav } from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const Sobre = () => {
    return (
        <>
        <Nav />
        <Header />
        <section className="sobre-container">
            <h1>Sobre o Projeto</h1>
        </section>
        <Footer />
        </>
    )
}
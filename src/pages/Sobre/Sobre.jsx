import { useEffect } from "react";
import { Nav } from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "./SobreStyle.css";

export const Sobre = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <>
        <Nav />
        <Header img="../assets/images/img-header.svg" alt="Moça lendo um livro">Oferecendo oportunidades de leitura online a quem não vive sem um livrinho. Não importa onde, como ou quando, você pode abrir o seu livro e ler.
        </Header>

        
        <section className="sobre-container">
                <h1>Sobre o Projeto</h1>
            <div data-aos="fade-down" className="sobre-box">
                <p>
                    O <strong>Read It</strong> é uma plataforma que disponibiliza PDF's de livros gratuitos, os quais você pode ter acesso através de qualquer dispositivo que possua conexão com a internet. E, o melhor, você pode realizar a sua leitura onde estiver. Não tem desculpa para não manter as leituras em dia. READ IT!
                </p>
                <img src="../assets/images/information.png" alt="caixinhas de conversa" />
            </div>
                <h1>Como Funciona?</h1>
            <div data-aos="fade-down" className="uso-box">
                <img src="../assets/images/settings.png" alt="Engrenagens" />
                <p>Vamos Começar! Clicando em <strong>Livros</strong> você se depara com várias opções de gêneros literários na tela. Escolha o de sua preferência clicando nele e você terá acesso aos livros disponíveis neste gênero. Agora, é so selecionar o livro que deseja e começar a leitura.
                </p>
            </div>

        </section>
            <div className="social-media">
                <h3>Siga-me nas redes sociais:</h3>
                <div className="icons-medias">
                    <img className="icon" src="../assets/icons/instagram (1).png" alt="instagram" />
                    <img className="icon" src="../assets/icons/linkedin (1).png" alt="linkedin" />
                    <img className="icon" src="../assets/icons/github (2).png" alt="github" />
                </div>
            </div>
        <Footer />
        </>
    )
}
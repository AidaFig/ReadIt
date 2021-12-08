import { Button } from "../Button/Button";
import "./HeaderStyle.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-box_img">
                <img className="img-header" src="../../assets/images/img-header.svg" alt=""/>
            </div>
            <div className="header-box_text">
                <h1 className="title-header"> Read It!</h1>
                <p>Oferecendo oportunidades de leitura online a quem não vive sem um livrinho. Não importa onde, como ou quando, você pode abrir o seu livro e ler. </p>

                <Button>Saiba Mais</Button>
            </div>

        </header>
    )
}
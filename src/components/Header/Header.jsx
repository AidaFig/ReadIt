import { Button } from "../Button/Button";
import "./HeaderStyle.css";

export const Header = ({img, children, alt}) => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-box_img">
                    <img className="img-header" src={img} alt={alt}/>
                </div>
                <div className="header-box_text">
                    <h1 className="title-header">read it!</h1>
                    <p>{children}</p>
                    <Button>Saiba Mais</Button>
                </div>
            </div>

        </header>
    )
}
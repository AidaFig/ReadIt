import { Link } from "react-router-dom";
import "./ArrowStyles.css";

export const Arrow = () => {
    return (
        <>
            <div className="arrow-container">
                <Link to="/livros">
                        <img className="arrow" src="../assets/icons/left.png" alt="voltar" />
                </Link>
                <p className="arrow-text">Voltar</p>
            </div>
        </>
    )
}
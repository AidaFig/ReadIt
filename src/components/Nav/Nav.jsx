import { Link } from "react-router-dom";
import "./NavStyle.css";

export const Nav = () => {
    return (
        <div className="container">
            <nav className="nav">
                <h1 className="title">Read It!</h1>
                <ul className="menu-container">
                    <li>
                        <Link to="/">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/livros">Livros</Link>
                    </li>
                    <li>
                        <Link to="">Minha Biblioteca</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}
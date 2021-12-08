import { Link } from "react-router-dom";
import "./NavStyle.css";

export const Nav = () => {
    return (
        <div className="container">
            <nav className="nav">
                <img className="logo" src="../../assets/icons/shopping-cart (1).png" alt="" />
                <h1 className="title">Read It!</h1>
                <ul className="menu-container">
                    <li>
                        <Link to="/">Sobre</Link>
                    </li>
                    <li>
                        <Link to="">Books</Link>
                    </li>
                    <li>
                        <Link to="">My Library</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}
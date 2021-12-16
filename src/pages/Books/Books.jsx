import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BooksStyle.css";

const genders = [
    {
        id: 1,
        icon: "../assets/icons/romance.png",
        title: "Romance",
        path: "/romance"
    }, 
    {
        id: 2,
        icon: "../assets/icons/biografia.png",
        title: "Biografia",
        path: "/biografia"
    }, 
    {
        id: 3,
        icon: "../assets/icons/witch.png",
        title: "Terror",
        path: ""
    }, 
    {
        id: 4,
        icon: "../assets/icons/bardo.png",
        title: "Poesia",
        path: ""
    }, 
    {
        id: 5,
        icon: "../assets/icons/villian.png",
        title: "Suspense",
        path: ""
    }, 
    {
        id: 6,
        icon: "../assets/icons/self-care.png",
        title: "Auto Ajuda",
        path: ""
    }

]

export const Books = () => {


    useEffect(()=> {
        Aos.init({duration: 1000})
    }, [])
    

    return (
    <>
        <Nav />
        <Header 
        img="../assets/images/reading.svg">
            Aqui você encontra seus gêneros literários favoritos reunidos. Cada um disponibiliza uma lista de livros para você escolher. Boa leitura! 
        </Header>

        <h1 className ="gender-title">Gêneros</h1>
        <div className="gender-container">
        {genders.map(gender =>
                <div key={gender.id} 
                    className="gender-box" 
                    data-aos="fade-down"
                >
                    
            <Link to={gender.path}>
                <img 
                    src={gender.icon} 
                    alt={gender.title} 
                    className="gender-icon"
                />
            </Link>
                    <p className="gender-name">{gender.title}</p>
                </div>
        )}
        </div>
        <Footer />
    </>
    )
}
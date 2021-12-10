import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BooksStyle.css";
import { useEffect } from "react";

const genders = [
    {
        id: 1,
        icon: "../assets/icons/romance.png",
        title: "Romance",
    }, 
    {
        id: 2,
        icon: "../assets/icons/biografia.png",
        title: "Biografia",
    }, 
    {
        id: 3,
        icon: "../assets/icons/witch.png",
        title: "Terror",
    }, 
    {
        id: 4,
        icon: "../assets/icons/bardo.png",
        title: "Poesia",
    }, 
    {
        id: 5,
        icon: "../assets/icons/villian.png",
        title: "Suspense",
    }, 
    {
        id: 6,
        icon: "../assets/icons/self-care.png",
        title: "Auto Ajuda",
    }

]

export const Books = () => {

    useEffect(()=> {
        Aos.init({duration: 1000})
    }, [])
    
    return (
    <>
        <Nav />
        <Header img="../assets/images/reading.svg">Aqui você encontra seus gêneros literários favoritos reunidos. Cada um disponibiliza uma lista de livros para vcê escolher. Boa leitura! </Header>
        <h1 className ="gender-title">Gêneros</h1>
        <div className="gender-container">
        {genders.map(gender =>
            <div key={gender.id} className="gender-box" data-aos="fade-down">
                <img 
                src={gender.icon} 
                alt={gender.title} 
                className="gender-icon"/>
                <p className="gender-name">{gender.title}</p>
            </div>
        )}
        </div>
        <Footer />
    </>
    )
}
import { Nav } from "../../components/Nav/Nav";
import { Input } from "../../components/Input/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { Arrow } from "../../components/Arrow/Arrow";
import "./BiographyStyles.css"
import { Footer } from "../../components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export const Biography = () => {

    const [buscar, setBuscar] = useState('')
    const [filterBooks, setFilterBooks] = useState([])
    const [biography, setBiography] = useState([])

    useEffect(() => {
        Aos.init({duration: 1000})
    })

    useEffect(() => {
        setFilterBooks(
            biography.filter(item => {
                return item.name.includes(buscar)
            })
        )
    }, [biography, buscar])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://my-json-server.typicode.com/AidaFig/ReadIt-data/Biography')
            const data = await response.data
            setBiography(data)
        }

        fetchData()
    })

    return (
        <>
            <Nav />
            <Input onChange={e => {setBuscar(e.target.value)}}/>
            <h1 className="title-biography">Biography</h1>
            <Arrow />

            <div className="cards-container">
                {filterBooks.map(item =>
                    <div className="cards" key={item.id} data-aos="fade-down">
                        <img className="img-biography" src={item.photo} alt={item.name} />
                        <p className="subtitle-biography">{item.name}</p>
                    </div>
                    )}
            </div>

            <Footer />
        </>
    )
}
import { Nav } from "../../components/Nav/Nav";
import { Arrow } from "../../components/Arrow/Arrow";
import { Footer } from "../../components/Footer/Footer";
import { Input } from "../../components/Input/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HorrorStyles.css";

export const Horror = () => {

    const [horror, setHorror] = useState([])
    const [busca, setBusca] = useState('')  
    const [filterBooks, setFilterBooks]  = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get ('https://my-json-server.typicode.com/AidaFig/ReadIt-data/Horror')
            const data = await response.data
            console.log(response)
            setHorror(data)
        }
        fetchData()
    })

    useEffect(() =>{
        setFilterBooks(
            horror.filter(item => {
                return item.name.includes(busca)
            })
        )
    }, [horror, busca])

    return(
        <>
            <Nav />
            <Input onChange={e => {setBusca(e.target.value)}} />

            <h1 className="title-horror">Terror</h1>
            <Arrow />

            <div className="cards-container" >
            {filterBooks.map(item =>
                <div className="cards">
                    <img src={item.photo} alt={item.name} className="img-horror"/>
                    <p className="subtitle-horror" key={item.id}>{item.name}</p>
                </div>
            )}
            </div>

            <Footer />
        </>
    )
}
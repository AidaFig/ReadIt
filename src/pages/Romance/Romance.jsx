import { Nav } from "../../components/Nav/Nav"
import { Input } from "../../components/Input/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css"
import { Footer } from "../../components/Footer/Footer";
import { Arrow } from "../../components/Arrow/Arrow";
import "./Romance.css";
import { Actions } from "../../components/Actions/Actions";

export const Romance = () => {

const [books, setBooks] = useState([]) 
const [busca, setBusca] = useState('')  
const [filterBooks, setFilterBooks]  = useState([])

useEffect(()=> {
    Aos.init({duration: 1000})
}, [])

useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get ('https://my-json-server.typicode.com/AidaFig/ReadIt-data/romance')
        const data = await response.data
        setBooks(data)
    }
    fetchData()
    
}, [])


useEffect(() =>{
    setFilterBooks(
        books.filter(item => {
            return item.name.includes(busca)
        })
    )
}, [books, busca])

    return (
    <>
        <Nav />
        <Input onChange={e => {setBusca(e.target.value)}} />

        <h1 className="books-gender">Romance</h1>
        
        <Arrow />
        <div className="cards-container" >
            {filterBooks.map(item =>
            <div className="cards" key={item.id} data-aos="fade-down">
                <img src={item.photo} alt={item.name} className="img-books"/>
                <p className="title-books" >{item.name}</p>
                <Actions />
            </div>
            )}
        </div>

        <Footer />
    </>
    )
}
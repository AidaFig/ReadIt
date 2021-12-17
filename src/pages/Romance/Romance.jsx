import { Nav } from "../../components/Nav/Nav"
import { Input } from "../../components/Input/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css"
import "./Romance.css"
import { Footer } from "../../components/Footer/Footer";
import { Arrow } from "../../components/Arrow/Arrow";

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
        console.log(response.data)
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
            <div className="cards" data-aos="fade-down" key={item.id}>
                <img src={item.photo} alt={item.name} className="img-books"/>
                <p className="title-books" >{item.name}</p>
                <div className="icons-actions_container">
                    <img className="icons-actions"src="../assets/icons/add.png" alt="add" />
                    <img className="icons-actions"src="../assets/icons/more.png" alt="lendo" />
                    <img className="icons-actions"src="../assets/icons/check.png" alt="" />
                </div>
            </div>
            )}
        </div>

        <Footer />
    </>
    )
}
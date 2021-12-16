import "./InputStyles.css";

export const Input = ({onChange}) => {
    return (
        <div className="input-container">
            <input  placeholder="Pesquisar livro" className="input" onChange={onChange}/>
            {/* <button className="btn"><img className="search" src="../assets/icons/search.png" alt="lupa" /></button> */}
        </div>
    )
}
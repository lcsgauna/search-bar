import React, {useState} from "react";
import './searchbar.css';
import Localizacao from '../icons/aim.svg'
import Lupa from '../icons/search.svg'


function SearchBar({data}){
    const SearchIcon = () => <img src={Lupa} alt='Botao de busca'/>
    const AimIcon = () => <img src={Localizacao} alt='Botao de localizacao'/>
    const [filteredData,setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    };

    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder='Digite o endereço' value={wordEntered} onChange={handleFilter}/>
                <button className="searchIcon">
                    <SearchIcon/>
                </button>
                <button className="aimIcon">
                    <AimIcon/>
                </button>
            </div>
            {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank" rel="noreferrer">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
        </div>
    )
}

export default SearchBar
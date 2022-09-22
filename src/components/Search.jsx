import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { SearchBox, SearchForm } from '../styles/main.styled'

const Search = () =>{

    const [input, setInput] = useState();
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searched/' + input);
    }
    return(
        <SearchForm onSubmit={submitHandler}>
            <FiSearch />
            <SearchBox type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        </SearchForm>
    )
}

export default Search;
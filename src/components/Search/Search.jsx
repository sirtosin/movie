import React, {useState,useEffect} from 'react'
import { Button, Input } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import {
    fetchAsyncMovies,
} from "../../features/movies/movieSlice";
import './Search.css'
const Search = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert("Please enter search term!");
        dispatch(fetchAsyncMovies(term));
        // setTerm("");
    };
    useEffect(() => {
        dispatch(fetchAsyncMovies(term));
    }, [dispatch, term])

    return (
        <div className='search'>
            <Input placeholder='search movie'
                onChange={(e) => setTerm(e.target.value)}
                value={term}
                on
            />
            <Button colorScheme='blue' onClick={submitHandler}>Button</Button>

            
        </div>
    )
}

export default Search

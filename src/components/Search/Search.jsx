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
        if (e.key === 'Enter') {
            console.log('do validate');
        }
    };
    useEffect(() => {
        dispatch(fetchAsyncMovies(term));
    }, [dispatch])

    return (
        <div className='search'>
            <Input placeholder='search movie'
                onChange={(e) => setTerm(e.target.value)}
                value={term}
            />
            <Button colorScheme='blue' onClick={submitHandler}>search</Button>
        </div>
    )
}

export default Search

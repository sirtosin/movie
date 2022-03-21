import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const movieText = term;
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    // console.log( response.data)
    return response.data;
  }
);



const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // reducers
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
   
  
  },
});

export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;

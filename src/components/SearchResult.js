import axios from "axios";
import qs from "qs";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Movie from "./Movie";

// env에 개인정보적을때 name앞에 REACT_APP_붙여주기

export default function List() {
  // const query = "슈퍼맨";
  const [movies, setMovies] = useState([]);
  // console.log(useLocation());
  const location = useLocation();
  const searchMovie = qs.parse(location.search, { ignoreQueryPrefix: true }).movie;
  // {ignoreQueryPrefix: true} == useLocation 으로 받아온 주소에 ?를 무시하는 옵션
  // console.log(searchMovie);
  // useLocation() 에 있는 search에 query string정보가 들어가 있음..
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1&query=${searchMovie}`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [searchMovie]);
  // searchMovie값이바꼈을때 axios를 한번다시실행하고 로드해줌
  return (
    <>
      <div className="container">
        <h2 className="title">
          <strong>popular</strong> movie
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            // return <Movie imgSrc={item.poster_path} point={item.vote_average} />;
            return <Movie movieInfo={item} key={idx} />;
          })}
        </ul>
      </div>
    </>
  );
}

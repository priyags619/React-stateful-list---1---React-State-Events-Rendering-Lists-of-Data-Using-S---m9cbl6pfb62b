import React,{useState} from 'react'
import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
  const [movies , setMovies] = useState([]);
  const [year , setYear] = useState("");
  const showMovies = (e) => {
    if(e.target.value === "") setMovies([]);
    else{

      setMovies(data[e.target.value]);
      setYear(e.target.value);
    }
 }

  return (
    <div id="main">
      <select name="" id="" onChange={showMovies}>
        <option value={null} selected></option>
         {Object.keys(data).map((year) => <option key={year} value={year}>{year}</option>)}
      </select>
      <div id='selected-year'>
        {movies == "" ? "No year selected" : <span>Selected year-{year}</span>}
        <ul>
        {movies.map(movie => {
          return <li key={movie}>{movie}</li>;
        })}
        </ul>
      </div>
    </div>
  )
}


export default App;

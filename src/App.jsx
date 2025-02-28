import React from "react";
import "./App.css";

const movies = [
  { 
    title: "Avengers: Infinity War", 
    date: "2018", 
    rate: "9.1", 
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSiy9vZsPzLtmD7BUSRnwUrEEM3b-wRzgWEndERcCGBTZp-chAmggbfyF_Q0-hHWgOVhjE66w", 
    link: "https://www.imdb.com/title/tt4154756/" 
  },
  { 
    title: "Avengers: Endgame", 
    date: "2019", 
    rate: "9.5", 
    img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg", 
    link: "https://www.imdb.com/title/tt4154796/" 
  },
  { 
    title: "The Marvels", 
    date: "2023", 
    rate: "6.3", 
    img: "https://m.media-amazon.com/images/I/81bzqjFAXTL._AC_UF894,1000_QL80_.jpg", 
    link: "https://www.imdb.com/title/tt10676048/" 
  },
  { 
    title: "Deadpool", 
    date: "2016", 
    rate: "8.8", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVpl5uz2yeWufgp0HN3xCFU2kQ9_A5h2kTw&s", 
    link: "https://www.imdb.com/title/tt1431045/" 
  },
  { 
    title: "Deadpool 2", 
    date: "2018", 
    rate: "8.9", 
    img: "https://m.media-amazon.com/images/I/91+od0A3itL.jpg", 
    link: "https://www.imdb.com/title/tt5463162/" 
  },
  { 
    title: "Deadpool and Wolverine", 
    date: "2024", 
    rate: "9.3", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3MHooQo_rL52AiI95by1WiRslszbbG4fOw&s", 
    link: "https://www.imdb.com/title/tt6263850/" 
  },
  { 
    title: "Captain America", 
    date: "2011", 
    rate: "8.1", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9U2iWm-3j0JtR0vaUOgln1_DHqRxikTU0VQ&s", 
    link: "https://www.imdb.com/title/tt0458339/" 
  },
  { 
    title: "Captain America: Civil War", 
    date: "2016", 
    rate: "9.0", 
    img: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX1000_.jpg", 
    link: "https://www.imdb.com/title/tt3498820/" 
  },
  { 
    title: "Thor", 
    date: "2011", 
    rate: "7.6", 
    img: "https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    link: "https://www.imdb.com/title/tt0800369/" 
  },
  { 
    title: "Thor: Ragnarok", 
    date: "2017", 
    rate: "8.3", 
    img: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg", 
    link: "https://www.imdb.com/title/tt3501632/" 
  }
];

const MovieList = () => {
  return (
    <div>
      <div>
        <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"></img>
        <h1>Movies</h1>
      </div>
      <div className="container">
        {movies.map((movie, index) => (
          <div key={index} className="Card">
            <img className="Card-img" src={movie.img} alt={movie.title}/>
            <h3 className="Card-title">{movie.title}</h3>
            <p className="Card-date">Year Released: {movie.date}</p>
            <p className="Card-rate">My Rating: {movie.rate}⭐</p>
            <a href={movie.link}>
              <button className="Card-button">Learn more</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

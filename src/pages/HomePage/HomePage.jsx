import Container from 'components/Container';
import HeadingPage from 'pages/HeadingPage';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/API';


const HomePage = () => {
  
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies);
    }, []);
  
    return (
    <Container>
            <ul>
                <HeadingPage text={'Trending Movies'}></HeadingPage>
                {trendingMovies.map((trendingMovie) => (
                    <li key={trendingMovie.id}>
                        <Link to={`/movies/${trendingMovie.id}`} state={{from:location}}>{trendingMovie.title || trendingMovie.name}</Link>
                    </li>
            ))}
        </ul>
    </Container> 
    )
};

export default HomePage;
import React from 'react';
import './movieContent.css';
import titleImg from '.././images/transformer-title.png';
import Button from './Button';

function MovieContent({ movie }) {
    return (
        <div className={`content ${movie.active ? 'active' : undefined}`}>
            <img src={movie.titleImg} alt=" movie Title" className="movie-title" />
            <h4>
                <span>{movie.year}</span>
                <span>
                    <i>{movie.ageLimit}</i>
                </span>
                <span>{movie.length}</span>
                <span>{movie.category}</span>
            </h4>
            <p>
                {movie.description}
                <br />
            </p>
            <div className="button">
                <Button 
                    icon={<ion-icon name="bookmark-outline"></ion-icon>} 
                    name="Book" 
                    color="#ff3700" 
                    bgColor="#ffffff" 
                />
                <Button icon={<ion-icon name="add-outline"></ion-icon>} name = "MY LIST" />
            </div>
            
        </div>
    );
}

export default MovieContent;
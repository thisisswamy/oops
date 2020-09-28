import * as React from 'react';
import './style.css';

function Movie(props){
    return <div class="movie-cart"> 
        <img src= {props.banner}/><br></br>
<label> {props.name} {props.Country}</label>
        </div>
}
export default Movie;
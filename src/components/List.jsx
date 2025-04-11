export function Movie(props) {
    return (
        <li>{props.movie.title} ({props.movie.year})</li>
    )
}


export function MoviesList(props) {
    return (
        <ul>
        {props.MovieList.map((movie) =>
        <Movie key = {movie.id} movie = {movie}/>
        )}
        </ul>   
    )
}
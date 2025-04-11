export function Movie(props) {
    return (
        <li>{props.title} ({props.year})</li>
    )
}


export function MoviesList(props) {
    return (
        <ul>
        {props.MovieList.map((movie) =>
        <Movie key = {movie.id} year = {movie.year} title= {movie.title}/>
        )}
        </ul>   
    )
}
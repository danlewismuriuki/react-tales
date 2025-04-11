export function BookItem(props) {
    return <li>{props.book.title} by {props.book.author}</li>
}


export function BookList(props) {
    return(
        <ul>
            {props.bookLists.map((book) => (
                <BookItem key={book.id} book={book}/>
            ))}
        </ul>
    )
}
import { getBooks } from '../services/bookApiFacade';
import { useState, useEffect } from 'react';
import { Link } from "react-router";

function Books() {
    const [books, setBooks] = useState([]);
   
    useEffect(() => {
        getBooks().then(setBooks);
    }, []);

    return ( 
        <>
            <h1>Books</h1>
            <ul>
                { books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li> 
                ))}
            </ul>
        </>
    )
}

export default Books;
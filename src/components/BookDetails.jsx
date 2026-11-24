import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function BookDetails()
{
    const { id } = useParams();
    const [book, setBook] = useState(undefined);

useEffect(() => {
    fetch(`${API_BASE_URL}/books/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Book not found");
            }
            return response.json();
        })
        .then(data => setBook(data))
        .catch(error => {
            console.error(error);
            setBook(null);
        });
}, [id]);

if (book === undefined) {
    return <p>Loading book...</p>;
}

if (book === null) {
    return <p>Book not found</p>;
}

    return (
    <section>
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Year Published:</strong> {book.year_published}</p>
      <p><strong>Image URL:</strong> {book.image_url || 'N/A'}</p>
      <p><img src={book.image_url}/></p>

      <Link to="/books">Back to Book list</Link>
    </section>
    )
}

export default BookDetails

/*
    {
      "id": "115",
      "title": "autem consequuntur repellendus",
      "author": "Ayden Padberg",
      "rating": 0.25,
      "year_published": 1935,
      "image_url": "https://covers.openlibrary.org/b/id/8345678-M.jpg"
    }
      */
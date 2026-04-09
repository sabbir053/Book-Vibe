import React, { use } from 'react';
import BooksCard from './UI/BooksCard';

const bookspromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(bookspromise);
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-3xl font-bold text-center'>Books</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 gap-8 px-3 md:px-0'>
                {
                    books.map((book, i) => <BooksCard key={i} book={book}/>)
                }
            </div>
        </div>
    );
};

export default AllBooks;
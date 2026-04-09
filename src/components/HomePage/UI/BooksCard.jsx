import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BooksCard = ({ book }) => {
    return (
        <Link to={`/bookdetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
            <figure className='h-80 w-full bg-gray-100 p-5 flex justify-center items-center'>
                <img
                    className='rounded-lg max-h-full w-auto object-contain shadow-md'
                    src={book.image}
                    alt={book.bookName}
                />
            </figure>
            <div className="card-body">

                <div className="space-x-5">{book.tags.map((tag, i) => <p key={i} className='badge font-bold bg-green-50 text-green-500'>{tag}</p>)}</div>

                <h2 className="card-title text-3xl">
                    {book.bookName}
                </h2>
                <p className='text-gray-500 text-lg font-bold'>By: {book.author}</p>
                <div className="card-actions justify-between text-lg border-t border-dashed pt-5">
                    <div className="text-gray-500 font-bold">{book.category}</div>
                    <div className="text-gray-500 font-bold flex items-center gap-3">{book.rating} <FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;
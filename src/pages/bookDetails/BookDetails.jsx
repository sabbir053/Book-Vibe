import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const expectedBook = books.find(book => book.bookId === Number(bookId));

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-sm container mx-auto my-10 p-5">
            <div className='flex items-center justify-center bg-gray-100 rounded-md'>
                <figure>
                    <img
                        className='h-130 rounded-md'
                        src={image}
                        alt={bookName} />
                </figure>
            </div>
            <div className="card-body space-y-2">
                <h2 className="card-title text-3xl font-bold">{bookName}</h2>
                <h4 className='text-lg text-gray-500'>By: {author}</h4>
                <hr className='text-gray-300' />
                <h3 className='text-2xl text-gray-500 font-bold'>{category}</h3>
                <hr className='text-gray-300' />
                <p className='font-semibold text-gray-500'><span className='font-bold text-black'>Review</span>{review}</p>

                <div className="space-x-5"><span className='font-semibold'>Tag </span> {tags.map((tag, i) => <p key={i} className='badge font-bold bg-green-50 text-green-500'>{tag}</p>)}</div>

                <hr className='text-gray-300' />

                <div className='flex gap-5'>
                    <span className='text-gray-500 font-semibold'>Number Of Pages:</span> <span className='font-bold text-black'>{totalPages}</span>
                </div>
                <div className='flex gap-5'>
                    <span className='text-gray-500 font-semibold'>Publisher:</span> <span className='font-bold text-black'>{publisher}</span>
                </div>
                <div className='flex gap-5'>
                    <span className='text-gray-500 font-semibold'>Year of Publishing::</span> <span className='font-bold text-black'>{yearOfPublishing}</span>
                </div>
                <div className='flex gap-5'>
                    <span className='text-gray-500 font-semibold'>Rating:</span> <span className='font-bold text-black'>{rating}</span>
                </div>

                <div className="card-actions flex">
                    <button className="btn">Mark as Read</button>
                    <button className="btn btn-accent">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
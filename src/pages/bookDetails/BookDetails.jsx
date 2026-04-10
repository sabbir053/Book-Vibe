import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookProviderContext } from '../../context/BookContext';

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();

    const expectedBook = books.find(book => book.bookId === Number(id));
    const { handleMarkAsRead, handleWishlist } = useContext(BookProviderContext);

    // Safety check if book is not found
    if (!expectedBook) {
        return (
            <div className="flex h-screen items-center justify-center">
                <h2 className="text-2xl font-bold">Book not found!</h2>
            </div>
        );
    }

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-sm container mx-auto my-10 p-5">
            <div className='flex items-center justify-center bg-gray-100 rounded-md'>
                <figure>
                    <img
                        className='h-130 rounded-md object-cover'
                        src={image}
                        alt={bookName} />
                </figure>
            </div>

            <div className="card-body space-y-2">
                <h2 className="card-title text-3xl font-bold">{bookName}</h2>
                <h4 className='text-lg text-gray-500'>By: {author}</h4>
                <hr className='border-gray-300' />
                <h3 className='text-2xl text-gray-500 font-bold'>{category}</h3>
                <hr className='border-gray-300' />
                <p className='font-semibold text-gray-500'>
                    <span className='font-bold text-black'>Review: </span>{review}
                </p>

                <div className="flex items-center gap-3">
                    <span className='font-semibold'>Tag</span>
                    {tags?.map((tag, i) => (
                        <span key={i} className='badge font-bold bg-green-50 text-green-500 p-3'>
                            #{tag}
                        </span>
                    ))}
                </div>

                <hr className='border-gray-300' />

                <div className="space-y-2">
                    <div className='flex gap-10'>
                        <span className='text-gray-500 font-semibold w-40'>Number Of Pages:</span>
                        <span className='font-bold text-black'>{totalPages}</span>
                    </div>
                    <div className='flex gap-10'>
                        <span className='text-gray-500 font-semibold w-40'>Publisher:</span>
                        <span className='font-bold text-black'>{publisher}</span>
                    </div>
                    <div className='flex gap-10'>
                        <span className='text-gray-500 font-semibold w-40'>Year of Publishing:</span>
                        <span className='font-bold text-black'>{yearOfPublishing}</span>
                    </div>
                    <div className='flex gap-10'>
                        <span className='text-gray-500 font-semibold w-40'>Rating:</span>
                        <span className='font-bold text-black'>{rating}</span>
                    </div>
                </div>

                <div className="card-actions flex gap-4 pt-5">
                    <button
                        className="btn btn-outline border-gray-300"
                        onClick={() => handleMarkAsRead(expectedBook)}
                    >Mark as Read</button>
                    <button className="btn btn-accent text-white"
                        onClick={() => handleWishlist(expectedBook)}
                    >Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
import React, { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { TbPageBreak } from 'react-icons/tb';

const ListedWishList = ({ wishlist, shortingType }) => {

    const [filteredWishList, setFilteredWishList] = useState([]);

    useEffect(() => {
        let sortedData = [...wishlist];

        if (shortingType === 'Pages') {
            sortedData.sort((a, b) => a.totalPages - b.totalPages);
        }
        else if (shortingType === 'Rating') {
            sortedData.sort((a, b) => b.rating - a.rating);
        }

        setFilteredWishList(sortedData);

    }, [wishlist, shortingType]);

    const displayBooks = filteredWishList.length ? filteredWishList : wishlist;

    return (
        <div className='space-y-5'>
            {
                displayBooks.map(wish => (
                    <div key={wish.bookId} className="card card-side bg-base-100 shadow-sm">
                        <figure>
                            <img className='h-60 w-40 p-3'
                                src={wish.image}
                                alt={wish.bookName} />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-3xl">{wish.bookName}</h2>
                            <h3 className='text-lg text-gray-400'>By: {wish.author}</h3>

                            <div className="flex items-center gap-3 flex-wrap">
                                <span className='font-semibold text-lg'>Tag</span>

                                {wish.tags.map((tag, i) => (
                                    <span key={i} className='badge font-bold bg-green-50 text-green-500 p-3'>
                                        #{tag}
                                    </span>
                                ))}

                                <h2 className='flex items-center gap-2 text-lg font-bold text-gray-500'>
                                    <IoLocationOutline />
                                    Year of Publishing: {wish.yearOfPublishing}
                                </h2>
                            </div>

                            <div className='flex items-center gap-5 font-bold text-lg flex-wrap'>
                                <h2 className='flex items-center gap-2'>
                                    <FiUsers />
                                    Publisher: {wish.publisher}
                                </h2>

                                <h2 className='flex items-center gap-2'>
                                    <TbPageBreak />
                                    Page: {wish.totalPages}
                                </h2>
                            </div>

                            <hr className='text-gray-300' />

                            <div className="card-actions justify-start gap-5 flex-wrap">
                                <button className="bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full font-bold">
                                    Category: {wish.category}
                                </button>

                                <button className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-bold">
                                    Ratings: {wish.rating}
                                </button>

                                <button className="bg-green-500 text-white px-5 py-2 rounded-full font-bold">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ListedWishList;
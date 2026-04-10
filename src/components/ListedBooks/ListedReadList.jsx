import React, { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { TbPageBreak } from 'react-icons/tb';

const ListedReadList = ({ storedBook, shortingType }) => {

    const [filteredReadList, setFilteredReadList] = useState([])


    useEffect(() => {
        let sortedData = [...storedBook];
        if (shortingType === 'Pages') {
            sortedData.sort((a, b) => a.totalPages - b.totalPages);
        }
        else if (shortingType === 'Rating') {
            sortedData.sort((a, b) => b.rating - a.rating);
        }
        setFilteredReadList(sortedData);
    }, [storedBook, shortingType]);

  const displayBooks = filteredReadList.length ? filteredReadList : storedBook;
  
    return (
        <div className='space-y-5'>
            {
                displayBooks.map(listBook =>
                    <div className="card card-side bg-base-100 shadow-sm">
                        <figure>
                            <img className='h-60 w-40 p-3'
                                src={listBook.image}
                                alt={listBook.bookName} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{listBook.bookName}</h2>
                            <h3>By: {listBook.author}</h3>
                            <div className="flex items-center gap-3">
                                <span className='font-semibold'>Tag</span>
                                {listBook.tags.map((tag, i) => (
                                    <span key={i} className='badge font-bold bg-green-50 text-green-500 p-3'>
                                        #{tag}
                                    </span>
                                ))}
                                <h2 className='flex items-center gap-2'><IoLocationOutline />Year of Publishing: {listBook.yearOfPublishing}</h2>
                            </div>
                            <div className='flex items-center gap-5'>
                                <h2 className='flex items-center gap-2'><FiUsers />Publisher: {listBook.publisher}</h2>
                                <h2 className='flex items-center gap-2'><TbPageBreak />Page: {listBook.totalPages}</h2>
                            </div>
                            <hr className='text-gray-400' />
                            <div className="card-actions justify-start gap-5">
                                <button className="btn btn-success">Category: {listBook.category}</button>
                                <button className="btn btn-info">Ratings: {listBook.rating}</button>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ListedReadList;
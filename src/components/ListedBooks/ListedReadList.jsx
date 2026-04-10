import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { TbPageBreak } from 'react-icons/tb';

const ListedReadList = ({ storedBook }) => {
    return (
        <div>
            <div className='space-y-5'>
                {
                    storedBook.map(listBook =>
                        <div className="card card-side bg-base-100 shadow-sm">
                            <figure>
                                <img className='h-60 w-40'
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
                                <hr />
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
        </div>
    );
};

export default ListedReadList;
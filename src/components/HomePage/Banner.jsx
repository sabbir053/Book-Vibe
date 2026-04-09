import React from 'react';
import bannerImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[60vh] container mx-auto mt-8 rounded-md px-3">
            <div className="hero-content flex-col lg:flex-row-reverse p-3 gap-10">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='space-y-5 text-center md:text-left'>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
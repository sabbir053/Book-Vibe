import React from 'react';

const ListedWishList = ({wishlist}) => {
    return (
        <div>
            <h2>Listed Wish List</h2> <br />
            <div>
                {
                    wishlist.map(wishlistbook => <h3>{wishlistbook.bookName}</h3>)
                }
            </div>
        </div>
    );
};

export default ListedWishList;
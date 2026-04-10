import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFromLocalDB } from '../utils/localDB';

export const BookProviderContext = createContext();

const BookContext = ({ children }) => {
    const [storedBook, setStoredBook] = useState(() => getAllReadListFromLocalDB());
    const [wishlist, setWishlist] = useState(() => getAllReadListFromLocalDB());

    const handleMarkAsRead = (currentBook) => {

        addReadListToLocalDB(currentBook);

        if (!currentBook) return;

        const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error('This book is already in your Read list!');
        } else {
            setStoredBook([...storedBook, currentBook]);
            toast.success(`${currentBook.bookName}Book marked as read!`);
        }
    };

    const handleWishlist = (currentBook) => {
        // Ensure currentBook exists before trying to access properties
        if (!currentBook) return;

        const isExistBook = wishlist.find(book => book.bookId === currentBook.bookId);

        const isExistInReadList = storedBook.find((book) => book.bookId === currentBook.bookId)

        if (isExistInReadList) {
            toast.error('The Book is allready in read list')
            return;
        }

        if (isExistBook) {
            toast.error('This book is already in your read list!');
        } else {
            setWishlist([...wishlist, currentBook]);
            toast.success(`${currentBook.bookName}Book marked as Wish list!`);
        }
    };

    const data = {
        storedBook,
        setStoredBook,
        handleMarkAsRead,
        wishlist,
        setWishlist,
        handleWishlist
    };

    return (
        <BookProviderContext.Provider value={data}>
            {children}
        </BookProviderContext.Provider>
    );
};

export default BookContext;
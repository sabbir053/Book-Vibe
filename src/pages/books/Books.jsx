import React, { useContext } from 'react';
import { BookProviderContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books = () => {
    const { storedBook, wishlist } = useContext(BookProviderContext);
    console.log(storedBook, 'storedBook');
    console.log(wishlist, 'Wishlist');
    return (
        <div className='container mx-auto my-10'>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wish Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList storedBook={storedBook}/>
                </TabPanel>
                <TabPanel>
                    <ListedWishList wishlist={wishlist}/>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;
import React, { useContext, useState } from 'react';
import { BookProviderContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books = () => {
    const { storedBook, wishlist } = useContext(BookProviderContext);
    const [shortingType, setShortingType] = useState("")
    return (
        <div className='container mx-auto my-10'>
            <div className='flex justify-center items-center my-3'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Short By ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=> setShortingType('Pages')}><a>Pages</a></li>
                        <li onClick={()=> setShortingType('Rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wish Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList shortingType={shortingType} storedBook={storedBook} />
                </TabPanel>
                <TabPanel>
                    <ListedWishList shortingType={shortingType} wishlist={wishlist} />
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;
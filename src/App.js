import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {Products, Navbar, Paginated} from './Components';

import {toLower, includes} from 'lodash';

const App = () => {

    const [books, setBooks] = useState([]);
    const [currBooks, setCurrBooks] = useState(books);
    const [currPage, setCurrPage] = useState(1);

    useEffect(() => {
        
        const getBooks = async () => {
            try {
                const result = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json").then(res => res.data);
                setBooks(result);
                setCurrBooks(result);

            } catch (error) {
                console.error(error);
            }
        }
        getBooks();
    
    },[]);

    const onPageChange = (event, page) => {
        setCurrPage(page);
    };

    const onSearch = (searchQuery = '') =>{
        console.log('hi')
        const filteredBooks =  books.filter(book =>{
            const bookTitle = book?.title;
           return includes(toLower(bookTitle),toLower(searchQuery))
        });
        
        setCurrBooks(filteredBooks);
    };

    return ( 
        <div>
            <Navbar  onSearch={onSearch}/>
            <Paginated currPage={currPage} books={currBooks} />
            <div>
                <Pagination count={Math.ceil(currBooks.length/99)} color="primary" size="large" onChange={onPageChange} />
            </div>
        </div>      
    );
};

export default App;
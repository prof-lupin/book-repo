import React, {useState} from 'react';
import Products from './Products/Products';

const Paginated = ({currPage, books}) => {
    const perPage = 99;

    const indexOfLastItem = currPage*perPage;
    const indexOfFirstItem = indexOfLastItem-perPage;

    const currBooks = books.slice(indexOfFirstItem, indexOfLastItem);

    return(
        <div>
            <Products products={currBooks} />
        </div>
    );
};

export default Paginated;
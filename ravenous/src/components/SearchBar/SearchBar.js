import React from 'react';
import './SearchBar.css';
import { render } from 'react-dom';
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortByOptions() { //Creating a method. You don't need const or let.
        return Object.keys(sortByOptions).map(sortByOption => {
        //Object.keys Creates an array of the keys of an object
        //array.map() creates an array by going over the passed in array.
            let sortByOptionValue =sortByOptions[sortByOption]; 
            //sortByOptionValue is the value from the key. "best_match"
            //sortByOptions is the object.
            //sortByOption: First key passed in from keys. "Best Match"
            <li key={sortByOptionValue}>{sortByOption}</li>
            //key is required so react doesn't get lost
            //The text that will be displayed will be "Best Match" for the first iteration
        }); 

    }
}
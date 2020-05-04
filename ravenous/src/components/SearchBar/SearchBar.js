import React from 'react';
import './SearchBar.css';
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
            let sortByOptionValue = sortByOptions[sortByOption]; 
            //sortByOptionValue is the value from the key. "best_match"
            //sortByOptions is the object.
            //sortByOption: First key passed in from keys. "Best Match"
            return <li key={sortByOptionValue}>{sortByOption}</li>
            //key is required so react doesn't get lost
            //The text that will be displayed will be "Best Match" for the first iteration
        }); 
    }
    //use this.renderSortByOptions() not <SearchBar />
    render () {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
    }

}

export default SearchBar;
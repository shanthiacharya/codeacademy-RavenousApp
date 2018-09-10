import React, { Component }  from 'react';
import  "./SearchBar.css";





class SearchBar extends Component {
    
    constructor(props) {
        super (props);

        // this.handleLocationChange = this.handleLocationChange.bind(this);
        // this.handleTermChange = this.handleTermChange.bind(this);
        // this.handleSortByChange = this.handleSortByChange(this);
        this.state = { 
            term: '',
            location: '',
            sortBy:'best-match'
            
        }
        
        this.sortByOptions = {
           'Best Match': 'best-match',
           'Highest Rated':'rating',
           'Most Reviewed':'review_count'
        };
    }
    getSortbyClass(sortByOption){
        if (this.state.sortBy === sortByOption) {
            return 'active';
        }
        else {
            return '';
        }
    
    }

    handleSortByChange = (sortByOption) => {
        // console.log("Sort Change: " + sortByOption)
        this.setState ({sortBy:sortByOption })
    }
    
    handleTermChange = (event) => {
       
        this.setState ({term:event.target.value});
         console.log("Term Change: " + this.state.term)
    }

    handleLocationChange = (event) =>{
        // console.log("Location Change: " + event.target.value)
        this.setState ({location:event.target.value});
    }

    handleSearch = (event) => {
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
        event.preventDefault();
    }



    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortyByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortyByOptionValue}
                       className = {this.getSortbyClass(sortyByOptionValue)}
                       onClick = {() => this.handleSortByChange (sortyByOptionValue)}> 
                       {sortByOption}
                     </li>
        });
    }
    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                   {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange = { this.handleTermChange} />
                <input placeholder="Where?" onChange = {this.handleLocationChange} />
            </div>
            <div className="SearchBar-submit">
                <a onClick = {this.handleSearch}>Let's Go</a>
            </div>
        </div>
        )
    }
    

}

export default SearchBar;